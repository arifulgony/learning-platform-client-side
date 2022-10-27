import React, { useEffect, useState } from 'react';
import CourseCart from '../CourseCart/CourseCart';
import SiteCard from '../SiteCard/SiteCard';
import "./Courses.css"
const Courses = () => {
   

    const [courses,setCourses] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(response => response.json())
        .then(json => setCourses(json))
    },[])



    return (
        <div className='main-sectio '>
             <section className='crouse-section '>
                    <div className="container">
                            <div className="row">
                               <div className="col-9">
                                   <div className="card-card">    
                                   {
                                        courses?.map(courses => <CourseCart key={courses.id} courses={courses}></CourseCart>)
                                     }
                                   </div>
                               </div>
                               <div className="col-3">
                                    <section>
                                            <SiteCard></SiteCard>
                                    </section>
                               </div>
                            </div>
                    
                    </div>
             </section>
            
        </div>
    );
};

export default Courses;