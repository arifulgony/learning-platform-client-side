import React, { useEffect, useState } from 'react';
import {useNavigate, useParams} from "react-router-dom"
import SiteCard from '../SiteCard/SiteCard';
import'./SingleCourse.css';
import Pdf from "react-to-pdf";
import { FaDownload} from "react-icons/fa";
import Fooder from '../Fooder/Fooder';




const ref = React.createRef();
const SingleCoures = () => {

    const params = useParams()

    const [courses,setCourses] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/course/${params.id}`)
        .then(response => response.json())
        .then(json => setCourses(json))
    },[params])

    const {title, writer, writerImg, seatsLeft, price, description, benarImg, id} =courses;
    const navigate = useNavigate()


    const Submit = (id)=>{
       navigate(`/premium/${id}`)
    }
   // console.log(Submit);
    return (
        <>
            <section className='parent'>
                    <div className="container">
                    <div className="row">
                        <div className=" col-xl-9 col-md-9">
                          <div ref={ref} className="">
                                <div className="writer-img d-flex  my-3">
                                    <h4><img src={writerImg} alt=""/> {writer} </h4>
                                </div>
                                <div className="benars-img">
                                    <img src={benarImg} alt=""/>
                                </div>
                                
                                <h3>{title}</h3>
                                <article>{description}</article>
                                <h4>Seats Left :{seatsLeft}</h4>
                                <h4>Price : {price}</h4>
                            </div>
                            <div className="fooder-button">
                                <Pdf targetRef={ref} filename="code-example.pdf">
                                    {({ toPdf }) => <button onClick={toPdf} className="download" ><FaDownload></FaDownload> </button>}
                                </Pdf>
                                <div>
                                    <button className='download'  onClick={()=>Submit(id)}>Get premium access</button>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-xl-3 col-md-3">
                             <section>
                                <SiteCard></SiteCard>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            <Fooder></Fooder>
        </>
    );
};

export default SingleCoures;