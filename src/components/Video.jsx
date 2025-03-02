import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import './video.css'


function Video() {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [finalUrl, setFinalUrl] = useState(``)
    const [vimUrl, setVimUrl] = useState(``)

    useEffect(() => {
        handleVideo()
    }, [])

    const handleVideo = async () => {
        const res = await axios.get(`https://trogon.info/interview/php/api/videos.php?module_id=${id}`)
        if (res.status == 200) {
            setData(res.data[id - 1])
            if (res.data[id - 1].video_type == "YouTube") {
                const vUrl = res.data[id - 1].video_url.split("v=")[1]
                // console.log(vUrl);
                setFinalUrl(`https://www.youtube.com/embed/${vUrl}?si=htAIr6AMDYRfZ9kK&autoplay=1`)
            } else if (res.data[id - 1].video_type == "Vimeo") {
                const vUrl = res.data[id - 1].video_url.split("/")[3]
                // console.log(vUrl);
                setVimUrl(`https://player.vimeo.com/video/${vUrl}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479;autoplay=1`)
            }


        } else {
            console.log(res);
            toast.error('Something Went Wrong')
        }

    }


    return (
        <>

            <div className='w-100 d-flex justify-content-center align-items-center ' style={{minHeight:"100vh"}}>
                <div className='container   vid-maindiv' >
                    
                    <h2 className='mb-3 '>{data?.title}</h2>
                    <div className='' id='vid-div'>
                        {
                            finalUrl ?
                                <iframe width="100%" className='border-0' height="100%" src={finalUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                :
                                <iframe src={vimUrl} className='border-0 p-0 m-0' id='vimiframe' width="100%" height="100%" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" ></iframe>
                        }
                        <div className=''><p className='desc mt-3' style={{ textAlign: "justify" }}>{data?.description}</p></div>
                    </div>
    
                </div>
            </div>


        </>
    )
}

export default Video