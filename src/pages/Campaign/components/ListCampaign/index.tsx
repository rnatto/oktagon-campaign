import { Box, Button, Card, CircularProgress, IconButton, Modal, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography, useMediaQuery } from '@material-ui/core';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { Campaign } from '../../../../utils/interfaces/campaign';
import { Delete, Edit, ReplayOutlined } from '@material-ui/icons';
import isBetween from 'dayjs/plugin/isBetween';
import { Metrics } from '../../../../theme';
import { useHistory } from 'react-router-dom';
import { campaignService } from '../../../../services';

dayjs.extend(isBetween);

interface Props {
  campaigns: Campaign[],
  removeCampaign: Function,
  loading: boolean,
  error: boolean,
  handleRetry: Function,
}
const ListCampaign: React.FC<Props> = ({ campaigns, loading = false, error = false, handleRetry, removeCampaign }) => {
  const tableHeader = [
    'Campaign',
    'Start Date',
    'End Date',
    'Status',
  ];
  const [open, setOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign>({} as Campaign);
  const history = useHistory();
  const matches = useMediaQuery(`(max-width:${Metrics.sm}px)`);
  const handleEdit = ({ _id: campaignId }: Campaign) => {
    history.push(`/campaign/${campaignId}`)
  }

  const body = (
    <Box maxWidth={250} m="auto" mt="45vh">
      <Paper elevation={2} component={Box}>
        <Box p={4}>
          <Typography variant="body1">
            Removing campaign
          </Typography>
          <p>
            Are you shure?
          </p>
          <Box display="flex" justifyContent="space-around" pt={2}>
            <Button variant="outlined" color="secondary" onClick={() => setOpen(false)}>No</Button>
            <Button variant="contained" color="secondary" onClick={() => { setOpen(false); removeCampaign(selectedCampaign) }}>Yes</Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      {campaigns.length > 0 && !loading ?
        <Table size="small" aria-label="List campaign elements">
          {
            !matches &&
            <TableHead>
              <TableRow>
                {tableHeader.map((title, index) =>
                  <TableCell key={index} align={index === 0 ? 'left' : 'right'}>
                    {title}
                  </TableCell>
                )}
              </TableRow>
            </TableHead>
          }
          {campaigns?.map(campaign =>
            matches ?
              <Box m={2} key={campaign._id}>
                <Card elevation={2}>
                  <Box minWidth={250} display="flex" m={2} flexDirection="column">
                    <Box>
                      <Typography variant="body1" component="span">
                        <b>Title:</b>
                      </Typography>
                      <Typography variant="body2" component="span">
                        {campaign.title}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body1" component="span">
                        <b>Begin:</b>
                      </Typography>
                      <Typography variant="body2" component="span">
                        {campaign.dateBegin}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body1" component="span">
                        <b>End:</b>
                      </Typography>
                      <Typography variant="body2" component="span">
                        {campaign.dateEnd}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Box>
              :
              <TableBody key={campaign._id}>
                <TableRow>
                  <TableCell variant="body" >
                    {campaign.title}
                  </TableCell>
                  <TableCell align="right">
                    {campaign.dateBegin}
                  </TableCell>
                  <TableCell align="right">
                    {campaign.dateEnd}
                  </TableCell>
                  <TableCell align="right">
                    {campaign.status}
                  </TableCell>
                  <TableCell align="right">
                    <Box display="flex">
                      <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => handleEdit(campaign)}>
                        <Edit color="disabled" />
                      </IconButton>
                      <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => { setOpen(true); setSelectedCampaign(campaign) }}>
                        <Delete color="disabled" />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableBody>
          )
          }
        </Table >
        :
        <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" my={16}>
          {loading ? <CircularProgress color="secondary" className="margin-auto" /> :
            <>
              <Box my={2}>
                <Typography>
                  {error ? 'An error ocurred while get data' : 'Empty'}
                </Typography>
              </Box>
              <Button color="secondary" variant="contained" startIcon={<ReplayOutlined />} onClick={() => handleRetry()}>Retry</Button>
            </>
          }
        </Box>
      }
    </>
  )
}

export default ListCampaign;

