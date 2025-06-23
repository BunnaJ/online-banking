"use client";

import React, { useState } from "react";

export default function UserProfile() {
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState({
    firstName: "Chibunna",
    lastName: 'kelvin',
    email: "chibunna@example.com",
    phone: "+234 812 345 6789",
    birthDate: '1995-06-12',
    gender: 'male',
    religion: 'christian',
    state: 'newyork',
    city: 'los ange',
    country: 'usa',
    joined: "2024-02-15",
    image: "https://ui-avatars.com/api/?name=Chibunna+JP",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Submit updated user profile logic
    setEditing(false);
    alert("Profile saved!");
  };

  return (
    <div className="md:w-full">
      <div className="md:max-w-4xl bg-white rounded-xl p-6 md:p-10 space-y-6 md:flex md:items-start md:gap-10">
        {/* Avatar */}
        <div className="flex-shrink-0 text-center md:text-left">
          <img
            src={user.image}
            alt="User avatar"
            className="w-32 h-32 rounded-full mx-auto md:mx-0"
          />
          <p className="text-sm text-gray-500 mt-2">Joined on {user.joined}</p>
        </div>

        {/* Info */}
        <div className="flex-1 space-y-6">
          <h2 className="md:text-2xl text-lg font-bold text-gray-800">User Profile</h2>

          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">FirstName</label>
            <input
              type="text"
              name="name"
              disabled={!editing}
              value={user.firstName}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                editing ? "bg-white focus:ring-blue-500" : "bg-gray-100"
              }`}
            />
          </div>
          {/* last name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">LastName</label>
            <input
              type="text"
              name="name"
              disabled={!editing}
              value={user.lastName}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                editing ? "bg-white focus:ring-blue-500" : "bg-gray-100"
              }`}
            />
          </div>


          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              disabled={!editing}
              value={user.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                editing ? "bg-white focus:ring-blue-500" : "bg-gray-100"
              }`}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              disabled={!editing}
              value={user.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                editing ? "bg-white focus:ring-blue-500" : "bg-gray-100"
              }`}
            />
          </div>
              {/* birth */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Birth Date</label>
            <input
              type="text"
              name="name"
              disabled={!editing}
              value={user.birthDate}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                editing ? "bg-white focus:ring-blue-500" : "bg-gray-100"
              }`}
            />
          </div>

                    {/* gender */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Gender</label>
            <input
              type="text"
              name="name"
              disabled={!editing}
              value={user.gender}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                editing ? "bg-white focus:ring-blue-500" : "bg-gray-100"
              }`}
            />
          </div> 
                     {/* religion */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Religion</label>
            <input
              type="text"
              name="name"
              disabled={!editing}
              value={user.religion}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                editing ? "bg-white focus:ring-blue-500" : "bg-gray-100"
              }`}
            />
          </div>

                 {/* state */}
                 <div>
            <label className="block text-gray-700 font-medium mb-1">State</label>
            <input
              type="text"
              name="name"
              disabled={!editing}
              value={user.state}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                editing ? "bg-white focus:ring-blue-500" : "bg-gray-100"
              }`}
            />
          </div>

                     {/* city */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">City</label>
            <input
              type="text"
              name="name"
              disabled={!editing}
              value={user.city}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                editing ? "bg-white focus:ring-blue-500" : "bg-gray-100"
              }`}
            />
          </div>

                     {/* country */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Country</label>
            <input
              type="text"
              name="name"
              disabled={!editing}
              value={user.country}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                editing ? "bg-white focus:ring-blue-500" : "bg-gray-100"
              }`}
            />
          </div>


          {/* Buttons */}
          <div className="pt-4 flex gap-4">
            {editing ? (
              <>
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditing(false)}
                  className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setEditing(true)}
                className="px-6 py-2 bg-[var(--main)] text-white rounded-md hover:bg-opacity-90"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
    