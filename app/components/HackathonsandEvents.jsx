"use client";
import Image from "next/image";

export default function HackathonsandEvents() {
  return (
    <section id="hackathons" className="py-20 px-6">
       <div className="text-center mb-16">
  <h2 className="text-4xl font-bold mb-4">
    Hackthons and Events
  </h2>
  <p className="text-gray-400 max-w-2xl mx-auto"> I actively participate in hackathons and technical events to improve my problem-solving skills, teamwork, and real-world development experience. </p>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

  {/* Event 1 */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
    <Image
      src="/images/eventsandHack/cmr1.png"
      alt="National Level Hackathon CMRCET"
      width={500}
      height={350}
      className="w-full h-64 object-cover"
    />
    <div className="p-4 text-center font-semibold">
      National Level Hackathon – CMRCET
    </div>
  </div>

  {/* Event 2 */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
    <Image
      src="/images/eventsandHack/chatbot.png"
      alt="Chatbot Buildathon"
      width={500}
      height={350}
      className="w-full h-64 object-cover"
    />
    <div className="p-4 text-center font-semibold">
      Campus Chatbot Buildathon
    </div>
  </div>
   
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
    <Image
      src="/images/eventsandHack/abc.png"
      alt="Chatbot Buildathon"
      width={500}
      height={350}
      className="w-full h-64 object-cover"
    />
    <div className="p-4 text-center font-semibold">
      ABC's of Machine Learning 
    </div>
  </div>
   <div className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
    <Image
      src="/images/eventsandHack/meetandgreet.png"
      alt="Chatbot Buildathon"
      width={500}
      height={350}
      className="w-full h-64 object-cover"
    />
    <div className="p-4 text-center font-semibold">
      Meet and Greet 2024
    </div>
  </div>

    <div className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
    <Image
      src="/images/eventsandHack/feed.png"
      alt="Chatbot Buildathon"
      width={500}
      height={350}
      className="w-full h-64 object-cover"
    />
    <div className="p-4 text-center font-semibold">
      The Feed Formula
    </div>
  </div>

    <div className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
    <Image
      src="/images/eventsandHack/aiagents.png"
      alt="Chatbot Buildathon"
      width={500}
      height={350}
      className="w-full h-64 object-cover"
    />
    <div className="p-4 text-center font-semibold">
      AI Agents:The New Digital Workforce
    </div>
  </div>
 

</div>
    </section>
  );
}