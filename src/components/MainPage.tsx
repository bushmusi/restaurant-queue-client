// src/components/MainPage.tsx
import React, { useState } from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import AddTables from './AddTables'; 
import AddHeadcount from './AddHeadCount'; 
import TableList from './TableList';
import CustomerQueueList from './CustomerQueueList';

const MainPage: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<string>('');

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ textDecoration: 'none', color: 'white' }}>
            Restaurant Table Arrangement
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MainPage;
