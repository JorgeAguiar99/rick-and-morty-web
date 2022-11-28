FROM debian:latest
# Usar imagem do node
COPY . /var/www/html
WORKDIR /var/www/html 
RUN apt update && apt upgrade -y && apt install npm -y
EXPOSE 3000