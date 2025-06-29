// projectData.js
// This file contains the data for all your projects.
// Each object in the array represents a single project.
// The 'id' field is used to uniquely identify each project for URL parameters.

const projectPosts = [
    {
        id: 'portfolio-website',
        title: 'Personal Portfolio Website (This One!)',
        date: 'July 2025',
        technologies: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript'],
        snippet: 'A responsive and modern personal portfolio website built from scratch. Features include a dynamic blog, animated gallery, and a clean, user-friendly interface. Designed to showcase my skills and projects.',
        imageUrl: 'https://placehold.co/800x450/4F46E5/FFFFFF?text=Portfolio+Website', // Placeholder for portfolio website
        content: `
            <p class="mb-4 leading-relaxed">
                This very website is one of my ongoing projects! I built it from the ground up to serve as a central hub for my academic journey, skills, and creative endeavors. The goal was to create a clean, responsive, and visually appealing platform to showcase my work and thoughts.
            </p>
            <p class="mb-4 leading-relaxed">
                Key technologies employed in its development include standard web languages: HTML for structure, CSS for styling, and JavaScript for dynamic functionalities. Specifically, I leveraged <strong>Tailwind CSS</strong> for rapid and consistent styling, which allowed me to implement a modern design without writing extensive custom CSS. The <strong>Google Fonts API</strong> was used to bring in unique typography, enhancing the site's aesthetic appeal.
            </p>
            <h2 class="text-2xl font-semibold text-gray-900 mb-3 mt-6">Key Features & Learnings:</h2>
            <ul class="list-disc list-inside mb-4 pl-4 leading-relaxed">
                <li><strong>Responsive Design:</strong> Ensures optimal viewing and interaction across various devices (mobile, tablet, desktop).</li>
                <li><strong>Dynamic Content Loading:</strong> Implemented for the blog and gallery sections using JavaScript to fetch data from <code>.js</code> files, making content management efficient.</li>
                <li><strong>CSS Animations:</strong> Subtle animations (e.g., hero section elements, gallery row scrolls) add a polished and engaging feel.</li>
                <li><strong>SEO Optimization:</strong> Focused on practices like dynamic title/meta description updates for better search engine visibility.</li>
                <li><strong>Git & GitHub Pages:</strong> Learned to manage the project version control and deploy it efficiently through GitHub Pages with a custom domain.</li>
            </ul>
            <p class="mb-4 leading-relaxed">
                This project has been an excellent practical application of my front-end development skills and has taught me a great deal about web performance, user experience design, and efficient content management for static sites.
            </p>
            <p class="mb-4 leading-relaxed italic text-gray-600">
                "Learning never exhausts the mind." - Leonardo da Vinci
            </p>
        `
    },
    {
        id: 'digital-clock-js',
        title: 'Interactive Digital Clock',
        date: 'May 2025',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        snippet: 'A simple yet elegant digital clock application built with plain JavaScript. Displays current time, date, and includes a light/dark mode toggle. Focused on clean code and DOM manipulation.',
        imageUrl: 'https://placehold.co/800x450/6366F1/FFFFFF?text=Digital+Clock+Project', // Placeholder for digital clock project
        content: `
            <p class="mb-4 leading-relaxed">
                My "Interactive Digital Clock" was a foundational JavaScript project aimed at solidifying my understanding of real-time DOM updates and event handling. It's a clean, minimalistic clock that displays the current time and date, updating every second.
            </p>
            <h2 class="text-2xl font-semibold text-gray-900 mb-3 mt-6">Technical Aspects:</h2>
            <ul class="list-disc list-inside mb-4 pl-4 leading-relaxed">
                <li><strong><code>setInterval()</code>:</strong> Used to update the time every second, ensuring accuracy.</li>
                <li><strong><code>Date</code> Object:</strong> Leveraged JavaScript's built-in <code>Date</code> object to fetch current hours, minutes, seconds, and date information.</li>
                <li><strong>Conditional Rendering:</strong> Implemented logic for AM/PM format and adding leading zeros for single-digit numbers.</li>
                <li><strong>Styling with CSS:</strong> Utilized CSS for a sleek design, including a toggle for light and dark modes to enhance user preference.</li>
            </ul>
            <p class="mb-4 leading-relaxed">
                This project reinforced the importance of client-side scripting for dynamic web content and provided a good exercise in handling time-based operations in JavaScript.
            </p>
            <p class="mb-4 leading-relaxed italic text-gray-600">
                "Code is like humor. When you have to explain it, it’s bad." - Cory House
            </p>
        `
    },
    {
        id: 'simple-calculator',
        title: 'Basic Calculator Application',
        date: 'April 2025',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        snippet: 'A fully functional basic calculator capable of addition, subtraction, multiplication, and division. Designed with user experience in mind, ensuring clear button layouts and responsive design.',
        imageUrl: 'https://placehold.co/800x450/4F46E5/FFFFFF?text=Calculator+Project', // Placeholder for calculator project
        content: `
            <p class="mb-4 leading-relaxed">
                The "Basic Calculator Application" was one of my earliest hands-on projects, focusing on fundamental JavaScript logic and user interface interaction. It performs standard arithmetic operations: addition, subtraction, multiplication, and division.
            </p>
            <h2 class="text-2xl font-semibold text-gray-900 mb-3 mt-6">Key Implementations:</h2>
            <ul class="list-disc list-inside mb-4 pl-4 leading-relaxed">
                <li><strong>Event Handling:</strong> Capturing button clicks for numbers and operations.</li>
                <li><strong>Input Parsing:</strong> Converting user input (strings) into numbers for calculations.</li>
                <li><strong>Order of Operations:</strong> Basic logic to handle sequential operations.</li>
                <li><strong>Display Updates:</strong> Real-time updating of the calculator's display as users input numbers and operations.</li>
            </ul>
            <p class="mb-4 leading-relaxed">
                This project was crucial for understanding how to break down a larger problem into smaller, manageable functions and how to handle user input effectively in the browser environment.
            </p>
            <p class="mb-4 leading-relaxed italic text-gray-600">
                "The only way to learn a new programming language is by writing programs in it." - Brian Kernighan
            </p>
        `
    }
];
