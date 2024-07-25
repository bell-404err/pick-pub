include ../.env

# .env' path
COMPOSE_CONFIG=--env-file ../.env

# Start containers
up: docker-compose.yaml
	docker-compose ${COMPOSE_CONFIG} up -d

# Stop and Delete all containers
down: docker-compose.yaml
	docker-compose ${COMPOSE_CONFIG} down

# Stop and Delete all containers and volume's data
clear: docker-compose.yaml
	docker-compose ${COMPOSE_CONFIG} down -v

# Clear Install: Delete and Install again all dependencies
install: docker-compose.yaml
	docker-compose ${COMPOSE_CONFIG} run --rm server npm ci
	docker-compose ${COMPOSE_CONFIG} down
