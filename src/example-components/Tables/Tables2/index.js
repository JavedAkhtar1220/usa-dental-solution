import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  LinearProgress,
  Card,
  CardContent,
  Button,
  Tooltip
} from '@material-ui/core';

import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <Card className="card-box mb-spacing-6-x2">
        <div className="card-header pr-2">
          <div className="card-header--title">Office Name</div>
          <div className="card-header--actions">
            <Button size="small" className="btn-neutral-primary">
              <FontAwesomeIcon icon={['fas', 'cog']} spin />
            </Button>
          </div>
        </div>
        <CardContent>
          <div className="table-responsive">
            <Table className="table table-borderless table-hover text-nowrap mb-0" style={{ overflowX: 'none' }}>
              <thead>
                <tr>
                  <th className="text-left">Batch Date</th>
                  <th className="text-center">Deposit Date</th>
                  <th className="text-center">Total Checks</th>
                  <th className="text-center">Total Deposit Amount</th>
                  <th className="text-center">Deposit By</th>
                  <th className="text-center">EOB</th>
                  <th className="text-center">Assign to</th>
                  <th className="text-center">Posting Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12/03/2022</td>
                  <td>
                    12/03/2022
                  </td>
                  <td>
                    5
                  </td>
                  <td>
                    $5,102.00
                  </td>
                  <td>
                    Fasihuddin
                  </td>
                  <td>
                    View EOB
                  </td>
                  <td>
                    xyz/abc/pqr
                  </td>
                  <td>
                    Complete/Assigned/Posting
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </CardContent>
        {/* <div className="card-footer d-flex justify-content-between">
          <Button variant="text" className="btn-outline-danger" size="small">
            Delete
          </Button>
          <div>
            <Button size="small" color="primary" variant="contained">
              Add new entry
            </Button>
          </div>
        </div> */}
      </Card>
    </>
  );
}
