import React, { useState } from "react";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import female from "../assets/userFemale.png";

function TopNav() {
    const [input, setInput] = useState("");
    const [account, setAccount] = useState(""); 

    return (
        <div className="topNav">
            <div className="section1">
                <button>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <form>
                    <input 
                        type="text" 
                        value={input} 
                        placeholder="Search"
                        onChange={(e) => setInput(e.target.value)} // Update state on input change
                    />
                </form>
            </div>
            <div className="section2">
                <a href="">Search</a>
                <a href="">Pages</a>
                <a href="">My Network</a>
                <form>
                    <select value={account} onChange={(e) => setAccount(e.target.value)}> {/* Update state on select change */}
                        <option value="account">Account</option>
                        <option value="accounts">Accounts</option>
                    </select>
                </form>
            </div>
            <div className="section3">
                <button>
                    <FontAwesomeIcon icon={faMessage} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faGear} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faBell} />
                </button>
                <img src={female} alt="User" />
            </div>
        </div>
    );
}

export default TopNav;
