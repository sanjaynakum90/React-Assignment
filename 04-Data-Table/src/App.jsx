import React, { useState } from "react";
import { Container, Table, Form } from "react-bootstrap";
import studentsData from "./StudentData";

function App() {
  const [students] = useState(studentsData);

  const [studentQuery, setStudentQuery] = useState({
    search: "",
    filter: "",
  });

  const handleChange = (identifire, e) => {
    setStudentQuery(
      {
        ...studentQuery,
        [identifire]: e.target.value
      }
    );
  };


  const filteredList = students.filter((student) =>
    student.name.toLowerCase().includes(studentQuery.search.toLowerCase())
  );

  const sortedList = [...filteredList].sort((a, b) => {
    if (studentQuery.filter === "asc") return a.id - b.id;
    if (studentQuery.filter === "desc") return b.id - a.id;
    return 0;
  });

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Student Management</h2>

      <form className="d-flex gap-2 mb-3">
        <Form.Control
          placeholder="Search by student name..."
          value={studentQuery.search}
          onChange={(e) => handleChange("search", e)}
        />

        <Form.Select
          value={studentQuery.filter}
          onChange={(e) => handleChange("filter", e)}
        >
          <option value="">Sort by ID</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Form.Select>
      </form>

      <Table striped bordered hover>
        <thead>
          <tr className="table-dark">
            <th>#</th>
            <th>Name</th>
            <th>GR ID</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {sortedList.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.id}</td>
              <td>{student.course}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
