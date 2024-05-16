import React from 'react'

function Hamburger ({ isOpen }) {
  return (
    <div className="block w-5 h-4 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen ? 'rotate-45 translate-y-[9px] top-[40%]' : ''}`}
                style={{ top: '0', left: '0' }}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen ? 'opacity-0' : ''}`}
                style={{ top: '50%', left: '0', transform: 'translateY(-50%)' }}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen ? '-rotate-45 translate-y-[50%] top-1/2' : ''}`}
                style={{ bottom: '0', left: '0' }}
              ></span>
            </div>
  )
}

export default Hamburger
