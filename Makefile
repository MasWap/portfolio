# Makefile pour gérer les commandes Prisma et Docker

# Variable pour la commande npx
NPX = npx

# Liste des commandes disponibles
help:
	@echo "Commandes disponibles:"
	@echo "  deploy: pull stop-containers build-app start-containers"
	@echo "  start: start-containers"
	@echo "  start-containers: docker-compose up -d"
	@echo "  build-app: docker-compose build app"
	@echo "  stop-containers: docker-compose down"
	@echo "  pull: git pull"

# Commande redéployer l'application avec sa dernière version
deploy: pull stop-containers build-app start-containers

# Commande pour démarrer les conteneurs Docker et initialiser la base de données
start: start-containers

# Démarrer l'application en local sans docker
start-dev-local: init-app

init-app:
	npm i --legacy-peer-deps
	npm run dev

# Commande pour démarrer les conteneurs Docker
start-containers:
	docker-compose up -d

# Commande pour construire l'application Next.js
build-app:
	docker-compose build app

# Commande pour arrêter les conteneurs Docker
stop-containers:
	docker-compose down

# Récupérer le dernière version du git
pull:
	git pull
