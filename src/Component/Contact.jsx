import React from 'react'
import contactLogo from '../assets/contact.svg'

const Contact = () => {
  return (
    <div id="contact" className='bg-darkpurp h-auto'>
        <div className="text-white font-bold flex items-center flex-col pb-14 ">
            <h1 className='text-5xl iphone:max-sm:text-2xl text-center iphone:max-sm:mt-32'>Keep me in touch if you liked my services!</h1>

            <div className='mt-12 w-[70%] h-auto p-8 bg-purple-600 flex rounded-lg justify-around items-center'>
            <form action="https://api.web3forms.com/submit" method='POST'>
            <input type='hidden' name='access_key' value="a46a66dd-b920-47d8-9da8-1f7928f993a9"/>
            <input type='text' name='name' placeholder='Your name' required className='w-[100%] indent-4 h-10 mt-4 rounded-lg text-black' />
            <input type='email' name='email' placeholder='Your email' required className='w-[100%] indent-4 h-10 mt-4 rounded-lg text-black' />
            <textarea name='message' placeholder='Your message' required className='w-[100%] indent-4 h-20 mt-4 rounded-lg text-black' />
            <div className='flex justify-center w-full'>
            <button type='submit' className='iphone:max-sm:w-[50%] w-[20%] h-10 mt-4 bg-[#731DD8] hover:scale-110 self-center  text-white rounded-lg'>Send!</button>
            </div>
            </form>
            <img src={contactLogo} alt="contact" className='w-40 h-40' />
            </div>
            
        </div>
    </div>
  )
}

export default Contact