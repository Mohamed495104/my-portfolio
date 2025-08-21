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


const projects = [
    {
        id: 1,
        title: "Taskflow & Recreation",
        description:
            "A full-stack Task Manager and Recreation Zone application enabling users to manage tasks efficiently and engage in a team recreation hub.",
        screenshots: [Taskflow1, Taskflow2, Taskflow3, Taskflow4,Taskflow5,Taskflow6],
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
            "Task CRUD operations",
            "Recreation chat/zone for collaboration",
            "Authentication & authorization",
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

    // --- Dummy placeholder projects ---
    {
        id: 2,
        title: "Craftique - Ecommerce Flutter App",
        description: "A cross-platform ecommerce application built with Flutter and Firebase for showcasing and purchasing handmade art products.",
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
        ],
        team: [
            { name: "Mohamed Ijas", role: "Flutter Developer", github: "https://github.com/Mohamed495104" },
        ],
        codeLink: "https://github.com/Mohamed495104/flutter_group_project",
    },
    {
        id: 3,
        title: "Flyora - Travel Booking Web Application",
        description: "An ASP.NET-based travel booking web app where users can browse destinations, manage bookings, and confirm travel plans securely.",
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
            "Booking system with traveler details",
            "Payment methods including Cash on Arrival",
            "Booking summary & confirmation page",
            "Email confirmation support",
        ],
        team: [
            { name: "Mohamed Ijas", role: "ASP.NET Developer", github: "https://github.com/Mohamed495104" },
        ],
        codeLink: "https://github.com/Mohamed495104/Flyora_travel_application.git"
    },
];

export default projects;
