import { Box, Button, TextField, Typography } from '@material-ui/core';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { useState } from 'react';
import ImagePicker from '../../../../components/ImagePicker';
import DayjsUtils from '@date-io/dayjs';
import dayjs from 'dayjs';
// import { Container } from './styles';

const FormCampaign: React.FC = () => {
  const [startDate, handlestartDateChange] = useState(dayjs());
  const [endDate, handleEndDateChange] = useState(dayjs().add(1, 'day'));
  return (
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Box maxWidth={600}>
        <Box px={1} py={2}>
          <Typography variant="h3" component="span">
            Lets Get Started
          </Typography>
        </Box>
        <Box px={1} py={2}>
          <Typography variant="body1">
            Witch hero is starring this campaign?
        </Typography>
          <Typography variant="subtitle1">
            Don't see the hero you want to use? Add a new hero
        </Typography>
        </Box>
        <ImagePicker image="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/1/1c/The_Amazing_Spider-Man_Iron_Spider_Infinity_War.png/revision/latest?cb=20180404183507" />
        <Box px={1} py={2}>
          <Typography variant="body1">
            What is the title of the campaign?
        </Typography>
          <TextField
            variant="outlined"
            color="secondary"
            size="small"
            fullWidth
          />
        </Box>
        <Box px={1} py={2}>
          <Typography variant="body1">
            Write a brief description of the campaign
        </Typography>
          <TextField
            variant="outlined"
            color="secondary"
            size="small"
            fullWidth
            rows={3}

          />
        </Box>
        <Box px={1} py={2}>
          <Typography variant="body1">
            When will the campaign start and end? This can be updated later.
        </Typography>
          <Box display="flex" flexWrap="wrap">
            <Box m={1}>
              <DateTimePicker
                label="Start"
                color="secondary"
                inputVariant="outlined"
                value={startDate}
                onChange={(e) => e && handlestartDateChange(e)}
                disablePast
              />
            </Box>
            <Box m={1}>
              <DateTimePicker
                label="End"
                color="secondary"
                inputVariant="outlined"
                value={endDate}
                minDate={dayjs(startDate)}
                onChange={(e) => e && handleEndDateChange(e)}
              />
            </Box>
          </Box>
        </Box>
        <Box display="flex" flexWrap="wrap">
          <Box m={1}>
            <Button variant="outlined" color="secondary" size="large">Cancel</Button>
          </Box>
          <Box m={1}>
            <Button variant="contained" color="secondary" size="large">Create campaign</Button>
          </Box>
        </Box>
      </Box>
    </MuiPickersUtilsProvider>
  )
}

export default FormCampaign;