import Layout from "../components/layout";
import "./about.css";

export default function About() {
  return (
    <Layout>
      <main className="about-wrapper">
        <section className="about-hero">
          <h1 className="about-title">Empowering Learners, Inspiring Futures</h1>
          <p className="about-subtitle">We craft premium learning experiences that shape careers and ignite passions.</p>
        </section>

        <section className="about-section">
          <h2>Who We Are</h2>
          <p>We are a collective of educators, designers, and technologists passionate about creating world-class online education. Our platform delivers interactive, hands-on learning experiences that are beautifully crafted and deeply impactful.</p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>To democratize access to exceptional learning — one course at a time. We believe everyone deserves the tools to unlock their potential and thrive in a rapidly changing world.</p>
        </section>

        <section className="about-section highlight">
          <h2>Why Choose Us?</h2>
          <ul className="about-points">
            <li>🌟 Curated by industry experts</li>
            <li>🎓 Real-world, project-based learning</li>
            <li>💼 Career-focused and outcome-driven</li>
            <li>✨ Elegant, immersive platform design</li>
          </ul>
        </section>

        {/* Timeline */}
        <section className="about-section">
          <h2>Our Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>2021</h4>
                <p>Founded with the vision to revolutionize online education.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>2022</h4>
                <p>Launched our first course and reached 10,000+ learners globally.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>2023</h4>
                <p>Partnered with industry leaders to expand our catalog and tools.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>2024</h4>
                <p>Recognized as a top platform for creative and tech education.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="about-section">
          <h2>Meet the Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <img src="https://api.dicebear.com/9.x/notionists/svg?seed=Felix" alt="Felix" />
              <h4>Felix Mike</h4>
              <p className="role">Founder & CEO</p>
              <p>Visionary leader focused on accessible, premium education for all.</p>
            </div>
            <div className="team-card">
              <img src="https://api.dicebear.com/9.x/notionists/svg?seed=Aiden" alt="Lara" />
              <h4>Lara Aiden</h4>
              <p className="role">Head of Design</p>
              <p>Crafting elegant, learner-centered experiences that inspire action.</p>
            </div>
            <div className="team-card">
              <img src="https://api.dicebear.com/9.x/notionists/svg?seed=Jack" alt="Jack" />
              <h4>Jack Eden</h4>
              <p className="role">Education Director</p>
              <p>Bringing industry expertise and academic excellence to every course.</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="about-section">
          <h2>FAQs</h2>
          <div className="faq">
            <details>
              <summary>Are your courses beginner friendly?</summary>
              <p>Absolutely! Our courses start with the basics and gradually move into advanced topics.</p>
            </details>
            <details>
              <summary>Do I get a certificate?</summary>
              <p>Yes! You’ll receive a certificate upon course completion to showcase your skills.</p>
            </details>
            <details>
              <summary>Is there lifetime access?</summary>
              <p>Yes, once you enroll, you’ll have lifetime access to the course materials.</p>
            </details>
          </div>
        </section>
      </main>
    </Layout>
  );
}
