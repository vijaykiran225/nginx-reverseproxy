FROM node:latest

WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code to the container
COPY . .

EXPOSE 3000

# Start Nginx when the container runs
CMD ["node", "server.js"]