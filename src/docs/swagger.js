const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Acervo de Colecionáveis",
            version: "1.0.0",
            description: "API para gerenciamento de colecionáveis"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },

    apis: ["./src/rotas/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);



module.exports = swaggerSpec;