import React from 'react';
import { useForm } from 'react-hook-form';

import {
    Grid,
    Card,
    MenuItem,
    TextField,
    FormControl,
    Divider,
    Select,
    InputLabel,
    Button,
    Box,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import swal from 'sweetalert';

import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import Tables5 from '../../example-components/Tables/Tables5';
import { faTruckMonster } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { amountForm } from 'reducers/actions';

export default function Amount() {

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch();

    const onSubmit = data => {
        dispatch(amountForm(data));
        swal("Record Added Successfully");
        reset();
    }

    const resetForm = () => {
        reset();
    }

    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={12} lg={8}>
                    <Card className="p-4 mb-4">
                        <div className="font-size-lg font-weight-bold">Amount Entry Form</div>
                        <Divider className="my-4" />
                        <Grid container spacing={4} >
                            <Grid item xs={12} lg={12} style={{ margin: '0px auto' }}>
                                <div className="p-3">

                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        <FormControl variant="outlined" fullWidth className="mb-3">
                                            <InputLabel id="demo-simple-select-outlined-label">Office</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-outlined-label"
                                                label="Office"
                                                {...register('office', {
                                                    required: {
                                                        value: true,
                                                        message: "Select Office"
                                                    }
                                                })}
                                                error={errors.office}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value="Office 1">Option 1</MenuItem>
                                                <MenuItem value="Office 2">Option 2</MenuItem>
                                                <MenuItem value="Office 3">Option 3</MenuItem>
                                            </Select>
                                            {errors.office && <p className="text-danger small mb-0 mt-1 ml-2">{errors.office.message}</p>}
                                        </FormControl>

                                        <FormControl variant="outlined" fullWidth className="mb-3">
                                            <InputLabel id="demo-simple-select-outlined-label">Batch Type</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-outlined-label"
                                                label="Batch Type"
                                                {...register('batch', {
                                                    required: {
                                                        value: true,
                                                        message: "Select Batch Type"
                                                    }
                                                })}
                                                error={errors.batch}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value="Insurance Batch">Insurance Batch</MenuItem>
                                                <MenuItem value="Patient Batch">Patient Batch</MenuItem>
                                            </Select>
                                            {errors.batch && <p className="text-danger small mb-0 mt-1 ml-2">{errors.batch.message}</p>}
                                        </FormControl>

                                        <Box className='mb-3'>
                                            <TextField
                                                fullWidth
                                                type="number"
                                                label="Check Number"
                                                variant="outlined"
                                                {...register("checkNumber", {
                                                    required: {
                                                        value: true,
                                                        message: "Check Number is required"
                                                    },
                                                    min: {
                                                        value: 1,
                                                        message: "Enter Positive Number"
                                                    }
                                                })}
                                                error={errors.checkNumber}
                                            />
                                            {errors.checkNumber && <p className="text-danger small mb-0 mt-1 ml-2">{errors.checkNumber.message}</p>}
                                        </Box>

                                        <Box className='mb-3'>
                                            <TextField
                                                fullWidth
                                                type="text"
                                                label="Insurance/Patient Name"
                                                variant="outlined"
                                                {...register("insurance", {
                                                    required: {
                                                        value: true,
                                                        message: "Insurance/Patient Name is required"
                                                    }
                                                })}
                                                error={errors.insurance}
                                            />
                                            {errors.insurance && <p className="text-danger small mb-0 mt-1 ml-2">{errors.insurance.message}</p>}
                                        </Box>

                                        <Box className='mb-3'>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <div className='mx-2'>

                                                    <KeyboardDatePicker
                                                        disableToolbar
                                                        variant="inline"
                                                        format="MM/dd/yyyy"
                                                        margin="normal"
                                                        label="Check Date"
                                                        fullWidth
                                                        error={errors.checkDate}
                                                        {...register("checkDate", {
                                                            required: {
                                                                value: true,
                                                                message: "Select Check Date"
                                                            }
                                                        })}
                                                    // KeyboardButtonProps={{
                                                    //     'aria-label': 'change date',
                                                    // }}
                                                    />
                                                </div>
                                            </MuiPickersUtilsProvider>
                                            {errors.checkDate && <p className="text-danger small mb-0 mt-1 ml-2">{errors.checkDate.message}</p>}
                                        </Box>

                                        <Box className='mb-3'>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <div className='mx-2'>
                                                    <KeyboardDatePicker
                                                        disableToolbar
                                                        variant="inline"
                                                        format="MM/dd/yyyy"
                                                        margin="normal"
                                                        label="Deposit Date"
                                                        fullWidth
                                                        error={errors.depositDate}
                                                        {...register("depositDate", {
                                                            required: {
                                                                value: true,
                                                                message: "Select Deposit Date"
                                                            }
                                                        }
                                                        )}
                                                    // KeyboardButtonProps={{
                                                    //     'aria-label': 'change date',
                                                    // }}
                                                    />
                                                </div>
                                            </MuiPickersUtilsProvider>
                                            {errors.depositDate && <p className="text-danger small mb-0 mt-1 ml-2">{errors.depositDate.message}</p>}
                                        </Box>

                                        <Box className='mb-3'>
                                            <TextField
                                                fullWidth
                                                type="number"
                                                label="Amount"
                                                variant="outlined"
                                                {...register("amount", {
                                                    required: {
                                                        value: true,
                                                        message: "Amount is required"
                                                    },
                                                    min: {
                                                        value: 0,
                                                        message: "Enter Positive Number"
                                                    }
                                                })}
                                            />
                                            {errors.amount && <Alert severity="error" className="mt-2">{errors.amount.message}</Alert>}
                                        </Box>

                                        <Box textAlign={"center"}>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit">
                                                Submit
                                            </Button>

                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                className="mx-2" onClick={resetForm}>
                                                Reset
                                            </Button>
                                        </Box>
                                    </form>

                                </div>
                            </Grid>

                        </Grid>

                    </Card>

                </Grid>

                <Grid item xs={12} lg={12}>
                    <Card className="p-4 mb-4">
                        <div className="font-size-lg font-weight-bold">Records</div>
                        <Divider className="my-4" />
                        <Grid container spacing={4} >
                            <Grid item xs={12} lg={12} style={{ margin: '0px auto' }}>
                                <Tables5 />
                            </Grid>

                        </Grid>

                    </Card>

                </Grid>

            </Grid>
            {/* <DashboardAnalytics1 />
            <DashboardAnalytics2 />
            <DashboardAnalytics3 />
            <DashboardAnalytics4 />
            <DashboardAnalytics5 />
            <DashboardAnalytics6 /> */}
        </>
    );
}
