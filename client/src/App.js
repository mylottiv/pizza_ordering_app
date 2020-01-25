import React from 'react';

function App() {
  return (
    <div className='container mx-auto px-5'>
      <div className='flex flex-row bg-red-700 my-1'>
        <div className='flex flex-col w-full'>  
          <div className='flex flex-row'>
            <h1 className='flex-1 text-3xl font-bold text-center'>Build Your Own</h1>
          </div>
          <div className='flex flex-row'>
            <div className="flex flex-col rounded bg-gray-200 px-1 py-1 m-1">
              <div className="w-64 rounded overflow-hidden shadow-lg">
                <img className="w-full h-48" src="https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2017/04/Garden-Veggie-Pizza-1.jpg" alt="Sunset in the mountains"></img>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 py-4">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      Order
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row bg-red-700 my-1'>
        <div className="flex flex-col bg-gray-200 px-1 py-1 m-1">
          <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
          <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
          <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
        </div>
      </div>
    </div> 
  );
}

export default App;
