import React from 'react';

function CouponItemModalLayout(props) {
    
}

function ProductProfileImage(props) {
    return (
        <div className='flex flex-col w-1/4 h-1/4'>
            <img className="" src="https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2017/04/Garden-Veggie-Pizza-1.jpg" alt="Sunset in the mountains"></img>
        </div>
    )
}

function ProductHeader(props) {
    return (
        <div className='flex flex-row'>
            <h1 className='flex-1 text-2xl text-center font-bold'>Pizza</h1>
        </div>
    )
}

function ProductOptions(props) {
    return (
        <div className='flex flex-row'>
            <div className='flex-1 flex-col text-center'>
                <span className="text-gray-700">Account Type</span>
                <div className="flex flex-row mr-4 justify-center">
                    <div className='flex flex-col ml-4'>
                        <label className="inline-flex items-center">
                            <input type="radio" className="form-radio" name="accountType" value="personal" />
                            <span className="ml-2">Personal</span>
                        </label>
                    </div>
                    <div className='flex flex-col ml-4'>
                        <label className="inline-flex items-center">
                            <input type="radio" className="form-radio" name="accountType" value="personal" />
                            <span className="ml-2">Personal</span>
                        </label>
                    </div>
                    <div className='flex flex-col ml-4'>
                        <label className="inline-flex items-center">
                            <input type="radio" className="form-radio" name="accountType" value="personal" />
                            <span className="ml-2">Personal</span>
                        </label>
                    </div>
                    <div className='flex flex-col ml-4'>
                        <label className="inline-flex items-center">
                            <input type="radio" className="form-radio" name="accountType" value="personal" />
                            <span className="ml-2">Personal</span>
                        </label>
                    </div>
                    <div className='flex flex-col ml-4'>
                        <label className="inline-flex items-center">
                            <input type="radio" className="form-radio" name="accountType" value="personal" />
                            <span className="ml-2">Personal</span>
                        </label>
                    </div>
                    <div className='flex flex-col ml-4'>
                        <label className="inline-flex items-center">
                            <input type="radio" className="form-radio" name="accountType" value="personal" />
                            <span className="ml-2">Personal</span>
                        </label>
                    </div>
                    <div className='flex flex-col ml-4'>
                        <label className="inline-flex items-center">
                            <input type="radio" className="form-radio" name="accountType" value="personal" />
                            <span className="ml-2">Personal</span>
                        </label>
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
                <ProductHeader />
                <ProductOptions />
            </div>
        </div>
    )
}

function AdditionalOptions(props) {
    return (
        <div className='flex flex-row'>
            <p>
                Pellentesque scelerisque felis risus, sed maximus sem pellentesque ut. Suspendisse lectus velit, laoreet sit amet velit aliquam, vehicula tempus nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vulputate euismod mauris nec aliquam. In mollis erat vel nisi faucibus finibus. Nam sem nibh, bibendum vitae porta a, pulvinar ut diam. Curabitur tortor massa, elementum fermentum rutrum eu, fringilla ac augue. Quisque scelerisque metus justo, eget feugiat justo porta at. Donec sit amet rhoncus mauris. Morbi laoreet ac lectus id pulvinar. Mauris diam massa, aliquet scelerisque urna et, viverra aliquet dui. Donec vel dignissim leo. Aliquam vitae neque velit. In malesuada justo ullamcorper elementum congue. In non arcu ante.
            </p>                        
        </div>
    )
}

function OrderButtons(props) {
    return (
        <div className='flex flex-row'>
            <p>
                Pellentesque scelerisque felis risus, sed maximus sem pellentesque ut. Suspendisse lectus velit, laoreet sit amet velit aliquam, vehicula tempus nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vulputate euismod mauris nec aliquam. In mollis erat vel nisi faucibus finibus. Nam sem nibh, bibendum vitae porta a, pulvinar ut diam. Curabitur tortor massa, elementum fermentum rutrum eu, fringilla ac augue. Quisque scelerisque metus justo, eget feugiat justo porta at. Donec sit amet rhoncus mauris. Morbi laoreet ac lectus id pulvinar. Mauris diam massa, aliquet scelerisque urna et, viverra aliquet dui. Donec vel dignissim leo. Aliquam vitae neque velit. In malesuada justo ullamcorper elementum congue. In non arcu ante.
            </p>                        
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
                        {/* <p>
                            Pellentesque scelerisque felis risus, sed maximus sem pellentesque ut. Suspendisse lectus velit, laoreet sit amet velit aliquam, vehicula tempus nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vulputate euismod mauris nec aliquam. In mollis erat vel nisi faucibus finibus. Nam sem nibh, bibendum vitae porta a, pulvinar ut diam. Curabitur tortor massa, elementum fermentum rutrum eu, fringilla ac augue. Quisque scelerisque metus justo, eget feugiat justo porta at. Donec sit amet rhoncus mauris. Morbi laoreet ac lectus id pulvinar. Mauris diam massa, aliquet scelerisque urna et, viverra aliquet dui. Donec vel dignissim leo. Aliquam vitae neque velit. In malesuada justo ullamcorper elementum congue. In non arcu ante.
                        </p>
                        <p>
                            Pellentesque scelerisque felis risus, sed maximus sem pellentesque ut. Suspendisse lectus velit, laoreet sit amet velit aliquam, vehicula tempus nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vulputate euismod mauris nec aliquam. In mollis erat vel nisi faucibus finibus. Nam sem nibh, bibendum vitae porta a, pulvinar ut diam. Curabitur tortor massa, elementum fermentum rutrum eu, fringilla ac augue. Quisque scelerisque metus justo, eget feugiat justo porta at. Donec sit amet rhoncus mauris. Morbi laoreet ac lectus id pulvinar. Mauris diam massa, aliquet scelerisque urna et, viverra aliquet dui. Donec vel dignissim leo. Aliquam vitae neque velit. In malesuada justo ullamcorper elementum congue. In non arcu ante.
                        </p>
                        <p>
                            Pellentesque scelerisque felis risus, sed maximus sem pellentesque ut. Suspendisse lectus velit, laoreet sit amet velit aliquam, vehicula tempus nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vulputate euismod mauris nec aliquam. In mollis erat vel nisi faucibus finibus. Nam sem nibh, bibendum vitae porta a, pulvinar ut diam. Curabitur tortor massa, elementum fermentum rutrum eu, fringilla ac augue. Quisque scelerisque metus justo, eget feugiat justo porta at. Donec sit amet rhoncus mauris. Morbi laoreet ac lectus id pulvinar. Mauris diam massa, aliquet scelerisque urna et, viverra aliquet dui. Donec vel dignissim leo. Aliquam vitae neque velit. In malesuada justo ullamcorper elementum congue. In non arcu ante.
                        </p>
                        <p>
                            Pellentesque scelerisque felis risus, sed maximus sem pellentesque ut. Suspendisse lectus velit, laoreet sit amet velit aliquam, vehicula tempus nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vulputate euismod mauris nec aliquam. In mollis erat vel nisi faucibus finibus. Nam sem nibh, bibendum vitae porta a, pulvinar ut diam. Curabitur tortor massa, elementum fermentum rutrum eu, fringilla ac augue. Quisque scelerisque metus justo, eget feugiat justo porta at. Donec sit amet rhoncus mauris. Morbi laoreet ac lectus id pulvinar. Mauris diam massa, aliquet scelerisque urna et, viverra aliquet dui. Donec vel dignissim leo. Aliquam vitae neque velit. In malesuada justo ullamcorper elementum congue. In non arcu ante.
                        </p>
                        <p>
                            Pellentesque scelerisque felis risus, sed maximus sem pellentesque ut. Suspendisse lectus velit, laoreet sit amet velit aliquam, vehicula tempus nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vulputate euismod mauris nec aliquam. In mollis erat vel nisi faucibus finibus. Nam sem nibh, bibendum vitae porta a, pulvinar ut diam. Curabitur tortor massa, elementum fermentum rutrum eu, fringilla ac augue. Quisque scelerisque metus justo, eget feugiat justo porta at.                
                        </p> */}
                    </ProductItemModalLayout>
                </div>
            </div>)}
        </>
    )
}

export default OrderModal;