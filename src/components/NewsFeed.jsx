import React, { useState } from "react";
import User from "./User";

function NewsFeed({ addFollowers, addFollowing}) {
    const [sortBy, setSortBy] = useState("Recent");
    const [viewMore, setViewMore] = useState("viewMore");

    return (
        <div>
            <div className="follow-stats">
                <h4>Who to Follow</h4>
                <ul>
                    <li>
                        <img src="" alt="User" />
                        <span>Alexis Wells @wellsalex </span>
                        <button onClick={() => addFollowers(user1.userId)}>Follow</button>
                    </li>
                    <li>
                        <img src="" alt="User" />
                        <span>Scarlett Floyd @floydlett</span>
                        <button onClick={() => addFollowing(2)}>Follow</button>
                    </li>
                    <li>
                        <img src="" alt="User" />
                        <span>John Doe @doejohn</span>
                        <button onClick={() => addFollowing(3)}>Follow</button>
                    </li>
                </ul>

                {/* Sort by Dropdown */}
                <span>
                    Sort by: 
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="Recent">Most Recent</option>
                        <option value="Popular">Popular</option>
                    </select>
                </span>

                {/* View More Dropdown */}
                <span className="viewMore">
                    <select value={viewMore} onChange={(e) => setViewMore(e.target.value)}>
                        <option value="viewMore">View More</option>
                    </select>
                </span>
            </div>

            {/* News Section */}
            <div className="news">
                <h6>Today's News</h6>
                <ul className="newsList">
                    <li>
                        <img src="" alt="News" />
                        <span>Five Questions You Should Answer Truthfully</span>
                    </li>
                    <li>
                        <img src="" alt="News" />
                        <span>Ten Unbelievable Facts About Mountains</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NewsFeed;
