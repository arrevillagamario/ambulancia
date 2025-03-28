import React from "react";

function App() {
  return (
    <div className="h-screen">
      <div className="bg-black text-white ">
        {/* Header */}
        <header className="flex justify-between items-center px-4 py-7 border-b border-gray-700">
          <img width={300} src="/img/logo.png" alt="Logo de la empresa" />
          <nav className="space-x-6">
            <a href="#home" className="hover:text-red-500">
              HOME
            </a>
            <a href="#contact" className="hover:text-red-500">
              CONTACT
            </a>
            <a href="#services" className="hover:text-red-500">
              OUR SERVICE
            </a>
          </nav>
        </header>

        {/* Main Content */}
        <main className="p-8">
          <div className="flex items-center">
            <section className="w-1/4 ">
              <h2 style={{ fontFamily: "Bebas Neue", fontSize: 150 }}>OUR</h2>
              <h2
                style={{
                  fontFamily: "Bebas Neue",
                  fontSize: 150,
                  marginTop: -80,
                }}
              >
                AMBULANCE
              </h2>
            </section>
            <div className="w-1/4 "></div>
            <img
              src="/img/ambulancia.jpg"
              style={{ height: 420 }}
              alt="Ambulancia"
              className=" w-1/2 rounded-4xl shadow-lg"
            />
          </div>
        </main>
      </div>
      <section className="bg-red-600 py-9">
        <section
          className="w-full font-bold text-white"
          style={{ fontSize: 22 }}
        >
          <div className="flex justify-center space-x-20">
            <p>
              DISPATCH CONTACT 1866-445-1867 <br />
              SERVICE BASIC LIFE SUPPORT BLS TRANSPORTATION <br />
              OPEN 24/7
            </p>
            <p>
              EMAIL: MERCURYAMBULANCEDISPATCH@GMAIL.COM <br />
              SERVING LOS ANGELES COUNTY CITIES
            </p>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
