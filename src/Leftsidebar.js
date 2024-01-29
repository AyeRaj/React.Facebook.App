import React from 'react';
import './Leftsidebar.css';
 
 
export default function Leftsidebar() {
  return (
    <div className={'sidebar'}>
        <ul>
        <li><i class="material-symbols-outlined">person</i>Aditya Raj</li>
        <li><i class="material-symbols-outlined">group</i>Friends</li>
        <li><i class="material-symbols-outlined">history</i>Memories</li>
        <li><i class="material-symbols-outlined">bookmark</i>Saved</li>
        <li><i class="material-symbols-outlined">group</i>Group</li>
        <li><i class="material-symbols-outlined">video_library</i>Video</li>
        <li><i class="material-symbols-outlined">store</i>Marketplace</li>
        <li><i class="material-symbols-outlined">feed</i>Feeds</li>
        <li><i class="material-symbols-outlined">event</i>Events</li>
        <li><i class="material-symbols-outlined">expand_more</i>See more</li>
       
        {/* Add more sidebar items */}
      </ul>
    </div>
  )
}