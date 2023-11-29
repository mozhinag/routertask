
import React from 'react';
import Courses from './Courses';

function Cyber({ courses }) {
  const CyberCourses = courses.filter((course) => course.category === 'Cyber Security');

  return (
    <div>
      <h2>CYBER SECURITY COURSES</h2> 
       <div className='row'>

      {CyberCourses.map((course) => (
        <div key={course.id} className='col-md-4 mt-3'>

        <Courses key={course.id} courses={course} />

        </div>
      ))}
    </div>
    </div>
  );
}





export default Cyber