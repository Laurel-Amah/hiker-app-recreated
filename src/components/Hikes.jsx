import React, { useState } from "react";

function Hikes({ addToHike }) {
    const [sortBy, setSortBy] = useState("Recent"); // State for dropdown
    const hikes = [
        { hikeId: 1, hikeName: "Mount Semeru", userIds: [], date: "Dec 24", distance: "106ml", elevation: "4.884m", difficulty: "Hard", location: "Lumanjang, East Java", time: "THU 07:30AM" },
        { hikeId: 2, hikeName: "Mount Kosciuszko", userIds: [], date: "Dec 28", distance: "62ml", elevation: "2.228m", difficulty: "Medium", location: "Australia", time: "WED 10:00 AM" },
        { hikeId: 3, hikeName: "Mount Kilimanjaro", userIds: [], date: "Jan 02", distance: "138ml", elevation: "5.895m", difficulty: "Hard", location: "Tanzania", time: "FRI 6:30 AM" },
        { hikeId: 4, hikeName: "Mount Crab", userIds: [], date: "JAN 14", distance: "26ml", elevation: "2.063m", difficulty: "Easy", location: "Andes, Peru", time: "MON 11:20 AM" }
    ];

    return (
        <div className="hike-box">
            <div className="topHike">
                <h4>Upcoming Hikes</h4>
                <p>
                    Sort by: 
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="Recent">Most Recent</option>
                        <option value="Popular">Popular</option>
                    </select>
                </p>
            </div>
            <div className="hikes">
                {hikes.map((hike) => (
                    <div className="hike" key={hike.hikeId}>
                        <div>
                            <span>{hike.date}</span>
                            <img src="" alt={hike.hikeName} />
                            <span>Distance <br /> {hike.distance}</span>
                            <span>Elevation <br /> {hike.elevation}</span>
                            <span>Difficulty <br /> {hike.difficulty}</span>
                        </div>
                        <p>{hike.time}</p>
                        <h4>{hike.hikeName}</h4>
                        <p>Location . {hike.location}</p>
                        <img src="" alt="user Icons" />
                        <button onClick={() => addToHike(hike.hikeId, hike.userIds)}>Join</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hikes;
