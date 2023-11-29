// All.js
import React from 'react';
import Courses from './Courses';

function All({ courses }) {
  return (
    <div className='row'>
      {courses.map((course) => (
        <div key={course.id} className='col-md-4 mt-3'>
          <Courses courses={course} />
        </div>
      ))}
    </div>
  );
}

export default All;
