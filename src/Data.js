import React from 'react';
import Slider from 'react-slick';
import Card from './Card'; // Sesuaikan path dengan struktur proyek Anda

const Data = () => {
  const dataCards = [
    { 
      title: 'Alaxan', 
      description: 'Alaxan is a pain reliever composed of paracetamol and ibuprofen, used for relief of mild to moderate pain.', 
      image: 'alaxan.jpg' 
    },
    { 
      title: 'Bactidol', 
      description: 'Bactidol is an antiseptic mouthwash that helps kill germs and bacteria in the mouth and throat.', 
      image: 'bactidol.jpg' 
    },
    { 
      title: 'Bioflu', 
      description: 'Bioflu is a medication used for the relief of cold symptoms, including nasal congestion, headache, and fever.', 
      image: 'bioflu.jpg' 
    },
    { 
      title: 'Biogesic', 
      description: 'Biogesic contains paracetamol and is used to relieve mild to moderate pain and reduce fever.', 
      image: 'biogesic.jpg' 
    },
    { 
      title: 'DayZinc', 
      description: 'DayZinc is a vitamin and mineral supplement that supports the immune system and overall health.', 
      image: 'dayzinc.jpg' 
    },
    { 
      title: 'Decolgen', 
      description: 'Decolgen is a medication used to relieve symptoms of colds and allergies, including nasal congestion and cough.', 
      image: 'decolgen.jpg' 
    },
    { 
      title: 'Fish Oil', 
      description: 'Fish Oil supplements provide omega-3 fatty acids that support heart health and reduce inflammation.', 
      image: 'fishoil.jpg' 
    },
    { 
      title: 'Kremil S', 
      description: 'Kremil S is an antacid that helps relieve symptoms of indigestion, heartburn, and stomach upset.', 
      image: 'kremils.jpg' 
    },
    { 
      title: 'Medicol', 
      description: 'Medicol is a pain reliever that contains paracetamol and caffeine, providing relief from headache and body aches.', 
      image: 'medicol.jpg' 
    },
    { 
      title: 'Neozep', 
      description: 'Neozep is a medication for nasal congestion and sinus relief, helping to relieve cold and allergy symptoms.', 
      image: 'neozep.jpg' 
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="data" className="relative bg-[#E1EEFF] text-gray-900 py-16 px-6" style={{ backgroundImage: "url('/bg4.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-[#E1EEFF] bg-opacity-70"></div>
      <div className="relative z-10 container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Data</h2>
        <Slider {...settings}>
          {dataCards.map((data, index) => (
            <Card key={index} image={data.image} title={data.title} description={data.description} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Data;
