const BookDemo = () => {
  return (
    <section className="bg-[#060606] md:py-8 py-6 md:px-8 px-3">
      <div className="max-w-6xl mx-auto border border-white/10 bg-gradient-to-br from-[#0B0B1F] to-[#1B012A] rounded-2xl text-center px-6 md:py-22 py-8 shadow-lg relative overflow-hidden">
        {/* Gradient Lighting Effects */}
        <div className="absolute top-0 left-0 w-60 h-60 bg-blue-800 blur-[120px] opacity-30 rounded-full -z-10"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-700 blur-[120px] opacity-30 rounded-full -z-10"></div>

        {/* Heading */}
        <h2 className="text-white text-3xl md:text-4xl font-light leading-snug">
          <span className="font-semibold bg-gradient-to-r to-[#B462CE] from-[#3F2AB2] text-transparent bg-clip-text">
            Don’t miss
          </span>{" "}
          what your customers <br className="hidden md:block" />
          are really saying
        </h2>

        {/* Button */}
        <div className="md:mt-10 mt-5">
          <button className="px-6 py-2 rounded-full text-white font-medium bg-gradient-to-r from-[#a855f7] to-[#6366f1] hover:from-[#9333ea] hover:to-[#3b82f6] transition-all duration-300">
            Book A Free Demo
          </button>
        </div>

        {/* Subtext */}
        <p className="mt-4 text-sm text-gray-400">
          Includes a free call audit + personalized ROI report
        </p>
      </div>
    </section>
  );
};

export default BookDemo;
