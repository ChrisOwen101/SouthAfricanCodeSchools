import React, { Component } from "react";
import { withTheme } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import sendToLearningMaterial from "../util/TechnologyTypeRouter";

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Tooltip from '@material-ui/core/Tooltip';

// TODO: Move below three resources to Stipend component once defined.
import MoneyIcon from '@material-ui/icons/AttachMoney';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

function separateAndTrimList(list) {

  if (list.length == 0) {
    return [];
  }

  if (typeof list == "number") {
    return [list];
  }

  return list.split(",").map(item => item.trim());
}

class SchoolContent extends Component {
  render() {
    let classes = {};
    classes.card = "cardSchool";
    classes.avatar = "avatar";
    classes.media = "media";
    classes.chip = "chip";
    classes.actions = "actions";
    classes.heading = "heading";
    let school = this.props.school;
    let theme = this.props.theme;


    let technologiesList = separateAndTrimList(school.technologies);
    let locationsList = separateAndTrimList(school.locations);

    const cardStyle = {
      boxShadow: "none"
    }

    const chipStyleBase = {
      margin: "4px 4px 0px 0px"
    };

    const chipStylePrimary = {
      ...chipStyleBase,
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText
    };

    const chipStyleSecondary = {
      ...chipStyleBase,
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.contrastText
    };

    // TODO: Once established, each of the below fields should move into their own components.

    let courseLength = "";
    if (school.courseLength.length > 0) {
      courseLength =
        <div>
          <div className={classes.heading}>Course Length</div>
            <Typography component="p" gutterBottom>
              {school.courseLengthExtended}
            </Typography>
        </div>
        ;
    }

    let acceptanceRequirements = "";
    if (school.acceptanceRequirements.length > 0) {
      acceptanceRequirements =
        <div>
          <div className={classes.heading}>Acceptance Requirements</div>
            <Typography component="p" gutterBottom>
              {school.acceptanceRequirements}
            </Typography>
        </div>
        ;
    }

    let numberOfGraduates = "";
    if (school.numberOfGraduates.length > 0) {
      numberOfGraduates =
        <div className={classes.heading}>
          <Tooltip placement="bottom-start" title="Details of past graduation rates">
            <div>Graduates</div>
          </Tooltip>

        <Typography component="p" gutterBottom>
          {school.numberOfGraduates}
        </Typography>
        </div>
      ;
    }

    let industryPartners = "";
    if (school.industryPartners.length > 0) {
      industryPartners =
        <div className={classes.heading}>
          <Tooltip placement="bottom-start" title="Partners may provide additional opportunities for jobs and internships.">
            <div>Industry Partners</div>
          </Tooltip>

        <Typography component="p" gutterBottom>
          {school.industryPartners}
        </Typography>
        </div>
      ;
    }

    let locations = "";
    if (locationsList.length > 0) {
      locations =
      <div>
        <div className={classes.heading}>Locations</div>
          <div>
            {locationsList.map((item, index) => {
              return (
                <Chip
                  key={item}
                  label={item}
                  style={chipStylePrimary}
                />
              );
            })}
          </div>
      </div>
      ;
    }

    let technologies = "";
    if (technologiesList.length > 0) {
      technologies =
      <div>
        <div className={classes.heading}>Technologies</div>
        <div>
          {technologiesList.map((item, index) => {
            return (
              <Chip
                key={item}
                label={item}
                style={chipStyleSecondary}
                onClick={() => sendToLearningMaterial(item)}
              />
            );
          })}
        </div>
      </div>
      ;
    }

    let stipend = "";

    // Don't show anything if value empty or unknown ("-").
    if ((school.stipend.length > 0) && (school.stipend !== "-")) {
      let stipendIcon = null;
      let stipendLabel = "Stipend";
      if (school.stipend.toLowerCase() === 'yes') {
        stipendIcon = <CheckIcon />;
      } else if (school.stipend.toLowerCase() === 'no') {
        stipendIcon = <CloseIcon />;
      } else {
        // If text has been entered instead of yes/no, then display the text.
        stipendLabel += ": " + school.stipend;
        stipendIcon = <MoneyIcon />;
      }
      stipend =
        <Chip
          icon={stipendIcon}
          label={stipendLabel}
          className={classes.chip}
          color="primary"
          style={chipStyleBase}
        />
      ;
    }

    return (
      <div>
        <Card className={classes.card} style={cardStyle}>
        <CardHeader
          avatar={
            <Avatar aria-label="School Info" src={school.logo} className={classes.avatar} style={{ borderRadius: 0 }}></Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={school.name}
          subheader={school.yearEstablished}
        />
        <CardMedia
          className={classes.media}
          image={school.logo}
          title={school.name}
        />

        <CardContent>
          <Typography component="p" gutterBottom>
            {school.additionalInfo}
          </Typography>

          {courseLength}

          {acceptanceRequirements}

          {numberOfGraduates}

          {industryPartners}

          {locations}

          {technologies}

          {stipend}

        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          {/*
          // Requires classnames component. See MUI card demo for sample code.
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton> */}
        </CardActions>
      </Card>
      </div>
    );
  }
}

export default withTheme()(SchoolContent);
