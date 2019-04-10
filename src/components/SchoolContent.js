import React, { Component } from "react";
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

function separateAndTrimList(list) {
  if (typeof list == "number") {
    return [list];
  }

  return list.split(",").map(item => item.trim());
}

class SchoolContent extends Component {
  render() {
    let classes = {};
    classes.card = "CardSchool";
    classes.avatar = "Avatar";
    classes.media = "Media";
    classes.actions = "Actions";
    let school = this.props.school;

    let technologies = separateAndTrimList(school.technologies);
    let locations = separateAndTrimList(school.locations);

    const cardStyle = {
      boxShadow: "none"
    }

    const chipStyle = {
      margin: "4px 4px 0px 0px"
    };

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

          <div class="heading">Course Length</div>
          <Typography component="p" gutterBottom>
            {school.courseLengthExtended}
          </Typography>

          <div class="heading">Locations</div>
          <div>
            {locations.map((item, index) => {
              return (
                <Chip
                  key={item}
                  label={item}
                  style={chipStyle}
                  color="secondary"
                />
              );
            })}
          </div>
          <div class="heading">Technologies</div>
          <div>
            {technologies.map((item, index) => {
              return (
                <Chip
                  key={item}
                  label={item}
                  style={chipStyle}
                  color="primary"
                  onClick={() => sendToLearningMaterial(item)}
                />
              );
            })}
          </div>


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

export default SchoolContent;
