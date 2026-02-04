#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

echo "Building and deploying Vanilla Shell application..."

minikube_status=$(minikube status --format='{{.Host}}' 2>/dev/null || true)
if [[ "$minikube_status" != "Running" ]]; then
	echo "Minikube is not running. Start it first and run eval."
	echo "| minikube start"
	echo "| eval \$(minikube -p minikube docker-env)"
	exit 1
fi

docker build -t vanilla-shell:latest .
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl delete po -l app=vanilla-shell

echo "Vanilla Shell deployed successfully."
echo "Visit the application at http://localhost:8080"

# wait until pod is ready...
kubectl wait --for=condition=ready pod -l app=vanilla-shell --timeout=120s
kubectl port-forward svc/vanilla-shell 8080:80

# Disable exit on error
set +e