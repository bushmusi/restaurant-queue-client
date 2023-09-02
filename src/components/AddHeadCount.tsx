// src/components/AddHeadcount.tsx
import React, { useState } from 'react';
import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import { addHeadCount } from '../api/base'; // Implement this API function

const AddHeadcount: React.FC = () => {
  const [headCount, setHeadCount] = useState<number>(0);
  const [message, setMessage] = useState<string>('');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await addHeadCount(headCount); // Implement this API function
      setMessage(response.message);
    } catch (error) {
      setMessage('Error adding headcount');
    }
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h4" gutterBottom>
        Add Headcount
      </Typography>
      <Stack spacing={2}>
        {message && (
          <Typography variant="body1" color="textSecondary" style={{ marginTop: '16px' }}>
            {message}
          </Typography>
        )}
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
            Add Headcountsd
          </Button>
        </Stack>
      </form>
      </Stack>
    </Stack>
  );
};

export default AddHeadcount;
