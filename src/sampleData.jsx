import { v4 as uuidv4 } from "uuid";

let sampleData = {
  personalList: {
    name: "Shekhar Sugasi",
    email: "shekharsugasi@gmail.com",
    phone: "+91XXXXXXXXXX",
    address: "Bengaluru, Karnataka, 560061",
  },

  educationList: [
    {
      school: "Indian Institute of Technology Bombay",
      startDate: "07/2017",
      endDate: "05/2021",
      degree: "Bachelor of Technology in Computer Science",
      location: "Mumbai, Maharashtra",
      id: uuidv4(),
    },
    {
      school: "Delhi University",
      startDate: "07/2017",
      endDate: "05/2020",
      degree: "Bachelor of Science in Mathematics",
      location: "New Delhi, Delhi",
      id: uuidv4(),
    },
    {
      school: "St. Xavier's College",
      startDate: "06/2015",
      endDate: "03/2017",
      degree: "Higher Secondary - Science",
      location: "Mumbai, Maharashtra",
      id: uuidv4(),
    },
  ],
  workList: [
    {
      company: "Tata Consultancy Services",
      position: "Software Engineer",
      startDate: "07/2021",
      endDate: "08/2023",
      location: "Mumbai, Maharashtra",
      description:
        "Developed and optimized internal automation tools for HR operations, streamlining the workflow for over 50+ teams (Java, Spring Boot, MySQL).",
      id: uuidv4(),
    },
    {
      company: "Infosys Limited",
      position: "Software Engineer Intern",
      startDate: "01/2021",
      endDate: "06/2021",
      location: "Pune, Maharashtra",
      description:
        "Worked with the Financial Services team to create automated data reconciliation scripts and dashboards (Python, SQL, Power BI).",
      id: uuidv4(),
    },
    {
      company: "Wipro Technologies",
      position: "Software Developer Intern",
      startDate: "05/2019",
      endDate: "07/2019",
      location: "Bengaluru, Karnataka",
      description:
        "Assisted in the development of an IoT monitoring system, enhancing data processing speed and error detection (JavaScript, Node.js, MongoDB).",
      id: uuidv4(),
    },
  ],
};

export default sampleData;
