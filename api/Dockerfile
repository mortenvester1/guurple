FROM node:alpine AS dev
ARG VJS_API_PORT 8080
ARG VJS_MONGO_PORT 8080
ARG DB_NAME
ARG DB_USER
ARG DB_PASSWORD

# Create app directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV VJS_MONGO_PORT $VJS_MONGO_PORT
ENV DB_NAME  $DB_NAME
ENV DB_USER  $DB_USER
ENV DB_PASSWORD  $DB_PASSWORD
ENV NODE_ENV dev

# install bash
RUN apk update &&\
    apk upgrade &&\
    apk add bash ffmpeg

# need ffmpeg

# Copy app source code
COPY . ./

# Install app dependencies
RUN npm install --silent

# create media directory
RUN mkdir -p /media

#Expose port and start application
EXPOSE $VJS_API_PORT
CMD [ "npm", "run", "dev" ]

FROM dev AS build
ENV NODE_ENV test

FROM build AS production
ENV NODE_ENV production
ENTRYPOINT [ "npm", "run", "start" ]
