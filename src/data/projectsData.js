// ============================================================
// PROJECTS DATA — SPIDER-MAN 2099 MISSION ARCHIVE
// Add a new project = add one object. That's it.
// ============================================================

const projectsData = [
  {
    id: '01',
    year: '2025',
    type: 'HACKATHON PROJECT',
    title: 'Healthcare AI Ecosystem',
    description:
      'An AI-assisted healthcare platform with a locally running chatbot using Ollama integration. Helps users analyze symptoms, get suggestions, and connect with healthcare services.',
    techStack: ['Python', 'Ollama', 'React', 'Node.js', 'Tailwind'],
    status: 'In Progress',
    github: 'https://github.com',
    caseStudy: 'https://github.com',
    image: null,
    featured: true,
  },
  {
    id: '02',
    year: '2026',
    type: 'PERSONAL PROJECT',
    title: 'Weather App',
    description:
      'A clean and minimal weather application that provides real-time weather updates of any city with beautiful UI and smooth experience.',
    techStack: ['React', 'OpenWeather API', 'CSS', 'JavaScript'],
    status: 'In progress',
    github: 'https://github.com',
    liveDemo: 'https://github.com',
    image: null,
    featured: false,
  },
  {
    id: '03',
    year: '2026',
    type: 'PERSONAL PROJECT',
    title: 'Todo App',
    description:
      'A simple yet powerful todo application to manage daily tasks with add, edit, delete and filter functionalities.',
    techStack: ['React', 'Local Storage', 'CSS', 'JavaScript'],
    status: 'in-progress',
    github: 'https://github.com',
    liveDemo: 'https://github.com',
    image: null,
    featured: false,
  },
];

export default projectsData;
