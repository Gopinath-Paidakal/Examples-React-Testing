import React, { useEffect, useState } from 'react';

export default function GetSubscriberName() {
    //const [SubscriberId, setSubscriberId] = useState(0);
    const [subscriberData, setSubscriberData] = useState({});
	// const [SubscriberName, setSubscriberName] = useState('');

    const SubscriberId = 100;

    const API_BASE_URL = 'https://localhost:7131/';

    useEffect(() => {
		const fetchSubscriberData = async () => {
			const res = await fetch(
				`${API_BASE_URL}Subscriber/GetSubscriberById?subscriberId=${SubscriberId}`
                //`https://localhost:7131/Subscriber/GetSubscriberById?subscriberId=100`

			);
			const data = await res.json();
            console.log(data);
			setSubscriberData(data?.[0]);
			// setSubscriberName(data?.[0]?.subscriberName);
		};
		// if (SubscriberId !== '' || SubscriberId > 0)
			fetchSubscriberData();
	}, []);

    

  return (
    <div>
        <h3>
           {subscriberData?.subscriberId || ''} 
           {subscriberData?.subscriberName || ''}
        </h3>
    </div>
  )
}
