import React from 'react'

const headerItems = [
    {id:1, name:"Home"},
    {id:2, name:"About"},
    {id:3, name:"Services"},
    {id:4, name:"Contact"},
    {id:5, name:"Blog"},
]

function Header() {
  return (
    <div>
        <header className='w-full items-center p-3 flex justify-around bg-yellow'>
            <div>
                <img src="https://c8.alamy.com/comp/H2N261/test-icon-H2N261.jpg"
                className='w-[70px] h-[70px] rounded-full' alt="" />
            </div>
            <nav>
                <ul className='flex gap-[20px] items-center text-white'>
                   {
                     headerItems.map(item => (
                        <li key={item.id}>
                            <a href="">{item.name}</a>
                        </li>
                     ))
                   }
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header