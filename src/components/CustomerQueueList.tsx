import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { fetchCustomerQueues } from '../api/base';

interface CustomerQueue {
  _id: string;
  name: string;
  queueNumber: number;
}

interface Props {
  refresh: boolean;
}

const CustomerQueueList: React.FC<Props> = (props) => {
  const { refresh } = props;
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
  }, [refresh]);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Customer Queues
      </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Queue Name</TableCell>
                <TableCell>Queue Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customerQueues.length === 0 && (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    No record is available
                  </TableCell>
                </TableRow>
              )}
              {customerQueues.length > 0 && customerQueues.map((queue, index) => (
                <TableRow key={queue._id}>
                  <TableCell>{index+1}</TableCell>
                  <TableCell>{queue.name}</TableCell>
                  <TableCell>{queue.queueNumber}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </Container>
  );
};

export default CustomerQueueList;
