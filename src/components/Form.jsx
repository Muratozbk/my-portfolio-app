import React from 'react'

const Form = () => {
    return (
        <div className='form'>
            <form className='flex flex-col max-w-[600px] m-auto py-16 px-4'>
                <label className='text-[#efefef] mb-2'>Your Name</label>
                <input className='mb-4 px-4 py-2.5 text-xl bg-white bg-opacity-10 text-[#f4f4f4] border-white border-opacity-10' type="text" />

                <label className='text-[#efefef] mb-2'>Email</label>
                <input className='mb-4 px-4 py-2.5 text-xl bg-white bg-opacity-10 text-[#f4f4f4] border-white border-opacity-10' type="email" />
                <label className='text-[#efefef] mb-2'>Subject</label>
                <input className='mb-4 px-4 py-2.5 text-xl bg-white bg-opacity-10 text-[#f4f4f4] border-white border-opacity-10' type="text" />
                <label className='text-[#efefef] mb-2'>Message</label>
                <input className='mb-4 px-4 py-2.5 text-xl bg-white bg-opacity-10 text-[#f4f4f4] border-white border-opacity-10' type="text" />
                <textarea className='mb-4 px-4 py-2.5 text-xl bg-white bg-opacity-10 text-[#f4f4f4] ' rows="6" placeholder='Type Your Message Here'></textarea>
                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}

export default Form