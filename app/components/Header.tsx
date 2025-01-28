import React from 'react'

const Header = () => {
  return (
    <div>
        <header className=" bg-green-300  text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
      <span className="text-xl">Muhammad Naeem Mohsin</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a href={'/'} className="mr-5 hover:text-gray-900">Home</a>
      <a href={'/About'} className="mr-5 hover:text-gray-900">About</a>
      <a href={'/webBlog'} className="mr-5 hover:text-gray-900">Blog</a>
    </nav>

  </div>
</header>

    </div>
  )
}

export default Header