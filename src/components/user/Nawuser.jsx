import React from 'react';


const NewUser = ({formData,handleChange ,handleSubmit}) => {
  
  return (
<>
   
    <div className="w-[21rem] rounded-lg     newuser-1 ml-10 p-10 bg-slate-900 border border-gray-700 shadow-xl">
      <h6 className=" text-s font-semibold text-white">Add New User</h6>
      
      <form   className='newuserform'    onSubmit={handleSubmit} >
        {/* Full Name Input */}
        <input
          name="fullName"
          className="border text-white w-full h-[30px] border-gray-600 bg-slate-800 p-2 rounded-lg m-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="text"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        {/* Email Input */}
        <input
          name="email"
          className="border text-white w-full h-[30px] border-gray-600 bg-slate-800 p-2 rounded-lg m-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Role Selection */}
        <select
          name="role"
          className="border text-white w-full h-[30px] border-gray-600 bg-slate-800 p-1 m-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Tester">Tester</option>
          <option value="Manager">Manager</option>
        </select>

        <div className="mt-4">
          <button
            type="submit"
            className="w-full h-[30px] bg-indigo-600 hover:bg-indigo-500 text-white font-medium  rounded-lg m-1 transition-colors duration-200"
           
          >
            Add User
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default NewUser;