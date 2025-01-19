import { Link } from "react-router-dom";
import Headerr from "../../Components/Header2";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import FreeConsoulting from "../Home/Components/FreeConsoulting";
import { useEffect } from "react";

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#f9f4e8] ">
      <Headerr />
      <Header />
      {/* Main Content */}
      <main className="max-w-[80%] mx-auto px-4 py-8">
        {/* Featured Article */}
        <div className="grid md:grid-cols-2 gap-8 max-w-[80%] mx-auto  items-center bg-red-800 rounded-lg overflow-hidden mb-16">
          <div className="relative h-full">
            <img
              src="/freelancer.jpg"
              alt="AI Automation"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <p className="text-sm text-purple-200">Featured article</p>
            <h1 className="text-3xl font-bold text-white mt-2 mb-4">
              Three AI automation trends to look out for in 2025
            </h1>
            <Link href="#" className="text-blue-500 inline-flex items-center">
              Read more →
            </Link>
          </div>
        </div>

        {/* Latest Updates Section */}
        <h2 className="text-3xl font-bold mb-8">Latest updates</h2>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Topics Dropdown */}
          <select className="px-4 py-2 border rounded-lg w-full md:w-48">
            <option value="all">All topics</option>
            <option value="ai">AI & Automation</option>
            <option value="business">Business</option>
            <option value="technology">Technology</option>
          </select>

          {/* Search */}
          <input
            type="search"
            placeholder="Search"
            className="px-4 py-2 border rounded-lg flex-1"
          />

          {/* Sort */}
          <select className="px-4 py-2 border rounded-lg w-full md:w-48">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5].map((e) => (
            <div className="border rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-auto">
                <img
                  src="/image.webp"
                  
                  alt="Business Process"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <span>Jan 15, 2025</span>
                  <span>•</span>
                  <span>5 minutes</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  What is business process automation? Your guide for 2025
                </h3>
              </div>
            </div>
          ))}
          {/* Blog Post Card 1 */}
        </div>
      </main>

      <FreeConsoulting />
      <Footer />
    </div>
  );
}


