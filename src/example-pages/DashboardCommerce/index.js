import React from 'react';

import { PageTitle } from 'layout-components';

import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem

} from '@material-ui/core';

import Table4 from '../../example-components/Tables/Tables4';
import Chart1 from '../../example-components/Chartjs/Chartjs2';

export default function DashboardCommerce() {
  return (
    <>
      <PageTitle
        titleHeading="Dashboard"
        titleDescription="Dashboard section built in a few minutes using only included elements."
      />
      <Box>
        {/* <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-age-native-simple">Select Office</InputLabel>
          <Select
            label="Select Office"
          >
            <option aria-label="None" value="" />
            <option value={10}>Office 1</option>
            <option value={20}>Office 2</option>
            <option value={30}>Office 3</option>
          </Select>
        </FormControl> */}

        <FormControl variant="outlined" className='w-25'>
          <InputLabel id="demo-simple-select-outlined-label">Select Office</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            // value={age}
            // onChange={handleChange}
            label="Select Office"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>


        <Table4 />

        <Box style={{ backgroundColor: 'white', padding: '20px', borderRadius: '20px', marginBottom: '20px' }}>
          <h3 className='text-center'>PMS CHART</h3>
          <Box marginTop={6}>
            <Chart1 />
          </Box>
        </Box>

        <Box style={{ backgroundColor: 'white', padding: '20px', borderRadius: '20px', marginBottom: '20px' }}>
          <h3 className='text-center'>Bank CHART</h3>
          <Box marginTop={6}>
            <Chart1 />
          </Box>
        </Box>

      </Box>

    </>
  );
}
