import React from 'react'
import { MdEmail } from "react-icons/md";
import { MdPhoneForwarded } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { Input } from '../components/ui/input';
import { Textarea } from "@/components/ui/textarea"
import { Button } from '../components/ui/button';

export default function Contact() {

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col'>
        <h2 className='text-4xl py-5 font-bold'>Contact Us</h2>
        <div className='flex md:flex-row flex-col justify-between'>
            
            <div className='w-1/3'>
                <p>Email</p>
                <p className='flex items-center gap-2' > <MdEmail /> info@eospay.com</p>
                <p>For all enquiries email us on</p>
            </div>
            <div className='1/3'>
                <h2>Phone</h2>
                <p className='flex gap-2 items-center'> <MdPhoneForwarded /> 9098970327</p>
                <p>Happy to help anytime between 9:00 AM to 7:00 PM</p>
            </div>
            <div className='w-1/3'>
                <h2>Address</h2>
                <p className='flex gap-2'> <CiShop className='text-5xl' /> Flat no 41 Sheel nagar, Mahmoorganj, Mahmoorganj, Mahmoorganj, Varanasi, Varanasi, Varanasi- 221010, Uttar Pradesh</p>
            </div>
        </div>
            <div className='flex md:flex-row flex-col justify-between pt-16 pb-5'>
                <div className='md:w-1/2 w-full'>
                    <iframe className='rounded-lg  md:w-full md:h-full ' src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7148.129727205856!2d80.411241!3d26.389092!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1737296108361!5m2!1sen!2sin"    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='md:w-1/2 md:pt-0 pt-10 w-full' >
                <form action="" className=' flex flex-wrap gap-9 pl-7'>
                    <label className='text-xl' htmlFor="">Full Name <Input type='text'/> </label>
                    <label className='text-xl' htmlFor="">Phone <Input/> </label>
                    <label className='text-xl' htmlFor="">Email <Input type="email" /> </label>
                    <label className='text-xl' htmlFor="">Subject <Input/> </label>
                    <label className='text-xl' htmlFor="">Short Note <Textarea />
                    </label>
                    <Button className='text-2xl'>Submit</Button>
                </form>
                </div>
            </div>
    </div>
  )
}
