import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faFile } from '@fortawesome/free-regular-svg-icons/faFile';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const { PUBLIC_URL } = process.env;

const data = [
  {
    link: 'https://github.com/UttamBindal',
    label: 'Github',
    icon: faGithub,
  },
  // {
  //   link: 'https://facebook.com/d',
  //   label: 'Facebook',
  //   icon: faFacebookF,
  // },
  {
    link: 'https://www.instagram.com/feelingfrenzy1903/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/uttam-bindal-b31906228/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  // {
  //   link: 'https://angel.co/michael-d-angelo',
  //   label: 'Angel List',
  //   icon: faAngellist,
  // },
  {
    link: 'https://twitter.com/uttam_bindal',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'mailto:spam.uttambindal@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: `${PUBLIC_URL}/files/resume.pdf`,
    label: 'Resume',
    icon: faFile,
  },
];

export default data;
