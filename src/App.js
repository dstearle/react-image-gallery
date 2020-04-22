import React from 'react';

function App() {

  return (

    <div className="max-w-sm rounded overflow-hidden shadow-lg">

      {/* Image */}
      <img src="https://source.unsplash.com/random" alt="" className="w-full"/>

      {/* Content */}
      <div className="px-6 py-4">

        {/* Author */}
        <div className="font-bold text-purple-500 text-xl mb-2"> Photo By: Jim Dean</div>

        <ul>

          <li>
            <strong>Views: </strong> 4000
          </li>

          <li>
            <strong>Downloads: </strong> 300
          </li>

          <li>
            <strong>Likes: </strong> 20
          </li>

        </ul>

      </div>
      
    </div>

  );

}

export default App;
