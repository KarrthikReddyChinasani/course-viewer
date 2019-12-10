import React, { Component } from "react";
import { connect } from "react-redux";
import { addCourse, allCourses, fetchAuthors } from "./../redux/actions";
import { getCourses } from "./../api/courseApi";
import { getAuthors } from "./../api/authorApi";
import TableComponent from "./courses/Table";
import { Link } from "react-router-dom";

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(this.loadCourses());
    dispatch(this.loadAuthors());
  }

  loadCourses = () => {
    return function(dispatch, getState) {
      return getCourses()
        .then(res => {
          dispatch(allCourses(res));
        })
        .catch(err => {
          console.log("error", err);
        });
    };
  };

  loadAuthors = () => {
    return function(dispatch, getState) {
      return getAuthors()
        .then(res => dispatch(fetchAuthors(res)))
        .catch(err => console.log("error", err));
    };
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

  render() {
    let { courses, authors } = this.props;
    return (
      <div className="courses-wrapper">
        <h2>Courses...</h2>
        <Link to={'/course'} className="btn btn-primary"> {'Add Course'} </Link>
        <TableComponent courses={courses} authors={authors} />
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
