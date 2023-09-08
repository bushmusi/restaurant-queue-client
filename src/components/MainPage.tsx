import { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Stack } from '@mui/material';
import AddTables from './AddTables';
import AddHeadcount from './AddHeadCount';
import CustomerQueueList from './CustomerQueueList';
import TableList from './TableList';

const MainPage = () => {
  const [refreshTable, setRefreshTable ] = useState(false);
  
  return (
    <div>
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h6">Restaurant Waits</Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ my: 3 }}>
        <Stack direction="column" spacing={2}>
          <AddTables handleRefresh={setRefreshTable} refreshTable={refreshTable} />
          <AddHeadcount handleRefresh={setRefreshTable} refreshHeadCount={refreshTable} />
          <TableList refresh={refreshTable} />
          <CustomerQueueList refresh={refreshTable} />
        </Stack>
      </Container>

      <footer>
        <Container>
          <Typography variant="body2" color="textSecondary">
            Fake Company Name<br />
            Fake Company Address<br />
            City, State, ZIP Code
          </Typography>
        </Container>
      </footer>
    </div>
  );
};

export default MainPage;
