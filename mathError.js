class MathError extends Error {
    constructor(msg, status) {
        super();
        this.msg = msg;
        this.status = status;
    }
}

// Export the Class
module.exports = MathError;