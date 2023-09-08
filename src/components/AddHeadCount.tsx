// src/components/AddHeadcount.tsx
import React, { useState } from 'react';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { addHeadCount } from '../api/base'; // Implement this API function

interface Props {
  handleRefresh: (val: boolean) => void;
  refreshHeadCount: boolean
}

const AddHeadcount: React.FC<Props> = (props) => {
  const { handleRefresh, refreshHeadCount } = props;
  const [headCount, setHeadCount] = useState<number>(0);
  const [message, setMessage] = useState<string>('');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await addHeadCount(headCount); // Implement this API function
      setMessage(response.message);
      handleRefresh(!refreshHeadCount);
    } catch (error) {
      setMessage('Error adding headcount');
    }
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h4" gutterBottom>
        Add Headcount
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <Stack direction={'row'} spacing={2}>
          <TextField
            label="Headcount"
            type="number"
            fullWidth
            value={headCount}
            onChange={(e) => setHeadCount(parseInt(e.target.value))}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Headcount
          </Button>
        </Stack>
      </form>
      {message && (
        <Typography variant="subtitle1" color="green" style={{ marginTop: '16px' }}>
          {message}
        </Typography>
      )}
    </Stack>
  );
};

export default AddHeadcount;
