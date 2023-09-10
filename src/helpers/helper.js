const { getDb } = require("@/lib/db");
const { ObjectId } = require("mongodb");



module.exports = {
    addProject: (data) => {
        return new Promise((resolve, reject) => {
            getDb().then((db) => {
                db.collection("project").insertOne(data).then((res) => {
                    resolve(res)
                })
            }).catch((err)=>{
                reject(err)
            })

        })

    },
    getProjects: (pid) => {
        return new Promise(async (resolve, reject) => {
            getDb().then((db) => {
                if (pid) {
                    db.collection("project").findOne({ "_id": new ObjectId(pid) }).then((res) => {
                        resolve(res)
                    })
                }

                else {
                    db.collection("project").find().sort({ _id: -1 }).toArray().then((res) => {
                        resolve(res)
                    })
                }
            }).catch((err)=>{
                reject(err)
            })

        })
    }
}