/* ==========================================================
   MOCK DATA — Xlumni
   Dades simulades per a les tres èpiques del MVP:
   - Èpica 3: Xarxa d'exalumnes  -> ALUMNI_DATA
   - Èpica 4: Borsa de treball   -> JOBS_DATA
   - Èpica 5: Esdeveniments      -> EVENTS_DATA
   ========================================================== */

const ALUMNI_DATA = [
  { id: 'al-1', name: 'Laia Puig',      role: 'Frontend Developer',   company: 'Tech Solutions', location: 'Barcelona', skills: ['JavaScript', 'React', 'CSS'] },
  { id: 'al-2', name: 'Marc Ferrer',    role: 'Product Manager',      company: 'Innovatech',     location: 'Girona',    skills: ['Scrum', 'Roadmapping', 'UX'] },
  { id: 'al-3', name: 'Emma Vidal',     role: 'Data Analyst',         company: 'DataCorp',       location: 'Barcelona', skills: ['Python', 'SQL', 'Power BI'] },
  { id: 'al-4', name: 'Mikel Aranburu', role: 'Backend Developer',    company: 'CloudWorks',     location: 'Bilbao',    skills: ['Node.js', 'MongoDB', 'Docker'] },
  { id: 'al-5', name: 'Nuria Camps',    role: 'UX/UI Designer',       company: 'Studio Ink',     location: 'Tarragona', skills: ['Figma', 'Design System', 'Prototyping'] },
  { id: 'al-6', name: 'Pol Serra',      role: 'DevOps Engineer',      company: 'InfraNow',       location: 'Barcelona', skills: ['AWS', 'CI/CD', 'Kubernetes'] },
  { id: 'al-7', name: 'Anna Roig',      role: 'QA Engineer',          company: 'Tech Solutions', location: 'Lleida',    skills: ['Testing', 'Cypress', 'Gherkin'] },
  { id: 'al-8', name: 'David Costa',    role: 'Fullstack Developer',  company: 'Innovatech',     location: 'Girona',    skills: ['React', 'Node.js', 'PostgreSQL'] }
];

const JOBS_DATA = [
  { id: 'job-1', title: 'Frontend Developer',      company: 'Tech Solutions', location: 'Barcelona', type: 'Temps complet', tags: ['JavaScript', 'React'], posted: '2026-07-20' },
  { id: 'job-2', title: 'Backend Developer',        company: 'CloudWorks',     location: 'Remot',     type: 'Temps complet', tags: ['Node.js', 'MongoDB'], posted: '2026-07-18' },
  { id: 'job-3', title: 'UX/UI Designer',           company: 'Studio Ink',     location: 'Tarragona', type: 'Mitja jornada',  tags: ['Figma', 'UX'], posted: '2026-07-15' },
  { id: 'job-4', title: 'Data Analyst Junior',      company: 'DataCorp',       location: 'Barcelona', type: 'Pràctiques',     tags: ['SQL', 'Python'], posted: '2026-07-22' },
  { id: 'job-5', title: 'DevOps Engineer',          company: 'InfraNow',       location: 'Remot',     type: 'Temps complet', tags: ['AWS', 'Docker'], posted: '2026-07-10' },
  { id: 'job-6', title: 'QA Automation Engineer',   company: 'Tech Solutions', location: 'Lleida',    type: 'Temps complet', tags: ['Cypress', 'Testing'], posted: '2026-07-25' }
];

const EVENTS_DATA = [
  { id: 'ev-1', title: 'Workshop de React avançat',     date: '2026-08-15', location: 'Online',    category: 'Formació',   description: 'Sessió pràctica sobre patrons avançats a React.' },
  { id: 'ev-2', title: 'Networking Night Barcelona',     date: '2026-08-22', location: 'Barcelona', category: 'Networking', description: 'Trobada informal per ampliar la teva xarxa de contactes.' },
  { id: 'ev-3', title: 'Xerrada: Carrera en DevOps',     date: '2026-09-05', location: 'Online',    category: 'Xerrada',    description: 'Alumni comparteixen la seva experiència professional en DevOps.' },
  { id: 'ev-4', title: 'Hackathon Xlumni 2026',          date: '2026-09-18', location: 'Girona',    category: 'Competició', description: '48 hores per crear un projecte en equip.' },
  { id: 'ev-5', title: 'Taller de Portfolio UX',         date: '2026-08-29', location: 'Tarragona', category: 'Formació',   description: 'Aprèn a construir un portfolio que destaqui.' },
  { id: 'ev-6', title: 'Workshop de React',              date: '2026-09-12', location: 'Barcelona', category: 'Formació',   description: 'Introducció pràctica a React per a exalumnes.' },
  { id: 'ev-7', title: 'Networking Alumni',              date: '2026-09-18', location: 'Girona',    category: 'Networking', description: 'Trobada de networking per a la comunitat d\'exalumnes.' }
];