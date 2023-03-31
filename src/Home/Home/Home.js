import React, { useState } from "react";
import Form from "../From/Form";
import Table from "../Table/Table";

const Home = () => {
  const localStorageStudents =
    JSON.parse(localStorage.getItem("students")) || [];
  const [students, setStudents] = useState(localStorageStudents);
  const onSubmit = (data) => {
    const newStudent = {
      ...data,
      id: Date.now(),
    };
    const updatedStudent = [...students, newStudent];
    localStorage.setItem("students", JSON.stringify(updatedStudent));
    // setStudents((pevStudents) => [...pevStudents, newStudent]);
    setStudents(updatedStudent);
  };
  return (
    <div className="container mx-auto h-screen flex justify-around items-center">
      <Form onSubmit={onSubmit}></Form>
      <Table students={students}></Table>
    </div>
  );
};

export default Home;
