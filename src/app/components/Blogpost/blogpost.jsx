"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const BlogPost = ({ post }) => {
  const router = useRouter();

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <button 
            onClick={() => router.push('/blog')}
            className="px-6 py-3 bg-[#C93C3C] text-white rounded-lg hover:bg-[#b53535] transition-colors"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="text-white">
      {/* Article Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-30 pb-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center space-x-4 mb-6">
            <button 
              onClick={() => router.back()}
              className="text-white hover:text-[#C93C3C] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <span className="text-sm font-medium text-[#C93C3C] uppercase tracking-wider">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {post.title}
          </h1>

          <div className="flex items-center space-x-4 mb-8">
            <div className="flex-shrink-0">
              <Image
                className="h-10 w-10 rounded-full"
                src={post.author.avatar}
                alt={post.author.name}
                width={40}
                height={40}
              />
            </div>
            <div>
              <p className="text-sm font-medium text-white">{post.author.name}</p>
              <div className="flex space-x-1 text-sm text-gray-300">
                <time dateTime={post.date}>{post.date}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto mb-12">
        <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-xl">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={675}
            className="object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="prose prose-invert prose-lg text-white max-w-none">
          {post.content.map((paragraph, index) => (
            <p key={index} className="mb-6">
              {paragraph.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          ))}
        </div>

        {/* Author Bio */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                className="h-16 w-16 rounded-full"
                src={post.author.avatar}
                alt={post.author.name}
                width={64}
                height={64}
              />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-white">{post.author.name}</h3>
              <p className="text-[#C93C3C]">{post.author.role}</p>
              <p className="mt-2 text-gray-300">
                {post.author.name} has over 10 years of experience in {post.category.toLowerCase()} and regularly contributes insights to the BPO Brigade blog.
              </p>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-white mb-6">More from our blog</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(BlogPost)
              .filter(([id]) => id !== post.id)
              .slice(0, 2)
              .map(([id, blog]) => (
                <div key={id} className="border border-gray-700 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <span className="text-xs font-semibold text-[#C93C3C] uppercase tracking-wider">
                      {blog.category}
                    </span>
                    <h4 className="text-lg font-semibold text-white mt-2 mb-2 hover:text-[#C93C3C] transition-colors">
                      <Link href={`/blog/${id}`}>{blog.title}</Link>
                    </h4>
                    <p className="text-sm text-gray-400">{blog.date}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Want more insights like this?</h2>
            <p className="mb-6 text-gray-300">Subscribe to our newsletter for the latest industry trends and expert advice.</p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#C93C3C] focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-[#C93C3C] hover:bg-[#b53535] rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;