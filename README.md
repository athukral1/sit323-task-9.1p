This project demonstrates the integration of a MongoDB database into a containerized Node.js microservice, deployed using Kubernetes. The app supports full CRUD operations and connects to MongoDB using Kubernetes secrets, persistent volumes, and services.


Technologies Used:


-Node.js

-MongoDB

-Docker

-Kubernetes

-kubectl

-Postman (for testing)


How to Deploy:

-kubectl apply -f kubernetes/mongo-secret.yaml

-kubectl apply -f kubernetes/mongo-pv.yaml

-kubectl apply -f kubernetes/mongo-deployment.yaml

-kubectl apply -f kubernetes/mongo-service.yaml

-kubectl apply -f kubernetes/app-deployment.yaml


Then forward the port:


kubectl port-forward service/simple-node-app-service 3000:3000


To access, open the browser at:


http://localhost:3000
