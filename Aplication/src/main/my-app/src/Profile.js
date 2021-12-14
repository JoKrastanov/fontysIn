import React, { useEffect, useState } from "react";
import Interest from "./Interest";
import InterestDropdown from "./InterestDropdown";
import { getAccount, getAccountData, getAllPendingRequests, getInterests, updateAccount, updateAccountPictrure } from "./services";
import './Profile.css';
import VisibilitySwitch from "./components/VisibilitySwitch.js";

function InfoPopup({ account, onClick, interests, myAcc, profileImage }) {
    const [showSubmit, setShowSubmit] = useState(false);
    const [selected, setSelected] = useState(null);
    const [showImageMenu, setShowImageMenu] = useState(false);
    const [changePicBtn, setChangePicBtn] = useState(true);
    const [binaryImage, setBinaryImage] = useState(profileImage);
    const [selectImageStyle, setSelectImageStyle] = useState("");


    const getVisibility = () => {
        switch (account.visibility) {
            case 0:
                return 'private';
            case 1:
                return 'friends-only';
            case 2:
                return 'public';
            default:
                return '';
        }
    }

    const showVisibilityStyle = () => {
        if (!myAcc) {
            return "switch_visibility disp-none";
        }
        else {
            return "switch_visibility";
        }
    }

    const getVisibilityNum = (prop) => {
        switch (prop) {
            case 'private':
                return 0;
            case 'friends-only':
                return 1;
            case 'public':
                return 2;
            default:
                return '';
        }
    }



    const handleVisibilityChange = () => {
        updateAccount(account, getVisibilityNum(selected));
        window.location.reload();
    }

    const onImageClickHandler = () => {
        setShowImageMenu(!showImageMenu);
        if (!changePicBtn) {
            setChangePicBtn(true);
            setSelectImageStyle("");
        }
    }

    const onChangePicOption = (e) => {
        setChangePicBtn(false);
        setSelectImageStyle("center-image-select");
    }

    const onImageUploaded = (e) => {
        let file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = _handleReaderLoad.bind();
            reader.readAsBinaryString(file);

        }

    }

    const _handleReaderLoad = (readerEvt) => {
        let binaryString = readerEvt.target.result;
        setBinaryImage("data:image/png;base64," + btoa(binaryString));
    }

    const handleImageSubmission = () => {
        updateAccountPictrure(account, binaryImage);
        window.location.reload();
    }


    return (
        <>
            <div className="Overlay" />
            <div id="profileInfo" >
                <div id="ProfileInfo" className="ProfileInfo">
                    <div id="InfoCard">
                        <div className="InfoBg" id="InfoBg">
                            <div className={showVisibilityStyle()}>
                                <p>Visibility level:</p>
                                <VisibilitySwitch values={['private', 'friends-only', 'public']} selected={getVisibility()} setSubmit={setShowSubmit} setSelected={setSelected} />
                                {showSubmit ? <button onClick={handleVisibilityChange}>Change</button> : null}
                            </div>
                            <div className={"close-btn"}><button onClick={onClick}><i className="fa fa-close"></i></button></div>

                            <div className="ProfilePicHolder">
                                <div className="ProfilePic">
                                    <img onClick={onImageClickHandler} id="profile_pic" className="imge" src={binaryImage} />
                                </div>
                                {showImageMenu && myAcc ? <div className={"change-pic " + selectImageStyle}>
                                    {changePicBtn ? <button onClick={onChangePicOption}>Change</button> :
                                        <div className="select-pic">
                                            <label>
                                                <input onChange={(e) => onImageUploaded(e)} className={""} type="file" name="image" id="file" accept=".jpeg, .png, .jpg" />
                                                Upload an image
                                            </label>
                                            <button onClick={handleImageSubmission}>Submit</button>
                                        </div>
                                    }
                                </div> : <></>}
                            </div>

                                <div id="MidInfo">
                                    <div id="DetailsWrapper">
                                        <span>20<br /><br />Estonia<br />Estonian, Finnish, English</span>
                                    </div>
                                    <div id="CardName">
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
                                            <div id="IntertestsList">
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
                                            <div id="ExperienceList">
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
                                            <div id="SkillsList">
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

function Profile(prop) {
    const [account, setAccount] = useState();
    const [interests, setInterests] = useState([]);
    const [popupState, setPopupState] = React.useState({ open: false });


    useEffect(() => {
        if (!prop.rendered.hasRendered2) {
            getInterests(prop.pcn)
                .then(items => {
                    setInterests(items)
                    prop.rendered.setHasRendered2(true);
                })
        }
        return;
    })

    useEffect(() => {
        if (!prop.rendered.hasRendered3) {
            getAccountData(prop.pcn)
                .then(items => {
                    setAccount(items)
                    prop.rendered.setHasRendered3(true);

                })
        }
        return;
    })

    if (account != undefined) {
        //rx="117.5" ry="117.5" cx="117.5" cy="117.5"
        const profileImage = () => {

            if (account.binaryImage == null) {
                return "./defaultPhoto.png";
            }
            else {
                return account.binaryImage;
            }
        }
        return (
            <div id="ProfileInfo" className="ProfileInfo">
                <div className="ProfilePicture">
                    <img src={profileImage()} alt="profile picture" />
                </div>
                {<div id="InfoPopup">
                    <span id="NameSpan" href="#" onClick={showInfo(account)}>{account.name} ⓘ </span>
                </div>}{popupState.open === true && (
                    <InfoPopup
                        account={popupState.account}
                        myAcc={prop.myAccount}
                        onClick={() => setPopupState({ open: false })}
                        interests={interests}
                        profileImage={profileImage}
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

                <InterestDropdown interest={interests} accountId={account.id} />
            </>*/
        )
    }
    else {
        return (
            <p>Loading Please Wait</p>
        )
    }
    function showInfo(account) {
        return () => setPopupState({ open: true, account });
    }
}
export default Profile;