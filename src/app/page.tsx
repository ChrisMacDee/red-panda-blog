import Image from "next/image";
import { FaRaspberryPi, FaGamepad, FaMicrochip, FaSearch } from "react-icons/fa";

// Mock data (This would come from your Markdown files later)
const posts = [
  {
    title: "O Painting",
    category: "Art",
    image: "/art-painting.jpg", // You'll need these images in public folder
    color: "bg-surface"
  },
  {
    title: "Game Development",
    category: "Code",
    image: "/game-dev.jpg",
    color: "bg-surface"
  },
  {
    title: "Raspberry Pi Projects",
    category: "Hardware",
    image: "/wires.jpg",
    color: "bg-surface"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white font-sans selection:bg-primary selection:text-white">
      
      {/* --- NAVIGATION --- */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
             {/* Logo Placeholder */}
            <span className="text-primary font-bold text-xl">🐼</span>
          </div>
          <span className="font-bold text-lg tracking-wider">RED PANDA <br/><span className="text-xs font-light">CREATIONS</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#" className="hover:text-primary transition">Home</a>
          <a href="#" className="hover:text-primary transition">Blog</a>
          <a href="#" className="hover:text-primary transition">Categories</a>
          <a href="#" className="hover:text-primary transition">About</a>
          <a href="#" className="hover:text-primary transition">Contact</a>
          <FaSearch className="cursor-pointer hover:text-primary" />
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative w-full h-[500px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
            <div className="max-w-2xl">
                {/* Circuit lines decoration */}
                <div className="absolute -left-10 top-0 text-primary opacity-50">
                    <svg width="100" height="100" viewBox="0 0 100 100">
                        <path d="M0,50 Q25,50 50,25 T100,0" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                </div>

                <h1 className="text-5xl font-bold leading-tight mb-6">
                    BUILD YOUR WORLD: ULTIMATE <br/>
                    GUIDE TO CREATIVE CODING
                </h1>
                <button className="bg-primary hover:bg-red-600 text-white px-8 py-3 rounded-full font-bold transition shadow-lg shadow-primary/30">
                    Read More
                </button>
            </div>
        </div>
      </header>

      {/* --- LATEST ARTICLES GRID --- */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-sm font-bold tracking-widest text-gray-400 mb-8 uppercase">Latest Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden cursor-pointer bg-surface border border-gray-800 hover:border-primary transition duration-300">
              <div className="h-48 bg-gray-700 relative">
                 {/* Placeholder for images */}
                 <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    [Image: {post.title}]
                 </div>
              </div>
              <div className="p-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent">
                <h3 className="font-bold text-lg">{post.title}</h3>
                <span className="text-xs text-primary uppercase font-bold">{post.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- WHAT WE'RE ABOUT --- */}
      <section className="max-w-7xl mx-auto px-8 pb-16">
        <h2 className="text-sm font-bold tracking-widest text-gray-400 mb-8 uppercase">What We're About</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            {/* Text description */}
            <div className="md:col-span-1 text-gray-400 text-sm leading-relaxed">
                Ignite your passion for making! <strong className="text-white">Red Panda Creations</strong> explores the intersection of technology, art, and pure creativity.
                <br/><br/>
                <button className="bg-primary text-white text-xs px-4 py-2 rounded-full uppercase font-bold">Learn More</button>
            </div>

            {/* Feature Cards */}
            <div className="md:col-span-3 grid grid-cols-3 gap-4">
                <div className="bg-emerald-500 p-6 rounded-xl flex flex-col items-center justify-center text-center gap-2 hover:-translate-y-1 transition">
                    <FaMicrochip className="text-3xl text-white" />
                    <h4 className="font-bold">DIY</h4>
                    <span className="text-xs text-emerald-100">Electronic wonders</span>
                </div>
                <div className="bg-pink-500 p-6 rounded-xl flex flex-col items-center justify-center text-center gap-2 hover:-translate-y-1 transition">
                    <FaGamepad className="text-3xl text-white" />
                    <h4 className="font-bold">Creative Outlets</h4>
                    <span className="text-xs text-pink-100">Abstract ideas</span>
                </div>
                <div className="bg-orange-500 p-6 rounded-xl flex flex-col items-center justify-center text-center gap-2 hover:-translate-y-1 transition">
                    <FaRaspberryPi className="text-3xl text-white" />
                    <h4 className="font-bold">Coding</h4>
                    <span className="text-xs text-orange-100">Logic & Design</span>
                </div>
            </div>
        </div>
      </section>

      {/* --- FOOTER / NEWSLETTER --- */}
      <footer className="border-t border-gray-800 bg-black py-12">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
            <div className="flex items-center gap-2">
                 <span className="text-primary text-2xl">🐼</span>
                 <span className="text-sm font-bold">JOIN OUR CREATIVE COMMUNITY</span>
            </div>
            <div className="flex gap-2">
                <input type="email" placeholder="Enter your email" className="bg-gray-800 border-none rounded-md px-4 py-2 text-sm w-64 focus:ring-1 focus:ring-primary outline-none" />
                <button className="bg-primary text-white px-6 py-2 rounded-md text-sm font-bold uppercase">Subscribe</button>
            </div>
        </div>
      </footer>

    </main>
  );
}