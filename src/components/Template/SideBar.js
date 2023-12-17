import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Uttam Bindal</h2>
        <p><a href="mailto:uttam@uttambindal.com">uttam@uttambindal.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Uttam. I am a <a href="https://vtu.ac.in/">Visvesvaraya Technological University</a> graduate
        and Backend Engineering Intern at <a href="https://convin.ai/">Convin.ai</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Uttam Bindal <Link to="/">uttambindal.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
