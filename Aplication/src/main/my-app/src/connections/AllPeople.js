import React, { useState, useEffect } from 'react'
import { getAccount, getALlAccounts, isAccountVisible, makeConnectionRequest } from '../services';
import OnePerson from './OnePerson';
import Popup from '../components/Popup';
import './AllPeople.css';
import { url } from '../config/config';

import axios from "axios";

function AllPeople(prop) {
    const [accounts, setAccounts] = useState();
    const [buttonPopup, setButtonPopup] = useState(false);
    const [requestPcn, setRequestPcn] = useState();
    const [stories, setStories]=useState([]);
    

    useEffect(() => {
        let mounted = true;
        getALlAccounts()
            .then(items => {
                if (mounted) {
                    setAccounts(items);
                }
            })
        return () => mounted = false;
    }, [])

    useEffect(() => { 
        axios.get(url + `/story/account/${getAccount().pcn}`).then((response) => { 
          if(response.status===200){
         
            setStories(response.data);
            
          }else{
            console.log("stories are not loading")
          }
        }); 
      }, []); 

      console.log(stories);
   
    

    if (accounts != undefined) {
        return (
            <div id='AllPeopleWrapper'>
                <div id="PepopeTxt">Stories</div>
                {stories.map(story => (
                    <>
                        
                            <OnePerson key={story.id} person={story}  />
                        
                    </>
                ))}
               
            </div>

        )
    }
    return "";
}

export default AllPeople
