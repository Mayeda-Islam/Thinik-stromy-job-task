const Table = ({ students }) => {
  console.log(students);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Student Id</th>
              <th>GAP</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr>
                <td>{student.studentName}</td>
                <td>{student.id}</td>
                <td>{student.gpa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
