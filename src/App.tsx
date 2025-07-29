
function App() {
  return (
    <div className="flex min-h-screen bg-[#90DFD6] text-[#333] w-full">
      {/* Sidebar */}
      <aside className="w-[300px] bg-[#689B98] text-white p-5 shadow-lg" >
        <h2 className="text-2xl font-bold text-[#EBBEA1] text-center mb-8">Questoria</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <a href="#" className="block p-2 rounded hover:bg-white hover:bg-opacity-20">Dashboard</a>
            </li>
            <li className="mb-4">
              <a href="#" className="block p-2 rounded hover:bg-white hover:bg-opacity-20">Analytics</a>
            </li>
            <li className="mb-4">
              <a href="#" className="block p-2 rounded hover:bg-white hover:bg-opacity-20">Reports</a>
            </li>
            <li className="mb-4">
              <a href="#" className="block p-2 rounded hover:bg-white hover:bg-opacity-20">Settings</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full">
        {/* Header */}
        <header className="bg-[#689B98] text-white p-5 shadow-md flex justify-between items-center">
          <h1 className="text-3xl font-bold text-[#EBBEA1]">Dashboard Overview</h1>
          <div className="text-sm">Welcome, User!</div>
        </header>

        {/* Dashboard Body */}
        <main className="flex-1 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-y-auto w-full">
          {/* Card 1 */}
          <div className="bg-[#EBBEA1] p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#8A5F5C] mb-2">Total Sales</h3>
            <p className="text-[#333]">€15,000</p>
            <button className="mt-4 bg-[#8A5F5C] text-white py-2 px-4 rounded hover:bg-opacity-90">View Details</button>
          </div>

          {/* Card 2 */}
          <div className="bg-[#EBBEA1] p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#8A5F5C] mb-2">New Users</h3>
            <p className="text-[#333]">250</p>
            <button className="mt-4 bg-[#8A5F5C] text-white py-2 px-4 rounded hover:bg-opacity-90">View Details</button>
          </div>

          {/* Card 3 */}
          <div className="bg-[#EBBEA1] p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#8A5F5C] mb-2">Pending Orders</h3>
            <p className="text-[#333]">12</p>
            <button className="mt-4 bg-[#8A5F5C] text-white py-2 px-4 rounded hover:bg-opacity-90">View Details</button>
          </div>

          {/* Card 4 */}
          <div className="bg-[#EBBEA1] p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#8A5F5C] mb-2">Revenue Growth</h3>
            <p className="text-[#333]">+5%</p>
            <button className="mt-4 bg-[#8A5F5C] text-white py-2 px-4 rounded hover:bg-opacity-90">View Details</button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;