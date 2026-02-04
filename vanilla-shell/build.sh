#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

minikube start
eval $(minikube -p minikube docker-env)

docker build -t vanilla-shell:latest .
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
minikube service vanilla-shell

# Disable exit on error
set +e