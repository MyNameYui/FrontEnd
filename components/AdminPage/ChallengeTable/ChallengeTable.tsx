import React from 'react';

const ChallengeTable = () => {
  return (
    
    <div className="bg-white min-h-screen">
      <div>
      <button className="w-full h-20 bg-blue-600"><span className="text-2xl font-bold">Add</span></button>
      </div>
      <table className="table-auto text-xl text-black w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">TopicId</th>
            <th className="px-4 py-2">CategoryId</th>
            <th className="px-4 py-2">Thumbnail</th>
            <th className="px-4 py-2">Heading</th>
            <th className="px-4 py-2">Content</th>
            <th className="px-4 py-2">Edit</th>
            <th className="px-4 py-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center">1</td>
            <td className="px-4 py-2 text-center">1</td>
            <td className="px-4 py-2 text-center">Lorem</td>
            <td className="px-4 py-2 text-center">asfkjafafkaklfkjajkfaklfkljakjlsfa</td>
            <td className="px-4 py-2 text-center">Lorem200</td>
            <td className="px-4 py-2 text-center">
              <button className="text-center w-24 h-11 rounded-xl bg-blue-600 text-white">Edit</button>
            </td>
            <td className="px-4 py-2 text-center">
              <button className="w-24 h-11 rounded-xl bg-red-600 text-white">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ChallengeTable;
