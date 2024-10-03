import React, { useState } from "react";
import female from "../assets/userFemale.png";
import male from "../assets/user image.png";
import news1 from "../assets/mulhacen.jpg";
import news2 from "../assets/negra.jpg";

function NewsFeed({ addFollowers, addFollowing}) {
    const [sortBy, setSortBy] = useState("Recent");
    const [viewMore, setViewMore] = useState("viewMore");

    return (
        <div>
            <div className="followStats">
                <h4>Who to Follow</h4>
                    <div className="followDiv">
                        <img src={male} alt="User" />
                        <span>Alexis Wells <br/> <p> @wellsalex </p> </span>
                        <button onClick={() => addFollowers(user1.userId)}>Follow</button>
                    </div>
                    <br/>
                    <div className="followDiv">
                        <img src={female} alt="User" />
                        <span>Scarlett Floyd <br/> <p> @floydlett </p></span>
                        <button onClick={() => addFollowing(2)}>Follow</button>
                    </div>
                    <br/>
                    <div className="followDiv">
                        <img src={male} alt="User" />
                        <span>John Doe <br/> <p> @doejohn </p></span>
                        <button onClick={() => addFollowing(3)}>Follow</button>
                    </div>

                {/* View More Dropdown */}
                <span className="viewMore">View More</span>
            </div>

            {/* News Section */}
            <div className="news">
                <h4>Today's News</h4>
                <div className="newsList">
                    
                        <img src={news1} alt="News" /> <br/>
                        <span>Five Questions You Should Answer Truthfully</span>
                        <br/> <br/>                
                        <img src={news2} alt="News" /><br/>
                        <span>Ten Unbelievable Facts About Mountains</span>
                    
                </div>
            </div>
        </div>
    );
}

export default NewsFeed;
