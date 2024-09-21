import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome to HT Version 1.0.0+
        </h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Perfectly designed and precisely prepared admin theme with over 50 pages and new web app views.
        </p>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              placeholder="Mật khẩu"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <a href="/" className="text-blue-600 text-sm">
              Quên mật khẩu?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Đăng nhập
          </button>
        </form>
        <p className="text-xs text-center text-gray-700 mt-4">
          Chào mừng bạn đến với hệ thống bất động sản version 1.0 của HT
        </p>
      </div>
    </div>
  );
};

export default Login;
