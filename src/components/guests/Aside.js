import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import { DateField } from 'react-admin';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Aside() {
  return (
    <Box width={400} display={{ xs: 'none', lg: 'block' }}>
      <EventList />
    </Box>
  );
}

function EventList() {
  return (
    <Box ml={2}>
      <Card>
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
            <Grid item xs={6} display="flex" gap={1}>
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
      {/* Show lich su hoa don */}
      {/* <Stepper orientation="vertical" sx={{ mt: 1 }}>
                {events.map(event => (
                    <Step
                        key={`${event.type}-${event.data.id}`}
                        expanded
                        active
                        completed
                    >
                        <StepLabel
                            icon={
                                event.type === 'order' ? (
                                    <order.icon
                                        color="disabled"
                                        sx={{ pl: 0.5, fontSize: '1.25rem' }}
                                    />
                                ) : (
                                    <review.icon
                                        color="disabled"
                                        sx={{ pl: 0.5, fontSize: '1.25rem' }}
                                    />
                                )
                            }
                        >
                            {new Date(event.date).toLocaleString(locale, {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                                hour: 'numeric',
                                minute: 'numeric',
                            })}
                        </StepLabel>
                        <StepContent>
                            <RecordContextProvider value={event.data}>
                                {event.type === 'order' ? (
                                    <Order />
                                ) : (
                                    <Review />
                                )}
                            </RecordContextProvider>
                        </StepContent>
                    </Step>
                ))}
            </Stepper> */}
    </Box>
  );
}

export default Aside;
