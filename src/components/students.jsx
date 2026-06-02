export default function Students({ studentList }) {
  return (
    <>
      <ul>
        {studentList.map((student) => (
          <li>{student}</li>
        ))}
      </ul>
    </>
  );
}
