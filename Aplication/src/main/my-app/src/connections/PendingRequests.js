import React, { useState, useEffect } from 'react'
import { acceptRequest, getAccount, getAllPendingRequests } from '../services';
import OnePendingRequest from './OnePendingRequest';

function PendingRequests() {
    const [PendingRequests, setPendingRequests] = useState(false);

    useEffect(() => {
        let mounted = true;
        getAllPendingRequests(getAccount().pcn)
            .then(items => {
                if (mounted) {
                    setPendingRequests(items);
                }
            })
        return () => mounted = false;
    }, [])

    const acceptRequestAsync = async (request) => {
        await acceptRequest(request);
    }


    if (PendingRequests === false) {
        return "";
    }
    else if (PendingRequests === undefined) {
        return (
            <div>
                <p>No Pending Requests</p>
            </div>
        )
    }
    else {
        return (
            <div>
                {PendingRequests.map(item => (
                    <>
                        {item.pcn1 != getAccount().pcn &&
                            <OnePendingRequest request={item} acceptRequest={acceptRequestAsync} />
                        }
                    </>
                ))}
            </div>
        )
    }
}

export default PendingRequests
