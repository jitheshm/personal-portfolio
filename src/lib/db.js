const { default: clientPromise } = require("./mongodb");
var dbPack;
module.exports = {
    getDb: () => {
        return new Promise(async (resolve, reject) => {
            try {
                if (dbPack) {
                    console.log("database already connected");
                    resolve(dbPack)
                } else {
                    console.log("connecting to database");
                    const client = await clientPromise;
                    const db = client.db("portfolio-website");
                    dbPack = db;
                    resolve(dbPack);
                }
            } catch (error) {
                console.error("Error connecting to MongoDB:", error);
                reject(error);
            }
        })
    }
}
