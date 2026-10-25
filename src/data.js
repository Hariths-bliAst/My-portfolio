export const profile = {
  fullName: 'Hariths Sufyan Lee bin Muhammad Taufiq Lee',
  displayName: 'Hariths Sufyan Lee',
  brand: 'HSL.dev',
  initials: 'HSL',
  role: 'Geoscience Major & Subsurface Data Science / Machine Learning Practitioner',
  email: 'hsufyan14@gmail.com',
  phone: '+60-166111335',
  phoneRaw: '60166111335',
  location: 'Perak, Malaysia',
  github: 'https://github.com/Hariths-bliAst',
  linkedin: 'https://www.linkedin.com/in/hariths-sufyan-lee',
  cvUrl: '/cv.pdf',
  bio: 'I build machine learning systems that turn subsurface measurements into decisions — from facies classification and seismic property prediction to reservoir-scale modeling. Alongside the technical work, I lead university geoscience initiatives and ship ideas through innovation challenges.',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const heroBadges = [
  'Python',
  'PyTorch',
  'Scikit-Learn',
  'React',
  'Tailwind',
  'Git',
];

export const projects = [
  {
    id: 'facies',
    title: 'Subsurface Facies Classification',
    image: '/projects/project1.jpg',
    tags: ['Python', 'Scikit-Learn', 'Well Logs'],
    problem:
      'Manual facies picking from well logs is slow, interpreter-dependent, and hard to scale across a field.',
    metrics: [
      { label: 'F1-score', value: '0.91' },
      { label: 'Wells', value: '48' },
      { label: 'Classes', value: '7' },
    ],
    github: 'https://github.com/Hariths-bliAst',
    demo: '#projects',
  },
  {
    id: 'seismic',
    title: 'Seismic Property Prediction',
    image: '/projects/project2.jpg',
    tags: ['PyTorch', 'CNN', 'Seismic'],
    problem:
      'Acoustic impedance and porosity estimates from seismic volumes need to stay geologically consistent at scale.',
    metrics: [
      { label: 'RMSE ↓', value: '18%' },
      { label: 'Traces', value: '120k' },
      { label: 'Latency', value: '<40ms' },
    ],
    github: 'https://github.com/Hariths-bliAst',
    demo: '#projects',
  },
  {
    id: 'reservoir',
    title: 'ML-Driven Reservoir Modeling',
    image: '/projects/project3.jpg',
    tags: ['XGBoost', 'Uncertainty', 'Petrophysics'],
    problem:
      'Reservoir property models often under-use sparse core data and fail to quantify prediction uncertainty.',
    metrics: [
      { label: 'R²', value: '0.87' },
      { label: 'Coverage', value: '94%' },
      { label: 'Scenarios', value: '200+' },
    ],
    github: 'https://github.com/Hariths-bliAst',
    demo: '#projects',
  },
  {
    id: 'dashboard',
    title: 'Subsurface Analytics Dashboard',
    image: '/projects/project4.jpg',
    tags: ['React', 'Tailwind', 'Plotly'],
    problem:
      'Cross-discipline teams need a single, fast view of logs, predictions, and QC flags without desktop GIS lock-in.',
    metrics: [
      { label: 'Load', value: '1.2s' },
      { label: 'Views', value: '12' },
      { label: 'QC flags', value: 'Live' },
    ],
    github: 'https://github.com/Hariths-bliAst',
    demo: '#projects',
  },
];

export const experience = [
  {
    id: 'committee',
    period: '2023 — Present',
    title: 'University Committee Leadership',
    org: 'Geoscience Student Body',
    description:
      'Led program planning, stakeholder coordination, and technical workshops for a multi-year student committee. Focused on execution quality, knowledge transfer, and growing the next cohort of subsurface talent.',
  },
  {
    id: 'aapg',
    period: '2022 — Present',
    title: 'AAPG / Geophysics Initiatives',
    org: 'AAPG Student Chapter & Geophysics Outreach',
    description:
      'Organized technical sessions, field-adjacent learning, and peer mentoring around petroleum geoscience, seismic interpretation, and applied data science for the subsurface.',
  },
  {
    id: 'vice',
    period: '2024',
    title: 'VICE Innovation Challenge Exhibition',
    org: 'University Innovation Showcase',
    description:
      'Exhibited an applied ML prototype spanning data ingestion, model inference, and a decision-ready interface — translating a geoscience problem into a product that judges and industry visitors could evaluate in minutes.',
  },
];

export const skillGroups = [
  {
    title: 'Subsurface & Geosciences',
    items: [
      'Well log analysis',
      'Seismic interpretation',
      'Petrophysics',
      'Facies & stratigraphy',
      'Reservoir characterization',
    ],
  },
  {
    title: 'Data Science & ML',
    items: [
      'Python',
      'PyTorch',
      'Scikit-Learn',
      'Feature engineering',
      'Model evaluation',
    ],
  },
  {
    title: 'Web & Dev Tools',
    items: ['React', 'Tailwind CSS', 'Git & GitHub', 'Vite', 'REST APIs'],
  },
  {
    title: 'Core Competencies',
    items: [
      'Technical leadership',
      'Problem framing',
      'Stakeholder communication',
      'Experiment design',
      'Clear documentation',
    ],
  },
];
