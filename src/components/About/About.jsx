import ReactTypingEffect from 'react-typing-effect';
// import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/1 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Simolee Patel
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Software Engineer',
                'API Specialist',
                'Realtime App Developer',
                'Socket.io Specialist',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-sm sm:text-base md:text-base text-gray-400 mb-10 mt-8 leading-relaxed">
            Software Developer with 3+ years of experience in building scalable web applications, real-time systems, and custom admin
            panels. Skilled in backend development using Node.js, MongoDB, Redis, and Socket.io, with frontend experience in React.js
            and EJS.
            Strong background in developing real-time 2D multiplayer games, designing RESTful APIs, and integrating frontend-backend
            systems. Experienced with microservices architecture (NestJS, RabbitMQ) and deployment using AWS, PM2, and Vercel.
            Known for writing clean, efficient code and delivering high-performance,
            passionate about continuous learning to keep up with evolving technologies.
          </p>
          {/* Resume Button */}
<div className="flex justify-center">
  <a
    href="https://drive.google.com/file/d/1kV523iXO3GlNq8IwVOQqhVFp3Sr3t3sg/view?usp=drive_link"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block text-white py-2.5 px-7 rounded-full mt-5 text-base font-bold transition duration-300 transform hover:scale-105"
    style={{
      background: 'linear-gradient(90deg, #8245ec, #a855f7)',
      boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
    }}
  >
    DOWNLOAD CV
  </a>
</div>
        </div>
      </div>
    </section>
  );
};

export default About;
