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
import Typography from '@material-ui/core/Typography';

import LikeThis from "./LikeThis";
import ShareButton from "./ShareButton";

import BasicField from "./fields/BasicField";
import Email from "./fields/Email";
import Stipend from "./fields/Stipend";
import BusinessType from "./fields/BusinessType";
import Website from "./fields/Website";

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

    let cost = "";
    if (
        (school.hasOwnProperty('cost'))
        && (school.cost.length > 0)
        && (school.cost !== "-")
       ) {
      cost = <BasicField value={school.cost} heading="Cost" />
    }

    let courseLength = "";
    if (
        (school.hasOwnProperty('courseLengthExtended'))
        && (school.courseLengthExtended.length > 0)
        && (school.courseLengthExtended !== "-")
       ) {
      courseLength = <BasicField value={school.courseLengthExtended} heading="Course Length" />
    }

    let acceptanceRequirements = "";
    if (school.hasOwnProperty('acceptanceRequirements') && school.acceptanceRequirements.length > 0) {
      acceptanceRequirements = <BasicField value={school.acceptanceRequirements} heading="Acceptance Requirements" />
    }

    let scholarships = "";
    if (school.hasOwnProperty('scholarships') && school.scholarships.length > 0) {
      scholarships = <BasicField value={school.scholarships} heading="Scholarships" />
    }

    let numberOfGraduates = "";
    if (school.hasOwnProperty('numberOfGraduates') && school.numberOfGraduates.toString().length > 0) {
      numberOfGraduates = <BasicField value={school.numberOfGraduates} heading="# Graduates" />
    }

    let graduationRate = "";
    if (school.hasOwnProperty('graduationRate') && school.graduationRate.toString().length > 0) {
      graduationRate = <BasicField value={school.graduationRate} heading="Graduation Rate" />
    }

    let employmentRate = "";
    if (school.hasOwnProperty('employmentRate') && school.employmentRate.toString().length > 0) {
      employmentRate = <BasicField value={school.employmentRate} heading="Employment Rate" />
    }

    let courseStart = "";
    if (school.hasOwnProperty('courseStart') && school.courseStart.length > 0) {
      courseStart = <BasicField value={school.courseStart} heading="When does it start" />
    }

    let employmentAssistance = "";
    if (school.hasOwnProperty('employmentAssistance') && school.employmentAssistance.length > 0) {
      employmentAssistance = <BasicField value={school.employmentAssistance} heading="Employment Assistance" />
    }

    let accreditation = "";
    if (school.hasOwnProperty('accreditation') && school.accreditation.length > 0) {
      accreditation = <BasicField value={school.accreditation} heading="Accreditation" />
    }

    let industryPartners = "";
    if (school.hasOwnProperty('industryPartners') && school.industryPartners.length > 0) {
      industryPartners = <BasicField
                          value={school.industryPartners}
                          heading="Industry Partners"
                          tooltip="Partners may provide additional opportunities for jobs and internships."
                        />
    }

    let successInfo = "";
    if (school.hasOwnProperty('successInfo') && school.successInfo.length > 0) {
      successInfo = <BasicField value={school.successInfo} heading="Successes" />
    }

    let locations = "";
    if (locationsList.length > 0) {
      let locationItems = locationsList.map((item, index) => {
        return (
          <Chip
            key={item}
            label={item}
            style={chipStylePrimary}
          />
        );
      });
      locations = <BasicField value={locationItems} heading="Locations" />
    }

    let technologies = "";
    if (technologiesList.length > 0) {
      let techItems = technologiesList.map((item, index) => {
            return (
              <Chip
                key={item}
                label={item}
                style={chipStyleSecondary}
                onClick={() => sendToLearningMaterial(item)}
              />
            );
          });
      technologies = <BasicField value={techItems} heading="Technologies" />
    }

    let emailButton = "";
    if (school.hasOwnProperty('publicEmail') && school.publicEmail.length > 0) {
      emailButton = <Email value={school.publicEmail}/>
    }

    let stipend = "";
    // Don't show anything if value empty or unknown ("-").
    if (school.hasOwnProperty('stipend') && (school.stipend.length > 0) && (school.stipend !== "-")) {
      stipend = <Stipend value={school.stipend} classes={classes} style={chipStyleBase}/>
    }

    let businessType = "";
    // Don't show anything if value empty or unknown ("-").
    if (school.hasOwnProperty('businessType') && (school.businessType.length > 0) && (school.businessType !== "-")) {
      businessType = <BusinessType value={school.businessType} classes={classes} style={chipStyleBase}/>
    }

    let website = "";
    if (school.hasOwnProperty('website') && school.website.length > 0) {
      website = <Website url={school.website} />
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

          {cost}

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
