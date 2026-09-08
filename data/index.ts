export const navItems = [
  { name: "About", hash: "#about" },
  { name: "Experience", hash: "#experience" },
  { name: "Portfolio", hash: "#portfolios" },
  { name: "Education", hash: "#education" },
  { name: "Contact", hash: "#contact" },
];

export type NavItem = (typeof navItems)[number];

export const gridItems = [
  {
    id: 1,
    title:
      "I prioritize student-centered learning, fostering curiosity and growth",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Inspiring every learner to reach their full potential",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My teaching methodologies",
    description: "Adaptive approaches for every learner",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "CBE & Curriculum Specialist",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/b4.svg",
    spareImg: "/grid.svg",
  },

  {
    id: 5,
    title: "Science & Agriculture Education",
    description: "Practical, hands-on learning experiences",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's connect to nurture future innovators!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const experiences = [
  {
    title: "Teacher",
    company_name: "Kisii Comprehensive School",
    icon: "/exp-school.svg",
    iconBg: "var(--primary)",
    date: "January 2024 - Present",
    points: [
      "Teach Integrated Science and Agriculture to Junior Secondary School learners, aligning lessons with the Competency-Based Education (CBE) framework.",
      "Design and implement hands-on practical activities, science experiments, and school garden projects to reinforce theoretical concepts.",
      "Collaborate with colleagues to develop schemes of work, lesson plans, and assessment rubrics that meet KICD curriculum standards.",
      "Mentor learners in science fairs, exhibitions, and career guidance sessions to inspire future innovators.",
    ],
  },
  {
    title: "Teacher Intern",
    company_name: "Machakos School",
    icon: "/exp-intern.svg",
    iconBg: "var(--secondary)",
    date: "March 2023 - December 2023",
    points: [
      "Assisted in delivering Biology and Agriculture lessons to Form 1 and Form 2 classes under the supervision of experienced teachers.",
      "Facilitated laboratory practical sessions, ensuring proper use of equipment and adherence to safety protocols.",
      "Participated in co-curricular activities including the Science Club and Environmental Club, organizing field trips and practical workshops.",
      "Received commendation for innovative lesson delivery and effective classroom management during the internship period.",
    ],
  },
  {
    title: "Volunteer Educator",
    company_name: "Community Learning Center, Kisii",
    icon: "/exp-volunteer.svg",
    iconBg: "var(--accent)",
    date: "June 2022 - February 2023",
    points: [
      "Taught foundational science and environmental education to out-of-school youth and adult learners in the local community.",
      "Developed simplified, context-relevant learning materials and visual aids to support non-formal education.",
      "Organized community awareness campaigns on sustainable agriculture, hygiene, and environmental conservation.",
      "Partnered with local NGOs to distribute learning resources and facilitate weekend tutoring sessions.",
    ],
  },
  {
    title: "Lab Assistant",
    company_name: "Kenyatta University Science Labs",
    icon: "/exp-lab.svg",
    iconBg: "var(--chart-1)",
    date: "September 2020 - May 2022",
    points: [
      "Supported Biology and Agriculture laboratory sessions for undergraduate students by preparing specimens, reagents, and experimental setups.",
      "Maintained laboratory equipment, inventory, and safety records while ensuring a clean and organized learning environment.",
      "Assisted lecturers during practical demonstrations and field attachment programs related to crop science and biology.",
      "Contributed to the development of practical manuals and student guides used in the Faculty of Education.",
    ],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/youtube.svg",
    link: "https://www.youtube.com/@vincentombogo",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/vincent-ombogo-36912a1b2",
  },
  {
    id: 3,
    img: "/twit.svg",
    link: "https://x.com/VinyRain",
  },
  {
    id: 4,
    img: "/git.svg",
    link: "https://github.com/vinrain-coder",
  },
];

export const portfolios = [
  {
    id: 1,
    title: "CBE Lesson Plans & Schemes of Work",
    des: "Competency-based lesson plans and schemes of work aligned with KICD standards for Junior Secondary Science.",
    img: "/portfolio-lesson-plans.svg",
    iconLists: ["/icon-curriculum.svg", "/icon-cbe.svg", "/icon-teach.svg", "/icon-kicd.svg"],
    link: "#",
  },
  {
    id: 2,
    title: "Science Lab Practical Manual",
    des: "A comprehensive collection of hands-on practical activities and experiments for Integrated Science and Agriculture.",
    img: "/portfolio-lab-manual.svg",
    iconLists: [
      "/icon-lab.svg",
      "/icon-science.svg",
      "/icon-safety.svg",
      "/icon-experiment.svg",
    ],
    link: "#",
  },
  {
    id: 3,
    title: "Student Assessment & Rubrics System",
    des: "CBC-aligned assessment rubrics and student progress tracking tools for holistic competency evaluation.",
    img: "/portfolio-assessment.svg",
    iconLists: [
      "/icon-assess.svg",
      "/icon-cbc.svg",
      "/icon-rubric.svg",
      "/icon-tracker.svg",
    ],
    link: "#",
  },
  {
    id: 4,
    title: "School Garden & Agriculture Project",
    des: "A thriving school garden initiative teaching sustainable agriculture, crop science, and environmental stewardship.",
    img: "/portfolio-garden.svg",
    iconLists: [
      "/icon-garden.svg",
      "/icon-plant.svg",
      "/icon-agri.svg",
      "/icon-sustain.svg",
    ],
    link: "#",
  },
  {
    id: 5,
    title: "Science Fair & Exhibition Projects",
    des: "Showcase of student-led science fair projects, exhibitions, and innovative research from Junior Secondary learners.",
    img: "/portfolio-science-fair.svg",
    iconLists: [
      "/icon-fair.svg",
      "/icon-project.svg",
      "/icon-innovate.svg",
      "/icon-exhibit.svg",
    ],
    link: "#",
  },
  {
    id: 6,
    title: "Digital Teaching Resources",
    des: "Interactive digital resources and multimedia materials designed to make science education engaging and accessible.",
    img: "/portfolio-digital.svg",
    iconLists: [
      "/icon-digital.svg",
      "/icon-multimedia.svg",
      "/icon-online.svg",
      "/icon-resource.svg",
    ],
    link: "#",
  },
];
