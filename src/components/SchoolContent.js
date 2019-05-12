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
import Tooltip from '@material-ui/core/Tooltip';

// TODO: Move below three resources to Stipend component once defined.
import MoneyIcon from '@material-ui/icons/AttachMoney';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

// TODO: Move to EmailButton component.
import { Link } from "@material-ui/core";
import EmailIcon from '@material-ui/icons/Email';

// TODO: Move to BusinessType component.
import BusinessIcon from '@material-ui/icons/Business';
import LikeThis from "./LikeThis";

import ShareButton from "./ShareButton";

function separateAndTrimList(list) {

  if (list.length === 0) {
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
    classes.cardHeading = "cardHeading";
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
    if (
        (school.hasOwnProperty('courseLengthExtended'))
        && (school.courseLengthExtended.length > 0)
        && (school.courseLengthExtended !== "-")
       ) {
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
    if (school.hasOwnProperty('acceptanceRequirements') && school.acceptanceRequirements.length > 0) {
      acceptanceRequirements =
        <div>
          <div className={classes.heading}>Acceptance Requirements</div>
            <Typography component="p" gutterBottom>
              {school.acceptanceRequirements}
            </Typography>
        </div>
        ;
    }

    let scholarships = "";
    if (school.hasOwnProperty('scholarships') && school.scholarships.length > 0) {
      scholarships =
        <div>
          <div className={classes.heading}>Scholarships</div>
            <Typography component="p" gutterBottom>
              {school.scholarships}
            </Typography>
        </div>
        ;
    }

    let numberOfGraduates = "";
    if (school.hasOwnProperty('numberOfGraduates') && school.numberOfGraduates.toString().length > 0) {
      numberOfGraduates =
        <div className={classes.heading}>
          <div># Graduates</div>
          <Typography component="p" gutterBottom>
            {school.numberOfGraduates}
          </Typography>
        </div>
      ;
    }

    let graduationRate = "";
    if (school.hasOwnProperty('graduationRate') && school.graduationRate.toString().length > 0) {
      graduationRate =
        <div className={classes.heading}>
          <div>Graduation Rate</div>
          <Typography component="p" gutterBottom>
            {school.graduationRate}
          </Typography>
        </div>
      ;
    }

    let employmentRate = "";
    if (school.hasOwnProperty('employmentRate') && school.employmentRate.toString().length > 0) {
      employmentRate =
        <div className={classes.heading}>
          <div>Employment Rate</div>
          <Typography component="p" gutterBottom>
            {school.employmentRate}
          </Typography>
        </div>
      ;
    }

    let courseStart = "";
    if (school.hasOwnProperty('courseStart') && school.courseStart.length > 0) {
      courseStart =
        <div className={classes.heading}>
          <div>When does it start</div>
          <Typography component="p" gutterBottom>
            {school.courseStart}
          </Typography>
        </div>
      ;
    }

    let employmentAssistance = "";
    if (school.hasOwnProperty('employmentAssistance') && school.employmentAssistance.length > 0) {
      employmentAssistance =
        <div className={classes.heading}>
          <div>Employment Assistance</div>

          <Typography component="p" gutterBottom>
            {school.employmentAssistance}
          </Typography>
        </div>
      ;
    }

    let accreditation = "";
    if (school.hasOwnProperty('accreditation') && school.accreditation.length > 0) {
      accreditation =
        <div className={classes.heading}>
          <div>Accreditation</div>

          <Typography component="p" gutterBottom>
            {school.accreditation}
          </Typography>
        </div>
      ;
    }

    let industryPartners = "";
    if (school.hasOwnProperty('industryPartners') && school.industryPartners.length > 0) {
      industryPartners =
        <div className={classes.heading}>
          <Tooltip placement="top-start" title="Partners may provide additional opportunities for jobs and internships.">
            <div>Industry Partners</div>
          </Tooltip>

        <Typography component="p" gutterBottom>
          {school.industryPartners}
        </Typography>
        </div>
      ;
    }

    let successInfo = "";
    if (school.hasOwnProperty('successInfo') && school.successInfo.length > 0) {
      successInfo =
        <div className={classes.heading}>
          <div>Successes</div>
          <Typography component="p" gutterBottom>
            {school.successInfo}
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

    let website = "";
    if (school.hasOwnProperty('website') && school.website.length > 0) {
      website =
        <div className={classes.heading}>
          <div>Website</div>

          <Typography component="p" gutterBottom>
            <Link
              href={school.website}
              target="_blank"
              rel="noopener noreferrer"
              style={ {lineHeight: '30px'} }
            >
              {school.website}
            </Link>
          </Typography>
        </div>
      ;
    }

    let emailButton = "";
    if (school.hasOwnProperty('publicEmail') && school.publicEmail.length > 0) {
      emailButton =
        <Link href={"mailto:" + school.publicEmail}>
          <IconButton aria-label="Send Email">
            <EmailIcon />
          </IconButton>
        </Link>
      ;
    }

    let stipend = "";
    // Don't show anything if value empty or unknown ("-").
    if (school.hasOwnProperty('stipend') && (school.stipend.length > 0) && (school.stipend !== "-")) {
      let stipendIcon = null;
      let stipendLabel = "Stipend";
      if (school.stipend.toLowerCase() === 'yes') {
        stipendIcon = <CheckIcon />;
      } else if (school.stipend.toLowerCase() === 'no') {
        stipendLabel = "No Stipend";
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

    let businessType = "";
    // Don't show anything if value empty or unknown ("-").
    if (school.hasOwnProperty('businessType') && (school.businessType.length > 0) && (school.businessType !== "-")) {
      businessType =
        <Chip
          icon={ <BusinessIcon /> }
          label={school.businessType}
          className={classes.chip}
          color="primary"
          style={chipStyleBase}
        />
      ;
    }


    let yearEstablished = "";
    if (school.hasOwnProperty('yearEstablished') && school.yearEstablished.toString().length > 0) {
      yearEstablished = "since " + school.yearEstablished;
    }

    let otherHeading = "";
    if ((stipend.toString().length > 0) || (businessType.toString().length > 0)) {
      otherHeading = <div className={classes.heading}>Other info</div>;
    }

    return (
      <div>
        <Card className={classes.card} style={cardStyle}>
        <CardHeader
          avatar={
            <Avatar aria-label="School Info" src={school.logo} className={classes.avatar} style={{ borderRadius: 0 }}></Avatar>
          }
          title={school.name}
          subheader={yearEstablished}
          className={classes.cardHeading}
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

          {scholarships}

          {courseStart}

          {numberOfGraduates}
          {graduationRate}

          {employmentAssistance}
          {employmentRate}

          {accreditation}

          {industryPartners}

          {successInfo}

          {locations}

          {technologies}

          {otherHeading}

          {stipend}

          {businessType}

          {website}
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          {emailButton}
          <LikeThis likeClick={this.props.likeClick} school={school} />
          <ShareButton school={school} />
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
