import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

import {
    Grid,
    Card,
    TextField,
    Button,
    Box,
    FormControl,
    InputLabel,
    Select
} from '@material-ui/core';
import Table2 from '../../example-components/Tables/Tables2';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function DashboardDeposit() {

    const [totalCount, setTotalCount] = useState(
        [{
            quantity: 0,
            value: 100.00,
            total: 0,
        },
        {
            quantity: 0,
            value: 50.00,
            total: 0,
        },
        {
            quantity: 0,
            value: 20.00,
            total: 0,
        },
        {
            quantity: 0,
            value: 10.00,
            total: 0,
        },
        {
            quantity: 0,
            value: 5.00,
            total: 0,
        },
        {
            quantity: 0,
            value: 1.00,
            total: 0,
        },
        {
            quantity: 0,
            value: 0.25,
            total: 0,
        },
        {
            quantity: 0,
            value: 0.10,
            total: 0,
        },
        {
            quantity: 0,
            value: 0.05,
            total: 0,
        },
        ])

    const [total, setTotal] = useState(0)

    const classes = useStyles();

    const handleChange = (event, index) => {

        let newArr = [...totalCount];
        newArr[index].quantity = event.target.value;
        newArr[index].total = newArr[index].value * event.target.value;

        setTotalCount(newArr);

        let totalSum = 0;

        for (let a = 0; a < newArr.length; a++) {
            totalSum += newArr[a].total
        }

        setTotal(totalSum)
    }

    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={12} lg={12} xl={12}>
                    <Card className="p-4 mb-4">

                        <Box marginY={4}>
                            <h3 className='text-center'>
                                Cash Deposit Dashboard
                            </h3>
                        </Box>

                        <FormControl variant="outlined" className="w-25">
                            <InputLabel>Select Office</InputLabel>
                            <Select
                                native
                                label="Select Office"
                            >
                                <option aria-label="None" value="" />
                                <option value={10}>Option 1</option>
                                <option value={20}>Option 2</option>
                                <option value={30}>Option 3</option>
                            </Select>
                        </FormControl>

                        <Box marginTop={3}>

                            <Table2 />

                        </Box>


                    </Card>

                </Grid>

            </Grid>

        </>
    );
}
