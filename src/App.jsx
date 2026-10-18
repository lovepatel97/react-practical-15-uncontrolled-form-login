import React from "react";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve values using simple JavaScript DOM methods
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    // Display the submitted information using simple JavaScript
    const resultBox = document.getElementById("resultBox");
    const resultUsername = document.getElementById("resultUsername");
    const resultPassword = document.getElementById("resultPassword");

    resultUsername.textContent = username;
    resultPassword.textContent = password;
    resultBox.classList.remove("hidden");
  };

  const handleClear = () => {
    // Reset form and hide result box using simple JavaScript
    document.getElementById("loginForm").reset();
    document.getElementById("resultBox").classList.add("hidden");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 text-gray-800">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Uncontrolled Login Form
        </h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          Values retrieved & displayed using simple JavaScript (no useState, no useRef)
        </p>

        <form id="loginForm" onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Log In
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="px-4 bg-gray-200 text-gray-700 py-2.5 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Clear
            </button>
          </div>
        </form>

        {/* Display Submitted Information via simple JavaScript */}
        <div id="resultBox" className="hidden mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h3 className="text-md font-bold text-blue-900 mb-2 flex items-center gap-1.5">
            <span>🔐</span> Submitted Login Information:
          </h3>
          <div className="text-sm space-y-1 text-gray-700">
            <p>
              <strong>Username:</strong> <span id="resultUsername" className="font-semibold text-blue-700"></span>
            </p>
            <p>
              <strong>Password:</strong> <span id="resultPassword" className="font-semibold text-blue-700"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
