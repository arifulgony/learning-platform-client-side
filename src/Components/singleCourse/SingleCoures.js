import React, { useEffect, useState } from 'react';
import {Link, useParams} from "react-router-dom"
import SiteCard from '../SiteCard/SiteCard';
import'./SingleCourse.css';
import Pdf from "react-to-pdf";
import Button from 'react-bootstrap/Button';



const ref = React.createRef();
const SingleCoures = () => {

    const params = useParams()

    const [courses,setCourses] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/course/${params.id}`)
        .then(response => response.json())
        .then(json => setCourses(json))
    },[params])

    const {title, writer, writerImg, seatsLeft, price, description, benarImg} =courses
    return (
        <>
          <div className="main-section">
            <section className='parent'>
            <div className="container">
            <div ref={ref} className="">
                 <div className="writer-img d-flex ">
                    <h4><img src={writerImg} alt="" /> {writer} </h4>
                </div>
                <div className="benar-img">
                    <img src={benarImg} alt=""/>
                </div>
                
                <h3>{title}</h3>
                <article>{description}</article>
                <h4>Seats Left :{seatsLeft}</h4>
                <h4>Price : {price}</h4>
            </div>
            <Pdf targetRef={ref} filename="code-example.pdf">
                  {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
             </Pdf>
            <Link to='/premium'>
                    <Button variant="primary">Get premium access</Button>
             </Link>
           </div>
            </section>
            <section>
                <SiteCard></SiteCard>
            </section>
          </div>
        </>
    );
};

export default SingleCoures;