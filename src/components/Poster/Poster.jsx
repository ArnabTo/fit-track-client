import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Poster = () => {
  return (
    <div className="py-[120px]">
      <Marquee autoFill={true} speed={30}>
        <div className="flex flex-col gap-6">
          <Image
            src="https://shorturl.at/lKQZ1"
            alt="poster img 1"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: 'auto', height: '350px' }}
          />
          <Image
            src="https://shorturl.at/aikPQ"
            priority
            alt="poster img 2"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '500px', height: '350px' }}
          />
          <Image
            src="https://shorturl.at/hCDEL"
            alt="poster img 3"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '500px', height: '350px' }}
          />
        </div>
        <div className=" mx-6 flex flex-col gap-6">
          <Image
            src="https://shorturl.at/cewVX"
            alt="poster img 4"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '500px', height: '350px' }}
          />
          <Image src="https://t.ly/B2eTb" alt="poster img 5" width="0"
            height="0"
            sizes="100vw"
            style={{ width: '500px', height: '350px' }} />
          <Image src="https://t.ly/lLzEX" alt="poster img 6" width="0"
            height="0"
            sizes="100vw"
            style={{ width: '500px', height: '350px' }} />
        </div>
      </Marquee>
      <div className="bg-black">
        <Marquee pauseOnHover={true} speed={80}>
          <div className="text-white p-6 italic flex gap-10">
            <p>
            “I hate every minute of training. But I said, don’t quit. Suffer
              now and live the rest of your life as a champion.” — Mohamm1ad Ali
            </p>
            <p>
              “If it doesn’t challenge you, it won’t change you.” — Fred Devito
            </p>
            <p>
              “You’re only one workout away from a good mood.” — Health Coach
              Maria Marlowe
            </p>
            <p>
              “You can have results or excuses, but not both.” — Arnold
              Schwarzenegger
            </p>
            <p>“Nothing will work unless you do.” — Maya Angelou</p>
            <p>
              “Start where you are. Use what you have. Do what you can.” —
              Arthur Ashe
            </p>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Poster;
