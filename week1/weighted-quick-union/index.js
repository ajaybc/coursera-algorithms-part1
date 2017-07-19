let WeightedQuickUnion = require('./WeightedQuickUnion');
let qf = new WeightedQuickUnion(9);
qf.union(1,2);
qf.union(4,5);
console.log(qf.connected(1,5));
qf.union(3,4);
console.log(qf.connected(3,5));