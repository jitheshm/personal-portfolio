const { getDb } = require("@/lib/db");
const { ObjectId } = require("mongodb");
const bcrypt = require("bcrypt")

module.exports={
    getAdmin:(data)=>{
        return new Promise((resolve, reject) => {
            getDb().then((db)=>{
                db.collection("admin").findOne({email:data.email}).then((res)=>{
                    console.log(res);
                    if(res){
                        bcrypt.compare(data.password, res.password, function(err, result) {
                            console.log(result);
                            if(result){
                                resolve(res)
                            }else{
                                resolve(null)
                            }
                        })
                    }
                    else{
                        resolve(null)
                    }
                   

                   
                    
                })
            })
        })
    }
}