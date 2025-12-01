export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  tags: string[];
  thumbnail: string;
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  challenges?: string;
  learnings?: string;
  codeSnippet?: {
    title: string;
    code: string;
    language: string;
  };
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    shortDescription: "Full-stack e-commerce site with payment integration and admin dashboard",
    fullDescription: "A complete e-commerce solution built with the MERN stack. Features include product management, shopping cart, secure checkout with Stripe integration, order tracking, and a comprehensive admin panel for managing inventory and orders.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Redux"],
    tags: ["Full Stack", "React", "E-Commerce"],
    thumbnail: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/username/ecommerce",
    features: [
      "User authentication with JWT",
      "Product search and filtering",
      "Shopping cart with localStorage",
      "Stripe payment integration",
      "Order history and tracking",
      "Admin dashboard for product management"
    ],
    challenges: "Implementing secure payment processing and managing complex state across multiple components.",
    learnings: "Gained deep understanding of payment gateway integration and learned advanced Redux patterns for state management.",
    codeSnippet: {
      title: "Custom useCart Hook",
      code: `const useCart = () => {
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
    localStorage.setItem('cart', JSON.stringify([...cart, product]));
  };
  
  return { cart, addToCart };
};`,
      language: "javascript"
    }
  },
  {
    id: "task-manager",
    title: "Task Manager Pro",
    shortDescription: "Collaborative task management app with real-time updates",
    fullDescription: "A modern task management application featuring real-time collaboration, drag-and-drop task organization, team workspaces, and progress tracking. Built with React and Firebase for real-time data synchronization.",
    techStack: ["React", "Firebase", "Tailwind CSS", "React DnD"],
    tags: ["React", "Firebase", "Real-time"],
    thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    liveUrl: "https://example-tasks.com",
    githubUrl: "https://github.com/username/task-manager",
    features: [
      "Real-time task updates across devices",
      "Drag-and-drop task organization",
      "Team collaboration features",
      "Custom task categories and tags",
      "Progress tracking and analytics",
      "Mobile-responsive design"
    ],
    challenges: "Managing real-time synchronization across multiple users and implementing smooth drag-and-drop functionality.",
    learnings: "Mastered Firebase Realtime Database and learned efficient patterns for handling real-time data updates in React."
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    shortDescription: "Modern weather app with forecasts and location search",
    fullDescription: "An intuitive weather dashboard that provides current conditions, 7-day forecasts, and hourly predictions. Features geolocation, city search, and beautiful data visualizations using Chart.js.",
    techStack: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    tags: ["React", "API Integration", "Vanilla JS"],
    thumbnail: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    liveUrl: "https://example-weather.com",
    githubUrl: "https://github.com/username/weather-app",
    features: [
      "Current weather conditions",
      "7-day weather forecast",
      "Hourly temperature graph",
      "Location-based weather detection",
      "City search functionality",
      "Beautiful weather animations"
    ],
    codeSnippet: {
      title: "API Call with Error Handling",
      code: `const fetchWeather = async (city) => {
  try {
    const response = await fetch(
      \`\${API_URL}/weather?q=\${city}&appid=\${API_KEY}\`
    );
    if (!response.ok) throw new Error('City not found');
    return await response.json();
  } catch (error) {
    toast.error(error.message);
  }
};`,
      language: "javascript"
    }
  },
  {
    id: "portfolio-builder",
    title: "Portfolio Builder",
    shortDescription: "No-code portfolio website generator with templates",
    fullDescription: "A SaaS application that allows users to create professional portfolio websites without coding. Features drag-and-drop editor, multiple themes, custom domains, and analytics dashboard.",
    techStack: ["React", "Node.js", "PostgreSQL", "AWS S3"],
    tags: ["Full Stack", "SaaS", "React"],
    thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    liveUrl: "https://example-builder.com",
    githubUrl: "https://github.com/username/portfolio-builder",
    features: [
      "Drag-and-drop page builder",
      "10+ professional templates",
      "Custom domain integration",
      "Built-in analytics",
      "SEO optimization tools",
      "Image hosting and optimization"
    ]
  },
  {
    id: "chat-app",
    title: "Real-Time Chat App",
    shortDescription: "WebSocket-based chat with rooms and file sharing",
    fullDescription: "A full-featured real-time chat application built with Socket.io. Supports private messaging, group chats, file sharing, typing indicators, and message history.",
    techStack: ["React", "Socket.io", "Node.js", "MongoDB"],
    tags: ["Full Stack", "Real-time", "WebSocket"],
    thumbnail: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80",
    liveUrl: "https://example-chat.com",
    githubUrl: "https://github.com/username/chat-app",
    features: [
      "Real-time messaging with WebSocket",
      "Private and group chat rooms",
      "File and image sharing",
      "Typing indicators",
      "Message history persistence",
      "User presence tracking"
    ]
  },
  {
    id: "recipe-finder",
    title: "Recipe Finder",
    shortDescription: "Recipe search app with meal planning and favorites",
    fullDescription: "A comprehensive recipe application that helps users discover recipes, plan meals, and save favorites. Integrates with multiple recipe APIs and includes nutritional information.",
    techStack: ["React", "Redux", "Recipe API", "Tailwind CSS"],
    tags: ["React", "API Integration", "Frontend"],
    thumbnail: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
    liveUrl: "https://example-recipes.com",
    githubUrl: "https://github.com/username/recipe-finder",
    features: [
      "Search recipes by ingredients",
      "Filter by dietary restrictions",
      "Save favorite recipes",
      "Weekly meal planner",
      "Shopping list generator",
      "Nutritional information display"
    ]
  }
];
