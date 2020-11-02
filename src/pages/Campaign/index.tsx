import { Box, InputBase, Typography, Button, useMediaQuery, Fab, Tab, makeStyles } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { Search, Add } from '@material-ui/icons';
import { Metrics } from '../../theme';
import TabPanel from '@material-ui/lab/TabPanel';
import { TabContext, TabList } from '@material-ui/lab';
import ListCampaign from './components/ListCampaign';
import dayjs from 'dayjs';
import { campaignService } from '../../services';
import { Campaign as CampaignInterface } from '../../utils/interfaces/campaign';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const Campaign: React.FC = () => {
  const matches = useMediaQuery(`(max-width:${Metrics.sm}px)`);
  const [value, setValue] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [campaigns, setCampaigns] = useState<CampaignInterface[]>([] as CampaignInterface[]);
  const [filteredCampaigns, setFilteredCampaigns] = useState<CampaignInterface[]>([] as CampaignInterface[]);

  const handleChange = (event, status: string) => {
    setLoading(true);
    setFilteredCampaigns(campaigns.filter(campaign => campaign.status?.toLowerCase().includes(status.toLowerCase())))
    setValue(status);
    setLoading(false);
  };


  function checkStatus({ dateBegin, dateEnd }: CampaignInterface) {
    if (dayjs().isBefore(dayjs(dateBegin))) return 'Scheduled';
    if (dayjs().isBetween(dayjs(dateBegin), dayjs(dateEnd))) return 'Live';
    return 'Passed';
  }

  const handleCampaignsRequest = useCallback(async () => {
    try {
      setLoading(true);
      const ret = (await campaignService.list())?.data.map((campaign: CampaignInterface) => ({
        ...campaign,
        dateBegin: dayjs(campaign.dateBegin).format('DD/MM/YYYY'),
        dateEnd: dayjs(campaign.dateEnd).format('DD/MM/YYYY'),
        status: checkStatus(campaign)
      }));
      setCampaigns(ret);
      console.log(value);
      setFilteredCampaigns(ret.filter(campaign => campaign.status?.toLowerCase().includes(value.toLowerCase())))
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    handleCampaignsRequest();
  }, []);
  const classes = useStyles();
  return (
    <>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        <Box px={1} py={2}>
          <Typography variant="h3" component="span" >
            Campaign
      </Typography>
        </Box>
        <Box display="flex">
          <Box display="flex" alignItems="center" justifyContent="space-between" m={1}>
            <Search color="disabled" />
            <InputBase
              onChange={
                (e: any) =>
                  setFilteredCampaigns(
                    campaigns.filter(campaign => campaign.title.toLowerCase().includes(e.target.value.toLowerCase()))
                  )
              }
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Box>
          <Box display={matches ? "none" : "flex"} alignItems="center">
            <Button color="secondary" variant="contained" size="small" component={Link} to="/campaign/new">
              New Campaign
          </Button>
          </Box>
        </Box>
      </Box>
      <TabContext value={value}>
        {!matches ?
          <TabList onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Recent" value="" />
            <Tab label="Live" value="Live" />
            <Tab label="Scheduled" value="Scheduled" />
          </TabList>
          :
          <Box position="fixed" bottom={Metrics.margin * 2} right={Metrics.margin * 2}>
            <Fab size="medium" color="secondary" aria-label="add" classes={{ root: classes.fab }}
              component={Link} to="/campaign/new">
              <Add />
            </Fab>
          </Box>}
        <TabPanel value={value}>
          <ListCampaign handleRetry={handleCampaignsRequest} campaigns={matches ? campaigns : filteredCampaigns} loading={loading} error={error} />
        </TabPanel>
      </TabContext>

    </>
  );
}

export default Campaign;