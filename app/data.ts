type Project = {
  name: string
  description: string
  link: string
  video?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'YouTube Spanish Channel',
    description:
      'YouTube spanish channel where I teach about clean code, software architectures and AI.',
    link: 'https://youtube.com/@mvrcoag',
    id: 'youtube-spanish-channel',
  },
  {
    name: 'Go Interpreter',
    description: 'A dynamic interpreter writen in Go.',
    link: 'https://github.com/mvrcoag/golang-interpreter',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Finexitus',
    title: 'Full-Stack Developer & Data Scientist',
    start: '2023',
    end: 'Present',
    link: 'https://finexitus.com',
    id: 'finexitus',
  },
  {
    company: 'Justicia Laboral',
    title: 'Software Architect',
    start: '2021',
    end: '2023',
    link: 'https://justicialaboral.com.mx',
    id: 'justicia-laboral',
  },
  {
    company: 'Muttech Solutions',
    title: 'Full-Stack Developer',
    start: '2019',
    end: '2021',
    link: 'https://muttech.dev',
    id: 'muttech-solutions',
  },
]

export const BLOG_POSTS: BlogPost[] = []

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/mvrcoag',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/mvrcoag',
  },
  {
    label: 'YouTube',
    link: 'https://www.youtube.com/@mvrcoag',
  },
]

export const EMAIL = 'hi@mvrcoag.com'
