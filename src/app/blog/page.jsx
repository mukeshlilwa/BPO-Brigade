"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const BlogPage = () => {
  const colors = {
    primary: "#C93C3C", // theme red
    secondary: "#1E3A8A", // theme blue
    accent: "#E74C3C",
    lightBg: "#F5F7FA",
    darkText: "#333333",
    lightText: "#FFFFFF",
  };

  const blogs = [
    {
      id: "1",
      title: "The Future of Customer Support in the AI Era",
      excerpt: "How (AI) artificial intelligence  is transforming customer service operations and what it means for businesses.",
      date: "May 15, 2023",
      category: "Customer Support",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: "2",
      title: "Maximizing Efficiency with BPO Automation",
      excerpt: "Discover the top automation tools that can streamline your business process outsourcing operations.",
      date: "April 28, 2023",
      category: "Automation",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1415&q=80"
    },
    {
      id: "3",
      title: "Building a Global Remote Workforce",
      excerpt: "Best practices for managing and scaling remote teams across different time zones and cultures.",
      date: "April 10, 2023",
      category: "Workforce",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: "4",
      title: "Data Security in Outsourcing: What You Need to Know",
      excerpt: "Essential security measures to protect your data when working with outsourcing partners.",
      date: "March 22, 2023",
      category: "Security",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: "5",
      title: "The Rise of Omnichannel Customer Experience",
      excerpt: "How to create seamless customer experiences across multiple communication channels.",
      date: "March 5, 2023",
      category: "Customer Experience",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: "6",
      title: "Cost Optimization Strategies for BPO Services",
      excerpt: "Proven methods to reduce costs while maintaining quality in your outsourced operations.",
      date: "February 18, 2023",
      category: "Business Strategy",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1470&q=80"
    }
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Customer Support", "Automation", "Workforce", "Security", "Customer Experience", "Business Strategy"];

  const filteredBlogs = activeCategory === "All"
    ? blogs
    : blogs.filter(blog => blog.category === activeCategory);

  return (
    <div className="text-white">
      {/* Hero Section */}
      <div
        className="relative py-24 px-4 sm:px-6 lg:px-8 text-center text-white"
        style={{
          backgroundImage: "linear-gradient(rgba(12, 23, 42, 0.9), rgba(12, 23, 42, 0.9)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            BPO Brigade <span className="text-[#C93C3C]">Insights</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Expert knowledge and industry trends to help your business thrive
          </p>
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full py-3 px-4 rounded-lg bg-white bg-opacity-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C93C3C] text-white placeholder-gray-300"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white">
              🔍
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-[#C93C3C] text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Blog */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 border-b border-white pb-2">Featured Article</h2>
          <div className="bg-[#1E293B] rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/2">
                <Image
                  className="h-full w-full object-cover"
                  src={blogs[0].image}
                  alt={blogs[0].title}
                  width={600}
                  height={400}
                />
              </div>
              <div className="p-8 md:w-1/2">
                <div className="uppercase tracking-wide text-sm text-[#C93C3C] font-semibold mb-1">
                  {blogs[0].category}
                </div>
                <Link href={`/blog/${blogs[0].id}`} className="block mt-1 text-2xl font-semibold hover:text-[#C93C3C]">
                  {blogs[0].title}
                </Link>
                <p className="mt-3 text-gray-300">{blogs[0].excerpt}</p>
                <div className="mt-6 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-400 text-center flex items-center justify-center font-bold text-black">BB</div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">BPO Brigade Team</p>
                    <div className="text-sm text-gray-400">
                      <time dateTime={blogs[0].date}>{blogs[0].date}</time> · {blogs[0].readTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-8 border-b border-white pb-2">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.slice(1).map((blog) => (
              <motion.div
                key={blog.id}
                whileHover={{ y: -5 }}
                className="rounded-lg overflow-hidden transition-shadow shadow-md hover:shadow-xl group"
              >
                <Link href={`/blog/${blog.id}`}>
                  <div className="relative h-48 w-full">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-opacity group-hover:opacity-90"
                    />
                  </div>
                  <div className="p-6 bg-[#1E293B] group-hover:bg-gradient-to-br group-hover:from-[#C93C3C] group-hover:to-[#1E3A8A] transition-all text-white">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-semibold text-[#C93C3C] uppercase tracking-wider">
                        {blog.category}
                      </span>
                      <span className="text-xs text-gray-300">{blog.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{blog.excerpt}</p>
                    <div className="text-sm text-gray-400">
                      <time dateTime={blog.date}>{blog.date}</time>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-gradient-to-r from-[#C93C3C] to-[#1E3A8A] rounded-xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
            <p className="mb-6">Subscribe to our newsletter for the latest insights and updates</p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-gray-200"
              />
              <button className="px-6 py-3 bg-white text-[#C93C3C] font-semibold rounded-lg hover:bg-gray-200 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
