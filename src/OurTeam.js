import React from 'react';

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'Marcellino Kosasih',
      role: 'Full-Stack',
      imageUrl: 'marcel.jpg' // Ganti dengan URL gambar yang sesuai
    },
    {
      name: 'Afri Hakim',
      role: 'Data Analyst',
      imageUrl: 'hakim.jpeg' // Ganti dengan URL gambar yang sesuai
    }
  ];

  return (
    <section id="ourteam" className="relative bg-[#E1EEFF] text-gray-900 py-16 px-6" style={{ backgroundImage: "url('/bg3.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-[#E1EEFF] bg-opacity-70"></div>
      <div className="relative z-10 container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white p-6 shadow-lg rounded-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl w-72"
            >
              <div className="w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full border-4 border-gray-300">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{member.name}</h3>
              <p className="text-lg text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
