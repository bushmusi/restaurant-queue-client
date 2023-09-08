# Use an official Node.js runtime as the base image
FROM node:18.17.1 AS builder

WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the frontend application
RUN npm run build

# Create a production-ready image with a smaller footprint
FROM nginx:alpine

# Copy the built frontend files from the builder stage to the nginx container
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 to serve the frontend application
EXPOSE 3030

# Start the nginx web server to serve the frontend
CMD ["nginx", "-g", "daemon off;"]
