import React from 'react'
import Logo from '../../assets/food-logo.png'

const Navbar = () => {
  return (
    <>
        <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
            <div className='container '>
                <div className='flex justify-between items-center'>
                    <div>
                        <a href="#" className='flex items-center gap-2 text-2xl sm:text-3xl font-bold'>
                            <img src={Logo} alt="Foodie Zone" className='w-10'/>Foofie zone
                        </a>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="#">About</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar