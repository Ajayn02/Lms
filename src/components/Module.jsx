import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Accordion from 'react-bootstrap/Accordion';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import './module.css'


function Module() {
    const [data, setData] = useState([])

    const { id } = useParams()
    useEffect(() => {
        getModules()
    }, [])

    const getModules = async () => {
        const res = await axios.get(`https://trogon.info/interview/php/api/modules.php?subject_id=${id}`)
        if (res.status == 200) {
            setData(res.data.slice(0, 10))
        } else {
            console.log(res);
            toast.error("Something Went Wrong")
        }

    }

    return (
        <>
            <div className='container d-flex justify-content-center align-items-center flex-column ' style={{ minHeight: "100vh" }}>

                <h2 className='my-4 fw-bold'>Modules</h2>
                <div className=' acc-div mb-5'>
                    <Accordion defaultActiveKey="" style={{ width: "100%" }}>
                        {
                            data?.length > 0 &&
                            data?.map((item,index) => (
                                <Accordion.Item key={item.id} eventKey={item.id}>
                                    <Accordion.Header ><span className='fw-bold me-3'>{index+1}</span><span className='fw-bold'>{item.title}</span></Accordion.Header>
                                    <Accordion.Body className='d-flex  flex-column'>
                                        <div>
                                            {item.description}
                                        </div>
                                        <div className='mt-2'>
                                            <Link to={`/vid/${item.id}`} className='btn  fw-bold'id='wtch-btn' >Watch Tutorials</Link>
                                        </div>
                                    </Accordion.Body>

                                </Accordion.Item>
                            ))
                        }


                    </Accordion>

                </div>
            </div>
        </>
    )
}

export default Module