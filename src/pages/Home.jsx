import { Link } from 'react-router-dom'
import bg from '../assets/background.mp4'
export function Home() {
    return (
        
        <section className="hero-section">
            <video muted autoPlay loop className="hero-section-bg">
                <source src={bg} type="video/mp4" /> <p>Your browser doesn't support HTML5 video.</p>
            </video>
            <h1>Get Behind the Wheel of Your Next Car: <span> With Our Diverse Range of Vehicles, You're Sure to Find the Perfect Ride for Your Lifestyle.</span></h1>
            <div className='btn'>
                <Link to='/LiTo/shop'>SHOP NOW</Link>
            </div>
        </section>
    )
}
