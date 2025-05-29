"use client";

import React from "react";
import { notFound } from "next/navigation";
import BlogPost from "@/app/components/Blogpost/blogpost";

const blogPosts = {
  "1": {
    title: "The Future of Customer Support in the AI Era",
    content: [
      "The customer support landscape is undergoing a radical transformation with the advent of artificial intelligence. What was once a purely human-driven function is now being augmented—and in some cases replaced—by intelligent systems capable of handling complex queries with unprecedented efficiency.",
      "At BPO Brigade, we've been at the forefront of integrating AI solutions into our customer support operations. Our data shows that AI-powered chatbots can now handle up to 70% of routine customer inquiries without human intervention, while maintaining a customer satisfaction rating of over 90%.",
      "The key benefits we've observed include:\n\n- 24/7 availability without additional staffing costs\n- Consistent responses that adhere to brand guidelines\n- Ability to scale during peak periods without quality degradation\n- Valuable data collection for continuous improvement",
      "However, the human element remains crucial. Our approach together Artificail Intelligence efficiency with human empathy, ensuring that complex or emotionally charged interactions are seamlessly transferred to skilled agents. This hybrid model delivers the best of both worlds—the speed and scalability of machines with the emotional intelligence of people.",
      "Looking ahead, we anticipate AI will continue to evolve, with natural language processing reaching near-human levels of understanding. The businesses that will thrive are those that strategically implement these technologies while maintaining a customer-centric approach."
    ],
    date: "May 15, 2023",
    category: "Customer Support",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    author: {
      name: "Sarah Johnson",
      role: "Customer Experience Director",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  },
  "2": {
    title: "Maximizing Efficiency with BPO Automation",
    content: [
      "In today's competitive business environment, efficiency isn't just an advantage—it's a necessity. Business Process Outsourcing (BPO) has long been a strategy for companies to reduce costs, but with the right automation tools, these benefits can be multiplied exponentially.",
      "At BPO Brigade, we've implemented a comprehensive automation framework that has delivered measurable results for our clients:",
      "1. **Robotic Process Automation (RPA)**: Our RPA solutions handle repetitive tasks like data entry, invoice processing, and report generation with 99.9% accuracy and at 10x the speed of human operators.",
      "2. **AI-Powered Analytics**: Machine learning algorithms analyze operational data in real-time, identifying bottlenecks and recommending optimizations that have improved process efficiency by an average of 35%.",
      "3. **Smart Workflow Systems**: Our proprietary workflow automation platform dynamically routes tasks to the most appropriate resource based on skills, availability, and priority, reducing turnaround times by 40%.",
      "The implementation of these technologies requires careful planning and change management. We recommend a phased approach, starting with the most repetitive processes and gradually expanding automation's role as the organization adapts.",
      "The results speak for themselves—our clients typically see a 50-70% reduction in operational costs while maintaining or improving service quality. The future of BPO is intelligent automation, and the time to embrace it is now."
    ],
    date: "April 28, 2023",
    category: "Automation",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
    author: {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  },
  "3": {
    title: "Building a Global Remote Workforce",
    content: [
      "The shift to remote work is no longer a temporary measure but a fundamental change in how businesses operate. Building and managing a global remote workforce presents unique challenges and opportunities that require strategic planning and cultural adaptation.",
      "At BPO Brigade, we've successfully built teams across 12 countries, and we've learned that the key to success lies in several critical factors:",
      "**Technology Infrastructure**: Implementing robust communication and collaboration tools is just the beginning. We've found that investing in:\n- Virtual private networks with global coverage\n- Cloud-based project management systems\n- Real-time performance monitoring dashboards\nhas been essential for maintaining productivity.",
      "**Cultural Integration**: Time zones and language barriers are obvious challenges, but cultural differences in work expectations and communication styles can be more subtle yet equally impactful. We address this through:\n\n- Comprehensive cultural training programs\n- Mixed-team collaborations\n- Regular virtual team-building activities",
      "**Performance Management**: Traditional supervision methods don't work with remote teams. We've developed metrics-based evaluation systems that focus on outcomes rather than hours worked, combined with regular check-ins and mentorship programs.",
      "The benefits of a well-managed global workforce are substantial—access to a broader talent pool, 24/7 operations without overtime costs, and increased employee satisfaction. The companies that will lead in the coming decade are those that master the art of remote workforce management."
    ],
    date: "April 10, 2023",
    category: "Workforce",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    author: {
      name: "Steve Jobz",
      role: "Global Operations Director",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg"
    }
  }
};

export default function BlogPostPage({ params }) {
  const resolvedParams = React.use(params);
  const { id } = resolvedParams;
  const post = blogPosts[id];

  if (!post) {
    return notFound();
  }

  return <BlogPost post={post} />;
}