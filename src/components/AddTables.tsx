import React, { useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import { addTables } from '../api/base'; 

const AddTables: React.FC = () => {
  const [numTables, setNumTables] = useState<number>(0);
  const [numChairsPerTable, setNumChairsPerTable] = useState<number>(0);
  const [message, setMessage] = useState<string>('');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await addTables(numTables, numChairsPerTable);
      setMessage(response.message);
    } catch (error) {
      setMessage('Error adding tables');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Add Tables
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <TextField
          label="Number of Tables"
          type="number"
          fullWidth
          value={numTables}
          onChange={(e) => setNumTables(parseInt(e.target.value))}
        />
        <TextField
          label="Chairs per Table"
          type="number"
          fullWidth
          value={numChairsPerTable}
          onChange={(e) => setNumChairsPerTable(parseInt(e.target.value))}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Tables
        </Button>
      </form>
      {message && (
        <Typography variant="body1" color="textSecondary" style={{ marginTop: '16px' }}>
          {message}
        </Typography>
      )}
    </Container>
  );
};

export default AddTables;
