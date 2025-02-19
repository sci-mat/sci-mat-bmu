import Lottie from "lottie-react";
import animationdata from "../assets/contact_us.json";

const Contactus = () => {
  return (
    <section id="contact" className="mt-10">
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="flex flex-col md:flex-row justify-center items-center font-body p-6 md:p-10 w-full max-w-6xl gap-10">
          {/* Animation Section */}
          <div className="flex w-full md:w-1/3 justify-center items-center p-6 rounded-lg shadow-md">
            <Lottie
              animationData={animationdata}
              className="w-full max-w-xs md:max-w-sm"
            />
          </div>

          {/* Form Section */}
          <div className="flex flex-col w-full md:w-1/2">
            <form className="w-full max-w-md mx-auto p-4 bg-black rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-center mb-6 text-white">
                Contact Us
              </h2>

              <div className="flex flex-col gap-6">
                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    className="w-full px-5 py-4 border border-gray-600 rounded outline-none focus:border-white bg-black text-white peer"
                  />
                  <label className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 peer-focus:top-1 peer-focus:left-4 peer-focus:text-xs peer-focus:text-white bg-black px-2 transition-all">
                    Name
                  </label>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    className="w-full px-5 py-4 border border-gray-600 rounded outline-none focus:border-white bg-black text-white peer"
                  />
                  <label className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 peer-focus:top-1 peer-focus:left-4 peer-focus:text-xs peer-focus:text-white bg-black px-2 transition-all">
                    Email
                  </label>
                </div>

                {/* Message Input */}
                <div className="relative">
                  <textarea
                    name="message"
                    className="w-full min-h-[100px] px-5 py-4 border border-gray-600 rounded outline-none focus:border-white bg-black text-white resize-none peer"
                  />
                  <label className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 peer-focus:top-1 peer-focus:left-4 peer-focus:text-xs peer-focus:text-white bg-black px-2 transition-all">
                    How Can We Help
                  </label>
                </div>

                {/* Submit Button */}
                <button className="w-full bg-black text-white py-3 rounded-lg border-2 border-gray-400 hover:text-black hover:bg-white duration-700">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
