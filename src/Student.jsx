import React from 'react';
// import burgerpic from './assets/burger.jpg';
import PropTypes from 'prop-types';
function Student({ 
  name = "Guest", 
  age = 0, 
  isstudent = false 
}) {
  return (
    <div className='student'>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <p> IsStudent: {isstudent?"Yes":"No"}</p>
    </div>  
  );
}
Student.propTypes={
  name: PropTypes.string,
  age: PropTypes.number,
  isstudent: PropTypes.bool,
}
// Student.defaultProps = {
//   name: "Guest",
//   age: 0,
//   isstudent: false,
// };

export default Student;
