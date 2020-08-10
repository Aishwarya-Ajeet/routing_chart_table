import React, { Component } from "react";
class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          id: 1,
          Name: "Aakansha",
          English: 67,
          Mathematics: 56,
          History: 89,
          Result: <a href="www.google.com"> Download! </a>,
        },
        {
          id: 2,
          Name: "Aditi",
          English: 78,
          Mathematics: 65,
          History: 70,
          Result: <a href="www.google.com"> Download! </a>,
        },
        {
          id: 3,
          Name: "Shreya",
          English: 90,
          Mathematics: 92,
          History: 97,
          Result: <a href="www.google.com"> Download! </a>,
        },
        {
          id: 4,
          Name: "Anika",
          English: 97,
          Mathematics: 94,
          History: 99,
          Result: <a href="www.google.com"> Download! </a>,
        },
        {
          id: 5,
          Name: "Ayushi",
          English: 95,
          Mathematics: 96,
          History: 100,
          Result: <a href="www.google.com"> Download! </a>,
        },
        {
          id: 6,
          Name: "Rishika",
          English: 88,
          Mathematics: 70,
          History: 83,
          Result: <a href="www.google.com"> Download! </a>,
        },
        {
          id: 7,
          Name: "Rahul",
          English: 67,
          Mathematics: 44,
          History: 79,
          Result: <a href="www.google.com"> Download! </a>,
        },
      ],
    };
  }

  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, Name, English, Mathematics, History, Result } = student; //destructuring
      return (
        <tr key={id}>
          <td
            style={
              ({ textAlign: "right" }, { width: "5%" }, { borderRadius: "6px" })
            }
          >
            {id}
          </td>
          <td>{Name}</td>
          <td style={{ textAlign: "right" }}>{English}</td>
          <td style={{ textAlign: "right" }}>{Mathematics}</td>
          <td style={{ textAlign: "right" }}>{History}</td>
          <td>{Result}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = Object.keys(this.state.students[0]);
    return header.map((key, index) => {
      return <th key={index}>{key}</th>;
    });
  }

  render() {
    return (
      <React.Fragment>
        <table id="students">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Table;
