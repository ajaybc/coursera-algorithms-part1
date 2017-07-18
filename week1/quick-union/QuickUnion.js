function findRoot (arr, n) {
    if (arr[n] === n) {
        return n;
    } else {
        return findRoot(arr, arr[n]);
    }
}

class QuickUnion {
    constructor (size) {
        this._id = [];
        for (let i = 0; i < size; i++) {
            this._id[i] = i;
        }
    }

    union (p,q) {
        let pId = this._id[p];
        let qId = this._id[q];
        this._id[p] = qId;
    }

    connected (p,q) {
        //If both elements have the same root, they are connected
        return findRoot(this._id, p) === findRoot(this._id, q);
    }
}

module.exports = QuickUnion;