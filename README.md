# Nagarro NAGP DevOps Kubernetes Assignment 2026

## Project Overview
This project demonstrates a multi-tier Kubernetes application consisting of:

- Service/API Tier (Node.js Microservice)
- Database Tier (MySQL 8.0 StatefulSet)
- Kubernetes Deployment, StatefulSet, Service, ConfigMap, Secret, PVC, HPA, and Ingress
- Dockerized application images hosted on Docker Hub

## Repository Information

**GitHub Repository**

https://github.com/AbhishekJoshi03/Nagarro_NAGP_DEVOPS_KUBERNETES_MS_2026

## Docker Images

Replace with your actual Docker Hub URLs:

- API Image: https://hub.docker.com/r/abhishekjsh03/books-api
- Database Image: mysql:8.0

## Application URL

Replace with your Ingress URL after deployment:

```text
http://<INGRESS-HOST>/api/books
```

## Architecture

Client
   |
Ingress
   |
Book API Deployment (4 Pods)
   |
ClusterIP Service
   |
MySQL StatefulSet (1 Pod)
   |
Persistent Volume Claim

## Kubernetes Components

### Service/API Tier
- Deployment
- 4 Replicas
- Rolling Updates
- ConfigMap Configuration
- Secret-based Credentials
- HPA Enabled
- Ingress Enabled
- Resource Requests and Limits

### Database Tier
- StatefulSet
- Persistent Storage
- Secret-based Password
- Internal ClusterIP Service
- Self-Healing

## Deployment Steps

```bash
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/secret.yaml
kubectl apply -f k8s/mysql-service.yaml
kubectl apply -f k8s/mysql-statefulset.yaml
kubectl apply -f k8s/api-deployment.yaml
kubectl apply -f k8s/api-service.yaml
kubectl apply -f k8s/ingress.yaml
kubectl apply -f k8s/hpa.yaml
```

## Validation Commands

```bash
kubectl get all -n book-app
kubectl get ingress -n book-app
kubectl get hpa -n book-app
kubectl get pvc -n book-app
```

## Demonstration Checklist

- [ ] All Kubernetes objects deployed successfully
- [ ] API returns records from MySQL
- [ ] API pod self-healing demonstrated
- [ ] MySQL pod self-healing demonstrated
- [ ] Data persistence demonstrated
- [ ] Rolling update demonstrated
- [ ] HPA demonstrated
- [ ] Ingress demonstrated

## Screen Recording

Add your recording URL here:

```text
<SCREEN_RECORDING_URL>
```

## FinOps Considerations

1. Resource Requests and Limits defined.
2. Horizontal Pod Autoscaler enabled.
3. Stateful workloads isolated from stateless workloads.
4. Right-sizing based on observed metrics.
5. Avoid overprovisioning CPU and Memory.

