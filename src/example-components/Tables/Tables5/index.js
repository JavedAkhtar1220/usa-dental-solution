import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  Grid,
  Card,
  Button,
  Box
} from '@material-ui/core';

import { useSelector } from 'react-redux';

export default function LivePreviewExample() {

  const selector = useSelector(state => state.amountForm.amount);

  const finalizeBatch = () => {
    alert(JSON.stringify(selector));
  }

  return (
    <>
      <div className="mb-spacing-6">
        <Grid container spacing={6}>
          {/* <Grid item xl={6}>
            <Card className="card-box">
              <div className="font-size-lg px-3 py-4 font-weight-bold">
                Transactions history
              </div>
              <div className="table-responsive-md">
                <Table className="table table-borderless text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th className="text-uppercase bg-secondary">
                        Application
                      </th>
                      <th className="text-uppercase bg-secondary">Date</th>
                      <th className="text-uppercase bg-secondary">Payouts</th>
                      <th className="text-uppercase bg-secondary">Status</th>
                      <th className="text-uppercase bg-secondary text-center">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>File Manager</td>
                      <td>Aug 11, 2020</td>
                      <td>$45,567</td>
                      <td>
                        <div className="badge badge-success">Paid</div>
                      </td>
                      <td className="text-center">
                        <Button
                          size="small"
                          className="btn-primary shadow-none d-30 btn-icon hover-scale-sm p-0">
                          <FontAwesomeIcon icon={['far', 'dot-circle']} />
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Calendar App</td>
                      <td>Nov 12, 2020</td>
                      <td>$586,567</td>
                      <td>
                        <div className="badge badge-success">Paid</div>
                      </td>
                      <td className="text-center">
                        <Button
                          size="small"
                          className="btn-primary shadow-none d-30 btn-icon hover-scale-sm p-0">
                          <FontAwesomeIcon icon={['far', 'dot-circle']} />
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Tasks Management</td>
                      <td>Nov 13, 2020</td>
                      <td>$657</td>
                      <td>
                        <div className="badge badge-warning">Pending</div>
                      </td>
                      <td className="text-center">
                        <Button
                          size="small"
                          className="btn-primary shadow-none d-30 btn-icon hover-scale-sm p-0">
                          <FontAwesomeIcon icon={['far', 'dot-circle']} />
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Tickets App</td>
                      <td>Nov 22, 2020</td>
                      <td>$12,478</td>
                      <td>
                        <div className="badge badge-danger">Overdue</div>
                      </td>
                      <td className="text-center">
                        <Button
                          size="small"
                          className="btn-primary shadow-none d-30 btn-icon hover-scale-sm p-0">
                          <FontAwesomeIcon icon={['far', 'dot-circle']} />
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Dashboard App</td>
                      <td>Aug 15, 2020</td>
                      <td>$45,57</td>
                      <td>
                        <div className="badge badge-success">Paid</div>
                      </td>
                      <td className="text-center">
                        <Button
                          size="small"
                          className="btn-primary shadow-none d-30 btn-icon hover-scale-sm p-0">
                          <FontAwesomeIcon icon={['far', 'dot-circle']} />
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card>
          </Grid> */}
          <Grid item xl={12}>
            <Card className="card-box" style={{ overflowX: 'auto' }}>
              <div className="table-responsive-md">
                <Table className="table table-borderless text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th className="text-uppercase bg-secondary">S#</th>
                      <th className="text-uppercase bg-secondary">Insurance</th>
                      <th className="text-uppercase bg-secondary">Check Number</th>
                      <th className="text-uppercase bg-secondary">
                        Check Date
                      </th>
                      <th className="text-uppercase bg-secondary">
                        Deposit Date
                      </th>
                      <th className="text-uppercase bg-secondary">
                        Amount
                      </th>
                      <th className="text-uppercase bg-secondary text-center">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {selector.map((v, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>
                          {v.insurance}
                        </td>
                        <td>{v.checkNumber}</td>
                        <td>{v.checkDate}</td>
                        <td>{v.depositDate}</td>
                        <td>${v.amount}</td>
                        <td className="text-center">
                          <Button className="btn-link p-0 btn-icon d-30">
                            <span className="btn-wrapper--icon d-flex">
                              <FontAwesomeIcon
                                icon={['fas', 'plus']}
                                className="text-success font-size-sm"
                              />
                            </span>
                          </Button>
                          <Button className="btn-link p-0 btn-icon d-30">
                            <span className="btn-wrapper--icon d-flex">
                              <FontAwesomeIcon
                                icon={['fas', 'times']}
                                className="text-danger font-size-sm"
                              />
                            </span>
                          </Button>
                        </td>
                      </tr>
                    ))}

                  </tbody>
                </Table>
              </div>
            </Card>
            <Box marginTop={2} className="text-right">

              <Box display={'flex'} justifyContent="flex-end">
                <p className='font-weight-bold'>Total:</p>
                <p className="ml-2">$14.00</p>
              </Box>

              <Button variant="contained" color="secondary" className="mx-2">Upload EOB</Button>
              <Button variant="contained" color="primary" className="mx-2" onClick={finalizeBatch}>Finalize Batch</Button>

            </Box>

          </Grid>
        </Grid>
      </div>
    </>
  );
}
