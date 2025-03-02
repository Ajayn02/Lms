import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios';
import toast from 'react-hot-toast';
import Header from './Header';
import './Home.css'
import { Link } from 'react-router-dom';

function Home() {
    const [data, setData] = useState([])

    useEffect(() => {
        handleData()
    }, [])

    const handleData = async () => {
        const res = await axios.get(`https://trogon.info/interview/php/api/subjects.php`)
        if (res.status == 200) {
            setData(res.data)
        } else {
            toast.error("Something Went Wrong")
            console.log(res);
        }
    }

    return (
        <>
            <Header/>
            <div className='container mt-4 homediv d-flex justify-content-center  flex-column align-items-center' >
                
                <h2 className='texet-center fw-bold mb-5'>Subjects</h2>
                <Row className=' homerow mb-5' style={{ minHeight: "100vh" }}>
                    
                    {
                        data?.length > 0 &&
                        data?.map((item) => (
                            <Col key={item.id} md={6} sm={12} className=' mb-4 d-flex justify-content-center align-items-center'>
                                <Link to={`/mod/${item.id}`} style={{textDecoration:"none",color:"#F7F4F3"}}>
                                    <div className='border mt-2 d-flex border-2 p-2 card-div' style={{ borderRadius: "0px 15px 10px 15px",minHeight:'180px' }}>
                                        <div className='me-2'>
                                            <i className="fa-solid fa-circle-dot mt-3 fa-lg" />
                                        </div>
                                        <div className=''>
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
    
                                    </div>
                                </Link>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </>
    )
}

export default Home