import { Box, Button, TextField, Typography } from '@material-ui/core';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useHistory } from 'react-router-dom';
import React, { constructor, useState } from 'react';
import ImagePicker from '../../../../components/ImagePicker';
import DayjsUtils from '@date-io/dayjs';
import dayjs from 'dayjs';
import * as Yup from "yup";
import { Field, Form, Formik } from 'formik';
import { Campaign } from '../../../../utils/interfaces/campaign';
import { campaignService } from '../../../../services';

const FormCampaign: React.FC = () => {
  const [startDate, handlestartDateChange] = useState(dayjs());
  const [endDate, handleEndDateChange] = useState(dayjs().add(1, 'day'));
  const [image, setImage] = useState('');
  const initialValues = {
    title: '',
    description: '',
    dateBegin: '',
    dateEnd: '',
  };
  const history = useHistory();
  const [campaign, setCampaign] = useState<Campaign>(initialValues);
  // const validationSchema = Yup.object({
  //   title: Yup.string("Enter a valid title")
  //   .required("Title is required"),
  // imgUrl: Yup.string("Enter a valid image"),
  // description: Yup.string("Enter a valid description")
  //   .required("Description is required"),
  // dateBegin: Yup.string().required('Begin date is required'),
  // dateEnd: Yup.string().required("Begin date is required"),
  // });
  return (
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Box maxWidth={600}>
        <Box px={1} py={2}>
          <Typography variant="h3" component="span">
            Lets Get Started
          </Typography>
        </Box>
        <Formik
          initialValues={initialValues}
          // validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);
            console.log(values);
            const dateBegin = dayjs(values.dateBegin).toISOString();
            const dateEnd = dayjs(values.dateEnd).toISOString();
            setCampaign({
              ...values,
              // dateBegin,
              // dateEnd
            });
            const img = 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/1/1c/The_Amazing_Spider-Man_Iron_Spider_Infinity_War.png/revision/latest?cb=20180404183507';
            try {
              await campaignService.create({ ...values, dateBegin, dateEnd, imgUrl: img });
              history.push('/campaign');
            } catch (error) {
              console.log(error);
            } finally {

            }
            setSubmitting(false);
          }}
        >
          {({ submitForm, isSubmitting, setFieldValue, values, errors, touched }) => (
            <Form>
              <Box px={1} py={2}>
                <Typography variant="body1">
                  Witch hero is starring this campaign?
                </Typography>
                <Typography variant="subtitle1">
                  Don't see the hero you want to use? Add a new hero
                </Typography>
              </Box>
              <ImagePicker image="image" setImage={setImage}/>
              <Box px={1} py={2}>
                <Typography variant="body1">
                  What is the title of the campaign?
                </Typography>
                <Field
                  // component={TextField}
                  name="title"
                  variant="outlined"
                  type="text"
                  color="secondary"
                  size="small"
                // fullWidth
                />
                {errors.title && touched.title ? (
                  <div>{errors.title}</div>

                ) : null}
              </Box>
              <Box px={1} py={2}>
                <Typography variant="body1">
                  Write a brief description of the campaign
                </Typography>
                <Field
                  // component={TextField}
                  name="description"
                  variant="outlined"
                  color="secondary"
                  type="text"
                  size="small"
                // fullWidth
                />
                {errors.description && touched.description ? (
                  <div>{errors.description}</div>
                ) : null}
              </Box>
              <Box px={1} py={2}>
                <Typography variant="body1">
                  When will the campaign start and end? This can be updated later.
                </Typography>
                <Box display="flex" flexWrap="wrap">
                  <Box m={1}>
                    <Field
                      // component={DateTimePicker}
                      label="Start"
                      type="date"
                      name="dateBegin"
                      color="secondary"
                      // inputVariant="outlined"
                      // value={startDate}
                      // onChange={(e) => e && handlestartDateChange(e)}
                      // disablePast
                      size="small"
                    />
                    {errors.dateBegin && touched.dateBegin ? (
                      <div>{errors.dateBegin}</div>
                    ) : null}
                  </Box>
                  <Box m={1}>
                    <Field
                      // component={DateTimePicker}
                      label="End"
                      type="date"
                      color="secondary"
                      name="dateEnd"
                      // inputVariant="outlined"
                      // value={endDate}
                      // disablePast
                      // minDate={dayjs(startDate)}
                      // onChange={(e) => e && handleEndDateChange(e)}
                      size="small"
                    />
                    {errors.dateEnd && touched.dateEnd ? (
                      <div>{errors.dateEnd}</div>
                    ) : null}
                  </Box>
                </Box>
              </Box>
              <Box display="flex" flexWrap="wrap">
                <Box m={1}>
                  <Button variant="outlined" color="secondary" size="large">Cancel</Button>
                </Box>
                <Box m={1}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    disabled={isSubmitting}
                    onClick={submitForm}>
                    Create campaign
                  </Button>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </MuiPickersUtilsProvider>
  )
}

export default FormCampaign;