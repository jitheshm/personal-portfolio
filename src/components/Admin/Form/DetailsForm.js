import axios from 'axios'
import { useRouter } from 'next/router'


import React from 'react'

function DetailsForm({data,title,action,api}) {
    const router=useRouter()
    
    const {name,category,description,language,github,host,_id,imagePublic_id}=data||{}
    const OnSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        formData.append('imagePublic_id',imagePublic_id)
        axios.post(`/api/${api}?pid=${_id}`,formData,{
            'Content-Type': 'multipart/form-data'
        }).then((res)=>{
            console.log(res);
            alert(res.data.message)
            router.push('/admin')

        })
        
    }

    return (
        <div className='container-fluid' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h3 className='mt-4'>{title} Project Details</h3>
            <form onSubmit={OnSubmit} encType="multipart/form-data" className='col-5 my-4' style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div className="form-group">
                    <label >Project Name</label>
                    <input type="text" defaultValue={name} name='name' className="form-control" placeholder="Enter Project Name" />

                </div>
                <div className="form-group">
                    <label >Category</label>
                    <input type="text" defaultValue={category} name='category' className="form-control" placeholder="Enter category" />
                </div>
                <div className="form-group">
                    <label >Description</label>
                    <textarea type="text" defaultValue={description} name='description' className="form-control" placeholder="Enter description" />
                </div>
                <div className="form-group">
                    <label >Language</label>
                    <input type="text" defaultValue={language} name='language' className="form-control" placeholder="Enter language" />
                </div>
                <div className="form-group">
                    <label >Github link</label>
                    <input type="url" defaultValue={github} name='github' className="form-control" placeholder="Enter Github link" />
                </div>
                <div className="form-group">
                    <label >Host link</label>
                    <input type="url" defaultValue={host} name='host' className="form-control" placeholder="Enter Host link" />
                </div>
                <div className="form-group">
                    <label >Image</label>
                    <input type="file" name='image' className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary">{action}</button>
            </form>

        </div>
    )
}

export default DetailsForm