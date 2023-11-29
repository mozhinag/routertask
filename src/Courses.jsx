// Courses.js
import React from 'react';

function Courses({ courses }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={courses.img} className="card-img-top" alt="Course Image" />
      <div className="card-body">
        <h5 className="card-title">{courses.title}</h5>
        <p className="card-text">
          <strong>ID:</strong> {courses.id}<br />
          <strong>Category:</strong> {courses.category}<br />
          <strong>Content:</strong> {courses.content}
        </p>
      </div>
    </div>
  );
}

export default Courses;



