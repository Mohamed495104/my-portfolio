// 📸 Image paths for Taskflow & Recreation
const Taskflow1 = "/images/Taskflow1.png";
const Taskflow2 = "/images/Taskflow2.png";
const Taskflow3 = "/images/Taskflow3.png";
const Taskflow4 = "/images/Taskflow4.png";
const Taskflow5 = "/images/Taskflow5.png";
const Taskflow6 = "/images/Taskflow6.png";

const Craftique1 = "/images/Craftique1.png";
const Craftique2 = "/images/Craftique2.png";
const Craftique3 = "/images/Craftique3.png";
const Craftique4 = "/images/Craftique4.png";
const Craftique5 = "/images/Craftique5.png";
const Craftique6 = "/images/Craftique6.png";

const Flyora1 = "/images/Flyora1.png";
const Flyora2 = "/images/Flyora2.png";
const Flyora3 = "/images/Flyora3.png";
const Flyora4 = "/images/Flyora4.png";
const Flyora5 = "/images/Flyora5.png";
const Flyora6 = "/images/Flyora6.png";
const Flyora7 = "/images/Flyora7.png";

const Wemart1 = "/images/wemart1.png";
const Wemart2 = "/images/wemart2.png";
const Wemart3 = "/images/wemart3.png";
const Wemart4 = "/images/wemart4.png";
const Wemart5 = "/images/wemart5.png";

const Memory1 = "/images/Memory1.png";
const Memory2 = "/images/Memory2.png";
const Memory3 = "/images/Memory3.png";
const Memory4 = "/images/Memory4.png";
const Memory5 = "/images/Memory5.png";
const Memory6 = "/images/Memory6.png";

const Prisma1 = "/images/Prisma1.png";
const Prisma2 = "/images/Prisma2.png";
const Prisma3 = "/images/Prisma3.png";
const Prisma4 = "/images/Prisma4.png";
const Prisma5 = "/images/Prisma5.png";
const Prisma6 = "/images/Prisma6.png";

const Wild1 = "/images/Wild1.png";
const Wild2 = "/images/Wild2.png";
const Wild3 = "/images/Wild3.png";
const Wild4 = "/images/Wild4.png";
const Wild5 = "/images/Wild5.png";

const Wander1 = "/images/Wander1.png";
const Wander2 = "/images/Wander2.png";
const Wander3 = "/images/Wander3.png";
const Wander4 = "/images/Wander4.png";
const Wander5 = "/images/Wander5.png";

// Full Stack Projects
const fullStackProjects = [
    {
        id: 1,
        title: "Taskflow & Recreation",
        description:
            "A full-stack Task Manager and Recreation Zone application enabling users to manage tasks efficiently and engage in a team recreation hub.",
        longDescription: "Taskflow & Recreation is a comprehensive productivity platform that combines task management with team collaboration features. Built with the MERN stack, it provides users with an intuitive interface to organize their work while fostering team engagement through a dedicated recreation zone for casual communication and team bonding.",
        highlights: [
            { label: "Architecture", value: "Full-Stack MERN" },
            { label: "Focus", value: "Task Management & Team Collaboration" },
            { label: "Type", value: "Web Application" },
        ],
        screenshots: [Taskflow1, Taskflow2, Taskflow3, Taskflow4, Taskflow5, Taskflow6],
        techStack: {
            Frontend: ["React", "Bootstrap", "JavaScript", "CSS"],
            Backend: ["Node.js", "Express.js", "MongoDB"],
            Tools: ["Git & GitHub", "VS Code", "Postman"],
        },
        setup: [
            {
                title: "Clone Repository",
                commands: `git clone https://github.com/Mohamed495104/task_manager_recreation.git\ncd task_manager_recreation`,
            },
            {
                title: "Backend Setup",
                commands: `cd backend\nnpm install\ncp .env.example .env\nnpm start`,
            },
            {
                title: "Frontend Setup",
                commands: `cd frontend\nnpm install\nnpm start`,
            },
        ],
        features: [
            "Responsive design with Bootstrap",
            "Task CRUD operations with real-time updates",
            "Recreation chat/zone for team collaboration",
            "Secure authentication & authorization",
            "Task categorization and priority management",
            "User-friendly dashboard with activity tracking",
        ],
        team: [
            {
                name: "Mohamed Ijas",
                role: "Full Stack Developer",
                github: "https://github.com/mohamedijas03",
            },
        ],
        codeLink: "https://github.com/Mohamed495104/task_manager_recreation.git",
    },

    {
        id: 2,
        title: "Craftique - Ecommerce Flutter App",
        description:
            "A cross-platform ecommerce application built with Flutter and Firebase for showcasing and purchasing handmade art products.",
        longDescription: "Craftique is a mobile e-commerce platform designed specifically for artisans to showcase and sell their handmade products. Built with Flutter for cross-platform compatibility and Firebase for backend services, it offers a seamless shopping experience with features like wishlist management, cart functionality, and secure checkout.",
        highlights: [
            { label: "Platform", value: "Mobile (iOS & Android)" },
            { label: "Focus", value: "E-Commerce for Handmade Arts" },
            { label: "Type", value: "Flutter Mobile App" },
        ],
        screenshots: [Craftique1, Craftique2, Craftique3, Craftique4, Craftique5, Craftique6],
        techStack: {
            Frontend: ["Flutter", "Dart"],
            Backend: ["Firebase Auth", "Firebase Database", "Firebase Storage"],
            Tools: ["Git & GitHub", "VS Code / Android Studio", "Firebase Console"],
        },
        setup: [
            {
                title: "Clone Repository",
                commands: `git clone https://github.com/Mohamed495104/flutter_group_project.git\ncd flutter_group_project`,
            },
            {
                title: "Install Dependencies",
                commands: `flutter pub get`,
            },
            {
                title: "Run Application",
                commands: `flutter run`,
            },
        ],
        features: [
            "User authentication (Register, Login, Logout)",
            "Browse handcrafted products by category",
            "Wishlist & Cart functionality",
            "Smooth checkout & order confirmation",
            "Modern glassmorphism login/register UI",
            "Real-time product availability updates",
            "Product search and filtering options",
        ],
        team: [
            {
                name: "Mohamed Ijas",
                role: "Flutter Developer",
                github: "https://github.com/Mohamed495104",
            },
        ],
        codeLink: "https://github.com/Mohamed495104/flutter_group_project",
    },

    {
        id: 3,
        title: "Flyora - Travel Booking Web Application",
        description:
            "An ASP.NET-based travel booking web app where users can browse destinations, manage bookings, and confirm travel plans securely.",
        longDescription: "Flyora is a comprehensive travel booking platform built with ASP.NET Web Forms and SQL Server. It provides users with an intuitive interface to explore travel destinations, view pricing details, manage bookings, and confirm their travel plans. The application features a robust booking system with multiple payment options and email confirmation functionality.",
        highlights: [
            { label: "Platform", value: "ASP.NET Web Application" },
            { label: "Focus", value: "Travel Booking & Management" },
            { label: "Database", value: "SQL Server" },
        ],
        screenshots: [Flyora1, Flyora2, Flyora3, Flyora4, Flyora5, Flyora6, Flyora7],
        techStack: {
            Frontend: ["ASP.NET Web Forms", "HTML5", "CSS3", "Bootstrap"],
            Backend: ["ASP.NET C#", "Entity Framework / ADO.NET", "SQL Server"],
            Tools: ["Visual Studio", "Git & GitHub", "SQL Server Management Studio"],
        },
        setup: [
            {
                title: "Clone Repository",
                commands: `git clone https://github.com/Mohamed495104/Flyora_travel_application.git`,
            },
            {
                title: "Database Setup",
                commands: `# Restore SQL backup or run migration scripts\n# Update connection string in Web.config`,
            },
            {
                title: "Run in Visual Studio",
                commands: `Open solution in Visual Studio\nPress F5 to build and run`,
            },
        ],
        features: [
            "Browse destinations with pricing and details",
            "Comprehensive booking system with traveler details",
            "Multiple payment methods including Cash on Arrival",
            "Booking summary & confirmation page",
            "Email confirmation support",
            "Admin panel for destination management",
            "User-friendly navigation and search",
        ],
        team: [
            {
                name: "Mohamed Ijas",
                role: "ASP.NET Developer",
                github: "https://github.com/Mohamed495104",
            },
        ],
        codeLink: "https://github.com/Mohamed495104/Flyora_travel_application.git",
    },

    {
        id: 4,
        title: "Wemart - PHP Ecommerce Website",
        description:
            "A PHP-based ecommerce website with product management, shopping cart, and checkout system designed to deliver a seamless online shopping experience.",
        longDescription: "Wemart is a full-featured e-commerce platform developed using PHP OOP principles and MySQL. It provides a complete online shopping solution with user authentication, product catalog management, shopping cart functionality, and an admin panel for CRUD operations. The application features a RESTful API for email availability checks during registration.",
        highlights: [
            { label: "Architecture", value: "PHP OOP with MySQL" },
            { label: "Focus", value: "E-Commerce Platform" },
            { label: "Features", value: "Admin Panel & REST API" },
        ],
        screenshots: [Wemart1, Wemart2, Wemart3, Wemart4, Wemart5],
        techStack: {
            Frontend: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
            Backend: ["PHP (OOP)", "MySQL (PDO)"],
            Tools: ["XAMPP", "Git & GitHub", "VS Code"],
        },
        setup: [
            {
                title: "Clone Repository",
                commands: `git clone https://github.com/Mohamed495104/wemart.git`,
            },
            {
                title: "Setup Database",
                commands: `# Import wemart.sql into MySQL\n# Update database credentials in config.php`,
            },
            {
                title: "Run Locally",
                commands: `Start Apache & MySQL in XAMPP\nAccess project via http://localhost/wemart`,
            },
        ],
        features: [
            "User authentication and registration",
            "Product catalog with categories",
            "Shopping cart and wishlist support",
            "Admin panel for CRUD operations",
            "Secure checkout with order summary",
            "REST API for email availability validation",
            "AJAX-powered dynamic search functionality",
            "Session management for user tracking",
        ],
        team: [
            {
                name: "Mohamed Ijas",
                role: "PHP Developer",
                github: "https://github.com/Mohamed495104",
            },
        ],
        codeLink: "https://github.com/Mohamed495104/wemart.git",
    },
];

// Frontend Projects
const frontEndProjects = [
    {
        id: 'fe1',
        title: "Memory Matching Game",
        description:
            "A fun and interactive memory card matching game built with HTML, CSS, and JavaScript to enhance focus and improve memory skills.",
        longDescription: "An engaging browser-based memory game that challenges players to match pairs of cards. Built with vanilla JavaScript without any frameworks, it demonstrates clean code architecture and DOM manipulation skills. The game features a timer, move counter, and restart functionality for an enhanced gaming experience.",
        highlights: [
            { label: "Technology", value: "Vanilla JavaScript" },
            { label: "Type", value: "Interactive Game" },
            { label: "Performance", value: "Lightweight & Fast" },
        ],
        screenshots: [Memory1, Memory2, Memory3, Memory4, Memory5, Memory6],
        techStack: {
            Frontend: ["HTML5", "CSS3", "JavaScript"],
            Tools: ["Git & GitHub", "VS Code"],
        },
        setup: [
            {
                title: "Clone Repository",
                commands: `git clone https://github.com/Mohamed495104/memorymatchgame.git`,
            },
            {
                title: "Run Locally",
                commands: `# Simply open index.html in your browser\n# or use VS Code Live Server extension`,
            }
        ],
        features: [
            "Responsive card grid layout",
            "Flip and match game logic",
            "Move counter & timer",
            "Restart/new game functionality",
            "Lightweight and fast, no frameworks required",
            "Smooth animations and transitions",
        ],
        team: [
            {
                name: "Mohamed Ijas",
                role: "Frontend Developer",
                github: "https://github.com/Mohamed495104/memorymatchgame.git",
            },
        ],
        codeLink: "https://github.com/Mohamed495104/memorymatchgame.git",
    },

    {
        id: 'fe2',
        title: "Prisma Art Gallery",
        description:
            "A modern art gallery website built with HTML, CSS, and JavaScript showcasing curated artworks with a clean, responsive design.",
        longDescription: "Prisma is a visually stunning digital art gallery website that showcases curated artworks with an elegant and intuitive interface. Built with modern web technologies, it features a responsive grid layout, category filtering, and modal popups for detailed artwork viewing. The design emphasizes visual appeal and user experience.",
        highlights: [
            { label: "Design", value: "Modern & Clean UI" },
            { label: "Features", value: "Category Filtering" },
            { label: "Type", value: "Static Art Gallery" },
        ],
        screenshots: [Prisma1, Prisma2, Prisma3, Prisma4, Prisma5, Prisma6],
        techStack: {
            Frontend: ["HTML5", "CSS3", "JavaScript"],
            Tools: ["Git & GitHub", "VS Code"],
        },
        setup: [
            {
                title: "Clone Repository",
                commands: `git clone https://github.com/Mohamed495104/prisma-digitalartgallery.git`,
            },
            {
                title: "Run Locally",
                commands: `# Open index.html in your browser\n# or use VS Code Live Server extension`,
            },
        ],
        features: [
            "Responsive grid-based gallery layout",
            "Hover effects and smooth transitions",
            "Filter artworks by category",
            "Modal popups with enlarged views",
            "Lightweight static site easy to deploy",
            "Optimized images for fast loading",
        ],
        team: [
            {
                name: "Mohamed Ijas",
                role: "Frontend Developer",
                github: "https://github.com/Mohamed495104/prisma-digitalartgallery.git",
            },
        ],
        codeLink: "https://github.com/Mohamed495104/prisma-digitalartgallery.git",
    },


    {
        id: 'fe3',
        title: "Wild Horizon",
        description:
            "A visually stunning travel and adventure website built with HTML, CSS, and JavaScript that showcases destinations, guides, and immersive visuals.",
        longDescription: "Wild Horizon is an immersive travel and adventure website designed to inspire wanderlust. Featuring full-width hero banners, parallax effects, and stunning visuals, it creates an engaging experience for users exploring travel destinations. The site is optimized for performance and accessibility while maintaining a high visual impact.",
        highlights: [
            { label: "Design", value: "Parallax & Immersive" },
            { label: "Focus", value: "Travel & Adventure" },
            { label: "Performance", value: "Optimized Loading" },
        ],
        screenshots: [Wild1, Wild2, Wild3, Wild4, Wild5],
        techStack: {
            Frontend: ["HTML5", "CSS3", "JavaScript"],
            Tools: ["Git & GitHub", "VS Code"],
        },
        setup: [
            {
                title: "Clone Repository",
                commands: `git clone https://github.com/Mohamed495104/wild-horizon.git\ncd wild-horizon`,
            },
            {
                title: "Run Locally",
                commands: `# Open index.html in your browser\n# or use VS Code Live Server extension`,
            },
        ],
        features: [
            "Full-width hero banners with parallax effects",
            "Destination showcase with responsive grid",
            "Interactive hover effects and animations",
            "Optimized for performance and accessibility",
            "Simple and clean static site deployment",
            "Mobile-first responsive design",
        ],
        team: [
            {
                name: "Mohamed Ijas",
                role: "Frontend Developer",
                github: "https://github.com/Mohamed495104/wild-horizon",
            },
        ],
        codeLink: "https://github.com/Mohamed495104/wild-horizon",
    },

    {
        id: 'fe4',
        title: "WanderNest",
        description:
            "A modern accommodation and travel booking website built with HTML, CSS, and JavaScript, offering users an elegant UI to explore stays and destinations.",
        longDescription: "WanderNest is a beautifully designed accommodation and travel booking website that provides users with an elegant interface to discover unique stays and travel destinations. The site features responsive landing pages with hero images, pricing cards for accommodations, and destination highlights with smooth hover effects, all optimized for a mobile-first experience.",
        highlights: [
            { label: "Design", value: "Elegant & Modern" },
            { label: "Focus", value: "Accommodation Booking" },
            { label: "Layout", value: "Mobile-First Responsive" },
        ],
        screenshots: [Wander1, Wander2, Wander3, Wander4],
        techStack: {
            Frontend: ["HTML5", "CSS3", "JavaScript"],
            Tools: ["Git & GitHub", "VS Code"],
        },
        setup: [
            {
                title: "Clone Repository",
                commands: `git clone https://github.com/Mohamed495104/wandernest-travelguidesite.git`,
            },
            {
                title: "Run Locally",
                commands: `# Open index.html in your browser\n# or use VS Code Live Server extension`,
            },
        ],
        features: [
            "Responsive landing page with hero images",
            "Accommodation showcase with pricing cards",
            "Destination highlights with hover effects",
            "Mobile-first optimized design",
            "Lightweight static deployment ready",
            "Clean and intuitive navigation",
        ],
        team: [
            {
                name: "Mohamed Ijas",
                role: "Frontend Developer",
                github: "https://github.com/Mohamed495104/wandernest-travelguidesite.git",
            },
        ],
        codeLink: "https://github.com/Mohamed495104/wandernest-travelguidesite.git",
    },
];

// Export both arrays
export { fullStackProjects, frontEndProjects };

// Default export for backward compatibility
export default fullStackProjects;