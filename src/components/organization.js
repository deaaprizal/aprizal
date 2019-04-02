import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Organization extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.OrgName}</h4>
          <p>{this.props.OrgDescription}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Organization;
