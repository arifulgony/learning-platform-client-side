import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import './GetPremium.css'

const GetPremium = () => {

  const params = useParams()

  const [courses,setCourses] = useState([])

  useEffect(()=>{
      fetch(`http://localhost:5000/course/${params.id}`)
      .then(response => response.json())
      .then(json => setCourses(json))
  },[params])



  const {title, writer, id} =courses;
  


    return (
          <>
          <div className="bground">
          <div className="container pt-5">
             <Card>
                  <Card.Header as="h5">{id}</Card.Header>
                  <Card.Body>
                    <Card.Title>writer:{title}</Card.Title>
                    <Card.Text>
                      {writer}
                    </Card.Text>
                    <p className='text-center'>Congratulation</p>
                  </Card.Body>
                </Card>
          </div>
          </div>
          </>
    );
};

export default GetPremium;