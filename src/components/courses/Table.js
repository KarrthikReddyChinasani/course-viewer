import React, { Component } from "react";
import { Link } from "react-router-dom";

class TableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getAuthor(id) {
    const { authors } = this.props;
    const index = authors.findIndex(x => x.id === parseInt(id+""));
    return index >= 0 ? authors[index].name : "";
  }

  render() {
    const { courses, onDelete } = this.props;
    return (
      <div className="courses-table">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {courses.map(item => (
              <tr key={item.slug}>
                <td><button type="button" className="btn btn-light">Watch</button></td>
                <td><Link to={`/course/${item.slug}`}> {item.title} </Link></td>
                <td>{ this.getAuthor(item.authorId) }</td>
                <td>{item.category}</td>
                <td><button type="button" className="btn btn-outline-danger" onClick={(e) => onDelete(e, item.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableComponent;
