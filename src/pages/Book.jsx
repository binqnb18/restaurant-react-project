import React from 'react';
import Layout from '../Layouts/Layout';

const Book = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center min-h-screen" style={{ marginTop: '-150px' }}>
        <div 
          className="text-center mb-6"
          style={{ width: '576px', height: '176px', marginTop: '203px' }}
        >
          <h1 className="text-6xl font-bold mb-6">Book A Table</h1>
          <p className="text-gray-600 text-lg">
            We consider all the drivers of change gives you the components
            you need to change to create a truly happens.
          </p>
        </div>

        <div 
          className="bg-white shadow-md rounded-md p-8 border border-gray-300"
          style={{ width: '650px', height: '400px' }}
        >
          <form>
            <div className="grid grid-cols-2 gap-6 mb-4">
              <div>
                <label htmlFor="date" className="block text-gray-700">Date</label>
                <div className="relative">
                  <input
                    type="text"
                    id="date"
                    name="date"
                    placeholder="04/01/2021"
                    className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <span className="absolute inset-y-0 right-3 flex items-center">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M6 2a1 1 0 00-1 1v1H3a1 1 0 000 2h1v11a2 2 0 002 2h8a2 2 0 002-2V6h1a1 1 0 100-2h-2V3a1 1 0 00-1-1H6zm3 9V8a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H7a1 1 0 110-2h2z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div>
                <label htmlFor="time" className="block text-gray-700">Time</label>
                <div className="relative">
                  <input
                    type="text"
                    id="time"
                    name="time"
                    placeholder="06:30 PM"
                    className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <span className="absolute inset-y-0 right-3 flex items-center">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M12 8c0-.6-.4-1-1-1H8V5.5c0-.3.3-.5.5-.5h.5a.5.5 0 000-1H9c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h3c.6 0 1-.4 1-1V8zM10 1a9 9 0 110 18A9 9 0 0110 1zM4.1 15.9a8 8 0 1111.3 0L12 12.7a4 4 0 10-4 0l-3.9 3.2z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="x-xxx-xxx-xxxx"
                  className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="total_person" className="block text-gray-700">Total Person</label>
              <select
                id="total_person"
                name="total_person"
                className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option>1 Person</option>
                <option>2 Persons</option>
                <option>3 Persons</option>
                <option>4 Persons</option>
              </select>
            </div>  

            <div className="text-center">
              <button type="submit" className="w-full bg-red-700 text-white p-3 rounded-3xl">Book A Table</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Book;
