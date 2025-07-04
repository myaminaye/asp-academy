export default function Course({ params }) {
  const { course } = params;

  return (
    <div>
      <h1>Course Details</h1>
      <p>Course ID: {course}</p>
      <p></p>
    </div>
  );
}
