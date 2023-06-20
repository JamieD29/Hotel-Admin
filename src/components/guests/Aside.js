import {
  Box,
  Card,
  CardContent,
  Grid,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { DateField, useLocaleState } from 'react-admin';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Receipt } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Aside({ id }) {
  return (
    <Box width={400} display={{ xs: 'none', lg: 'block' }}>
      <EventList idDetail={id} />
    </Box>
  );
}

Aside.propTypes = {
  id: PropTypes.string.isRequired,
};

function EventList({ idDetail }) {
  const [dataDetail, setDataDetail] = useState();
  const [locale] = useLocaleState();
  const token = localStorage.getItem('token');
  useEffect(() => {
    axios
      .get(`http://localhost:3000/invoice/user/${idDetail}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((respond) => {
        setDataDetail(respond.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Box ml={2}>
      {/* <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            History
          </Typography>
          <Grid container rowSpacing={1} columnSpacing={1}>
            <Grid item xs={6} display="flex" gap={1}>
              <AccessTimeIcon fontSize="small" color="disabled" />
              <Box flexGrow={1}>
                <Typography variant="body2">First screen</Typography>
                <DateField
                  //  record={record} giá trị để đây
                  source="first_seen"
                />
              </Box>
            </Grid>
            {/* Show hoá đơn ở đây */}
      {/* {orders && (
                            <Grid item xs={6} display="flex" gap={1}>
                                <order.icon fontSize="small" color="disabled" />
                                <Typography variant="body2" flexGrow={1}>
                                    {translate('resources.commands.amount', {
                                        smart_count: orders.length,
                                    })}
                                </Typography>
                            </Grid>
                        )} */}
      {/* <Grid item xs={6} display="flex" gap={1}>
              <AccessTimeIcon fontSize="small" color="disabled" />
              <Box flexGrow={1}>
                <Typography variant="body2">Last seen</Typography>
                <DateField
                  // record={record}
                  source="last_seen"
                />
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
     */}

      {/* Show lich su hoa don */}
      <Stepper orientation="vertical" sx={{ mt: 1 }}>
        {dataDetail?.map((invoice) => (
          <Step key={`${invoice.id}`} expanded active completed>
            <StepLabel icon={<Receipt />}>
              <Link to={`/invoice/${invoice.id}/show`}>
                {new Date(invoice.invoice_date).toLocaleString(locale, {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                })}
              </Link>
            </StepLabel>
            <StepContent>
              <Typography> Total: {invoice.total_price}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

EventList.propTypes = {
  idDetail: PropTypes.string.isRequired,
};

export default Aside;
