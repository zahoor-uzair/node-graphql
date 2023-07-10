const crypto = require('crypto');



const users = [
    { id: 1, username: 'user1', password: 'pass1' },
    { id: 2, username: 'user2', password: 'pass2' },
];
const products = [
    { id: 'p0', name: 'Product A' },
    { id: 'p1', name: 'Product B' },
    { id: 'p2', name: 'Product C' },
    { id: 'p3', name: 'Product D' },
    { id: 'p4', name: 'Product E' },
];

module.exports = {
    users,
    products,
};
