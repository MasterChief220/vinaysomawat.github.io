export const bio = [
  "",
];

export const skills = [
  {
    title: "Blue-Team Operations",
    skillName: "Zeek, SNORT, Splunk, Elastic SIEM, Wazuh, Yara, Osquery",
    color: "7",
    percentage: "80",
  },
  {
    title: "Pentesting Tools",
    skillName: "Nmap, Burp Suite, Metasploit, Wireshark, Dirbuster/Gobuster, Nessus, John the Ripper",
    color: "",
    percentage: "70",
  },
  {
    title: "Languages",
    skillName: "JavaScript, Python, Bash, C++, MySQL, HTML",
    color: "1",
    percentage: "70",
  },
  {
    title: "Frameworks/Libraries",
    skillName: "React, Tensorflow, Pytorch, Numpy, Pandas",
    color: "6",
    percentage: "40",
  },
  {
    title: "Creative Media Production",
    skillName: "Audacity, Adobe After Effects, Adobe Photoshop, Adobe Premier, Adobe Illustrator",
    color: "4",
    percentage: "70",
  },
  {
    title: "Version Control and IDEs",
    skillName: "Git, GitHub, Jupyter, VsCode, PyCharm",
    color: "5",
    percentage: "60",
  },
//   {
//     title: "Analytics",
//     skillName: "CleverTap, Countly",
//     color: "5",
//     percentage: "50",
//   },
//   {
//     title: "IDE",
//     skillName: "VS Code",
//     color: "6",
//     percentage: "70",
//   },
];

export const projects = {
  webProjects: [
    {
      projectName: "Qalam Odoo Form Filler",
      image: "images/qalam_form_filler.png", // Add an image path here
      summary:
        "Developed a form filler tool for Qalam Odoo using Scrapy and XPath to automate the completion of feedback forms.",
      preview: "https://github.com/MasterChief220/qalam-form-filler",
      techStack: ["Scrapy", "XPath", "Python"],
    },
    {
      projectName: "Personal Blog",
      image: "images/blog.png", // Add an image path here
      summary:
        "Created a blog using Jekyll and Ruby to share insights and experiences in cybersecurity and technology.",
      preview: "https://github.com/MasterChief220/Blog",
      techStack: ["Jekyll", "Ruby"],
    },
    {
      projectName: "Portfolio Website",
      image: "images/portfolio.png", // Add an image path here
      summary:
        "Developed a personal portfolio website to showcase projects, skills, and contact information.",
      preview: "https://github.com/MasterChief220/vinaysomawat.github.io",
      techStack: ["HTML", "CSS", "JavaScript"],
    },
  ],
  cybersecurityProjects: [
    {
      projectName: "Elastic Stack Setup",
      image: "images/elastic_stack.png", // Add an image path here
      summary:
        "Configured Elasticsearch, Kibana, Auditbeat, and Winlogbeat for log analysis and visualization.",
      preview: "", // No preview available
      techStack: ["Elasticsearch", "Kibana", "Auditbeat", "Winlogbeat"],
    },
    {
      projectName: "PCAP Analysis with Snort and Zeek",
      image: "images/pcap_analysis.png", // Add an image path here
      summary:
        "Conducted real-time log analysis using Snort and Zeek, including custom rule writing.",
      preview: "", // No preview available
      techStack: ["Snort", "Zeek", "PCAP"],
    },
  ],
  cybersecurityProjects1: [
    {
      projectName: "Metasploitable Setup and Exploitation",
      image: "images/metasploitable.png", // Add an image path here
      summary:
        "Set up Metasploitable for penetration testing and successfully exploited vulnerabilities.",
      preview: "", // No preview available
      techStack: ["Metasploitable", "Metasploit"],
    },
  ],
  machinelearningandvisionprojects: [
    {
      projectName: "Vision Car Counter",
      image: "images/car_counter.png", // Add an image path here
      summary:
        "Developed a computer vision application to count cars in a video feed using a Haar Cascade classifier.",
      preview: "https://github.com/MasterChief220/Computer-Vision-Car-Counter",
      techStack: ["OpenCV", "Python", "Haar Cascade"],
    },
  ],
};

export const experience = [
  {
    title: "National Radio and Telecommunications Corporation",
    duration: "September 2024 - Present",
    subtitle: "Assistant Executive Engineer",
    details: ["Working in Cybersecurity Team."],
    tags: ["SOC Analyst", "Blue Team", "SIEM"],
    icon: "truck",
  },
  {
    title: "Lucky Electric Power Company Limited",
    duration: "April 2022 - Jul 2023",
    subtitle: "Internee",
    details: [
      `Completed a 6-week internship under Harbin Electric’s O&M contract at Lucky Power Plant.`,
      `Rotated through critical areas including coal handling, water treatment, flue gas desulfurization, and the boiler-turbine-generator unit.`,
      `Gained hands-on experience with the intricate coal handling process, including the operation of a stacker-reclaimer.`,
      `Engaged in water treatment from seawater intake and performed chemical tests such as oxygen bomb testing and proximate analysis.`,
      `Observed the flue gas neutralization process using limestone slurry, with gypsum produced as a byproduct.`,
      `Learned the boiler start-up procedure, utilizing an oil pump to initiate combustion before coal feeding.`,
      `Understood the operation of Induced Draft Fans (IDF) and Forced Draft Fans (FDF), and their roles in maintaining optimal boiler operation.`,
    ],
    tags: [
      "Electrical",
      "Instrumentation",
      "System Monitoring",
      "Distributed Control System (DCS)",
    ],
    icon: "heartbeat",
  },
  {
    title: "Novopay Solutions Private Limited",
    duration: "June 2020 - April 2022",
    subtitle: "Software Engineer",
    details: [
      `Implemented AePS Services, including Bio-metric eKYC, Cash Withdrawal, Balance Enquiry, Mini-Statements,
            and Money transfer.`,
      `Implemented QR Code integration for retailer wallet money loading, Clevertap events for user action tracking,
            Freshdesk ticketing, Chatbot services, and Retailer onboarding/admin interfaces.`,
      `Developed retailer QR code system for seamless money loading into wallets, resulting in improved user transactions.`,
      `Achieved 70 percent code coverage of the entire application by writing unit tests for legacy code.`,
    ],
    tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
    icon: "qrcode",
  },
  {
    title: "ThinkPedia LLP",
    duration: "May 2019 - June 2019",
    subtitle: "SDE Intern",
    details: [
      `Developed a customer web application for social media management, supporting the advertisement domain.`,
    ],
    tags: ["JavaScript", "Angular", "Bootstrap", "Java", "Spring Boot"],
    icon: "group",
  },
];

export const education = [
  {
    title: "B.Tech. in Computer Science and Engineering",
    duration: "2016 - 2020",
    subtitle: "National Institute of Technology, Warangal",
    details: [],
    tags: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management System",
      "Computer Networks",
      "Compiler Designing",
      "Cloud Computing",
    ],
    icon: "graduation-cap",
  },
  {
    title: "Class 12th in Science and Mathematics",
    duration: "",
    subtitle: "Board of Secondary Education, Rajasthan",
    details: [],
    tags: ["Physics", "Chemistry", "Mathematics"],
    icon: "book",
  },
];

export const footer = [
//   {
//     label: "Dev Profiles",
//     data: [
//       {
//         text: "Stackoverflow",
//         link: "https://stackoverflow.com/users/8461233/vinay-somawat",
//       },
//       {
//         text: "GitHub",
//         link: "https://github.com/vinaysomawat",
//       },
//       {
//         text: "LeetCode",
//         link: "https://leetcode.com/somawatvinay/",
//       },
//     ],
//   },
//   {
//     label: "Resources",
//     data: [
//       {
//         text: "Enable Dark/Light Mode",
//         func: "enableDarkMode()",
//       },
//       {
//         text: "Print this page",
//         func: "window.print()",
//       },
//       {
//         text: "Clone this page",
//         link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
//       },
//     ],
//   },
  {
    label: "Links",
    data: [
    //   {
    //     text: "Linkedin",
    //     link: "https://www.linkedin.com/in/vinaysomawat/",
    //   },
    //   {
    //     text: "Twitter",
    //     link: "https://twitter.com/thesigmakid",
    //   },
      {
        text: "Buy me a coffee",
        link: "https://www.buymeacoffee.com/r194dME8y",
      },
      {
        text: "Github/vinaysomawat.github.io",
        link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Made with &hearts; by Vinay Somawat.",
      "&copy; No Copyrights. Feel free to use this template.",
    ],
  },
];
