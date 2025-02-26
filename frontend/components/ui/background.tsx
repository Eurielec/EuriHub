"use client"; // 👈 Client Component

const images = [
  '/images/madrid1.png', '/images/madrid2.png', '/images/madrid3.png', '/images/madrid4.png', '/images/madrid5.png',
  '/images/madrid6.png', '/images/madrid7.png', '/images/madrid8.png', '/images/madrid9.png', '/images/madrid10.png', '/images/madrid11.png'
];

export default function Background() {
  // Divide las imágenes en franjas de 5
  const imageGroups = [
    images.slice(0, 3),
    images.slice(3, 8),
    images.slice(8, 10),
  ];

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Creación de franjas */}
      {imageGroups.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className={`absolute w-full h-32 bg-no-repeat bg-cover ${groupIndex % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right'}`}
          style={{
            display: 'flex',
            position: 'absolute',
            top: `${groupIndex * 35}%`, // Ajusta la altura de las franjas
            animation: `moveFranja ${20 + groupIndex * 5}s linear infinite`,
            justifyContent: 'space-between', // Espacio entre las imágenes
          }}
        >
          {/* Coloca las imágenes dentro de la franja */}
          {group.map((image, index) => (
            <div
              key={index}
              className="w-[15%] h-full bg-no-repeat bg-cover opacity-50"
              style={{
                backgroundImage: `url(${image})`,
                filter: "grayscale(100%) opacity(0.5)",
                backgroundSize: 'contain', // Mantener las imágenes dentro de cada franja
                backgroundPosition: 'center',
              }}
            ></div>
          ))}
        </div>
      ))}
      

      {/* Definición de la animación */}
      <style jsx>{`
        @keyframes moveFranja {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-slide-left {
          animation: moveFranja 20s linear infinite;
        }

        .animate-slide-right {
          animation: moveFranja 20s linear reverse infinite;
        }
      `}</style>
    </div>
  );
}
