"use client";
import Layout from "./components/layout";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.page}>
        <section className={styles.section}>
          <h1 className={styles.title}>Welcome to Our Learning Platform</h1>
          <h2 className={styles.subtitle}>ASP Academy</h2>
          <img src="/assets/asp_logo.png" alt="ASP Logo" className={styles.logoImage} />
          <p className={styles.text}>Explore our wide range of courses designed to help you master new skills and advance your career.</p>
          <p className={styles.text}>Whether you're a beginner or an experienced developer, we have something for everyone.</p>
          <p className={styles.text}>Learn more about ASP Academy!</p>
          <button className={styles.button}>
            <a href="/about">About us</a>
          </button>
        </section>

        <section className={styles.section}>
          <h1 className={styles.title}>Hightlighted Courses</h1>
          <div className={styles.courses}>
            <div className={styles.course}>
              <h2 className={styles.subtitle}>French Language Class</h2>
              <p>
                This course is designed for beginners who want to learn the basics of the French language. Students will be introduced to fundamental grammar rules, essential vocabulary, and common phrases used in everyday conversations. The class also covers pronunciation, listening comprehension, and simple reading and writing exercises to build a strong foundation for further learning. Cultural insights and practical communication skills are emphasized to help learners confidently navigate
                French-speaking environments.
              </p>
            </div>
            <div className={styles.course}>
              <h2 className={styles.subtitle}>Basic Programming</h2>
              <p>This introductory course teaches the fundamentals of programming and computational thinking. Students will learn key concepts such as variables, data types, conditionals, loops, and functions through hands-on practice using a beginner-friendly programming language like Python. The course aims to build logical problem-solving skills and lays the groundwork for further studies in software development or computer science.</p>
            </div>
            <div className={styles.course}>
              <h2 className={styles.subtitle}>English Speaking Class</h2>
              <p>This class focuses on improving spoken English through interactive activities, discussions, role plays, and presentations. It is ideal for learners who want to boost their confidence and fluency in everyday and professional conversations. The course covers pronunciation, intonation, and vocabulary building while offering practical techniques for effective communication. Students are encouraged to actively participate and engage in real-life speaking scenarios.</p>
            </div>
          </div>
          <button className={styles.button}>
            <a href="/courses">View Courses</a>
          </button>
        </section>

        <section className={styles.section}>
          <h1 className={styles.title}>Reviews</h1>
          <p>Hear from our satisfied learners who have transformed their skills with our courses.</p>
          <div className={styles.reviews}>
            <div className={styles.review}>
              <p>"The React course was fantastic! I learned so much and feel confident building my own applications."</p>
              <p>- Jane Doe</p>
            </div>
            <div className={styles.review}>
              <p>"The instructors are knowledgeable and the content is well-structured. Highly recommend!"</p>
              <p>- John Smith</p>
            </div>
            <div className={styles.review}>
              <p>"I loved the interactive exercises in the JavaScript course. It made learning fun and engaging."</p>
              <p>- Alice Johnson</p>
            </div>
            <div className={styles.review}>
              <p>"This course sparked my interest in software development. It was clear, well-paced, and beginner-friendly. The instructor was always patient and supportive. A great start for anyone curious about coding."</p>
              <p>- Nina D</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h1 className={styles.title}>Get Started Today!</h1>
          <p>Join our community of learners and start your journey towards mastering new skills.</p>
          <p>Contact us now to know about our courses and resources.</p>
          <button className={styles.button}>
            <a href="/about">Contact us</a>
          </button>
        </section>
      </div>
    </Layout>
  );
}
