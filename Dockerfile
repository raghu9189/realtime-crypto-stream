# Alpine for a smaller footprint
FROM node:20-alpine

# working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm ci

# Copy the rest of the application code across to the container
COPY . .

# Expose the port the app runs on 
EXPOSE 8000

# Specify the command to run on container start
CMD ["npm", "start"]
