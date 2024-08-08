import { HomeIcon } from "@/node_modules/@primer/octicons-react/dist/icons"
import Link from "@/node_modules/next/link"
import { ActiveLink } from "../active-link/ActiveLink"




const navItems = [
  { path: '/about', text: 'About'},
  { path: '/pricing', text: 'Princing'},
  { path: '/contact', text: 'Contact'},  
]


export const Navbar = () => {
  
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
        
        <Link href={'/'} className='flex items-center'> 
            <span>Home</span>    
        </Link>
        

        <div className="flex flex-1"> </div>

        {
          navItems.map(navItem => (
            <ActiveLink key={navItem.path} {...navItem}  />
          ))
        }

    </nav>
  )
}
