import { brands } from '../utils/brands'
import { Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import car from '../assets/car_animation.gif'
import SideBarLink from './SideBarLink'

export default function Sidebar() {
    const { brand } = useParams('brand');

    return (
        <main>
            <ul className= 'sidebar'>
                <li><h2>Brands</h2><span className='brand'>/{brand || 'All brands'}</span></li>
                {brands().map((brand, index) => 
                    <SideBarLink key={brand} car={car} brand={brand}/>
                )}

            </ul>
            <Outlet />
        </main>
    )
}
