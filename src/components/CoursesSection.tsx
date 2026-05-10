import type { Course } from "../types/golf";

type CoursesSectionProps = {
  courses: Course[];
};

function CourseCard({ course }: { course: Course }) {
  return (
    <article className="course-card">
      <div>
        <h3>{course.name}</h3>
        <p>{course.location}</p>
      </div>
      <dl>
        <div>
          <dt>Par</dt>
          <dd>{course.par}</dd>
        </div>
        <div>
          <dt>Yards</dt>
          <dd>{course.yardage.toLocaleString()}</dd>
        </div>
      </dl>
      <span>{course.signatureHole}</span>
    </article>
  );
}

export function CoursesSection({ courses }: CoursesSectionProps) {
  return (
    <section className="section split" id="courses">
      <div>
        <p className="eyebrow">Courses</p>
        <h2>Pick a course to start planning</h2>
        <p>
          Saved and nearby courses can show par, yardage, and hole-by-hole
          details as the application grows.
        </p>
      </div>
      <div className="course-list">
        {courses.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>
    </section>
  );
}
