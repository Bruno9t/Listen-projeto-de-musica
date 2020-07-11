

const {
    ORM_CONNECTION,
    ORM_HOST,
    ORM_USERNAME,
    ORM_PASSWORD,
    ORM_DATABASE,
    ORM_PORT,
} = process.env


module.exports = [
    {
        name:"default",
        type: ORM_CONNECTION,
        host:ORM_HOST,
        port: ORM_PORT,
        username: ORM_USERNAME,
        password: ORM_PASSWORD,
        database: ORM_DATABASE,

        "migrationsTableName": "migrations",

        migrations:[
            'src/database/migrations/*.ts'
        ],

        entities:[
            'src/entities/*.ts'
        ],

        cli:{
            migrationsDir:'src/database/migrations',
            entitiesDir:'src/entities'
        }

    },
    {   
        name:"seed",
        type: ORM_CONNECTION,
        host:ORM_HOST,
        port: ORM_PORT,
        username: ORM_USERNAME,
        password: ORM_PASSWORD,
        database: ORM_DATABASE,

        "migrationsTableName": "seeds",

        migrations:[
            'src/database/seeds/*.ts'
        ],

        entities:[
            'src/entities/*.ts'
        ],

        cli:{
            migrationsDir:'src/database/seeds'
        }
    }
    
]