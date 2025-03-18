# Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copier package.json et package-lock.json
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install --legacy-peer-deps

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application Next.js
RUN npm run build

# Exposer le port sur lequel l'application va tourner
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]
