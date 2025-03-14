import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constants'

const Navbar = () => {
   return (
     <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
        <nav className="flex w-full screen-max-width">
         <img alt="apple" height={18} src={appleImg} width={14} />
            <div className="flex flex-1 justify-center max-sm:hidden">
            {navLists.map((nav) => {
                  return (
                    <div
                       className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
                       key={nav}
                     >
                       {nav}
                     </div>
                  )
               })}
            </div>
         <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
              <img alt="search" height={18} src={searchImg} width={18} />
               <img alt="bag" height={18} src={bagImg} width={18} />
            </div>
       </nav>
      </header>
   )
}

export default Navbar
