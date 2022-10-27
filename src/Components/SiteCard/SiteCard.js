import React, { useEffect, useState } from 'react';
import './SiteCard.css'
import { useNavigate} from "react-router-dom";
const SiteCard = () => {

    const [courses,setCourses] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(response => response.json())
        .then(json => setCourses(json))
    },[])

//console.log(courses)
    
 const navigate = useNavigate()

 const Submit = (id)=>{
    navigate(`/courses/${id}`)
    // console.log(id)
 }


    return (
        <div>
            <div className="side-card">
                   <h1>Our Courses</h1>
                              <div className="site-item">
                              {
                                    courses?.map(course => <div key={course.id} course={course}>
                                       <h3 onClick={()=>Submit(course.id)}>{course.title}</h3> 
                                    </div>)
                                }
                              </div>
                </div>
        </div>
    );
};

export default SiteCard;