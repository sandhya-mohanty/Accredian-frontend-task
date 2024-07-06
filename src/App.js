import React, { useState } from 'react';
import './index.css';
import ReferralModal from './ReferralModal';
import referImage from './assets/referimage.jpg';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-gray-100 flex flex-col md:flex-row items-center justify-around w-full lg:w-3/4 mx-auto mt-20 p-6 rounded-lg shadow-md">
      <div className="text-black text-center lg:text-left">
        <h1 className="text-2xl lg:text-4xl font-bold">Let's Learn & Earn</h1>
        <p className="pt-4 text-lg lg:text-xl">
          Get a Chance to win up-to <span className="text-blue-400 text-xl lg:text-2xl font-bold">Rs. 15,000</span>
        </p>
        <div className="pt-6">
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            onClick={() => setShowModal(true)}
          >
            Refer Now
          </button>
        </div>
      </div>
      <div className="mt-6 lg:mt-0">
        <img src={referImage} alt="Refer" className="object-cover w-32 lg:w-40" />
      </div>
      {showModal && <ReferralModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;
