import React, { useState } from 'react'

const Insert = ({setBlog, blog}) => {
    const InitObj = {title:"", author: "", date:"", content: ""};
    const [data, setData] = useState(InitObj) 

    
  
  const handleSubmit = () => {
      const newObj = {id:blog.length+1, title:data.title, author: data.author, date:data.date, content:data.content}
      setBlog([...blog, newObj]);
      setData(InitObj)
  }
  return (
    <div className='w-1/4'>
        <div className='p-3'>
            <div className='mb-3 flex flex-col'>
                <label htmlFor=''>Title</label>
                <input placeholder="title" value={data.title} onChange={(e) => setData({...data, title: e.target.value})}  className="border px-3 py-2"  />
            </div>
            <div className='mb-3 flex flex-col'>
                <label htmlFor=''>Author</label>
                <input placeholder="title" value={data.author} onChange={(e) => setData({...data, author: e.target.value})}  className="border px-3 py-2"  />
            </div>
            <div className='mb-3 flex flex-col'>
                <label htmlFor=''>Date</label>
                <input type="date" value={data.date} onChange={(e) => setData({...data, date:e.target.value})}  className="border px-3 py-2"  />
            </div>
            <div className='mb-3 flex flex-col'>
                <label htmlFor=''>Content</label>
                <textarea placeholder="content" rows="10" value={data.content} onChange={(e) => setData({...data, content: e.target.value})}  className="border px-3 py-2"></textarea>
            </div>
            <div className='mb-3 flex flex-col'>
                <button type='button' onClick={handleSubmit} className="bg-red-500 text-white p-3">Send</button>
            </div>
        </div>
    </div>
  )
}

export default Insert