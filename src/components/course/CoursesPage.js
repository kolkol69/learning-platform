import React, { Component, PropTypes } from 'react';

export default class CoursesPage extends Component {
  constructor(props,context){
    super(props,context);

    this.state = {
      course: { title: null }
    };
  }
  onTitleChange(ev){
    const course = this.state.course;
    course.title = ev.target.value;
    this.setState({course});
  }
  onClickSave(){
    alert(`Saving ${this.state.course.title}`);
  }
  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input 
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />
        <input 
          type="submit"
          value="Save"
          onClick={this.onClickSave}
        />
      </div>
    );
  }
  
}
