import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { fetchTables } from '../api/base'; // Implement this API function

interface ITable {
  table_name: string;
  num_chair: number;
  allocated: number;
  left: number;
}

interface Props {
  refresh: boolean;
}

const TableList: React.FC<Props> = (props) => {
  const { refresh  } = props;
  const [tables, setTables] = useState<ITable[]>([]);

  useEffect(() => {
    const fetchTablesData = async () => {
      try {
        const response: ITable[] = await fetchTables();
        setTables(response);
      } catch (error) {
        console.error('Error fetching tables:', error);
      }
    };

    fetchTablesData();
  }, [refresh]);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Table List
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Table Name</TableCell>
              <TableCell>Number of Chairs</TableCell>
              <TableCell>Allocated</TableCell>
              <TableCell>Left</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tables.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No record is available
                </TableCell>
              </TableRow>
            )}
            {tables.length > 0 && tables.map((table, index) => (
              <TableRow key={index}>
                <TableCell>{table.table_name}</TableCell>
                <TableCell>{table.num_chair}</TableCell>
                <TableCell>{table.allocated}</TableCell>
                <TableCell>{table.left}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TableList;
