"use client";
import Link from "next/link";
import Layout from "../components/layout";

export default function Courses() {
  const courses = [
    { id: 1, title: "React Basics" },
    { id: 2, title: "Advanced JavaScript" },
  ];
  return (
    <Layout>
      <h1>Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Link href={`/courses/${course.id}`}>{course.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
