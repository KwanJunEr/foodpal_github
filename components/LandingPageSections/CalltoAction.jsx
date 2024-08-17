import React from 'react';

const CalltoAction = ({ handleLoggedIn }) => {
  return (
    <section className="bg-[#C0360B] text-white py-16 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-4">Join the Movement!</h1>
        <p className="text-lg mb-6">
          Connect your wallet to start participating in transforming food waste into opportunities. 
          Make a difference today by donating, buying, or selling surplus food. 
          Every action counts!
        </p>
        <button
          onClick={handleLoggedIn}
          className="bg-white text-[#C0360B] py-3 px-6 rounded-lg shadow-lg font-semibold hover:bg-gray-100 transition-transform transform hover:scale-105"
        >
          Connect Wallet
        </button>
      </div>
    </section>
  );
}

export default CalltoAction;

