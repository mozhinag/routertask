
import React from 'react';
import Courses from './Courses';

function Datascience({ courses }) {
  const DatascienceCourses = courses.filter((course) => course.category === 'Data Science');

  return (
    <div>
      <h2>DATA SCIENCE COURSES</h2>
      <div className='row'>
      {DatascienceCourses.map((course) => (
        <div key={course.id} className='col-md-4 mt-3'>
        <Courses key={course.id} courses={course} />
        </div>
      ))}
      </div>
    </div>
  );
}






export default Datascience