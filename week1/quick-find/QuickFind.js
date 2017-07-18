class QuickFind {
    constructor (size) {
        this._id = [];
        for (let i = 0; i < size; i++) {
            this._id[i] = i;
        }
    }

    union (p,q) {
        let size = this._id.length;
        let pId = this._id[p];
        let qId = this._id[q];
        if (pId !== qId) {
            //If these are not already connected
            for (let i = 0; i < size; i++) {
                if (this._id[i] === pId) {
                    //This Id needs to be changed to qId in order for them to be connected
                    this._id[i] = qId;
                }
            }
        }
    }

    connected (p,q) {
        //If both elements have the same id, they are connected
        return this._id[p] === this._id[q];
    }
}

module.exports = QuickFind;