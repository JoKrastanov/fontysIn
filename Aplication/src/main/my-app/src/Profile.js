import React, { useEffect, useState } from "react";
import Interest from "./Interest";
import InterestDropdown from "./InterestDropdown";
import { getAccount, getAccountData, getInterests } from "./services";
import './Profile.css';
function InfoPopup ({account,onClick}){
    return(
        <>
            <div className="Overlay" onClick={onClick}/>
            <div id="profileInfo"onClick={onClick}>
                <div id="ProfileInfo" className="ProfileInfo">
                    <div id="InfoCard">
                        <svg className="InfoBg">
                            <rect id="InfoBg" rx="111" ry="111" x="0" y="0" width="1237" height="871">
                            </rect>
                        </svg>
                        <div id="Student_Studentovych">
                            <span>{account.name}</span>
                        </div>
                        <svg className="ProfilePic">
                            <ellipse id="ProfilePic" rx="226.5" ry="226.5" cx="226.5" cy="226.5">
                            </ellipse>
                        </svg>
                        <div id="Info">
                            <div id="Experience">
                                <div id="I_did_a_thing_once_Living_in_m">
                                    <span>I did a thing once, Living in my parents house</span>
                                </div>
                                <div id="ExperienceBtn">
                                    <svg className="ExperienceBtnBg">
                                        <rect id="ExperienceBtnBg" rx="21" ry="21" x="0" y="0" width="216"
                                              height="49">
                                        </rect>
                                    </svg>
                                    <div id="Experience_s">
                                        <span>Experience</span>
                                    </div>
                                </div>
                            </div>
                            <div id="Bio">
                                <svg className="BioBg">
                                    <rect id="BioBg" rx="50" ry="50" x="0" y="0" width="1176" height="266">
                                    </rect>
                                </svg>
                                <div id="Curabitur_venenatis_ornare_mau">
                                    <span>{account.bio}</span>
                                </div>
                            </div>
                            <div id="Interests">
                                <div id="InterestsBtn">
                                    <svg className="InterestsBtnBg">
                                        <rect id="InterestsBtnBg" rx="21" ry="21" x="0" y="0" width="216"
                                              height="49">
                                        </rect>
                                    </svg>
                                    <div id="Interests_z">
                                        <span>Interests</span>
                                    </div>
                                </div>
                                <div id="Doing">
                                        <span>{account.interests.map(item => (
                                            <Interest key={item.id} interest={item} />
                                        ))}</span>
                                </div>
                            </div>
                            <div id="Skills">
                                <div id="Making_toast_without_burning_t">
                                    <span>Making toast without burning the house down, Copying and pasting from stackoverflow, Able to make oxygen into carbon dioxide</span>
                                </div>
                                <div id="SkillsBtn">
                                    <svg className="SkillsBtnBg">
                                        <rect id="SkillsBtnBg" rx="21" ry="21" x="0" y="0" width="216" height="49">
                                        </rect>
                                    </svg>
                                    <div id="Skills_">
                                        <span>Skills</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="EditBtn">
                            <svg className="EditBg">
                                <rect id="EditBg" rx="15" ry="15" x="0" y="0" width="194" height="39">
                                </rect>
                            </svg>
                            <div id="Edit">
                                <span>Edit</span>
                            </div>
                        </div>
                        <div id="n_0_Male_Estonia_Estonian_Finn">
                            <span>20<br/><br/>Estonia<br/>Estonian, Finnish, English</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
function Profile() {
    const [account, setAccount] = useState();
    const [interests, setInterests] = useState([]);
    const [popupState, setPopupState] = React.useState({ open: false });


    useEffect(() => {
        let mounted = true;
        getInterests()
            .then(items => {
                if (mounted) {
                    setInterests(items)
                }
            })
        return () => mounted = false;
    }, [])

    useEffect(() => {
        let Account = getAccount();

        let mounted = true;
        getAccountData(Account.pcn)
            .then(items => {
                if (mounted) {
                    setAccount(items)
                }
            })
        return () => mounted = false;
    }, [])

    if (account != undefined){
        return (
            <div id="ProfileInfo" className="ProfileInfo">
                <svg className="ProfilePicture">
                    <ellipse id="ProfilePicture" rx="117.5" ry="117.5" cx="117.5" cy="117.5">
                    </ellipse>
                </svg>
                {<div id="Student_Studentovych__">
                    <span id="NameSpan" href = "#" onClick={showInfo(account)}>{account.name} ⓘ </span>
                </div>}{popupState.open === true && (
                <InfoPopup
                    account={popupState.account}
                    onClick={() => setPopupState({ open: false })}
                />
            )}
            </div>
            /*<>
                <p>{account.name}</p>
                <p>{account.pcn}</p>
                <p>{account.bio}</p>
                {account.interests.map(item => (
                        <Interest key={item.id} interest={item} />
                    ))}

                <InterestDropdown interest={interests} accountId={account.id}/>
            </>*/
        )
    }
    else{
        return (
            <p>Loading Please Wait</p>
        )
    }
    function showInfo(account) {
        return () => setPopupState({ open: true, account });
    }
}

export default Profile;