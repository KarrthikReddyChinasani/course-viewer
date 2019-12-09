import React, { Component } from "react";
import { connect } from "react-redux";
import { addCourse } from './../redux/actions';
class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let { value } = this.state;
    const  { dispatch } = this.props;
    dispatch(addCourse(value));
    this.setState({
      value: ''
    })
  }

  render() {
    let { courses } = this.props;
    return (
      <div className="courses-wrapper">
        <h2>Courses...</h2>
        <ul>
          {courses.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Course: <br></br>
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    courses: state.courses
  };
};
export default connect(mapStateToProps)(Courses);