class MathError extends Error {
    constructor(msg, status) {
        super();
        this.msg = msg;
        this.status = status;
    }
}

module.exports = MathError;