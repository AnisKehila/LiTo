import { NavLink } from "react-router-dom"
export default function SideBarLink({brand, car}) {
    return (
        <li >
            <NavLink to={`/LiTo/shop/${brand}`}>
                <span className='link'>{brand}</span>
                <img src={car} alt="car" />
            </NavLink>
        </li>
    )
}
