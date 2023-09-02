// src/components/TableList.tsx
import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { fetchTables } from '../api/base'; // Implement this API function

const TableList: React.FC = () => {
  const [tables, setTables] = useState<any[]>([]); // Update the type based on your table data structure

  useEffect(() => {
    // Fetch tables data when the component mounts
    const fetchTablesData = async () => {
      try {
        const response: any[] = await fetchTables(); // Update the type based on your table data structure
        setTables(response);
      } catch (error) {
        console.error('Error fetching tables:', error);
      }
    };

    fetchTablesData();
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Table List
      </Typography>
      <ul>
        {tables.map((table, index) => (
          <li key={index}>{table.table_name}</li>
        ))}
      </ul>
    </Container>
  );
};

export default TableList;
