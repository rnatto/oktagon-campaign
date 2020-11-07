import { Box, Button, Typography } from '@material-ui/core';
import { Link, useHistory, useParams } from 'react-router-dom';
import React, { useCallback, useEffect, useState } from 'react';
import ImagePicker from '../../../../components/ImagePicker';
import { Campaign } from '../../../../utils/interfaces/campaign';
import { campaignService } from '../../../../services';
import dayjs from 'dayjs';

const DetailCampaign: React.FC = () => {
  const history = useHistory();
  const [campaign, setCampaign] = useState<Campaign>();
  let { id } = useParams<{ id: string }>();
  useEffect(() => {
    handleGetCampaign(id);
  }, []);

  const handleGetCampaign = useCallback(async (campaignId: string) => {
    try {
      const { data: returnCampaign } = await campaignService.getById(campaignId);
      console.log(returnCampaign);
      setCampaign(returnCampaign);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleAddAction = () => {
    history.push(`/action/${id}`)
  }
  return (
    <Box maxWidth={600}>
      <Box px={1} my={2}>
        <Typography variant="h3" component="span">
          {campaign?.title}
        </Typography>
      </Box>
      <Box px={1} my={2}>
        <Typography variant="body1" component="h3">
          <Box fontStyle="italic">
            Created by You on {dayjs(campaign?.createdAt).format("MMM, DD, YYYY")}
          </Box>
        </Typography>
      </Box>
      { campaign?.imgUrl && <ImagePicker image={campaign?.imgUrl} />}
      <Box px={1} my={4}>
        <Typography variant="body1" component="h3">
          <b>Description:</b>
        </Typography>
        <Typography variant="body1" component="h3">
          {campaign?.description}
        </Typography>
      </Box>
      <Box px={1} my={4}>
        <Typography variant="body1" component="h3">
          <b>Schedule:</b>
        </Typography>
        <Typography variant="body1" component="h3">
          {`${dayjs(campaign?.dateBegin).format("MMM, DD, YYYY")} - ${dayjs(campaign?.dateEnd).format("MMM, DD, YYYY")} `}
        </Typography>
      </Box>
      <Box display="flex" alignItems="baseline">
        <Box px={1}>
          <Typography variant="body1" component="h3">
            <b>Actions:</b>
          </Typography>
          {campaign?.actions?.length ? campaign?.actions?.map((action) =>
            <Link to={{ pathname: `/action/${id}`, state: { action } }} >
              <Typography variant="body1" component="h3"> {action.title}</Typography>
            </Link>
          ) : <Typography variant="body1" component="h3">No actions added yet</Typography>}
        </Box>
        <Box mx={4} fontStyle="italic" className="pointer" fontWeight="bolder" style={{ textDecoration: 'underline' }}
          onClick={() => handleAddAction()}
        >

          <Typography variant="body1" component="h3"> Add one?</Typography>
        </Box>
      </Box>
      <Box mx={1} my={4}>
        <Typography variant="body1" component="h3">
          <b>Open tasks:</b>
        </Typography>
        <Typography variant="body1" component="h3">
          No tasks added yet
        </Typography>
      </Box>
      <Box display="flex" flexWrap="wrap">
        <Box m={1}>
        <Button variant="outlined" color="secondary" size="large" onClick={() => history.goBack()}>
            Go Back
          </Button>
        </Box>
        <Box m={1}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => handleAddAction()}
          >
            Add action
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default DetailCampaign;