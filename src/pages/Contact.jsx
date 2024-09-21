import React from 'react';


const Contact = () => {
  return (
    
    <div className="flex flex-col items-center">
      <div className="bg-white shadow-md rounded-md p-8" style={{ width: '797px', height: '836px', marginTop: '203px' }}>
        <h2 className="text-4xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-center text-gray-600 mb-8">
          We consider all the drivers of change gives you the components you need to change to create a truly happens.
        </p>

        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="w-full bg-red-700 text-white p-2 rounded-lg">Send</button>
          </div>
        </form>
      </div>

      <div className="max-w-md mx-auto mt-8 text-gray-700">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold">Call Us:</h3>
            <p className="text-red-700 font-bold">+1-234-567-8900</p>
          </div>
          <div>
            <h3 className="font-bold">Hours:</h3>
            <p>Mon–Fri: 11am – 8pm</p>
            <p>Sat, Sun: 9am – 10pm</p>
          </div>
          <div>
            <h3 className="font-bold">Our Location:</h3>
            <p>123 Bridge Street</p>
            <p>Nowhere Land, LA 12345</p>
            <p>United States</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Contact;
