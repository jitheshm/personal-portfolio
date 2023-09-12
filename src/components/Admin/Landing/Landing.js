import React from 'react'

function Landing({ datas }) {
    return (
        <>
            <div className="container-fluid px-5">
                <div className='px-5 mt-4' style={{ display: "flex", justifyContent: "end" }}>
                    <button type="button" className="btn btn-success rounded-pill px-4 ">Add project</button>
                </div>
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
                                            <button type="button" className="btn btn-primary btn-sm btn-rounded me-2">
                                                Edit
                                            </button>
                                            <button type="button" className="btn btn-danger btn-sm btn-rounded ms-2">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Landing