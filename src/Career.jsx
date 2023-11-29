
import React from 'react';
import Courses from './Courses';

function Career({ courses }) {
  const  CareerCourses = courses.filter((course) => course.category === 'career');

  return (
    <div>
      <h2>CAREER COURSES</h2>
      <div className='row'>
      { CareerCourses.map((course) => (
        <div key={course.id} className='col-md-4 mt-3'>
        <Courses key={course.id} courses={course} />
        </div>
      ))}
    </div>
    </div>
  );
}








export default Career