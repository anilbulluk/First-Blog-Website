import React from 'react'


export default function Contact() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div name='contact' className='mx-[128px] text-center h-screen flex flex-col justify-center'></div>
        <h1 className='text-5xl text-center text-bold my-5'>Contact</h1>
        <div className='w-[25%]'>
            <form action="">
                <input className='px-3 py-2 border-2 w-full rounded-2xl my-2' type="text" placeholder='Adınız' />
                <input className='px-3 py-2 border-2 w-full rounded-2xl my-2' type="text" placeholder='e-mail' />
                <textarea className='px-3 py-2 border-2 w-full rounded-2xl my-2' placeholder='Mesajınız' cols="20" rows="10"></textarea>
                <button>Gönder</button>
            </form>
        </div>
    </div>
  )
}
