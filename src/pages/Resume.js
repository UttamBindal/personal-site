import React from 'react';
import { Link } from 'react-router-dom';

import { Document, Page, pdfjs } from 'react-pdf';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env;

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();
// import Education from '../components/Resume/Education';
// import Experience from '../components/Resume/Experience';
// import Skills from '../components/Resume/Skills';
// import Courses from '../components/Resume/Courses';
// import References from '../components/Resume/References';

// import courses from '../data/resume/courses';
// import degrees from '../data/resume/degrees';
// import work from '../data/resume/work';
// import { skills, categories } from '../data/resume/skills';

// NOTE: sections are displayed in order defined.
// const sections = {
//   Education: () => <Education data={degrees} />,
//   Experience: () => <Experience data={work} />,
//   Skills: () => <Skills skills={skills} categories={categories} />,
//   Courses: () => <Courses data={courses} />,
//   References: () => <References />,
// };

const Resume = () => (
  <Main
    title="Resume"
    description="Uttam Bindal's Resume. Convin.ai."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="resume">Resume</Link></h2>
          {/* <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div> */}
        </div>
      </header>
      {/* {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))} */}
      <div className="center-container">
        <Document file={`${PUBLIC_URL}/resume/resume.pdf`}>
          <Page pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false} />
        </Document>
      </div>
    </article>
  </Main>
);

export default Resume;
