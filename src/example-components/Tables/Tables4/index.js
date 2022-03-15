import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table, Grid, LinearProgress, Card, Button, TextField } from '@material-ui/core';

import PerfectScrollbar from 'react-perfect-scrollbar';
import { FlagIcon } from 'react-flag-kit';

export default function LivePreviewExample() {
  return (
    <>
      <div className="mb-spacing-6 mt-3">
        <Grid container spacing={6}>
          <Grid item>
            <Card className="card-box">
              <div className="card-header">
                <div className="card-header--title font-weight-bold">
                  Office Name
                </div>
                <div className="card-header--actions">
                  <div className="card-header--actions d-flex align-items-center">

                    <TextField
                      label="Select Date From"
                      type="date"
                      className='mb-3'
                      fullWidth
                      size='small'
                      defaultValue="2017-05-24"
                      variant="outlined"
                    />

                    <TextField
                      label="Select Date To"
                      type="date"
                      className='mb-3 ml-2'
                      size='small'
                      fullWidth
                      defaultValue="2017-05-24"
                      variant="outlined"
                    />
                  </div>
                </div>
              </div>
              <PerfectScrollbar className="scroll-area-sm mb-2">
                <div className="table-responsive-md">
                  <Table className="table table-borderless table-hover text-nowrap mb-0">
                    <thead>
                      <tr>
                        <th>PMS</th>
                        <th>Bank</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>$200</td>
                        <td>$300</td>
                        <td>
                          <Button variant="contained" color="primary">
                            Update
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>$200</td>
                        <td>$300</td>
                        <td>
                          <Button variant="contained" color="primary">
                            Update
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>$200</td>
                        <td>$300</td>
                        <td>
                          <Button variant="contained" color="primary">
                            Update
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>$200</td>
                        <td>$300</td>
                        <td>
                          <Button variant="contained" color="primary">
                            Update
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </PerfectScrollbar>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
