const Contact: React.FC = () => {
  return (
    <section className="flex items-center justify-center min-h-screen px-4 text-white bg-black">
      <div className="relative max-w-md p-8 text-center rounded-lg shadow-lg sm:p-12 bg-gradient-to-b from-gray-800 to-black sm:max-w-3xl">
        {/* Background Stars */}
        <div className="absolute inset-0 bg-[url('https://source.unsplash.com/featured/?stars,space')] bg-cover bg-center opacity-10"></div>

        {/* Space Elements */}
        <div className="absolute w-16 h-16 bg-blue-500 rounded-full -top-10 -left-10 sm:-top-12 sm:-left-12 sm:w-24 sm:h-24 blur-xl opacity-30"></div>
        <div className="absolute w-24 h-24 bg-purple-500 rounded-full -bottom-10 -right-10 sm:-bottom-12 sm:-right-12 sm:w-36 sm:h-36 blur-2xl opacity-30"></div>

        {/* Content */}
        <h2 className="mb-4 text-3xl font-bold text-blue-400 sm:text-4xl sm:mb-6">
          Get in Touch !
        </h2>
        <p className="mb-6 text-base text-gray-400 sm:text-lg sm:mb-8">
          Have a question or just want to say hello? Click the button below to send me an email. I look forward to hearing from you!
        </p>
        <a
          href="mailto:delerue.carolina@gmail.com"
          className="inline-block px-6 py-3 text-lg font-semibold text-white transition duration-200 transform rounded-lg shadow-lg sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 sm:text-xl"
        >
          Send Me a Message 🚀
        </a>
      </div>
    </section>
  );
};

export default Contact;
