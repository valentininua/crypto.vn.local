FROM node:21.6.2

# Install dependencies
RUN apt-get update && apt-get install -y \
    git \
    nano \
    mc \
    zip \
    unzip \
    curl

# Change current user
USER node

EXPOSE 3000
EXPOSE 5173
