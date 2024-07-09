import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="bg-gray-100 text-gray-900 py-16 px-6">
      <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About us</h2>
          <p className="text-lg leading-relaxed mb-6">
            Welcome to Pharmaceutical Drug Classification System (PDCS), your premier source for comprehensive insights into drug classification methodologies. We are dedicated to providing healthcare professionals, researchers, and regulatory bodies with accurate and up-to-date information on various classification frameworks, including ATC, pharmacological, and therapeutic classifications. Our platform serves as a hub for educational resources, news updates, and collaborative opportunities aimed at enhancing global healthcare standards and promoting safe medication practices. Join us in shaping a more informed and efficient healthcare landscape.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src="aboutus.png" // Ganti dengan path yang sesuai
            alt="Our Team"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
