
import '../App.css';
import SearchIcon from '@mui/icons-material/Search';

export const Home = () => {
    return(
        <div className="home-page">
        
        <header>
        <h1>logo</h1>
        
        <nav className="navbar">
        <li>LOGIN</li>
        <li>HOME</li>
        <li>ABOUT US</li> 
        </nav>
        
        </header>
        <div className='hero'></div>
        <div className='content'>
            <h5 className='re-connect'>Here to Re-Connect?</h5>
            <h1 className='main-heading' > Welcome to our <br/> Alumni Management System</h1>
            <button className='alumni-search'><SearchIcon style={{verticalAlign:"middle"}}/> Find Alumni's</button>
            
        </div>
        <div className='events'>
        <small className='upcoming'>  Upcoming Events</small>
        <hr />
        <div className='event-list'>
         <small className='date'>18 July</small>
         <h3>Ribbon Cutting Ceremony</h3>
         <small className='date'>31 July</small>
         <h3>Poetry Reading by Jane Hirshfield</h3>
         </div>
         </div>
        
        <div className='search'>
            Search
        </div>

      </div>
       
       
        
            
    );
}