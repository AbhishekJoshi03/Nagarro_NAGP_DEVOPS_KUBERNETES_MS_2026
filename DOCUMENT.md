# Comprehensive Solution Documentation

# 1. Requirement Understanding

The assignment requires designing, containerizing, and deploying a multi-tier Kubernetes solution consisting of:

- One API/Microservice Tier
- One Database Tier
- External accessibility through Ingress
- Persistent storage for database
- Self-healing capability
- Horizontal Pod Autoscaling
- Secure credential management
- Rolling deployment strategy
- FinOps optimization

# 2. Assumptions

1. Kubernetes cluster is provisioned using Minikube.
2. Docker Hub is used as the image registry.
3. MySQL 8.0 is selected as the database.
4. Node.js is selected for the API layer.
5. Application data is initialized during database startup.
6. Ingress controller is available in the cluster.

# 3. Solution Overview

## Service/API Tier

Technology Stack:
- Node.js
- Express.js
- MySQL Client

Responsibilities:
- Expose REST APIs.
- Retrieve records from MySQL.
- Return JSON responses.
- Consume configuration using ConfigMaps.
- Consume secrets using Kubernetes Secrets.

Deployment Characteristics:
- 4 Replicas
- Rolling Updates
- HPA Enabled
- Ingress Enabled

## Database Tier

Technology Stack:
- MySQL 8.0

Responsibilities:
- Store book information.
- Persist data using PVC.
- Provide internal access only.

Deployment Characteristics:
- StatefulSet
- Persistent Volume Claim
- Internal Service

# 4. Architecture Design

Client
   |
Ingress
   |
Book API Service
   |
Book API Deployment (4 Pods)
   |
MySQL Service (ClusterIP)
   |
MySQL StatefulSet
   |
Persistent Volume

# 5. Kubernetes Resources Used

## Namespace
Provides logical isolation.

## Deployment
Manages stateless API pods.

## StatefulSet
Manages stateful MySQL workloads.

## Service
Provides service discovery.

## ConfigMap
Stores:
- DB_HOST
- DB_NAME
- DB_PORT

## Secret
Stores:
- Database Password

## PVC
Ensures database persistence.

## Ingress
Exposes application externally.

## HPA
Provides automatic scaling.

# 6. Security Design

## Secrets

Database credentials are stored using Kubernetes Secrets.

Benefits:
- Passwords are not hardcoded.
- Passwords are not committed to source code.

## Internal Communication

Application communicates using Kubernetes Service names.

Example:

mysql.book-app.svc.cluster.local

No Pod IPs are used.

# 7. Self-Healing Demonstration

API Tier:

```bash
kubectl delete pod <api-pod>
```

Expected:
Deployment automatically recreates the pod.

Database Tier:

```bash
kubectl delete pod mysql-0
```

Expected:
StatefulSet recreates the pod while preserving data.

# 8. Rolling Update Demonstration

```bash
kubectl set image deployment/book-api-deployment \
book-api=abhishekjsh03/books-api:2.0 \
-n book-app
```

Verification:

```bash
kubectl rollout status deployment/book-api-deployment -n book-app
```

# 9. Data Persistence Demonstration

1. Insert records.
2. Delete MySQL pod.
3. Wait for recreation.
4. Verify records remain available.

Result:
PVC preserves data.

# 10. Horizontal Pod Autoscaling

Configured using:

```bash
kubectl autoscale deployment book-api-deployment \
--cpu-percent=70 \
--min=4 \
--max=10
```

Benefits:
- Reduced idle resource cost.
- Improved scalability.

# 11. FinOps Analysis

## Implemented Optimizations

### Optimization 1 - Resource Requests

CPU Request:
250m

Memory Request:
256Mi

Prevents over-allocation.

### Optimization 2 - Resource Limits

CPU Limit:
500m

Memory Limit:
512Mi

Prevents noisy-neighbor issues.

### Optimization 3 - Horizontal Pod Autoscaler

Scale only when demand increases.

### Optimization 4 - Right Sizing

Monitor using:

```bash
kubectl top pods -n book-app
```

Adjust requests and limits accordingly.

### Optimization 5 - Stateful Workload Isolation

Persistent workloads separated from API workloads.

# 12. Justification of Resources Utilized

| Resource | Reason |
|----------|---------|
| Deployment | Stateless application management |
| StatefulSet | Persistent database management |
| Service | Service discovery |
| ConfigMap | Externalized configuration |
| Secret | Secure credential storage |
| PVC | Data persistence |
| Ingress | External exposure |
| HPA | Automatic scaling |
| Resource Limits | Cost optimization |

# 13. Conclusion

The solution successfully demonstrates:

- Multi-tier Kubernetes architecture
- Containerization
- Self-healing
- Rolling updates
- Persistent storage
- HPA
- Ingress
- Secure configuration management
- FinOps optimization practices

The implementation aligns with the assignment requirements and follows Kubernetes production best practices.
