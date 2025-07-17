import StudentTable from "../components/StudentTable";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-blue-50 to-white min-h-screen p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Student Management</h1>
          <p className="text-gray-500">Manage student records and information</p>
        </div>
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-lg shadow hover:scale-105 duration-200">
          + Add Student
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <SummaryCard title="Total Students" count="3" icon="👥" />
        <SummaryCard title="Active Records" count="3" icon="✅" />
        <SummaryCard title="Colleges" count="3" icon="🎓" />
      </div>

      {/* Student Table */}
      <StudentTable />
    </main>
  );
}

const SummaryCard = ({ title, count, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow flex items-center justify-between">
    <div>
      <h3 className="text-md text-gray-500">{title}</h3>
      <p className="text-2xl font-bold text-gray-800">{count}</p>
    </div>
    <span className="text-3xl">{icon}</span>
  </div>
);
