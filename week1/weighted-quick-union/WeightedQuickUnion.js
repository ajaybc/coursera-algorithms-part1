function findRoot (arr, n) {
    if (arr[n] === n) {
        return n;
    } else {
        return findRoot(arr, arr[n]);
    }
}

class WeightedQuickUnion {
    constructor (size) {
        this._id = [];
        this._sz = [];
        for (let i = 0; i < size; i++) {
            this._id[i] = i;
            this._sz[i] = 1;
        }
    }

    union (p,q) {
        let pId = this._id[p];
        let qId = this._id[q];
        let pRoot = findRoot(this._id, pId);
        let qRoot = findRoot(this._id, qId);
        if (this._sz[pRoot] >= this._sz[qRoot]) {
            this._id[qRoot] = pRoot;
            this._sz[pRoot] += this._sz[qRoot];
        } else {
            this._id[pRoot] = qRoot;
            this._sz[qRoot] += this._sz[pRoot];
        }
    }

    connected (p,q) {
        //If both elements have the same root, they are connected
        return findRoot(this._id, p) === findRoot(this._id, q);
    }
}

module.exports = WeightedQuickUnion;