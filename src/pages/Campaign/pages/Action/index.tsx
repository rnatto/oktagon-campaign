import { Box, Typography, Button } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { campaignService } from '../../../../services';
import { Action as ActionInterface } from '../../../../utils/interfaces/action';
import { Campaign } from '../../../../utils/interfaces/campaign';
import * as yup from 'yup';

const Action: React.FC = () => {
  const initialValues = {
    title: '',
    description: '',
    dateBegin: '',
    dateEnd: '',
  };
  const validationSchema = yup.object().shape({
    title: yup
      .string()
      .required('Title is required'),
    description: yup
      .string()
      .required('Description is required'),
    dateBegin: yup
      .string()
      .required('Date Begin is required'),
    dateEnd: yup
      .string()
      .required('Date End is required'),
  });
  const history = useHistory();
  const [campaign, setCampaign] = useState<Campaign>(initialValues);
  return (
    <Box maxWidth={600}>
      <Box px={1} py={2}>
        <Typography variant="h3" component="span">
          New Action
        </Typography>
      </Box>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values: ActionInterface, { setSubmitting }) => {
          setSubmitting(true);
          try {
            const actions = campaign?.actions?.length ? [...campaign.actions, values] : [values];
            await campaignService.update({ ...campaign, actions });
            history.push('/campaign');
          } catch (error) {
            console.log(error);
          } finally {

          }
          setSubmitting(false);
        }}
      >
        {({ submitForm, isSubmitting, errors, touched }) => (
          <Form>
            <Box px={1} py={2}>
              <Typography variant="body1">
                Action title:
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
                Write a brief description of the action:
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
                <Button variant="outlined" color="secondary" size="large" onClick={() => history.goBack()}>
                  Cancel
                </Button>
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
  )
}

export default Action;