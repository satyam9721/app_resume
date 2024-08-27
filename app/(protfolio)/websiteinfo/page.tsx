import React from 'react';

const WebsiteInformation: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
    
      <p className="text-[#ffcd67] text-xl  mb-4">
        This website is built by Aman Gupta with the latest web development technologies to ensure a fast, scalable, and user-friendly experience. Below are the key technologies and their respective roles in the website:
      </p>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Technologies Used:</h2>
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Next.js:</h3>
          <p className="text-[#ffcd67] mb-2">
            <strong>Role:</strong> Next.js is a React framework that provides a powerful toolset for server-side rendering and static site generation. It enhances SEO and performance.
          </p>
          <h4 className="text-lg font-bold mb-2">Features:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Automatic Static Optimization: Combines the best of static site generation and server-side rendering.</li>
            <li>API Routes: Allows building API endpoints with ease.</li>
            <li>File-based Routing: Simplifies the creation of dynamic routes.</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">TypeScript:</h3>
          <p className="text-[#ffcd67] mb-2">
            <strong>Role:</strong> TypeScript is a superset of JavaScript that adds static types, which help catch errors early and improve code maintainability.
          </p>
          <h4 className="text-lg font-bold mb-2">Features:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Static Typing: Reduces runtime errors by catching issues during development.</li>
            <li>IntelliSense: Provides better code completion and understanding in modern IDEs.</li>
            <li>Type Inference: Automatically deduces types to enhance developer experience.</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Tailwind CSS:</h3>
          <p className="text-[#ffcd67] mb-2">
            <strong>Role:</strong> Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup.
          </p>
          <h4 className="text-lg font-bold mb-2">Features:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Responsive Design: Facilitates the creation of responsive layouts with ease.</li>
            <li>Customization: Allows extensive configuration to fit any design needs.</li>
            
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Framer Motion:</h3>
          <p className="text-[#ffcd67] mb-2">
            <strong>Role:</strong> Framer Motion is a powerful library for animations in React applications.
          </p>
          <h4 className="text-lg font-bold mb-2">Features:</h4>
          <ul className="list-disc list-inside mb-4">
            <li>Declarative Animations: Simplifies the process of creating animations with an intuitive API.</li>
            <li>Layout Animations: Provides smooth transitions between different states.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WebsiteInformation;
