import React, { useState } from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { addTables } from '../api/base'; 

interface Props {
  handleRefresh: (val: boolean) => void;
  refreshTable: boolean;
}

const AddTables: React.FC<Props> = (props) => {
  const { handleRefresh, refreshTable } = props;
  const [numTables, setNumTables] = useState<number>(0);
  const [numChairsPerTable, setNumChairsPerTable] = useState<number>(0);
  const [message, setMessage] = useState<string>('');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await addTables(numTables, numChairsPerTable);
      setMessage(response.message);
      handleRefresh(!refreshTable); 
    } catch (error) {
      setMessage('Error adding tables');
    }
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h4" gutterBottom>
        Add Tables
      </Typography>
      <Stack spacing={2}>
          {message && (
            <Typography variant="subtitle1" color="green" style={{ marginTop: '16px' }}>
              {message}
            </Typography>
          )}
        <form onSubmit={handleFormSubmit}>
          <Stack direction={'row'} spacing={2}>
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
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
};

export default AddTables;
