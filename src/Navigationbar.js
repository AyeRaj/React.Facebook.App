import React from 'react'
import './Navigationbar.css'
export default function Navigationbar() {
  return (
    <div>
      <header>
        <div className='left'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png' className='fbicon'/>
            <div className='fbsearch'><span className="material-symbols-outlined">search</span><input name='searchfacebook' placeholder='Search Facebook'/></div>
        </div>
        <div className='center'>
        <span className="material-symbols-outlined">home</span>
        <span className="material-symbols-outlined">tv</span>
        <span className="material-symbols-outlined">storefront</span>
        <span className="material-symbols-outlined">groups</span>
        <span className="material-symbols-outlined">videogame_asset</span>
        </div>
        <div className='right'>
        <span className="material-symbols-outlined">apps</span>
        <span className="material-symbols-outlined">chat</span>
        <span className="material-symbols-outlined">notifications</span>
        <img src='https://avatars.githubusercontent.com/u/88272565?v=4' className='fbicon'/>
        </div>
      </header>
    </div>
  )
}
