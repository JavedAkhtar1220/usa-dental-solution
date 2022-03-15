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

export default function ManagerPage() {
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
      
    let newArr = [...totalCount];
    let result = {};
    for (let a = 0; a < newArr.length; a++) {
      var key = newArr[a].value;
      var obj = {
        [key]: newArr[a].quantity
      };
      result = { ...result, ...obj };
    }

    alert(JSON.stringify(result));
    console.log(result);
  };

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={12} xl={8}>
          <Card className="p-4 mb-4">
            <Box marginY={4}>
              <h3 className="text-center">Office Manager</h3>
            </Box>

            <Button variant="contained" color="primary">
              Register Cash Deposit
            </Button>
            <Box marginTop={4}>
              <TextField
                type="search"
                label="Search"
                size="small"
                variant="outlined"
              />
              <Button variant="contained" color="primary" className="mx-2">
                Search
              </Button>
            </Box>
            <Box marginTop={2}>
              <p>Date: {moment().format('l')}</p>
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
                        <TableCell>
                          <TextField
                            type="number"
                            value={v.quantity}
                            onChange={(e) => handleChange(e, i)}
                            label="Count"
                            size="small"
                            variant="outlined"
                          />
                        </TableCell>
                        <TableCell>${v.total}</TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell
                        className="font-weight-bold text-right px-4"
                        colSpan={3}>
                        Total Deposit for Patient : ${total}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <Box marginTop={2} className="text-right">
                <Button variant="contained" color="primary" onClick={finalize}>
                  Drop Cash in Safe
                </Button>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
