const statusEl = document.getElementById("status");

const REMOTE_ENTRY_URL = "http://localhost:4201/remoteEntry.js";
const EXPOSED_MODULE = "./AngularMFEVanillaMount";

function setStatus(message, isError = false) {
  if (!statusEl) {
    return;
  }
  statusEl.textContent = message;
  statusEl.classList.toggle("error", isError);
}

async function loadRemoteEntry(url) {
  // Use a dynamic ESM import so we can consume the federated container directly.
  return import(/* webpackIgnore: true */ url);
}

async function loadRemoteMount() {
  // Load the remote container and initialize shared scope if available.
  const container = await loadRemoteEntry(REMOTE_ENTRY_URL);

  if (typeof __webpack_init_sharing__ === "function") {
    await __webpack_init_sharing__("default");
  }

  if (container.init && typeof __webpack_share_scopes__ !== "undefined") {
    await container.init(__webpack_share_scopes__.default);
  }

  // Get the exposed module factory and execute it to access exports.
  const factory = await container.get(EXPOSED_MODULE);
  return factory();
}

async function bootstrap() {
  try {
    setStatus("Loading remote...");
    const { mount } = await loadRemoteMount();
    // Mount the Angular component into the classic DOM host.
    await mount("#mfe-root");
    setStatus("Remote loaded.");
  } catch (error) {
    console.error(error);
    setStatus("Failed to load the remote. See console.", true);
  }
}

bootstrap();
