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
    id: "raistore-ecommerce",
    title: "RaiStore – Premium E-Commerce Platform",
    shortDescription: "Production-ready MERN stack e-commerce platform with Stripe payments, Zustand state management, Brevo transactional emails, and a full admin dashboard",
    fullDescription: "RaiStore is a curated premium e-commerce storefront built with the MERN stack. It features JWT authentication with HTTP-only cookies, a live product catalog with category filtering, a Zustand-powered persistent cart, Stripe payment processing, Brevo transactional emails (welcome, order confirmation, status updates), and a fully functional admin dashboard with KPI analytics, product/order/inventory/coupon management. The frontend uses Vite + React 18, TanStack Query for server state, Framer Motion for animations, shadcn/ui components, and Zod/React Hook Form for validation.",
    techStack: ["React 18", "Vite", "Zustand", "TanStack Query", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Stripe", "Brevo", "Netlify", "Render"],
    tags: ["Full Stack", "MERN Stack", "E-Commerce", "Payment Integration"],
    thumbnail: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    liveUrl: "https://raistorex.netlify.app",
    githubUrl: "https://github.com/gauravrai80/raistore.git",
    features: [
      "🔐 JWT Auth: Secure email/password auth with bcrypt hashing and HTTP-only cookie token storage",
      "🛍️ Live Product Catalog: Category tabs, search, and filtering across a live MongoDB product collection",
      "🛒 Persistent Cart: Zustand-powered cart that survives page refresh via localStorage persistence",
      "💳 Stripe Checkout: Secure payment processing with Stripe Payment Intents and server-side verification",
      "📧 Brevo Transactional Emails: Auto-send welcome emails, order confirmations, and status update notifications",
      "📦 Order History: Users can view all past orders with status tracking and line-item details",
      "❤️ Wishlist: Save products for later — persisted to MongoDB per user",
      "🎟️ Coupon Codes: Percentage or flat discount codes with expiry and usage limits at checkout",
      "👤 User Profile: Edit display name, avatar, and personal details",
      "🎞️ Framer Motion Animations: Smooth entrance animations on storefront and product pages",
      "📊 Admin Dashboard: KPI cards (Revenue, Orders, Products, Users) + recent orders table",
      "🗂️ Admin Products: Full CRUD — create, edit, delete products with image uploads",
      "🔄 Admin Orders: View all orders and update statuses (pending → shipped → delivered)",
      "📋 Admin Inventory: Stock levels, SKU tracking, and low-stock threshold alerts",
      "🏷️ Admin Coupons: Create and manage discount codes from the admin panel",
      "👥 Admin Users: View all registered users",
      "🔒 Role-Based Access: Admin routes protected via JWT role check middleware",
      "🛡️ Security: Helmet headers, express-rate-limit, input validation with Zod",
      "📱 Fully Responsive: Mobile-first design optimized for all screen sizes",
      "⚡ TanStack Query: Efficient server state caching, background refetching, and stale-while-revalidate"
    ],
    challenges: `**1. Secure Payment Processing with Stripe**
Implementing server-side Payment Intent creation and ensuring the order is only saved to MongoDB after payment confirmation — not before. Handled edge cases like failed payments and duplicate order creation on webhook retries cleanly.

**2. Brevo Email Integration**
Migrated from Nodemailer (SMTP timeout issues) to Brevo's REST API via the @getbrevo/brevo SDK. All email sending is non-blocking so a Brevo failure never crashes the API response. The sender email must be verified in the Brevo dashboard.

**3. Zustand Persistent Cart**
Keeping cart state in sync between Zustand (in-memory) and localStorage (persistence) while handling edge cases like items going out of stock or the user switching accounts mid-session.

**4. Admin Dashboard Authorization**
Built a two-layer middleware system: auth.middleware.js verifies the JWT cookie, then admin.middleware.js checks role === 'admin'. All admin tab data (inventory, coupons, analytics) is fetched only if the role check passes.

**5. CORS & Deployment**
Coordinating cookie credentials between the Netlify frontend and the Render backend required careful CORS origin whitelisting and ensuring cookies are sent with credentials: true on every Axios request.`,
    learnings: `**Technical Skills Gained:**
• Mastered Zustand for lightweight global state with built-in persistence middleware
• Implemented TanStack Query v5 patterns — queryClient, useQuery, useMutation, invalidation strategies
• Integrated Stripe Payment Intents with server-side confirmation and order-save-on-success flow
• Learned Brevo REST API for transactional email delivery with template-like dynamic content
• Built a full role-based auth system using JWT + HTTP-only cookies + Mongoose role field

**Architecture Decisions:**
• Chose Zustand over Redux for cart state — less boilerplate, same power for this use case
• Used TanStack Query for all server data to avoid duplicating loading/error state in components
• Separated admin middleware into its own file to keep auth.middleware.js reusable for non-admin routes
• Non-blocking email sending pattern ensures email failures never degrade the purchase experience

**Problem-Solving Experience:**
• Debugged race conditions in Stripe webhook vs. API response order-creation flows
• Fixed CORS credential issues between Netlify and Render after deployment
• Resolved Mongoose populate queries for order line items referencing product documents`,
    codeSnippet: {
      title: "Zustand Cart Store with Persistence",
      code: `import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, quantity = 1) => {
        const existing = get().items.find(i => i._id === product._id);
        if (existing) {
          set(state => ({
            items: state.items.map(i =>
              i._id === product._id
                ? { ...i, quantity: i.quantity + quantity }
                : i
            )
          }));
        } else {
          set(state => ({ items: [...state.items, { ...product, quantity }] }));
        }
      },

      removeItem: (id) =>
        set(state => ({ items: state.items.filter(i => i._id !== id) })),

      updateQuantity: (id, quantity) =>
        set(state => ({
          items: state.items.map(i =>
            i._id === id ? { ...i, quantity } : i
          )
        })),

      clearCart: () => set({ items: [] }),

      get total() {
        return get().items.reduce(
          (sum, i) => sum + i.price * i.quantity, 0
        );
      }
    }),
    { name: 'raistore-cart' }  // persisted to localStorage
  )
);

export default useCartStore;`,
      language: "typescript"
    }
  },

  {
    id: "portfolio-builder",
    title: "Folio - Portfolio Builder",
    shortDescription: "A no-code portfolio builder that makes it easy to create stunning portfolios without writing code",
    fullDescription: "Folio is a comprehensive no-code portfolio builder created entirely using Lovable, an AI-assisted development platform. This SaaS application empowers users to create professional portfolio websites without any coding knowledge. The platform features an intuitive drag-and-drop editor, professionally designed templates for different industries, responsive design, custom domain support, and built-in SEO optimization. Built with modern web technologies including React, TypeScript, Vite, and Supabase for backend services.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Supabase", "dnd-kit"],
    tags: ["Full Stack", "SaaS", "No-Code", "AI-Assisted"],
    thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    liveUrl: "https://raifolio.lovable.app",
    githubUrl: "https://github.com/Gaurav-rai18/craft-portfolio-b3c2c11f.git",
    features: [
      "🎨 No-Code Editor: Intuitive drag-and-drop interface for building portfolios visually",
      "📐 Professional Templates: Multiple pre-designed templates for different industries",
      "📱 Responsive Design: All portfolios are mobile-friendly out of the box",
      "🌐 Custom Domains: Connect your own domain to your portfolio",
      "🔍 SEO Optimized: Built-in SEO settings for better discoverability",
      "📊 Analytics Dashboard: Track visitors and engagement on your portfolio",
      "🎭 Component Palette: Rich library of reusable components for customization",
      "⚡ Live Preview: Real-time canvas preview while building",
      "🤖 AI-Assisted Development: Built entirely using Lovable platform"
    ],
    challenges: "Creating an intuitive drag-and-drop editor that balances flexibility with ease of use, implementing a robust component system that works seamlessly across different templates, and ensuring the generated portfolios are performant and SEO-friendly. Managing complex state for the editor interface while maintaining smooth user experience.",
    learnings: "Gained extensive experience with AI-assisted development using Lovable platform, mastered modern React patterns with TypeScript, learned advanced drag-and-drop implementations with dnd-kit, and developed expertise in Supabase for authentication and database management. Discovered how AI tools can accelerate development while maintaining full creative control over the final product.",
    codeSnippet: {
      title: "Drag-and-Drop Component System",
      code: `// Component palette with drag-and-drop functionality
import { useDraggable } from '@dnd-kit/core';

const ComponentPalette = () => {
  const components = [
    { id: 'hero', name: 'Hero Section', icon: '🎯' },
    { id: 'about', name: 'About', icon: '👤' },
    { id: 'projects', name: 'Projects', icon: '💼' },
    { id: 'contact', name: 'Contact', icon: '📧' }
  ];

  return (
    <div className="component-palette">
      {components.map(component => (
        <DraggableComponent 
          key={component.id} 
          component={component} 
        />
      ))}
    </div>
  );
};

const DraggableComponent = ({ component }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: component.id,
    data: { type: component.id }
  });

  const style = transform ? {
    transform: \`translate3d(\${transform.x}px, \${transform.y}px, 0)\`,
  } : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="draggable-component"
    >
      <span>{component.icon}</span>
      <span>{component.name}</span>
    </div>
  );
};`,
      language: "typescript"
    }
  },
  {
    id: "raichat",
    title: "💬 RaiChat – Real-Time Chat Application",
    shortDescription: "A full-featured, production-ready real-time chat application built using the MERN stack and Socket.IO",
    fullDescription: "RaiChat is a scalable real-time messaging platform designed to demonstrate full-stack development skills using the MERN stack. It enables users to securely authenticate, chat in real time, create group conversations, share files, and see live typing and online status updates using Socket.IO. All wrapped in a modern glassmorphic UI.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Tailwind CSS", "JWT", "Cloudinary", "bcryptjs", "Multer"],
    tags: ["Full Stack", "Real-time", "MERN Stack"],
    thumbnail: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80",
    liveUrl: "https://raichat.netlify.app",
    githubUrl: "https://github.com/gauravrai80/raichat",
    features: [
      "🔐 User Authentication: JWT-based authentication with bcrypt password hashing",
      "💬 Private Messaging: One-to-one real-time conversations",
      "👥 Group Chats: Create and manage group conversations",
      "⌨️ Typing Indicators: Live typing status using Socket.IO events",
      "🟢 Online / Offline Status: Real-time presence tracking",
      "📎 File Sharing: Upload and share images/documents via Cloudinary",
      "💾 Message Persistence: Chat history stored securely in MongoDB",
      "🎨 Modern UI: Glassmorphic design with Tailwind CSS",
      "📱 Responsive Design: Optimized for desktop and mobile devices"
    ],
    challenges: "Implementing real-time bidirectional communication with Socket.IO while maintaining secure authentication flow, managing multiple concurrent connections, and ensuring message persistence across sessions. Handling file uploads efficiently with Cloudinary integration and optimizing the glassmorphic UI for performance.",
    learnings: "Mastered Socket.IO for real-time bidirectional event-based communication, gained expertise in JWT authentication and authorization patterns, learned advanced MongoDB schema design for chat applications, and implemented production-ready deployment with environment-based configuration. Developed skills in building modular backend architecture with controllers, routes, and middleware.",
    codeSnippet: {
      title: "Socket.IO Real-Time Messaging",
      code: `// Server-side Socket.IO event handling
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  
  // Join user to their personal room
  socket.on('join', (userId) => {
    socket.join(userId);
    // Update user online status
    updateUserStatus(userId, true);
    io.emit('user-status', { userId, online: true });
  });
  
  // Handle private messages
  socket.on('send-message', async (data) => {
    const { senderId, receiverId, message, conversationId } = data;
    
    // Save message to database
    const newMessage = await Message.create({
      sender: senderId,
      receiver: receiverId,
      content: message,
      conversation: conversationId,
      timestamp: new Date()
    });
    
    // Emit to receiver's room
    io.to(receiverId).emit('receive-message', newMessage);
  });
  
  // Handle typing indicators
  socket.on('typing', (data) => {
    socket.to(data.receiverId).emit('user-typing', {
      userId: data.senderId,
      isTyping: true
    });
  });
  
  // Handle disconnect
  socket.on('disconnect', () => {
    updateUserStatus(socket.userId, false);
    io.emit('user-status', { userId: socket.userId, online: false });
  });
});`,
      language: "javascript"
    }
  },
  {
    id: "recipe-explorer",
    title: "Recipe Explorer",
    shortDescription: "Dynamic recipe browsing app with search, filters, and detailed cooking instructions",
    fullDescription: "Recipe Explorer is a feature-rich recipe search application built using React and TailwindCSS, powered by the ThemealDB public meals API. Users can browse recipes, search by name, filter by categories or ingredients, and view complete cooking instructions with ingredient breakdowns and optional YouTube tutorials.",
    techStack: ["React", "Tailwind CSS", "ThemealDB API", "Axios"],
    tags: ["React", "API Integration", "Frontend"],
    thumbnail: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
    liveUrl: "https://reciepeappg.netlify.app",
    githubUrl: "https://github.com/gauravrai80/reciepe_app",
    features: [
      "🔍 Recipe Search: Quickly find meals by name or keyword",
      "🧭 Category & Ingredient Filters: Refine recipes based on categories or specific ingredients",
      "📄 Detailed Recipe Pages with complete ingredient list and step-by-step instructions",
      "Category tags and YouTube video tutorials (if available)",
      "⭐ Favorites System using localStorage",
      "📱 Responsive UI: Seamlessly adapts to mobile and desktop screens"
    ],
    challenges: "Implementing efficient API calls to ThemealDB and managing complex filtering logic across multiple parameters while maintaining smooth user experience.",
    learnings: "Gained expertise in working with third-party APIs, learned advanced React patterns for state management, and mastered responsive design with TailwindCSS.",
    codeSnippet: {
      title: "Recipe API Integration",
      code: `const fetchRecipesByCategory = async (category) => {
  try {
    const response = await axios.get(
      \`https://www.themealdb.com/api/json/v1/1/filter.php?c=\${category}\`
    );
    if (response.data.meals) {
      return response.data.meals;
    }
    return [];
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};`,
      language: "javascript"
    }
  },
  {
    id: "movie-search-app",
    title: "Movie Search App",
    shortDescription: "Fully featured movie exploration app with search, filters, and favorites management",
    fullDescription: "Movie Search App is a dynamic movie browsing platform built using React and the OMDB API. The app allows users to search for movie titles, view rich details, filter results by type, and explore poster thumbnails and descriptions in a neat card-based UI. Users can also mark favorite movies for later viewing with persistent storage.",
    techStack: ["React", "React Router", "OMDB API", "Tailwind CSS", "localStorage"],
    tags: ["React", "API Integration", "Frontend"],
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
    liveUrl: "https://moviesearchg.netlify.app",
    githubUrl: "https://github.com/gauravrai80/moviesearch",
    features: [
      "🔍 Movie Search: Search movies by title or keywords with real-time API calls",
      "🎥 Detailed Movie Page: View larger poster, plot summary, cast, genre, ratings, and release year using React Router",
      "🧭 Filtering: Movie type dropdown filter powered directly through the API (no .filter() method used)",
      "📑 Pagination: Navigate large search results easily through pagination UI",
      "⭐ Favorites: Add movies to a favorite list with persistent storage via localStorage",
      "❗ Error & Empty State Handling: Friendly messages for API errors, missing data, or no search results",
      "📱 Responsive UI: Tailwind ensures smooth UI across devices"
    ],
    challenges: "Implementing efficient pagination with the OMDB API, managing movie type filtering through API parameters rather than client-side filtering, and ensuring smooth navigation between search results and detailed movie pages.",
    learnings: "Gained expertise in React Router for multi-page navigation, learned advanced API integration patterns with OMDB, and mastered state management for favorites and search results with localStorage persistence.",
    codeSnippet: {
      title: "Movie API Integration with Filtering",
      code: `const searchMovies = async (query, type = '', page = 1) => {
  try {
    const typeParam = type ? \`&type=\${type}\` : '';
    const response = await fetch(
      \`https://www.omdbapi.com/?apikey=\${API_KEY}&s=\${query}\${typeParam}&page=\${page}\`
    );
    const data = await response.json();
    
    if (data.Response === 'True') {
      return {
        movies: data.Search,
        totalResults: parseInt(data.totalResults)
      };
    }
    return { movies: [], totalResults: 0 };
  } catch (error) {
    console.error('Error fetching movies:', error);
    return { movies: [], totalResults: 0 };
  }
};`,
      language: "javascript"
    }
  },
  {
    id: "add-to-cart-app",
    title: "Add to Cart App",
    shortDescription: "Product listing and shopping cart application with real-time pricing and discount calculations",
    fullDescription: "A mini e-commerce flow showcasing product listing, cart management, and client-side routing. Products are fetched from the Fake Store API and displayed in a responsive grid. A separate cart page allows users to manage selected items with quantity controls, dynamic price updates, and automatic discount calculations.",
    techStack: ["React", "React Router", "Fake Store API", "Tailwind CSS", "JavaScript"],
    tags: ["React", "E-Commerce", "Frontend"],
    thumbnail: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
    liveUrl: "https://reactrouterbygaurav.netlify.app",
    githubUrl: "https://github.com/gauravrai80/reactrouter",
    features: [
      "🛒 Product Listing Page: Fetches products from Fake Store API with responsive grid layout",
      "📦 Product Display: Shows image, title, price, and description with Add/Remove cart buttons",
      "🧺 Cart Page: Displays all cart items with name, price, and quantity controls",
      "➕➖ Quantity Management: Increase/decrease quantity per item with real-time updates",
      "💰 Dynamic Pricing: Per-item total price calculated based on quantity",
      "🎁 Automatic Discount: 10% discount applied to final cart total",
      "🔁 Routing & State Management: React Router for navigation with shared cart state across routes"
    ],
    challenges: "Managing shared cart state across multiple routes, implementing real-time price calculations with quantity updates, and ensuring proper state synchronization when adding, removing, or updating cart items.",
    learnings: "Gained expertise in React Router for multi-page navigation, learned advanced state management patterns for cart functionality, and mastered dynamic pricing calculations with discount logic in React applications.",
    codeSnippet: {
      title: "Cart State Management with Discount Calculation",
      code: `// Cart context for shared state across routes
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Calculate total with 10% discount
  const calculateTotal = () => {
    const subtotal = cart.reduce((sum, item) => 
      sum + (item.price * item.quantity), 0
    );
    const discount = subtotal * 0.10;
    return {
      subtotal: subtotal.toFixed(2),
      discount: discount.toFixed(2),
      total: (subtotal - discount).toFixed(2)
    };
  };

  // Update item quantity
  const updateQuantity = (id, newQuantity) => {
    setCart(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, calculateTotal, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};`,
      language: "javascript"
    }
  },
  {
    id: "modal-cart-app",
    title: "Add to Cart App (Modal Cart)",
    shortDescription: "Shopping cart experience with modal interface and duplicate item detection",
    fullDescription: "A mini e-commerce interface focused on cart management via a modal. All products are loaded from the Fake Store API and displayed in a responsive grid. The cart is accessible from the navbar and opens in a modal, showing all selected items with removal options and duplicate detection alerts.",
    techStack: ["React", "Fake Store API", "Tailwind CSS", "JavaScript"],
    tags: ["React", "E-Commerce", "Frontend"],
    thumbnail: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    liveUrl: "https://addtocartby.netlify.app",
    githubUrl: "https://github.com/gauravrai80/fakecart1",
    features: [
      "🛍️ Product Listing: Fetches products from Fake Store API with responsive grid layout",
      "📦 Product Display: Shows image, title, price, and Add to Cart button",
      "🧺 Modal Cart Interface: Navbar displays current cart count, clicking opens modal with all items",
      "🗑️ Item Removal: Each cart item has a Remove from Cart button in the modal",
      "✅ Duplicate Detection: Shows alert 'Item already added to the cart' for duplicate additions",
      "🔢 Dynamic Cart Count: Cart count updates correctly when items are added/removed",
      "📱 Responsive Layout: Optimized for mobile and desktop viewing"
    ],
    challenges: "Implementing a clean modal interface for cart management, handling duplicate item detection with user-friendly alerts, and managing cart state through props across multiple components.",
    learnings: "Gained experience in building modal-based UI patterns in React, learned prop drilling techniques for state management, and mastered duplicate detection logic for cart functionality.",
    codeSnippet: {
      title: "Cart Management with Duplicate Detection",
      code: `// Add to cart with duplicate check
const handleAddToCart = (product) => {
  // Check if item already exists in cart
  const isAlreadyInCart = cart.some(item => item.id === product.id);
  
  if (isAlreadyInCart) {
    alert('Item already added to the cart');
    return;
  }
  
  // Add new item to cart
  setCart(prevCart => [...prevCart, product]);
};

// Remove from cart
const handleRemoveFromCart = (productId) => {
  setCart(prevCart => prevCart.filter(item => item.id !== productId));
};

// Modal component receives cart via props
<CartModal 
  cart={cart} 
  onRemove={handleRemoveFromCart}
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
/>`,
      language: "javascript"
    }
  },
  {
    id: "income-expense-calculator",
    title: "Income Expense Calculator",
    shortDescription: "Financial tracker with CRUD operations, filtering, and real-time balance calculations",
    fullDescription: "A user-friendly financial tracker that helps users manage income and expense records with full CRUD functionality. The app allows adding, editing, filtering, and deleting entries while dynamically displaying totals and balance. All data is stored in localStorage, ensuring persistence across sessions.",
    techStack: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "localStorage"],
    tags: ["JavaScript", "CRUD", "Frontend"],
    thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    liveUrl: "https://incexpcal.netlify.app",
    githubUrl: "https://github.com/gauravrai80/income_expence_cal",
    features: [
      "➕ Create Entries: Add new income or expense items with description and value",
      "✏️ Update & Delete: Modify or remove items directly from the list with full CRUD operations",
      "🔍 Data Filters: Show all, only income, or only expenses using radio buttons",
      "📊 Dynamic Totals: Automatically calculate total income, total expenses, and current balance",
      "💾 Persistence: All records stored via localStorage to preserve data across sessions",
      "🧹 Reset Function: Clear input fields after form submission",
      "📱 Fully Responsive: Optimized for desktop and mobile usage"
    ],
    challenges: "Implementing real-time balance calculations that update dynamically as entries are added, edited, or deleted, while ensuring data consistency with localStorage and managing filter states across user interactions.",
    learnings: "Gained expertise in vanilla JavaScript CRUD operations, learned localStorage data persistence patterns, and mastered dynamic DOM manipulation for real-time UI updates without frameworks.",
    codeSnippet: {
      title: "Dynamic Balance Calculation with localStorage",
      code: `// Calculate and display totals
const calculateTotals = () => {
  const entries = JSON.parse(localStorage.getItem('entries')) || [];
  
  const totalIncome = entries
    .filter(entry => entry.type === 'income')
    .reduce((sum, entry) => sum + parseFloat(entry.amount), 0);
  
  const totalExpense = entries
    .filter(entry => entry.type === 'expense')
    .reduce((sum, entry) => sum + parseFloat(entry.amount), 0);
  
  const balance = totalIncome - totalExpense;
  
  // Update DOM
  document.getElementById('total-income').textContent = totalIncome.toFixed(2);
  document.getElementById('total-expense').textContent = totalExpense.toFixed(2);
  document.getElementById('balance').textContent = balance.toFixed(2);
  document.getElementById('balance').className = 
    balance >= 0 ? 'text-green-600' : 'text-red-600';
};

// Add entry with localStorage persistence
const addEntry = (description, amount, type) => {
  const entries = JSON.parse(localStorage.getItem('entries')) || [];
  const newEntry = { id: Date.now(), description, amount, type };
  entries.push(newEntry);
  localStorage.setItem('entries', JSON.stringify(entries));
  calculateTotals();
  renderEntries();
};`,
      language: "javascript"
    }
  },
  {
    id: "memory-match-game",
    title: "Memory Match Game",
    shortDescription: "Interactive card-matching memory game with shuffle logic and smooth animations",
    fullDescription: "A fun and interactive card-matching memory game built using HTML, CSS, and JavaScript DOM manipulation. Players flip cards, find matching pairs, and test their memory skills with smooth animations and shuffle logic. Every round is randomized using a shuffle function, making each play unique.",
    techStack: ["HTML", "CSS", "JavaScript"],
    tags: ["JavaScript", "Game", "Frontend"],
    thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    liveUrl: "https://cardsmatchgame.netlify.app",
    githubUrl: "https://github.com/gauravrai80/match_card",
    features: [
      "🎴 Interactive Card Flipping: Cards reveal their faces when clicked using DOM-based event handling",
      "🔁 Shuffle Mechanics: Card positions are randomized at game start or during restart",
      "🧠 Pair Matching Logic: Matched cards remain visible; unmatched cards flip back automatically",
      "🔄 Restart Button: Resets the board, re-shuffles cards, and restarts the game state",
      "✨ Smooth Animations: CSS transitions for card flips and reveals",
      "📱 Responsive Layout: Smooth gameplay experience on mobile and desktop",
      "📂 Clean Code: HTML, CSS, and JS structured for readability and easy modification"
    ],
    challenges: "Implementing smooth card flip animations with proper timing, managing game state to prevent multiple simultaneous flips, and creating an efficient shuffle algorithm that ensures fair randomization.",
    learnings: "Gained expertise in JavaScript event handling and DOM manipulation, learned CSS animation techniques for card flips, and mastered game state management using vanilla JavaScript.",
    codeSnippet: {
      title: "Card Flip and Match Logic",
      code: `// Game state
let flippedCards = [];
let matchedPairs = 0;
let canFlip = true;

// Shuffle cards using Fisher-Yates algorithm
const shuffleCards = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Handle card flip
const flipCard = (card) => {
  if (!canFlip || flippedCards.includes(card)) return;
  
  card.classList.add('flipped');
  flippedCards.push(card);
  
  if (flippedCards.length === 2) {
    canFlip = false;
    checkMatch();
  }
};

// Check if cards match
const checkMatch = () => {
  const [card1, card2] = flippedCards;
  const isMatch = card1.dataset.card === card2.dataset.card;
  
  if (isMatch) {
    matchedPairs++;
    flippedCards = [];
    canFlip = true;
    if (matchedPairs === totalPairs) {
      setTimeout(() => alert('You won!'), 500);
    }
  } else {
    setTimeout(() => {
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');
      flippedCards = [];
      canFlip = true;
    }, 1000);
  }
};`,
      language: "javascript"
    }
  },
  {
    id: "elitebasket",
    title: "EliteBasket – Multi-Page E-Commerce Website",
    shortDescription: "Clean and responsive multi-category e-commerce website with product pages",
    fullDescription: "A clean and responsive multi-category e-commerce website built using HTML, CSS, and JavaScript. The platform features multiple product pages including Fashion, Electronics, and Jewellery, each designed with intuitive navigation, product cards, and user-friendly layout. The UI is fully responsive and optimized for smooth browsing across devices.",
    techStack: ["HTML", "CSS", "JavaScript"],
    tags: ["HTML/CSS", "E-Commerce", "Frontend"],
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    liveUrl: "https://elitebasket.netlify.app",
    githubUrl: "https://github.com/gauravrai80/EliteBasket",
    features: [
      "🛍️ Multi-Page Layout: Separate product pages for Fashion, Electronics, and Jewellery",
      "🧭 Easy Navigation: Header, footer, and category menus with consistent UX",
      "👕 Product Cards: Responsive grids with product images, pricing, and details",
      "📱 Responsive Design: Works smoothly on mobile, tablet, and desktop",
      "🎨 Clean UI Styling: CSS-based styling with reusable classes and layout patterns",
      "⚙️ Lightweight JS Enhancements: Interactive UI components where needed"
    ],
    challenges: "Creating a consistent multi-page navigation experience, designing reusable CSS components for product cards across different categories, and ensuring responsive layouts work seamlessly across all device sizes.",
    learnings: "Gained expertise in building multi-page static websites with consistent design systems, learned CSS grid and flexbox patterns for responsive product layouts, and mastered semantic HTML structure for e-commerce interfaces.",
    codeSnippet: {
      title: "Reusable Product Card Component",
      code: `<!-- Product Card HTML Structure -->
<div class="product-card">
  <div class="product-image">
    <img src="product.jpg" alt="Product Name">
    <span class="badge">New</span>
  </div>
  <div class="product-info">
    <h3 class="product-title">Product Name</h3>
    <p class="product-category">Category</p>
    <div class="product-price">
      <span class="current-price">$99.99</span>
      <span class="original-price">$149.99</span>
    </div>
    <button class="btn-add-cart">Add to Cart</button>
  </div>
</div>

/* CSS for Responsive Product Grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.product-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}`,
      language: "html"
    }
  },
  {
    id: "kanban-board",
    title: "Kanban Board",
    shortDescription: "Drag-and-drop task management application inspired by agile workflows",
    fullDescription: "Kanban Board is a drag-and-drop task management application inspired by agile workflows. It lets users visually manage tasks across To Do, In Progress, and Done columns with a clean, responsive UI. The app uses React's Context API for global state management and localStorage to persist data across sessions.",
    techStack: ["React", "TailwindCSS", "Context API", "react-beautiful-dnd", "localStorage"],
    tags: ["React", "Task Management", "Frontend"],
    thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    liveUrl: "https://kanbanboardb.netlify.app",
    githubUrl: "https://github.com/gauravrai80/kanban_board",
    features: [
      "🧩 Kanban Layout: Tasks organized into To Do, In Progress, and Done columns",
      "➕ Create / Edit / Delete Tasks: Manage tasks through an intuitive form and inline actions",
      "🔁 Drag and Drop: Move tasks between columns using react-beautiful-dnd with smooth interactions",
      "💾 Persistent Data: All tasks are saved in localStorage so progress is not lost on refresh",
      "📝 Task Details Modal: Click a task to view full details and edit fields like description or status",
      "🧷 Optional tags, priorities, or deadlines for richer task context"
    ],
    challenges: "Implementing smooth drag-and-drop functionality across columns while maintaining data consistency and ensuring localStorage synchronization without performance issues.",
    learnings: "Mastered React Context API for global state management, learned advanced patterns for drag-and-drop interactions with react-beautiful-dnd, and gained experience in building persistent client-side applications.",
    codeSnippet: {
      title: "Context API State Management",
      code: `const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('kanban-tasks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('kanban-tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};`,
      language: "javascript"
    }
  }
];
