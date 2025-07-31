const PersonalInfo = {
  "github": "https://github.com/lamhoang1107",
  "linkedin": "https://www.linkedin.com/in/hoanglamnguyenthi/",
  "resume": "https://drive.google.com/file/d/119o2hH2SugnQYwxb9dKGJO7plQa9Xhri/view",
}

const CounterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 7, suffix: "+", label: "Completed Projects" },
]

const ProjectContent = [
  { name: "Doctor Assistant App",
    short_description: "AI-Powered Virtual Health Assistant",
    long_description_html: `
        <p><strong>Responsibilities:</strong><p>
        <li>Developed RESTful APIs and ReactJS CMS UI to manage users, chat sessions, medical records, system analytics, and AI medical knowledge base.</li>
        <li>Integrated AI chat for health consultations with context retention and structured responses.</li>
        <li>Enabled multilingual support for the mobile app and implemented secure medical document uploads.</li>
        <br/>
        <p><strong>Key Achievements</strong><p>
        <li>Supported over 1,000 monthly AI consultations, reaching 10K+ downloads across Android & iOS.</li>
        <li>Improved accessibility and engagement through multilingual app support.</li>
        <li>Empowered admins with full control and visibility via a custom CMS dashboard.</li>
    `,
    img: "/projects/mainda.png",
    tech: ["MySQL", "Node.js", "React.js", "Kafka", "Kafka","AWS S3"],
    gallery: ["/projects/da1.jpg","/projects/da2.jpg","/projects/da3.jpg","/projects/da4.jpg"],
    links: [
      {
        label: "Android",
        url: "https://play.google.com/store/apps/details?id=com.doctornetwork.doctorassitant",
      },
      {
        label: "iOS",
        url: "https://apps.apple.com/vn/app/doctor-assistant/id6477260207",
      }
    ],
  },
  { name: "MCV Passport",
    short_description: "A centralized platform that serves as both the SSO login gateway and the access point for internal tools used by employees",
    long_description_html: `
        <p><strong>Responsibilities:</strong><p>
        <li>Developed RESTful APIs and ReactJS frontend, including a CMS for content management.</li>
        <li>Built key features such as account management, IT ticketing, meeting room booking, and internal communication tools.</li>
        <li>Implemented SSO (email, phone, Google, Facebook) and role-based access control for secure, unified login.</li>
        <br/>
        <p><strong>Key Achievements</strong><p>
        <li>Streamlined workflows for 300+ employees across 2 cities by consolidating multiple internal tools into one
platform.</li>
        <li>Reduced support wait times with real-time booking and self-service IT ticketing.</li>
        <li>Enhanced internal communication efficiency through centralized news and announcement modules.</li>
    `,
    img: "/projects/mainpassport.png",
    tech: ["MySQL", "Node.js", "React.js", "Nodemailer", "Web Push"],
    gallery: ["/projects/passport1.png","/projects/passport2.png","/projects/passport3.png","/projects/passport4.png"],
    links: [
      {
        label: "MCV Passport",
        url: "https://passport.mcv.com.vn/",
      },
    ],
  },
  { name: "KOl/KOC",
    short_description: "A platform to manage contracts and acceptance reports between sales teams and KOLs/KOCs",
    long_description_html: `
        <p><strong>Responsibilities:</strong><p>
        <li>Developed a fullstack web platform connecting KOLs/KOCs with sales teams, from backend API to frontend interface.</li>
        <li>Built automated workflows for contract creation, approval, and acceptance reporting.</li>
        <li>Integrated Single Sign-On (SSO) login with email, phone number, and social accounts for a smooth authentication experience.</li>
        <br/>
        <p><strong>Key Achievements</strong><p>
        <li>Streamlined contract and acceptance report handling, reducing manual effort.</li>
        <li>Enhanced user experience by enabling seamless access via SSO across multiple identity providers.</li>
    `,
    img: "/projects/mainkol.png",
    tech: ["MySQL", "Node.js", "React.js", "AWS S3", "LibreOffice", "Docxtemplater"],
    gallery: ["/projects/kol1.png","/projects/kol2.png","/projects/kol3.png","/projects/kol4.png"],
  },
  { name: "Data First",
    short_description: "CRM & Event Check-in System",
    long_description_html: `
        <p><strong>Responsibilities:</strong><p>
        <li>Designed and developed full-stack CRM, including RESTful APIs for a ReactJS CMS UI and a check-in app with facial recognition (AWS Rekognition) and QR scanning.</li>
        <li>Built real-time data pipelines to integrate 120K+ customer records across departments and systems, automating registration, invitations, and check-in workflows.</li>
        <br/>
        <p><strong>Key Achievements</strong><p>
        <li>Streamlined workflows for 300+ employees across 2 cities by consolidating multiple internal tools into one platform.</li>
        <li>Automated 10+ major events (MFC, Trung Thu Yêu Thương, PrideFEST,...), cutting manual workload by 70%.</li>
        <li>Centralized and maintained 120K+ customer records with real-time updates across platforms.</li>
        <li>Improved event efficiency and guest experience through seamless check-in and engagement tracking.</li>
    `,
    img: "/projects/datamain.png",
    tech: ["MySQL", "Node.js", "React.js", "AWS S3", "AWS Rekognition", "Sharp" ],
    gallery: ["/projects/data1.png","/projects/data2.png","/projects/data3.png","/projects/data4.png", "/projects/data5.png"],
    links: [
      {
        label: "MFC",
        url: "https://mfc.mcv.com.vn/",
      },
      {
        label: "PrideFEST",
        url: "https://pridefest.mcv.com.vn/",
      }
    ],
  },
  { name: "Diabetes Prediction App",
    short_description: "AI-Powered Health Risk Screening Survey App",
    long_description_html: `
        <p><strong>Responsibilities:</strong><p>
        <li>Built full-stack APIs and CMS for survey-based diabetes risk prediction using ML.</li>
        <li>Developed dynamic surveys, secure image uploads, and result tracking for medical staff.</li>
        <br/>
        <p><strong>Key Achievements</strong><p>
        <li>Enabled early, non-invasive diabetes screening with AI-backed analysis.</li>
        <li>Supported large-scale health campaigns through scalable, customizable workflows.</li>
    `,
    img: "/projects/diabetemain.png",
    tech: ["MySQL", "Node.js", "React.js", "Sharp" ],
    gallery: ["/projects/diabete1.jpg","/projects/diabete2.jpg","/projects/diabete3.jpg"],
  },
];

const ExperienceContent = [
  {
    logoPath: "/logo-new-whitebg.png",
    title: "MCV Group - Full-stack Developer",
    date: "07/2022 – Now",
    responsibilities: [
      "Built and maintained APIs using <strong class='text-[#ffe863]'>Node.js</strong> and <strong class='text-[#ffe863]'>Express.js</strong>, developed CMS platforms with <strong class='text-[#ffe863]'>Next.js</strong> and <strong class='text-[#ffe863]'>React.js</strong> for both web and mobile applications",
      "Integrated third-party services including AWS S3, Rekognition, payment gateways, multi-channel notifications (email, SMS, web push), and social logins (Google, Facebook)",
      "Implemented unified authentication via SSO across 5+ internal tools, ensuring seamless user access and secure data flow",
    ],
  },
  {
    logoPath: "/logo-new-whitebg.png",
    title: "MCV Group - Digital R&D Specialist",
    date: "11/2020 – 07/2022",
    responsibilities: [
      "Designed and developed automated reporting systems using Google Sheets and Google Data Studio",
      "Built and maintained Python tools to automate the Facebook copyright embedding process, reducing processing time by 80%",
      "Led the team responsible for Facebook content copyright protection and enforcement",
    ],
  }
];

const logoIconsList = [
  {
    imgPath: "/logo/javascript.png",
  },
  {
    imgPath: "/logo/python.png",
  },
  {
    imgPath: "/logo/mysql.png",
  },
  {
    imgPath: "/logo/node.png",
  },
  {
    imgPath: "/logo/nextjs.png",
  },
  {
    imgPath: "/logo/react.png",
  },
  {
    imgPath: "/logo/express.png",
  },
  {
    imgPath: "/logo/redux.png",
  },
  {
    imgPath: "/logo/sass.png",
  },
  {
    imgPath: "/logo/tailwind.png",
  },
  {
    imgPath: "/logo/bootstrap.png",
  },
  {
    imgPath: "/logo/postman.png",
  },
  {
    imgPath: "/logo/github.png",
  },
  {
    imgPath: "/logo/figma.png",
  },
];

export {
  PersonalInfo,
  CounterItems,
  ProjectContent,
  ExperienceContent,
  logoIconsList
};