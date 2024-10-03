import React, { useEffect } from "react";
import logo from "../assets/react.svg"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUsers, faFilm, faImage, faMap } from "@fortawesome/free-solid-svg-icons"; 
import negra from "../assets/negra.jpg";

function User({ newUser }) {
    const userName = "Alexis Wells";
    const userUName = "@wellsalex";
    const userImage = logo;
    const followers = 1;
    const following = 2;

    const user1 = {
        userName,
        userUName, 
        userImage,
        followers,
        following,
    };

    useEffect(() => {
        newUser(user1);
    }, [newUser, user1]);


    return (
        <div className="userbox">
            {/* User profile section */}
            <div className="profile">
                <img src={user1.userImage} alt="User" />
                <h4>{user1.userName}</h4>
                <h6>{user1.userUName}</h6>
            </div>

            {/* Follow stats */}
            <div className="follows">
            <div className="info">
                <div className="label"> {user1.followers || 0} </div><div className="value"> Followers</div>
                </div>
                <div className="info">
                <div className="label">{user1.following || 0} </div><div className="value"> Following </div>
                </div>
                <div className="info">
                <div className="label">4.6k  </div><div className="value"> Event</div>
                </div>
            </div>

            {/* Navigation options */}
            <div className="options1">
                <div>
                    <a href="#">
                        <FontAwesomeIcon icon={faHouse} /> Feed
                    </a>
                    <br/>
                    <a href="#">
                        <FontAwesomeIcon icon={faUsers} /> Friends
                    </a>
                    <br/>
                    <a href="#">
                        <FontAwesomeIcon icon={faFilm} />  Videos</a>
                    <br/>
                    <a href="#">
                        <FontAwesomeIcon icon={faImage} /> Photos</a>
                    <br/>
                    <a href="#">
                        <FontAwesomeIcon icon={faMap} />  Map</a>
                </div>

                {/* Pages you like */}
                <div className="pages">
                    <h5>PAGES YOU LIKE</h5>
                    <span>
                        <img src={negra} alt="World of Mountains" /> World of Mountains
                    </span>
                    <br/>
                    <span>
                        <img src={negra} alt="Mountain Life" /> Mountain Life
                    </span>
                    <br/>
                    <span>
                        <img src={negra} alt="Mountains calling" /> Mountains calling in P...
                    </span>
                    <br/>
                    <span>
                        <img src={negra} alt="Mountaineering" /> Mountaineering
                    </span>
                    <br/>
                </div>
            </div>
        </div>
    );
}

export default User;
