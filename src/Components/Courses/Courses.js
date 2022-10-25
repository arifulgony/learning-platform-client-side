import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCart from '../CourseCart/CourseCart';
import "./Courses.css"
const Courses = () => {
   

    const [courses,setCourses] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(response => response.json())
        .then(json => setCourses(json))
    },[])



    return (
        <div className='main-section '>
             <section className='crouse-section '>
                    <div className="container">
                            <div className="row">
                                
                                {
                                    courses?.map(courses => <CourseCart key={courses.id} courses={courses}></CourseCart>)
                                }
                            </div>
                    
                    </div>
             </section>
              <section>
                <div className="side-card">
                   <h1>Our Topic</h1>
                  <h3><Link>Angular</Link></h3>
                   <h3><Link>React</Link></h3>
                   <h3><Link> Vue.js</Link></h3>
                   <h3><Link>Ember.js</Link></h3>
                   <h3><Link>Meteor</Link></h3>
                   <h3><Link>Mithril</Link></h3>
                </div>
              </section>
        </div>
    );
};

export default Courses;