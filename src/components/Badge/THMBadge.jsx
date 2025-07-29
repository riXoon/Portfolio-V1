import React from 'react';

const THMBadge = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-52">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">TryHackMe Badge</h1>
      <div className="w-full flex justify-center">
        <div className="relative left-14 flex items-center justify-center scale-[1.3] md:scale-[2] mt-24">
          <iframe
            src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=4777558"
            title="TryHackMe Badge"
            frameBorder="0"
            width={400}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default THMBadge;
