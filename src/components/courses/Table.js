import React, { Component } from "react";

class TableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getAuthor(id) {
    const { authors } = this.props;
    const index = authors.findIndex(x => x.id === id);
    return index >= 0 ? authors[index].name : "";
  }

  render() {
    const { courses } = this.props;
    return (
      <div className="courses-table">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(item => (
              <tr key={item.slug}>
                <td><button type="button" class="btn btn-light">Watch</button></td>
                <td>{item.title}</td>
                <td>{ this.getAuthor(item.authorId) }</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableComponent;
