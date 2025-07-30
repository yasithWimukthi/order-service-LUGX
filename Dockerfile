FROM node:18-alpine

WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Build TypeScript
RUN npm run build

# Generate Prisma client
RUN npx prisma generate
#RUN npx prisma migrate deploy

# Start the app
CMD ["node", "dist/index.js"]
