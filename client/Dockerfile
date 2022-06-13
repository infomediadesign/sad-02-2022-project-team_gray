    FROM node:latest as node
    COPY . /app
    WORKDIR /app
    RUN npm install
    RUN npm run build
    CMD [ "ng", "serve"]
    EXPOSE 4200:4200
    FROM nginx:alpine
    EXPOSE 80
    # COPY --from=build /app/dist/hotelBidFront /usr/share/nginx/html
    # RUN mkdir -p /app
    # WORKDIR /app
    # RUN npm install
    # COPY . .
    # RUN npm run build --prod

    # FROM nginx:alpine
    # COPY --from=build-step /app/dist/ng-docker-example /usr/share/nginx/html
    # EXPOSE 4200:4200


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