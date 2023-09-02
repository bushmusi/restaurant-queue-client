// src/components/CustomerQueueList.tsx
import React, { useEffect, useState } from 'react';
import { fetchCustomerQueues } from '../api/base'; 

interface CustomerQueue {
  _id: string;
  name: string;
}

const CustomerQueueList: React.FC = () => {
  const [customerQueues, setCustomerQueues] = useState<CustomerQueue[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queues = await fetchCustomerQueues();
        setCustomerQueues(queues);
      } catch (error) {
        console.error('Error fetching customer queues:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Customer Queues</h2>
      <ul>
        {customerQueues.map((queue) => (
          <li key={queue._id}>{queue.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerQueueList;
