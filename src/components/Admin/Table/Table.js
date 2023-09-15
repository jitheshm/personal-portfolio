import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { projectDataContext } from '@/pages/admin'
import Link from 'next/link'
function Table() {
    const {projectData}=useContext(projectDataContext)
    const [datas, setDatas] = useState(projectData)
    const deleteProject = (pid) => {
        axios.get(`/api/delete-project?pid=${pid}`).then((res) => {
            console.log(res.data);
            const updatedDataList = datas.filter((data) => data._id !== pid); 
            setDatas(updatedDataList); 
        })
    }

    
    
    return (
        <table className="table align-middle mb-0 bg-white mt-4" style={{ textAlign: "center" }}>
            <thead className="bg-light">
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Language</th>
                    <th>Github Link</th>
                    <th>Hosting link</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    datas && datas.map((data) => {
                        return (
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img src={data.imageUrl} alt style={{ width: 45, height: 45 }} className="rounded-circle" />
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">{data.name}</p>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className="fw-normal mb-1">{data.category}</p>

                                </td>
                                <td>
                                    <p className="fw-normal mb-1">{data.description}</p>
                                </td>
                                <td>{data.language}</td>
                                <td>
                                    <a href={data.github} style={{ color: "black" }}>{data.github}</a>
                                </td>
                                <td>{
                                    data.hosting ? <a href={data.hosting} style={{ color: "black" }}>{data.hosting}</a> : "Not hosted"
                                }

                                </td>
                                <td>
                                    <Link href={`/admin/edit-project?pid=${data._id}`} className="btn btn-primary btn-sm btn-rounded me-2">
                                        Edit
                                    </Link>
                                    <button onClick={() => deleteProject(data._id)} type="button" className="btn btn-danger btn-sm btn-rounded ms-2">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
    )
}

export default Table