FROM node:18

# Set working directory
WORKDIR /app

# Copy only package.json and package-lock.json (if present) to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy all other files into the container
COPY . .

# Expose the correct port the app runs on (3000)
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
