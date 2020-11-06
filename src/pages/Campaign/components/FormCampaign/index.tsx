import { Box, Button, Typography } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import ImagePicker from '../../../../components/ImagePicker';
import DayjsUtils from '@date-io/dayjs';
import dayjs from 'dayjs';
import { Field, Form, Formik } from 'formik';
import { Campaign } from '../../../../utils/interfaces/campaign';
import { campaignService } from '../../../../services';
import { getBase64 } from '../../../../utils/utils';

const FormCampaign: React.FC = () => {
  const [image, setImage] = useState('');
  const initialValues = {
    title: '',
    description: '',
    dateBegin: '',
    dateEnd: '',
  };
  const history = useHistory();
  const [campaign, setCampaign] = useState<Campaign>(initialValues);
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
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);
            console.log(values);
            const dateBegin = dayjs(values.dateBegin).toISOString();
            const dateEnd = dayjs(values.dateEnd).toISOString();
            getBase64(image, async (result) => {
              const imgUrl = result;
              try {
                await campaignService.create({ ...values, dateBegin, dateEnd, imgUrl });
                history.push('/campaign');
              } catch (error) {
                console.log(error);
              } finally {
                setSubmitting(false);

              }
            });
            setCampaign({

              ...values,
            });
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
              <ImagePicker image="image" setImage={setImage} />
              <Box px={1} py={2}>
                <Typography variant="body1">
                  What is the title of the campaign?
                </Typography>
                <Field
                  name="title"
                  variant="outlined"
                  type="text"
                  color="secondary"
                  size="small"
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
                  name="description"
                  variant="outlined"
                  color="secondary"
                  type="text"
                  size="small"
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
                      label="Start"
                      type="date"
                      name="dateBegin"
                      color="secondary"
                      size="small"
                    />
                    {errors.dateBegin && touched.dateBegin ? (
                      <div>{errors.dateBegin}</div>
                    ) : null}
                  </Box>
                  <Box m={1}>
                    <Field
                      label="End"
                      type="date"
                      color="secondary"
                      name="dateEnd"
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