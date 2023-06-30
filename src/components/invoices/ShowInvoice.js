import React from 'react';
import {
  Show,
  SimpleShowLayout,
  TextField,
  useGetRecordId,
  DateField,
  Button,
  useGetOne,
} from 'react-admin';
import { Container, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import Aside from './Aside';

function SectionTitle({ label }) {
  return (
    <Typography variant="h6" gutterBottom>
      {label}
    </Typography>
  );
}

SectionTitle.propTypes = {
  label: PropTypes.string.isRequired,
};

function ShowInvoice() {
  const invoiceId = useGetRecordId();
  const navigate = useNavigate();
  const { data: invoice } = useGetOne('invoice', { id: invoiceId });
  const invoiceTitle = `Show a ${invoiceId} invoice information`;
  let authToken = localStorage.getItem('token');
  const token = useSelector((state) => state.authenData.accessToken);
  if (!authToken) {
    authToken = token;
  }
  const checkout = () => {
    axios
      .patch(`http://localhost:3000/bookingstatus/invoice/${invoiceId}`)
      .then(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Checkout successfully',
          showConfirmButton: false,
          timer: 1500,
        });
        return navigate('..');
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.message,
        });
      });
  };

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:3000/bookingstatus/${invoice}`, {
  //       headers: {
  //         Authorization: `Bearer ${authToken}`,
  //       },
  //     })
  //     .then((respond) => {
  //       console.log(respond.data);
  //     });
  // }, []);

  return (
    <Show title={invoiceTitle} aside={<Aside id={invoiceId} />}>
      <SimpleShowLayout
        sx={{
          fontSize: '18px',
        }}
      >
        <TextField disabled source="id" />

        <TextField
          label="Total"
          source="total_price"
          fullWidth
          sx={{
            fontSize: '24px',
          }}
        />

        <DateField
          label="Created"
          source="invoice_date"
          fullWidth
          sx={{
            fontSize: '24px',
          }}
        />

        <TextField
          label="Guest"
          source="user.name"
          fullWidth
          sx={{
            fontSize: '24px',
          }}
        />
        {invoice?.status === 'unconfirmed' ? (
          <Container style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="success"
              size="medium"
              onClickCapture={() => checkout()}
            >
              Check out
            </Button>
          </Container>
        ) : null}
      </SimpleShowLayout>
    </Show>
  );
}

export default ShowInvoice;
