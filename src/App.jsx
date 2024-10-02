import React, { useState, useEffect } from "react";
import TopNav from "./components/TopNav";
import User from "./components/User";
import Hikes from "./components/Hikes";
import NewsFeed from "./components/NewsFeed";

function App() {

    const [users, setUsers] = useState([]);
    const [hikes, setHikes] = useState([]);

    // Load users from localStorage on component mount
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('users'));
        if(storedUser) {
            setUsers(storedUser);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    useEffect(() => {
        localStorage.setItem('hikes', JSON.stringify(hikes));
    }, [hikes]);

    const newUser = (user) => {
        const id = Date.now(); // to generate a unique ID
        const followers = 0;
        const following = 0;
        const toUser = {id, name: user.userName, image: user.userImage, uname: user.userUName, followers: user.followers, following: user.following };
        setUsers([...users, toUser]);
    };

    // Add a follower to the user with a given ID
    const addFollowers = (id) => {
        setUsers(users.map(user => {
            if (user.id === id) {
                return {...user, followers: user.followers + 1 };
            }
            return user;
        }));
    };

    // Add a following to the user with a given ID
    const addFollowing = (id) => {
        setUsers(users.map(user => {
            if (user.id === id){
                return {...user, following: user.following + 1 };
            }
            return user;
        }));
    };

    //  Add a user to a hike by hike ID
    const addToHike = (hikeId, userId) => {
        setHikes(hikes.map(hike => {
            if (hike.id === hikeId) {
                return {...hike, userIDs: [...(hike.userIDs || []), userId] }; // Appending the userId to the userIDs array
            }
            return hike;
        }));
    };

    return (
        <div>
            <div>
            <TopNav />
            </div>
            <div className="mainContent">
                <User newUser={newUser} />
                <Hikes addToHike={addToHike} />
                <NewsFeed
                    addFollowers={addFollowers}
                    addFollowing={addFollowing}
                />
            </div>
        </div>
    );
}
export default App;
