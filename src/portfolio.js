/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vignesh",
  title: "Hi all, I'm Vignesh",
  subTitle: emoji(
    "A passionate Cloud Infrastructure Engineer, 🚀 having an experience of building infrastructure and manage them in Azure, AWS and IBM with ARM / Terraform / Powershell. Also developed standalone application in Powershell, Developed fully customized solution in Microsoft Power platform "
  ),
  resumeLink:
    "https://1drv.ms/b/c/3055a307940fe4a3/EdILojJcDqFPifuQeInokZ4BaA-ngebIExWtOp208-4Qmg?e=YUICII", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  //github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/kvigneshs/",
  gmail: "k.s.vignesh@live.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Exploring Cloud Technologies",
  skills: [
    emoji(
      "⚡ Cloud & Automation: 9+ years in Azure, IBM Cloud, Terraform, and Docker with expertise in scripting (PowerShell, Bash) and low-code platforms (Power Apps)."
    ),
    emoji("⚡ DevOps & Security: Proficient in Azure DevOps, GitLab CI/CD, and YAML; strong in security tools like Azure Sentinel and Microsoft Defender."),
    emoji(
      "⚡ Infrastructure Management: Managed hybrid environments, Active Directory, monitoring systems (Prometheus, Grafana), and backup strategies."
    ),
    emoji(
      "⚡ Optimization: Achieved cost savings, automated tasks saving 30+ hours/month, and developed extensive technical documentation."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Azure",
      fontAwesomeClassname: "fa-solid fa-cloud"
    },
    {
      skillName: "Cloudflare",
      fontAwesomeClassname: "fa-brands fa-cloudflare"
    },
    {
      skillName: "Microsoft Products",
      fontAwesomeClassname: "fa-brands fa-microsoft"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "gitlab",
      fontAwesomeClassname: "fa-brands fa-gitlab"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Vel Tech Multi Tech Dr. RR Dr. SR Engineering College",
      logo: require("./assets/images/veltech.png"),
      subHeader: "Bachelor of Engineering in Electronics and Communication Engineering",
      duration: "Jun 2011 - Apr 2014",
    },
    {
      schoolName: "Ponnaiyah Ramajayam Polytechnic College",
      logo: require("./assets/images/prpc.png"),
      subHeader: "Diploma in Electronics and Communication Engineering",
      duration: "Jun 2008 - Apr 2011",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Azure Cloud", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "DevOps and Terraform",
      progressPercentage: "70%"
    },
    {
      Stack: "Automation Script/Low Code ",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Cloud Infrastructure Engineer",
      company: "FE Fundinfo India Private Limited",
      companylogo: require("./assets/images/fefundinfo_logo_colour_rgb.png"),
      date: "Sep 2021 – Present",
      desc: "Managing the entire backbone Infrastructure of Organisation and Technical Leader for a team",
      descBullets: [
        "Developed and deployed infrastructure using ARM templates, Terraform, Azure PowerShell, and automation scripts to ensure code reusability.",
        "Managed deployment of 75 IaaS, 28 PaaS, and 7 SaaS resources across subscriptions, supporting internal and external requirements.",
        "Utilized Azure DevOps for CI/CD pipelines, task management, and distributed workloads across teams.",
        "Implemented security solutions (Private Link, DNS, Service Endpoints) and managed identity and access with PIM, SSO, and security tools (Azure Sentinel, Defender, Sophos).",
        "Saved 30+ hours/month through automation, contributed to cloud adoption, and created 20+ technical documentation for knowledge sharing."
      ]
    },
    {
      role: "Senior Network and Server Administrator",
      company: "Tradesocio India Private Limited",
      companylogo: require("./assets/images/tradesocio.jpg"),
      date: "Jan 2018 – Sep 2021",
      desc: "Team Lead, Architecting and Managing the Infrastructure for Trading applications",
      descBullets: [
        "Managed cloud infrastructure across 42 IaaS (Linux/Windows Servers), 7 PaaS (Azure Storage), and 6 SaaS (Azure SQL) on IBM Cloud, Azure, and Alibaba Cloud.",
        "Collaborated with development teams to create 14 build/release pipelines in GitLab for 20 environments across client projects.",
        "Architected high-performance infrastructure using IIS, Nginx, MySQL, and MSSQL for web services and applications.",
        "Planned and implemented backup, disaster recovery, and security solutions (OpenVPN, Azure VPN, SonarQube, Cloudflare) for web services.",
        "Led a team of 9 members, created 20+ technical documents, managed budgeting, and implemented infrastructure monitoring with Icinga and Azure Monitor."
      ]
    },
    {
      role: "Network and Server Administrator",
      company: "Sarse Technologies",
      companylogo: require("./assets/images/sarsetech.png"),
      date: "Sep 2016 – Dec 2017",
      desc: "Managing the Infrastructure for Trading applications",
      descBullets: [
        "Managed server applications (PHP, C++, .NET) across 30+ Linux and Windows machines, ensuring security and access control.",
        "Deployed GitLab Omnibus and migrated 10+ SVN projects with full commit history for source code management.",
        "Implemented backup strategies for databases and files using Duply and Cobian, and disaster recovery with HaProxy and MySQL replication.",
        "Configured Nginx and IIS for web services and WebSocket interfaces, and developed Bash/PowerShell scripts to automate tasks.",
        "Participated in business application upgrades, database schema migrations, and cloud migrations from on-prem to Azure/IBM."
      ]
    },
    {
      role: "IT Support Executive",
      company: "Inspace Technologies",
      companylogo: require("./assets/images/Inspace.jpg"),
      date: "Apr 2016 – Sep 2016",
      desc: "AD Management and End user Support",
      descBullets: [
        "Configured and managed users/devices in Active Directory Domain Services (AD DS) and Group Policy Objects (GPO).",
        "Handled operational management of 5 Windows Servers including AD DS, SAP, and SMB.",
        "Managed user access and permissions in Microsoft Dynamics and SAP HANA databases.",
        "Supported a corporate office of 50 members and 70 workstations, including server and client machines.",
        "Monitored and resolved issues with user activities, server/client machines, CCTV, network, and biometrics for security, and managed backup plans for SAP HANA and SMB."
      ]
    },
    {
      role: "TECHNICAL TRAINER",
      company: "Inspace Technologies",
      companylogo: require("./assets/images/Inspace.jpg"),
      date: "Mar 2015 – Apr 2016",
      desc: "Robotics Trainer",
      descBullets: [
        "Developed 5+ educational robots and trained 150+ students across schools and colleges.",
        "Created programs for Arduino UNO-based robots to enhance learning experiences.",
        "Planned and executed workshops and exhibitions to showcase robots and promote the organization.",
        "Developed robots at different levels corresponding to the grade levels of students using them.",
        "Organized events to engage students and raise awareness of educational robotics."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Azure Administrator Associate",
      subtitle:
        "",
      image: require("./assets/images/az104.jpg"),
      imageAlt: "Azure Administrator Associate",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.microsoft.com/api/credentials/share/en-us/KVigneshS/20EB02F566542106?sharingId=5EEC2D9A4879219A"
        }
      ]
    },
    {
      title: "Azure Fundamentals",
      subtitle:
        "",
      image: require("./assets/images/az900.webp"),
      imageAlt: "Azure Fundamentals",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.microsoft.com/api/credentials/share/en-us/KVigneshS/CD1807BB45BAE074?sharingId=5EEC2D9A4879219A"
        }
      ]
    },

    {
      title: "Microsoft Certified Trainer",
      subtitle: "",
      image: require("./assets/images/mct.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://1drv.ms/b/c/3055a307940fe4a3/EQCV2nUoa3RNpQ6kbKf9bgkBld_dHKreF1ldSgGDmTtqqQ?e=5203C4"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "+91-9551313768",
  email_address: "k.s.vignesh@live.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
