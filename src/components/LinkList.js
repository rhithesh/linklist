import React, { useState } from "react";

function LinkList() {
  const [link, setLink] = useState("");
  const [links, setLinks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (link) {
      // Add the new link to the top of the list
      setLinks([link, ...links]);
      setLink(""); // Clear the input after submission
    }
  };

  return (
    <div className="flex  !w-[350px] !h-[400px] flex-col items-center justify-between  bg-black">
      <div className="">
        <h2 className="text-2xl font-bold mb-4">Submitted Links</h2>
        {links.length > 0 ? (
          <ul className="space-y-2">
            {links.map((item, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow-md">
                <a
                  href={item}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No links added yet.</p>
        )}
      </div>

      {/* Input form */}
      <form onSubmit={handleSubmit} className="">
        <input
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-4"
          placeholder="Enter your link"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 w-full"
        >
          Submit Link
        </button>
      </form>
    </div>
  );
}

export default LinkList;
