import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class GuideContent extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>F.A.Q.</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>

            <List dense={true}>
              <ListItem>- What to expect?</ListItem>
              <ListItem>- Where to start?
              The journey of 10 000 miles starts beneath your feet.</ListItem>
              <ListItem>- How long will it take to complete?</ListItem>
              <ListItem>- Can I get a job after this?</ListItem>
              <ListItem>- Local or Virtual?</ListItem>
            </List>

          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Form good habits</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>

            <List dense={true}>
              <ListItem>- Attitude
              Belief in yourself. How to react when you face a blocker. Break a problem down.  Take a break.</ListItem>
              <ListItem>- Communication</ListItem>
              <ListItem>- Commitment</ListItem>
              <ListItem>- Journal</ListItem>
              <ListItem>- Break a problem down</ListItem>
              <ListItem>- Backups</ListItem>
            </List>

          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Community</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            - Partner
            - Meetups
            - Slack
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Tools, Software + Apps</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            - Internet Access
            -- Toomuchwifi
            -- Cell C
            - Browser, Google Docs, Sheets, e-mail, Trello, VSCode, Dropbox, Slack
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Useful Resources</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <Link
                href="https://roadmap.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                roadmap.sh - The Web Developer Roadmap
              </Link>
              </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>






      </div>
    );
  }
}

GuideContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuideContent);