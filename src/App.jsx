import React, { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showServiceModal, setShowServiceModal] = useState(false);

  const handleCloseModal = () => {
    setShowContactModal(false);
    setShowServiceModal(false);
  };

  return (
    <div style={{ fontFamily: "Bebas Neue", fontSize: 30, minHeight: '100vh' }} className="flex flex-col">
      <div className="bg-neutral-800 text-white flex-grow">
        {/* Header (sin cambios) */}
        <header className="flex justify-between items-center px-6 py-3 border-b border-gray-700">
          <img width={200} src="/img/logo.png" alt="Logo de la empresa" />
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-red-500" onClick={() => setShowContactModal(true)}>
              CONTACT
            </a>
            <a href="#" className="hover:text-red-500" onClick={() => setShowServiceModal(true)}>
              OUR SERVICE
            </a>
          </nav>
          <button className="md:hidden text-white focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </button>
        </header>

        {/* Menú desplegable (sin cambios) */}
        {isMenuOpen && (
          <nav className="md:hidden bg-neutral-700 p-4">
            <a href="#" className="block py-2 hover:text-red-500" onClick={() => { setShowContactModal(true); setIsMenuOpen(false); }}>
              CONTACT
            </a>
            <a href="#" className="block py-2 hover:text-red-500" onClick={() => { setShowServiceModal(true); setIsMenuOpen(false); }}>
              OUR SERVICE
            </a>
          </nav>
        )}

        {/* Main Content - Cambios aquí */}
        <main className="p-8 flex-grow min-h-0">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start">
            {/* Texto - ahora ocupa todo el ancho en móvil */}
            <section className="w-full text-center lg:w-1/4 lg:text-left mb-8 lg:mb-0">
              <h2 style={{ fontSize: "11vw" }} className="font-bebas text-4xl md:text-6xl lg:text-8xl">
                OUR
              </h2>
              <h2 style={{ fontSize: "11vw" }} className="font-bebas text-4xl md:text-6xl lg:text-8xl -mt-2">
                AMBULANCE
              </h2>
            </section>
            
            {/* Espacio solo en desktop */}
            <div className="w-1/3 hidden lg:block"></div>
            
            {/* Imagen - centrada en móvil, normal en desktop */}
            <div className="w-full lg:w-auto flex justify-center">
              <img
                src="/img/ambulancia.jpg"
                
                alt="Ambulancia"
                className="rounded-4xl shadow-lg h-60 lg:h-90"
              />
            </div>
          </div>
        </main>
      </div>

      {/* Resto del código (sin cambios) */}
      <section style={{ fontSize: "2vw" }} className="bg-red-800 py-6 text-center text-white text-sm md:text-lg">
        <p>DISPATCH CONTACT: 1866-445-1867 | OPEN 24/7 | BASIC LIFE SUPPORT BLS TRANSPORTATION</p>
        <p style={{ fontSize: "1.7vw" }} className="mt-2">EMAIL: MERCURYAMBULANCEDISPATCH@GMAIL.COM</p>
      </section>

      {showContactModal && (
        <div className="fixed top-3 right-5 w-4/5 max-w-full h-auto bg-neutral-700 text-white p-6 shadow-lg rounded-bl-lg md:w-96">
          <h3 className="text-2xl font-bold">Contact Us</h3>
          <div className="mt-4 flex items-center space-x-3">
            <p className="font-bold">1866-445-1867</p>
          </div>
          <div className="mt-3 flex items-center space-x-3">
            <p className="text-sm">MERCURYAMBULANCEDISPATCH@GMAIL.COM</p>
          </div>
          <button onClick={handleCloseModal} className="absolute top-2 right-3 text-white text-lg hover:text-red-400">
            ✖
          </button>
        </div>
      )}

      {showServiceModal && (
        <div className="fixed top-3 right-5 w-4/5 max-w-full h-auto bg-neutral-700 text-white p-6 shadow-lg rounded-bl-lg md:w-96">
          <h3 className="text-4xl font-bold mb-2 mt-5">Our Service</h3>
          <p className="text-xl">
            We are an ambulance company committed to providing basic life
            support transportation, available 24 hours a day.
          </p>
          <p className="text-xl mt-5">Serving Los Angeles County Cities.</p>
          <button onClick={handleCloseModal} className="absolute top-2 right-3 text-white text-lg hover:text-red-400">
            ✖
          </button>
        </div>
      )}
    </div>
  );
}

export default App;