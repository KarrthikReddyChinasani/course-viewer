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
      category: "",
      isEdit: false,
      id: 0
    };
    self = this;
  }

  componentDidMount() {
    if (Object.keys(this.props.match.params).length > 0) {
      const { slug } = this.props.match.params;
      const course = this._findCourse(slug);
      if (course) {
        this.setState({
          title: course.title,
          authorId: course.authorId,
          category: course.category,
          isEdit: true,
          id: course.id
        });
      }
    }
  }

  _findCourse = slug => {
    const { courses } = this.props;
    const index = courses.findIndex(x => x.slug === slug);
    if (index === -1) return false;
    return courses[index];
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, authorId, category, id, isEdit } = this.state;
    let payload = {
      title,
      authorId,
      category
    };
    if (isEdit) {
      payload["id"] = id;
      payload["slug"] = this.props.match.params;
    }
    this.saveBook(payload);
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
    const { isEdit, title, authorId, category } = this.state;
    return (
      <div className="courses-wrapper">
        <h2>{isEdit ? "Edit Course" : "Add Course"}</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={e => this.handleChange("title", e)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Author</label>
            <select
              value={authorId}
              className="form-control"
              onChange={e => this.handleChange("authorId", e)}
            >
              <option value={0} key={0}>
                Select Author
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
              value={category}
              onChange={e => this.handleChange("category", e)}
              className="form-control"
            />
          </div>
          <button className="btn btn-primary" type="submit">
            { !isEdit ? "Submit" : "Edit"}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authors: state.authors,
    courses: state.courses
  };
};
export default connect(mapStateToProps)(withRouter(NewCourse));
