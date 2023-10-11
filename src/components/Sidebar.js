import React from 'react'
import Logo from '../images/logo.jpeg'
import { Link } from 'react-router-dom';

function Sidebar(){
    return(
        <>
            <div className='col-md-3 menu'>
              
                <div className='logodiv' style={{display:'flex'}}>
                
                <i class="fa-solid fa-bars "></i>
                <img src={Logo} width='65' style={{}}/> 
                <span  style={{ fontSize:'25px',margin:'10px' }}>YouTube</span>
                </div>

                 


               <div className='sidebar'>


              
         
                        <ul>
                        <Link to="/" className='linkmenu'><li><i class="fa-solid fa-house"></i> Home</li></Link>
                        <Link to="/Shorts" className='linkmenu'><li><i class="fa-solid fa-bolt"></i> Shorts</li></Link>
                            <li><i class="fa-solid fa-money-bill-wheat"></i> Subscriptions</li>
                        </ul>
                        <hr/> 


                        <ul>
                            <li><i class="fa-regular fa-file-video"></i> You</li>
                            <li><i class="fa-solid fa-clipboard-user"></i> Your Channel</li>
                            <li><i class="fa-solid fa-history"></i> History</li>
                            <li><i class="fa-regular fa-circle-play"></i> Your Videos</li>
                            <li><i class="fa-regular fa-clock"></i> Watch Later</li>
                            <li><i class="fa-regular fa-thumbs-up"></i> Liked Videos</li>
                            <li><i class="fa-solid fa-list-check"></i> Play List</li>
                        </ul>
                        <hr/>
                </div>
                        
                        {/* <ul>
                            <li><i class="fa-regular fa-file-video"></i> You</li>
                            <li><i class="fa-solid fa-clipboard-user"></i> Your Channel</li>
                            <li><i class="fa-solid fa-history"></i> History</li>
                            <li><i class="fa-regular fa-circle-play"></i> Your Videos</li>
                            <li><i class="fa-regular fa-clock"></i> Watch Later</li>
                            <li><i class="fa-regular fa-thumbs-up"></i> Liked Videos</li>
                            <li><i class="fa-solid fa-list-check"></i> Play List</li>
                        </ul>
                        <hr/>
                        <ul>
                            <li><i class="fa-regular fa-file-video"></i> You</li>
                            <li><i class="fa-solid fa-clipboard-user"></i> Your Channel</li>
                            <li><i class="fa-solid fa-history"></i> History</li>
                        </ul>
                        <hr/>
                        <ul>
                            <li><i class="fa-regular fa-file-video"></i> You</li>
                            <li><i class="fa-solid fa-clipboard-user"></i> Your Channel</li>
                            <li><i class="fa-solid fa-history"></i> History</li>
                        </ul> */}
                    {/* </div> */}
            </div>
        </>
    )
}

export default Sidebar;