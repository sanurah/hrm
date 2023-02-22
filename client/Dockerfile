FROM node:gallium AS hrm-client
RUN mkdir /usr/src/client
WORKDIR /usr/src/client
RUN npm install -g @angular/cli
COPY . .
