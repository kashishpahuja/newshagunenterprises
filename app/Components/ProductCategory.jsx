import React from 'react'

const ProductCategory = () => {

const Categorydata= [
{
    img:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type:"Chairs"
},
{
    img:"https://images.unsplash.com/photo-1565791380713-1756b9a05343?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type:"Tables"
},
{
    img:"https://images.unsplash.com/photo-1512212621149-107ffe572d2f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type:"Sofas"
},
{
    img:"https://images.unsplash.com/photo-1505692952047-1a78307da8f2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type:"Beds"
},
{
    img:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type:"Chairs"
},
{
    img:"https://images.unsplash.com/photo-1565791380713-1756b9a05343?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type:"Tables"
},

]


  return (
    <div className='my-3 container mx-auto'>

<b className='text-xl '>Popular categories</b>


<div className='grid my-3  grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2'>
    {Categorydata?.map((item,index)=>{
        return(<div key={index} className='text-center pb-2 gap-2 flex flex-col hover:bg-gray-600/35 duration-300'>
            <img src={item.img} alt={item.type}  className=' object-cover h-full'/>
<p className=' uppercase font-semibold'>{item.type}</p>
            </div>)
    })}
</div>



    </div>
  )
}

export default ProductCategory