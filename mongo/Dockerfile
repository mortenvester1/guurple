FROM mongo:latest
ARG VJS_MONGO_PORT 27017
ARG MONGO_INITDB_ROOT_USERNAME admin
ARG MONGO_INITDB_ROOT_PASSWORD password
ARG DB_NAME default
ARG DB_USER user
ARG DB_PASSWORD password

# Set environment
ENV MONGO_INITDB_ROOT_USERNAME $MONGO_INITDB_ROOT_USERNAME
ENV MONGO_INITDB_ROOT_PASSWORD $MONGO_INITDB_ROOT_PASSWORD
ENV DB_NAME $DB_NAME
ENV DB_USER $DB_USER
ENV DB_PASSWORD $DB_PASSWORD

# copy initialization scripts
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# database directory
RUN mkdir -p /data/db

# expose port and start
EXPOSE $VJS_MONGO_PORT
ENTRYPOINT ["./entrypoint.sh"]
