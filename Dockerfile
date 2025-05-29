FROM node:18
WORKDIR /app
COPY app/package*.json ./
RUN npm install
COPY app/server.js .
EXPOSE 3000
CMD ["node", "server.js"]
