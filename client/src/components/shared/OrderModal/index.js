import React from 'react';

function CouponItemModalLayout(props) {
    
}

function ProductProfileImage(props) {
    return (
        <div className='flex flex-col w-1/6 h-1/6'>
            <img className="" src="https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2017/04/Garden-Veggie-Pizza-1.jpg" alt="Sunset in the mountains"></img>
        </div>
    )
}

function ProductHeader({name}) {
    return (
        <div className='flex flex-row'>
            <h1 className='flex-1 text-2xl text-center font-bold'>{name}</h1>
        </div>
    )
}


function OptionRadioButton({type, value}) {
    return (
        <div className='flex flex-col ml-4'>
            <label className="inline-flex items-center">
                <input type="radio" className="form-radio" name={type} value={value} />
                <span className="ml-2">{value}</span>
            </label>
        </div>
    )
}

function ToppingOptionButton({topping}) {
    return (
        <div className='flex flex-row'>
            <div className="flex-1 flex-col">
                <input type="radio" className="form-radio" name={topping} value='left'/>
            </div>
            <div className="flex-1 flex-col">
                <input type="radio" className="form-radio" name={topping} value='whole'/>
            </div>
            <div className="flex-1 flex-col">
                <input type="radio" className="form-radio" name={topping} value='right'/>
            </div>
            <div className='flex-1 flex-col'>
                {topping}
            </div>
        </div>
    )
}

function ProductRadioOptions({type, options}) {

    const radioOptions = options.map(option => <OptionRadioButton type={type} value={option} />)
    
    return (
        <div className='flex flex-row my-6'>
            <div className='flex-1 flex-col text-center'>
                <span className="text-gray-700">{type}</span>
                <div className="flex flex-row mr-4 justify-center">.
                    {radioOptions}
                </div>
            </div>
        </div>
    )
}

function ToppingOptions({type, options}) {

    const checkboxOptions = options.map(option => <ToppingOptionButton topping={option} />)

    return (
        <div className='flex flex-row'>
            <div className="flex-1 flex-col text-center">
                <span className="text-gray-700">{type}</span>
                <div className="flex flex-row justify-center">
                    <div className='flex-1 flex-col'>
                        <div className='flex flex-row'>
                            <div className='flex-1 flex-col'>
                                Left Half
                            </div>
                            <div className='flex-1 flex-col'>
                                Whole
                            </div>
                            <div className='flex-1 flex-col'>
                                Right Half
                            </div>
                            <div className='flex-1 flex-col'>
                                Topping
                            </div>
                        </div>
                        {checkboxOptions}
                    </div>
                </div>
            </div>   
        </div>        
    )
}

function ProfileLayout(props) {
    return (
        <div className='flex flex-row'>
            <ProductProfileImage />
            <div className='flex-1 flex-col'>
                <ProductHeader name={'Pizza'}/>
                <ProductRadioOptions type={'Crust'} options={['Hand-Tossed', 'Thin', 'Pan']} />
                <ProductRadioOptions type={'Size'} options={['Small', 'Medium', 'Large']} />
                <ProductRadioOptions type={'Sauce'} options={['Marinara', 'Alfredo', 'BBQ']} />
            </div>
        </div>
    )
}

function AdditionalOptions(props) {
    return (
        <div className='flex flex-row'>
            <div className='flex-1 flex-col'>
                <ToppingOptions type={'Cheese'} options={['Mozzarella', 'Cheddar', 'Feta']}/>  
                <ToppingOptions type={'Meats'} options={['Pepperoni', 'Ham', 'Beef']}/>  
                <ToppingOptions type={'Veggies'} options={['Olives', 'Onions', 'Peppers']}/>  
            </div>
        </div>
    )
}

function OrderButtons(props) {
    return (
        <div className='flex flex-row'>
            <div className="flex-1 flex-col px-20">
                <div className='flex flex-row'>
                    <span className="flex-1 text-center">Quantity</span>
                </div>
                <div className='flex flex-row'>
                    <div className='flex-1 inline-flex items-center justify-center my-2'>
                        <input type="email" className="form-input w-1/2" value='1'/>
                        <button className='bg-blue-500 rounded-full h-16 w-16 flex items-center justify-center ml-6'>+</button>
                        <button className='bg-blue-500 rounded-full h-16 w-16 flex items-center justify-center ml-6'>-</button>
                    </div>
                </div>
                <div className='flex flex-row justify-center'>
                    <button className='flex-1 bg-red-700 block rounded-full py-2 px-4'>Add to Order</button>
                </div>
            </div>            
        </div>
    )
}

function ProductItemModalLayout(props) {
    return (
        <div className='flex flex-col'>
            <ProfileLayout />
            <AdditionalOptions />
            <OrderButtons />
        </div>
    )
}

function OrderModal({open}) {
    return (
        <>
            {open && (
            <div className='container ml-8 p-5 my-8 z-10 top-0 left-0 h-11/12 fixed'>
                <div className='flex-1 flex-row p-5 rounded bg-blue-100 h-full overflow-y-scroll'>
                    <ProductItemModalLayout>
                    </ProductItemModalLayout>
                </div>
            </div>)}
        </>
    )
}

export default OrderModal;