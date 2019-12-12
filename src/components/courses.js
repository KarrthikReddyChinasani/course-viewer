import React, { Component } from "react";
import { connect } from "react-redux";
import { addCourse, fetchCourses, fetchAuthorNames } from "../redux/actions";
import {  deleteCourse } from "../api/courseApi";
import TableComponent from "./courses/Table";
import { Link } from "react-router-dom";

class Courses extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onCourseDelete = this.onCourseDelete.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(this.loadCourses());
    dispatch(this.loadAuthors());
  }

  loadCourses = () => {
    return fetchCourses();
  };

  loadAuthors = () => {
    return fetchAuthorNames()
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let { value } = this.state;
    const { dispatch } = this.props;
    dispatch(addCourse(value));
    this.setState({
      value: ""
    });
  }

  onCourseDelete(e, id) {
    const { dispatch } = this.props;
    e.preventDefault();
    deleteCourse(id).then(res => dispatch(this.loadCourses())).catch(err => console.log("err", err));
  }

  render() {
    let { courses, authors } = this.props;
    return (
      <div className="courses-wrapper">
        <h2>Courses...</h2>
        <Link to={'/course'} className="btn btn-primary"> {'Add Course'} </Link>
        <TableComponent courses={courses} authors={authors} onDelete={ this.onCourseDelete }/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    courses: state.courses,
    authors: state.authors
  };
};
export default connect(mapStateToProps)(Courses);
