import React from 'react';

const ProjectSponsor = () => {
  const sponsors = [
    {
      name: 'Dini Nurmalasari, S.T., M.T.',
      role: 'Dosen Penambangan Data',
      imageUrl: 'budini.jpeg' 
    },
    {
      name: 'Muhammad Mahrus Zain, S.S.T., M.T.I.',
      role: 'Dosen Framework Lanjutan',
      imageUrl: 'pakmahruz.jpeg' 
    },
    {
      name: 'Mardhiah Fadli, S.T., M.T.',
      role: 'Dosen Manajemen Project',
      imageUrl: 'bumardinah.jpg' 
    }
  ];

  return (
    <section id="sponsors" className="bg-gray-100 text-gray-900 py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Project Sponsor</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className="bg-white p-6 shadow-lg rounded-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <img 
                src={sponsor.imageUrl} 
                alt={sponsor.name} 
                className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-gray-300"
              />
              <p className="text-xl font-semibold text-gray-800">{sponsor.name}</p>
              <p className="text-gray-600">{sponsor.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSponsor;
