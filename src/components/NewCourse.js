import React, { Component } from "react";
import { connect } from "react-redux";
import { saveCourse } from "./../api/courseApi";
import { withRouter } from "react-router-dom";

let self;
class NewCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      authorId: 1,
      category: ""
    };
    self = this;
  }

  handleSubmit = e => {
    e.preventDefault();
    this.saveBook(this.state);
  };

  saveBook = course => {
    saveCourse(course)
      .then(res => {
        self.props.history.push("/courses");
      })
      .catch(err => {
        console.log("something went wrong in saving the course");
      });
  };

  handleChange = (type, e) => {
    this.setState({
      [type]: e.target.value
    });
  };

  render() {
    const { authors } = this.props;
    return (
      <div className="courses-wrapper">
        <h2>Add Course</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              onChange={e => this.handleChange("title", e)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Author</label>
            <select
              className="form-control"
              onChange={e => this.handleChange("authorId", e)}
            >
              <option value={0} key={0}>
                {" "}
                Select Author{" "}
              </option>
              {authors.map(author => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              onChange={e => this.handleChange("category", e)}
              className="form-control"
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authors: state.authors
  };
};
export default connect(mapStateToProps)(withRouter(NewCourse));
