import React, { useState } from "react";

const Form = () => {
  const [formdata, setFormData] = useState({
    userName: "",
    password: "",
  });
  const [tableData, setTableData] = useState([]);
  const [submitFunction, setSubmitFunction] = useState("handleSubmit");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData([...tableData, formdata]);
    setFormData({
      userName: "",
      password: "",
    });
  };

  const deleteRow = (index) => {
    const newTableData = [...tableData];
    newTableData.splice(index, 1);
    setTableData(newTableData);
  };

  const editRow = (index) => {
    const rowData = tableData[index];
    setFormData({
      userName: rowData.userName,
      password: rowData.password,
    });
    const updatedTableData = [...tableData];
    updatedTableData.splice(index, 1);
    setTableData(updatedTableData);
    setSubmitFunction("handleSubmitForEdit");
  };

  const handleSubmitForEdit = (e) => {
    e.preventDefault();
    setTableData([...tableData, formdata]);
    setFormData({
      userName: "",
      password: "",
    });
    setSubmitFunction("handleSubmit");
  };

  const handleFormSubmit = (e) => {
    if (submitFunction === "handleSubmit") {
      handleSubmit(e);
    } else if (submitFunction === "handleSubmitForEdit") {
      handleSubmitForEdit(e);
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleFormSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="userName"
              id="username"
              type="text"
              value={formdata.userName}
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              value={formdata.password}
              type="password"
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
      <div className="overflow-x-auto mx-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Username
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Password
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-4">{data.userName}</td>
                <td className="py-3 px-4">{data.password}</td>
                <td className="py-3 px-4">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2"
                    onClick={() => {
                      deleteRow(index);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => editRow(index)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Form;
