const jwt = require('jsonwebtoken');
const { users, products } = require('../utils/utils');
require('dotenv').config();

const resolvers = {
    Query: {
        products: (parent, args, context) => {
            if (!context.currentUser) {
                throw new Error('Authorization token is required');
            }
            return products;
        },
    },
    Mutation: {
        signup: (parent, args) => {
            const { username, password } = args;
            const newUser = { id: users.length + 1, username, password };
            users.push(newUser);
            return newUser;
        },
        login: (parent, args) => {
            const { username, password } = args;
            const user = users.find((u) => u.username === username && u.password === password);
            if (user) {
                const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY);
                return token;
            }

            return null;
        },
    },
};
module.exports = resolvers