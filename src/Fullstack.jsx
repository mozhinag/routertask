// Fullstack.jsx
import React from 'react';
import Courses from './Courses';

function Fullstack({ courses }) {
  const fullStackCourses = courses.filter((course) => course.category === 'Full Stack Development');

  return (
    <div>
      <h2>FULL STACK COURSES</h2>


      <div className='row'>
        {fullStackCourses.map((course) => (
          <div key={course.id} className='col-md-4 mt-3'>
            <Courses key={course.id} courses={course} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fullstack;

