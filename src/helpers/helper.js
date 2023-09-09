const { getDb } = require("@/lib/db")



module.exports = {
    addProject: (data) => {
        return new Promise(async(resolve, reject) => {
            const db=await getDb();
            db.collection("project").insertOne(data).then((res) => {
                resolve(res)
            })
        })

    },
    getProjects: () => {
        return new Promise(async(resolve, reject) => {
            const db=await getDb();
            db.collection("project").find().sort({_id:-1}).toArray().then((res) => {
                resolve(res)
            })
        })
    }
}