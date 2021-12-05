mongod --fork --logpath /var/log/mongo.log

mongo --eval "db.auth('$MONGO_INITDB_ROOT_USERNAME', '$MONGO_INITDB_ROOT_PASSWORD');
db = db.getSiblingDB('$DB_NAME');
db.createUser(
    {
        user: '$DB_USER',
        pwd: '$DB_PASSWORD',
        roles: [
            {
                role: 'readWriteAnyDatabase',
                db: '$DB_NAME'
            }
        ]
    }
);"

tail -f /var/log/mongo.log
