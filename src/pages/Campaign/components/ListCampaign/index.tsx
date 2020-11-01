import { Box, Button, Card, CircularProgress, ListItem, Table, TableBody, TableCell, TableHead, TableRow, Typography, useMediaQuery } from '@material-ui/core';
import dayjs from 'dayjs';
import React from 'react';
import { Campaign } from '../../../../utils/interfaces/campaign';
import { ReplayOutlined } from '@material-ui/icons';
import isBetween from 'dayjs/plugin/isBetween';
import { Metrics } from '../../../../theme';

dayjs.extend(isBetween);

interface Props {
  campaigns: Campaign[],
  loading: boolean,
  error: boolean,
  handleRetry: Function,
}
const ListCampaign: React.FC<Props> = ({ campaigns, loading = false, error = false, handleRetry }) => {
  const tableHeader = [
    'Campaign',
    'Start Date',
    'End Date',
    'Status',
  ];
  const matches = useMediaQuery(`(max-width:${Metrics.sm}px)`);

  return (
    <>
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

