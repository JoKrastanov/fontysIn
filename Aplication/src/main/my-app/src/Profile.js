import React, { useEffect, useState } from "react";
import Interest from "./Interest";
import InterestDropdown from "./InterestDropdown";
import { getAccount, getAccountData, getInterests } from "./services";
import './Profile.css';
function InfoPopup ({account,onClick, interests}){
    return(
        <>
            <div className="Overlay" onClick={onClick}/>
            <div id="profileInfo"onClick={onClick}>
                <div id="ProfileInfo" className="ProfileInfo">
                    <div id="InfoCard">s
                        <div className="InfoBg" id="InfoBg">
                          <div className="ProfilePicHolder">  <div className="ProfilePic">
                        <img className="imge" src="./logo512.png" />
                            </div>
                          </div>
                            <div id="MidInfo">
                                <div id="n_0_Male_Estonia_Estonian_Finn">
                                    <span>20<br/><br/>Estonia<br/>Estonian, Finnish, English</span>
                                </div>
                                <div id="Student_Studentovych">
                                    <span>{account.name}</span>
                                </div>
                                <div id="EditBtn">
                                    <button id="EditBg">Edit</button>

                                </div>
                            </div>
                        <div id="Info">
                            <div id="Bio">
                                <div className="BioBg">
                                    <div id="BioBg" >
                                        <div id="BioText">
                                            <span>{account.bio}</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div id="IES">
                            <div id="Interests">
                                <div id="InterestsBtn">
                                    <div className="InterestsBtnBg">
                                        <div id="InterestsBtnBg">
                                            <div id="Interests_z">
                                                <span>Interests</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div id="Doing">
                                        <span>{interests.map(item => (
                                            <Interest key={item.id} interest={item} />
                                        ))}</span>
                                </div>
                            </div>
                            <div id="Experience">

                                <div id="ExperienceBtn">
                                    <div className="ExperienceBtnBg">
                                        <div id="ExperienceBtnBg" >
                                            <div id="Experience_s">
                                                <span>Experience</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div id="I_did_a_thing_once_Living_in_m">
                                    <span>I did a thing once, Living in my parents house</span>
                                </div>
                            </div>


                            <div id="Skills">

                                <div id="SkillsBtn">
                                    <div className="SkillsBtnBg">
                                        <div id="SkillsBtnBg" >
                                            <div id="Skills_">
                                                <span>Skills</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div id="Making_toast_without_burning_t">
                                    <div>Making toast without burning the house down, Copying and pasting from stackoverflow, Able to make oxygen into carbon dioxide</div>
                                </div>
                            </div>
                            </div>
                        </div>


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
        getInterests(getAccount().pcn)
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
        //rx="117.5" ry="117.5" cx="117.5" cy="117.5"
        return (
            <div id="ProfileInfo" className="ProfileInfo">
                <div className="ProfilePicture">
                    <div id="ProfilePicture" >
                    </div>
                </div>
                {<div id="Student_Studentovych__">
                    <span id="NameSpan" href = "#" onClick={showInfo(account)}>{account.name} ⓘ </span>
                </div>}{popupState.open === true && (
                <InfoPopup
                    account={popupState.account}
                    onClick={() => setPopupState({ open: false })}
                    interests={interests}
                    
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