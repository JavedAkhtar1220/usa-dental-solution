import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

import { Grid, Card, TextField, Button, Box } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export default function AdminPage() {
  const [totalCount, setTotalCount] = useState([
    {
      quantity: 0,
      value: 100.0,
      total: 0
    },
    {
      quantity: 0,
      value: 50.0,
      total: 0
    },
    {
      quantity: 0,
      value: 20.0,
      total: 0
    },
    {
      quantity: 0,
      value: 10.0,
      total: 0
    },
    {
      quantity: 0,
      value: 5.0,
      total: 0
    },
    {
      quantity: 0,
      value: 1.0,
      total: 0
    },
    {
      quantity: 0,
      value: 0.25,
      total: 0
    },
    {
      quantity: 0,
      value: 0.1,
      total: 0
    },
    {
      quantity: 0,
      value: 0.05,
      total: 0
    }
  ]);

  const [total, setTotal] = useState(0);

  const classes = useStyles();

  const handleChange = (event, index) => {
    if (event.target.value >= 0) {
      let newArr = [...totalCount];
      newArr[index].quantity = event.target.value;
      newArr[index].total = newArr[index].value * event.target.value;

      setTotalCount(newArr);

      let totalSum = 0;

      for (let a = 0; a < newArr.length; a++) {
        totalSum += newArr[a].total;
      }

      setTotal(totalSum);
    }
  };

  const finalize = () => {
    alert(totalCount);
  };

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={10} xl={10}>
          <Card className="p-4 mb-4">
            <Box marginY={4}>
              <h3 className="text-center">Admin</h3>
            </Box>

            <Button variant="contained" color="primary">
              Pick Cash from Office
            </Button>
            <Box marginTop={2}>
              <Button variant="contained" color="secondary">
                Generate Report
              </Button>
            </Box>

            <Box marginTop={2}>
              <p>
                Cash from {moment().format('l')} to {moment().format('l')}
              </p>
            </Box>
            <Box marginTop={3}>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Denomination</TableCell>
                      <TableCell>Bill Count</TableCell>
                      <TableCell>Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {totalCount.map((v, i) => (
                      <TableRow key={i}>
                        <TableCell>${v.value}</TableCell>
                        <TableCell>{v.quantity}</TableCell>
                        <TableCell>${v.total}</TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell
                        className="font-weight-bold text-right px-4"
                        colSpan={3}>
                        Total Pickup : ${total}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <Box marginTop={2} className="text-right">
                <Button variant="contained" color="primary">
                  Print Report
                </Button>
                <Box marginTop={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={finalize}>
                    Finalize Pick-up and logout
                  </Button>
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
