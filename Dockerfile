# Use Node.js LTS version
FROM node:18 as build

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Install backend dependencies
RUN npm install

# Install frontend dependencies
RUN npm install --prefix client

# Build frontend
RUN npm run build --prefix client

# Serve static files using Express
# Copy build to server/public so Express can serve it
RUN mkdir -p server/public && cp -r client/build/* server/public/

# Start fresh node image for production
FROM node:18

# Set working directory
WORKDIR /app

# Copy only the backend code from build stage
COPY --from=build /app/server /app/server

# Install backend dependencies again (only prod if needed)
COPY --from=build /app/package*.json ./
RUN npm install --only=prod

# Expose backend port
EXPOSE 5000

# Start the server
CMD ["node", "server/server.js"]
