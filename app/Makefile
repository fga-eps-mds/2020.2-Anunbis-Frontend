install:
	docker-compose build
	
up:
	docker-compose up

down:
	docker-compose down

test:
	docker-compose run --rm --entrypoint "npm run test:cov" anunbis-react

lint:
	docker-compose run --rm --entrypoint "npm run lint:fix" anunbis-react

format:
	docker-compose run --rm --entrypoint "npm run format:fix" anunbis-react

