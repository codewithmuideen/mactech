import React, { useState } from 'react';

const Login = () => {
  const [siteAddress, setSiteAddress] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (siteAddress) {
      console.log(`Attempting to log in to: ${siteAddress}.mactechnigeria.com`);
      // window.location.href = `https://${siteAddress}.mactechnigeria.com/login`;
    } else {
      setShowModal(true); // Show modal instead of alert
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white font-sans">
      <div className="w-full max-w-xl p-10 space-y-8"> {/* Wider than default */}
        <div>
          <h2 className="text-center text-3xl font-medium text-gray-900">
            Log in to your MacTech account
          </h2>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="site-address" className="sr-only">MacTech site address</label>
            <div className="flex rounded-md border border-gray-300 shadow-sm focus-within:ring-2 focus-within:ring-indigo-600 focus-within:border-indigo-600">
              <input
                id="site-address"
                name="site-address"
                type="text"
                autoComplete="off"
                required
                className="block w-full appearance-none rounded-l-md border-0 px-3 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                placeholder="Enter your MacTech site address"
                value={siteAddress}
                onChange={(e) => setSiteAddress(e.target.value)}
              />
              <span className="inline-flex items-center rounded-r-md border-l border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                .mactechnigeria.com
              </span>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-3 px-4 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Go to Login
            </button>
          </div>
        </form>

        {/* Footer Links - inline */}
        <div className="flex justify-between text-sm text-gray-600">
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline">
            Forgotten your site address?
          </a>
          <span>
            Don't have an account?{' '}
            <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline">
              Sign up here
            </a>
          </span>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold text-gray-800">Missing Site Address</h3>
            <p className="mt-2 text-sm text-gray-600">
              Please enter your MacTech site address to continue.
            </p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
