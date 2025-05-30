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

Code Overview:

Using Kubernetes to orchestrate the development of a containerised Node.js microservice application linked with a MongoDB database is the challenge at hand. With the help of API endpoints, the Express.js-built application may execute all CRUD (Create, Read, Update, Delete) activities. An Express server is configured to process JSON requests and route them appropriately in the server.js file, which contains the primary application logic. The database is connected via a Kubernetes-managed service (mongodb-service), and the MongoDB client is initialised using credentials safely stored in Kubernetes Secrets. Within the database, the information is kept in a MongoDB collection called entries.


Four primary endpoints are exposed by the application: 

•	/add for adding documents, 

•	/all for viewing all documents, 

•	/update for changing entry that already exists, 

•	/delete for deleting them. 


To ensure correct operation and database integration, Postman is used to test these APIs. The Kubernetes configuration includes:

•	mongo-deployment.yaml: Deploys a MongoDB pod with a persistent volume mount and reads credentials via Kubernetes Secrets.

•	mongo-pv.yaml: Defines a PersistentVolume and PersistentVolumeClaim to ensure MongoDB data persists beyond pod lifecycles.

•	mongo-secret.yaml: Encodes MongoDB credentials (admin/password) in base64 for secure access by the app and database containers.

•	mongo-service.yaml: Exposes MongoDB to internal services under the name mongodb-service, which is used in the Node.js MongoDB connection URI.

•	app-deployment.yaml: Deploys the Node.js app with environment variables for the database URI and exposes it via a NodePort service.
This task offers practical experience with full-stack cloud-native application deployment, with a focus on container orchestration, safe setup utilising secrets, persistent data handling, and basic microservice design



To access, open the browser at:


http://localhost:3000
