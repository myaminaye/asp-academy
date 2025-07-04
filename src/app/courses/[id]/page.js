import { courses } from "@/constants/courses";
import "./course.css";
import Link from "next/link";
import Layout from "@/app/components/layout";

export default function CourseDetail({ params }) {
  const courseId = parseInt(params.id);
  const course = courses.find((c) => c.id === courseId);

  if (!course) return <p>Course not found.</p>;

  return (
    <Layout>
      <main>
        <header className={`course-hero ${course.gradient}`}>
          <div className="back-wrapper">
            <Link href="/courses" className="back-button">
              ← Back to Courses
            </Link>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">{course.title}</h1>
            <p className="hero-description">{course.description}</p>
            <div className="hero-meta">
              <span className="price">$49.99</span>
              <span className="stars">⭐⭐⭐⭐☆</span>
              <span className="reviews">(120 reviews)</span>
              <button className="enroll-btn">Enroll Now</button>
            </div>
          </div>
        </header>

        <section className="course-body">
          <h2>What you'll learn</h2>
          <ul className="course-points">
            <li>✔ Build real-world projects using this course</li>
            <li>✔ Get job-ready with expert instruction</li>
            <li>✔ Learn practical, hands-on skills</li>
          </ul>

          <h2>Course Overview</h2>
          <p>This course offers a deep dive into {course.title}. You’ll explore both theory and application with code examples, downloadable resources, and community support. Taught by industry professionals with years of experience.</p>

          <h2>Student Reviews</h2>
          <div className="comments">
            <blockquote>
              “Absolutely loved this course. It helped me land my first developer job!”
              <span>– Aung T.</span>
            </blockquote>
            <blockquote>
              “Clear, concise, and beautifully explained. Worth every cent.”
              <span>– May M.</span>
            </blockquote>
            <blockquote>
              “Feels like a premium university course for a fraction of the cost.”
              <span>– John D.</span>
            </blockquote>
          </div>
        </section>
      </main>
    </Layout>
  );
}
