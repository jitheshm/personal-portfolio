const { default: clientPromise } = require("./mongodb");

module.exports = {
    getDb: async () => {
        try {
            const client = await clientPromise;
            const db = client.db("portfolio-website");
            return db;
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
            throw error; // Re-throw the error to be handled further up the call stack.
        }
    }
}
