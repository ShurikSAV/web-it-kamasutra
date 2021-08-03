import React from 'react';
//import s from './Profile.module.css'
import My_posts from "./my_posts/my_posts";
import Profile_info from "./profile_info/profile_info";

const Profile = () => {
    return (
        <div>
            <Profile_info/>
            <My_posts/>
        </div>
    );
}

export default Profile;
