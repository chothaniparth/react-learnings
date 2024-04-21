import React, { useState } from 'react';

const Form = () => {
    const [formdata, setFormData] = useState({
        userName: '',
        password: ''
    });
    const [tableData, setTableData] = useState([]);

    const handleChange = (e) => {
        setFormData({
            ...formdata,
            [e.target.name]: e.target.value
        })
        console.log(e);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setTableData([...tableData, formdata]);
        setFormData({
            userName: '',
            password: ''
        })
    }

  return (
    <>
    <div className="max-w-md mx-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="userName" id="username" type="text" value={formdata.userName} onChange={(e)=>{handleChange(e)}} placeholder="username" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" value={formdata.password} type="password" onChange={(e)=>{handleChange(e)}} placeholder="******************"/>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={(e) => handleSubmit(e)}>
            Sign In
          </button>
        </div>
      </form>
    </div>
    <table className='mx-auto max-w-500px'>
        <thead>
            <tr>
                <th>Username</th>
                <th>Password</th>
            </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
                <td>{data.userName}</td>
                <td>{data.password}</td>
            </tr>
          ))}
        </tbody>
    </table>
    </>
  );
};

export default Form;