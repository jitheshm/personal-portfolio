const { getDb } = require("@/lib/db");
const { ObjectId } = require("mongodb");



module.exports = {
    addProject: (data) => {
        return new Promise(async(resolve, reject) => {
            const db=await getDb();
            db.collection("project").insertOne(data).then((res) => {
                resolve(res)
            })
        })

    },
    getProjects: (pid) => {
        return new Promise(async(resolve, reject) => {
            const db=await getDb();
            if(pid)
            {
                db.collection("project").findOne({"_id":new ObjectId(pid[0])}).then((res) => {
                    resolve(res)
                })
            }

           else{
            db.collection("project").find().sort({_id:-1}).toArray().then((res) => {
                resolve(res)
            })
           }
        })
    }
}