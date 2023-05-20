# Multi-framework Microfrontends Demo

This repository contains a simple yet comprehensive demonstration of how Microfrontends architecture can be implemented using Module Federation with two of the most popular web frameworks - Angular and React.

The project includes four applications:

- `angular-mfe`: An Angular Micro Frontend application (Remote).
- `angular-shell`: An Angular shell application that consumes `angular-mfe`.
- `react-mfe`: A React Micro Frontend application (Remote).
- `react-shell`: A React shell application that consumes `react-mfe`.

Each shell application is set up to consume and display its respective MFE (Micro Frontend).

## Getting Started

To get started with this project, clone the repository to your local machine.

```bash
git clone https://github.com/familygw/mfe-workspace.git
```

Navigate to each project directory and install the necessary dependencies.

```bash
cd angular-mfe
npm install

cd ../angular-shell
npm install

cd ../react-mfe
npm install

cd ../react-shell
npm install
```


## Running the Applications

Each application can be run individually. Navigate to each project directory and start the development server.

For Angular projects:

```bash
ng serve
```

For React projects:

```bash
npm start
```

## Key Concepts

This project demonstrates key concepts of Microfrontends architecture, including:

- **Isolation:** Each Micro Frontend (MFE) is a standalone application that can run independently.
- **Interoperability:** Despite being built with different frameworks (Angular and React), each shell application is capable of loading and integrating its respective MFE.
- **Scalability:** The architecture allows for an application to be extended by adding more MFEs as needed, potentially even allowing different teams to work on different MFEs.

## Further Reading

For a deeper understanding of these concepts, you might find the following resources useful:

- [Micro Frontends](https://martinfowler.com/articles/micro-frontends.html)
- [Module Federation](https://webpack.js.org/concepts/module-federation/)

## Contributions

Contributions to this project are welcome. Please open an issue before submitting a pull request.
