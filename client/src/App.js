import React, { useState, useEffect } from "react";
import Cards from "./Cards";

function App() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredData.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container mx-auto flex flex-col items-center py-8 px-4 bg-slate-100">
        <div className="text-3xl font-bold text-center mb-8">
          User Informations
        </div>

        <div className="mb-4 text-center">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={handleSearch}
            className="px-2 py-1 border border-gray-300 rounded"
          />
        </div>
        {currentUsers.map((user) => (
          <Cards key={user.id} user={user} />
        ))}
        <div className="flex mt-4">
          {filteredData.length > usersPerPage &&
            [
              ...Array(Math.ceil(filteredData.length / usersPerPage)).keys(),
            ].map((number) => (
              <button
                key={number + 1}
                onClick={() => paginate(number + 1)}
                className={`mx-1 px-4 py-2 rounded-full ${
                  number + 1 === currentPage
                    ? "bg-red-500 text-white"
                    : "bg-white text-neutral-800"
                }`}
              >
                {number + 1}
              </button>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
