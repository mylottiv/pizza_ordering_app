import React from 'react';

function Cart(props) {
  return (
    <div className='fixed flex flex-row-reverse inset-x-0 bottom-0'>
      <p className='text-center bg-blue-600'><img src='./shopping-cart.svg' />Cart</p>
    </div>
  )
}

function NavBar(props) {
  return (
  <ul className="flex flex-col w-56 bg-green-600 my-1">
    <li className="flex flex-row my-2">
      <a className="flex-1 text-center inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white font-bold" href="#">Active Pill</a>
    </li>
    <li className="flex flex-row my-2">
      <a className="flex-1 text-center inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3 font-bold" href="#">Pill</a>
    </li>
    <li className="flex flex-row my-2">
      <a className="flex-1 text-center inline-block py-1 px-3 text-gray-400 cursor-not-allowed font-bold" href="#">Disabled Pill</a>
    </li>
  </ul>
  )
}

function ProductListing(props) {
  return (
    <div className="flex flex-col rounded bg-gray-100 px-1 py-1 m-5">
      <div className="w-64 rounded overflow-hidden shadow-lg">
        <img className="w-full h-48" src="https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2017/04/Garden-Veggie-Pizza-1.jpg" alt="Sunset in the mountains"></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.name}</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="flex flex-row-reverse px-6 py-4 items-right">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Order
          </button>
        </div>
      </div>
    </div>
  )
}

function ProductSubCategory(props) {

  const listings = [];
  for (let i = 0; i < props.size; i++) {
    listings.push(<ProductListing name='BYOP'/>);
  }

  return (
    <div className='flex flex-row bg-red-700 my-1'>
      <div className='flex flex-col w-full'>  
        <div className='flex flex-row'>
          <h1 className='flex-1 text-3xl font-bold text-center'>{props.name}</h1>
        </div>
        <div className='flex flex-row'>
          {listings}
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className='container mx-auto px-5'>
      <div className='flex flex-row'>
        <NavBar />
        <div className='flex-1 flex-col'>
          <ProductSubCategory name='Build your own!' size={2}/>
          <ProductSubCategory name='Specialty' size={1}/>
        </div>
        <Cart />
      </div>
    </div> 
  );
}

export default App;
