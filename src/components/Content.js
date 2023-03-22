import React from 'react'

const Content = ({data,handleDelete}) => {
    const Card = ({value,handleDelete}) => (
        <div className='bg-slate-100 rounded-lg border p-3'>
            <h1 className='text-4xl uppercase font-semibold mb-3'>{value.title}</h1>
            <div className='flex gap-12 mb-2 text-sm text-slate-400'>
                <span>Author : {value.author}</span>
                <span>Date : {value.date}</span>
            </div>
            <p className='text-lg mb-3'>{value.content}</p>
            <button onClick={() => handleDelete(value.id)} className='bg-red-500 px-3 float-right py-2 rounded-lg hover:bg-green-800 text-white ml-3'>Delete</button> 
            <a className='bg-green-500 px-3 float-right py-2 rounded-lg hover:bg-green-800 text-white'>Read More</a> 
           
        </div>
    )
    
  return (
    <div className='w-3/4 p-3'>
        <div className='flex flex-col gap-5'>
            {
                data.map((value, index) => (
                    <Card value={value} key={index} handleDelete={handleDelete}/>
                ))
            }
           
        </div>
    </div>  
  )
}

export default Content