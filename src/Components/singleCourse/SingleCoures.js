import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"
import'./SingleCourse.css'

const SingleCoures = () => {

    const params = useParams()

    const [courses,setCourses] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/course/${params.id}`)
        .then(response => response.json())
        .then(json => setCourses(json))
    },[])

    const {title, writer, writerImg, seatsLeft, price, description, benarImg} =courses
    return (
        <>
           <div className="container">
            <div className="benar-img">
                 <img src={benarImg} alt="" />
            </div>
            
            <h3>{title}</h3>
            <article>{description}</article>
            <div className="writer-img d-flex ">
            <h4><img src={writerImg} alt="" /> {writer} </h4>
            </div>
            <h4>Seats Left :{seatsLeft}</h4>
            <h4>Price : {price}</h4>

            


           </div>
        </>
    );
};

export default SingleCoures;