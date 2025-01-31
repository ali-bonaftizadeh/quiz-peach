import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Card } from '@mui/material';

export default function BasicTable({key, titles, rows}) {
  return (
    <TableContainer key={key} component={Card}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            {
                titles.map(title => {
                    return (<TableCell key={title} align='right'>{title}</TableCell>);
                })
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow
                key={row.key}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
              >
                 {row.columns.map(c => (<TableCell key={c} align="right">{c}</TableCell>))}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
