import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  from: string;
  to: string;
  topic: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    from: '',
    to: '',
    topic: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Message sent:', formData);
    setFormData({
      from: '',
      to: '',
      topic: '',
      message: '',
    });
  };

  return (
    <section className="flex items-center justify-center text-white bg-gray-900">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="mb-4 text-xl font-bold text-center">New message to Carolina</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* From Field */}
          <div>
            <label htmlFor="from" className="block mb-1 text-sm text-gray-400">From:</label>
            <input
              type="email"
              id="from"
              name="from"
              value={formData.from}
              onChange={handleChange}
              placeholder="delerue.carolina@gmail.com"
              className="w-full px-3 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* To Field */}
          <div>
            <label htmlFor="to" className="block mb-1 text-sm text-gray-400">To:</label>
            <input
              type="text"
              id="to"
              name="to"
              value={formData.to}
              onChange={handleChange}
              placeholder="Carolina Delerue"
              className="w-full px-3 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Topic Select */}
          <div>
            <label htmlFor="topic" className="block mb-1 text-sm text-gray-400">Please select a topic:</label>
            <select
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className="w-full px-3 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>Select a topic</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Support">Support</option>
              <option value="Feedback">Feedback</option>
            </select>
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block mb-1 text-sm text-gray-400">Your message here:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              className="w-full px-3 py-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white transition duration-200 bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
