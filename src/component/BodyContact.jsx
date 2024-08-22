import sent from "../assets/sentmailwhite.png";

const BodyContact = () => {
  return (
    <div className="bg-gray-400 p-5">
      <form>
        {/* Name Input */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Your name"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Your email"
          />
        </div>

        {/* Message Input */}
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Your message"
          />
        </div>

        {/* Submit Button */}
        <div className="text-start">
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-full  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center space-x-3 transition-transform transform hover:scale-105 group"
          >
            <img src={sent} alt="Send Icon" className="w-5 h-5" />
            <span className="font-medium transition-colors">Send Message</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default BodyContact;
