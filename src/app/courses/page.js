"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import "./courses.css";
import { courses } from "@/constants/courses";
import Layout from "../components/layout";

export default function Courses() {
  const router = useRouter();
  const [clickedId, setClickedId] = useState(null);

  const handleCardClick = (id) => {
    setClickedId(id);
    setTimeout(() => {
      router.push(`/courses/${id}`);
    }, 400);
  };

  return (
    <Layout>
      <section className="courses-container">
        <h1 className="courses-title">Explore Our Courses</h1>
        <div className="courses-grid">
          {courses.map(({ id, title, description, gradient }) => (
            <div key={id} className={`card-wrapper ${gradient} ${clickedId === id ? "expand-card" : ""}`} onClick={() => handleCardClick(id)}>
              <div className="card-inner">
                <h2 className="course-title">{title}</h2>
                <p className="course-description">{description}</p>
                <span className="course-link">View Details →</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
