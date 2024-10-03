import React, { useState } from "react";
import kilimanjaro from "../assets/kilimanjaro.jpg";
import tiede from "../assets/tiede.jpg";
import guajara from "../assets/guajara.jpg";
import mulhacen from "../assets/mulhacen.jpg";

function Hikes({ addToHike }) {
    const [sortBy, setSortBy] = useState("Recent"); // State for dropdown
    const hikes = [
        { hikeId: 1, hikeName: "Mount Semeru", userIds: [], date: "DEC 24", distance: "106ml", elevation: "4.884m", difficulty: "Hard", location: "Lumanjang, East Java", time: "THU 07:30AM", hImage: mulhacen },
        { hikeId: 2, hikeName: "Mount Kosciuszko", userIds: [], date: "DEC 28", distance: "62ml", elevation: "2.228m", difficulty: "Medium", location: "Australia", time: "WED 10:00 AM", hImage: guajara },
        { hikeId: 3, hikeName: "Mount Kilimanjaro", userIds: [], date: "JAN 02", distance: "138ml", elevation: "5.895m", difficulty: "Hard", location: "Tanzania", time: "FRI 6:30 AM", hImage: kilimanjaro },
        { hikeId: 4, hikeName: "Mount Crab", userIds: [], date: "JAN 14", distance: "26ml", elevation: "2.063m", difficulty: "Easy", location: "Andes, Peru", time: "MON 11:20 AM", hImage: tiede }
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
                        <div className="hikeImage">
                            <img src={hike.hImage} alt={hike.hikeName} />
                            <div className="hikeDate">
                                <span>{hike.date}</span>
                            </div>
                            <div className="hikeNotes">
                                <div className="info">
                                    <div className="label">Distance </div><div className="value"> {hike.distance}</div>
                                </div>
                                <div className="info">
                                    <div className="label">Elevation </div><div className="value"> {hike.elevation}</div>
                                </div>
                                <div className="info">
                                    <div className="label">Difficulty </div><div className="value"> {hike.difficulty}</div>
                                </div>
                            </div>
                        </div>
                        <p className="time">{hike.time}</p>
                        <h4>{hike.hikeName}</h4>
                        <p className="location">Location . {hike.location}</p>
                        <img src="" alt="user Icons" />
                        <button className="join" onClick={() => addToHike(hike.hikeId, hike.userIds)}>Join</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hikes;
