import axios from 'axios'
import React from 'react'

function addProject() {
    const OnSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        axios.post('/api/add-project',formData,{
            'Content-Type': 'multipart/form-data'
        }).then((res)=>{
            console.log(res);
        })
        
    }

    return (
        <div className='container-fluid' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h3 className='mt-4'>Enter Project Details</h3>
            <form onSubmit={OnSubmit} encType="multipart/form-data" className='col-5 my-4' style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div className="form-group">
                    <label >Project Name</label>
                    <input type="text" name='name' className="form-control" placeholder="Enter Project Name" />

                </div>
                <div className="form-group">
                    <label >Category</label>
                    <input type="text" name='category' className="form-control" placeholder="Enter category" />
                </div>
                <div className="form-group">
                    <label >Description</label>
                    <textarea type="text" name='description' className="form-control" placeholder="Enter description" />
                </div>
                <div className="form-group">
                    <label >Language</label>
                    <input type="text" name='language' className="form-control" placeholder="Enter language" />
                </div>
                <div className="form-group">
                    <label >Github link</label>
                    <input type="url" name='github' className="form-control" placeholder="Enter Github link" />
                </div>
                <div className="form-group">
                    <label >Host link</label>
                    <input type="url" name='host' className="form-control" placeholder="Enter Host link" />
                </div>
                <div className="form-group">
                    <label >Image</label>
                    <input type="file" name='image' className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default addProject