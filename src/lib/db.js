const { default: clientPromise } = require("./mongodb");

module.exports = {
    getDb: () => {
        return new Promise(async(resolve, reject) => {
            try {
                const client = await clientPromise;
                const db = client.db("portfolio-website");
                resolve(db);
            } catch (error) {
                console.error("Error connecting to MongoDB:", error);
                reject(error);
            }
        })
       }
}
