"use client";


import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "@/redux/StudentSlice";

import { FaTrash, FaEdit } from "react-icons/fa";

const StudentTable = () => {
  const { users } = useSelector((state) => state.students);
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">All Students</h2>
      <div className="overflow-x-auto rounded-xl shadow">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left py-3 px-6">Name</th>
              <th className="text-left py-3 px-6">Email</th>
              <th className="text-left py-3 px-6">Phone</th>
              <th className="text-left py-3 px-6">College</th>
              <th className="text-center py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((student, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-50 transition duration-200"
              >
                <td className="py-3 px-6 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center font-bold uppercase">
                    {student.name[0]}
                  </div>
                  <span className="font-medium">{student.name}</span>
                </td>
                <td className="py-3 px-6">{student.email}</td>
                <td className="py-3 px-6">{student.phone}</td>
                <td className="py-3 px-6">{student.college}</td>
                <td className="py-3 px-6 text-center">
                  <button className="text-blue-600 mr-3">
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-600"
                    onClick={() => dispatch(deleteUser(student._id))}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
