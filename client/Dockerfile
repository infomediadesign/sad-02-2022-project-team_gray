    FROM node:14.17.0-alpine as build-step
    RUN mkdir -p /app
    WORKDIR /app
    COPY package.json /app
    RUN npm install
    COPY . /app
    RUN npm run build --prod

    FROM nginx:1.20.1
    COPY --from=build-step /app/dist/ng-docker-example /usr/share/nginx/html
    EXPOSE 4200:80


# # Stage 1

# FROM node:10-alpine as build-step

# RUN mkdir -p /app

# WORKDIR /app

# COPY package.json /app

# RUN npm install
# COPY . /app
# # RUN npm run start
# CMD [ "npm", "run", "start"]

# # Stage 2

# FROM nginx:1.17.1-alpine

# COPY --from=build-step /app/docs /usr/share/nginx/html
# FROM node
# WORKDIR /client
# COPY package*.json /client/
# RUN npm install
# COPY . /client/
# EXPOSE 3000
# CMD [ "ng" "serve"]