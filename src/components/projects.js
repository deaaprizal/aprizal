import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  myProject() {
      return(
        <Grid className="projects-grid">
        <Cell phone={12} tablet={12}>
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://webgradients.com/public/webgradients_png/035%20Itmeo%20Branding.png) center / cover'}} >Fullsnack Community Web</CardTitle>
            <CardText>
             Fullsnack is a tech enthusiast community built with Material Design, mySQL Database, PHP back end system
            </CardText>
            <CardActions border>
              <Button colored onClick={() => window.location = "https://github.com/deaaprizal/fullsnack-community-web"}>GitHub</Button>
              <Button colored onClick={() => window.location = "https://fullsnack.org"}>Visit</Button>
            </CardActions>
          </Card>
          </Cell>
          <Cell phone={12} tablet={12}>
          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://webgradients.com/public/webgradients_png/035%20Itmeo%20Branding.png) center / cover'}} >WAY Social Media Apps</CardTitle>
            <CardText>
              Way is a social media application built with MERN STACK Technology (MongoDB Express React &amp; Node)
            </CardText>
            <CardActions border>
              <Button colored onClick={() => window.location = "https://github.com/sleeperbox/client"}>GitHub</Button>
              <Button colored disabled>Visit</Button>
            </CardActions>
          </Card>
          </Cell>
          <Cell phone={12} tablet={12}>
          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', fontSize:"14px", background: 'url(https://webgradients.com/public/webgradients_png/035%20Itmeo%20Branding.png) center / cover'}} >Comparison Web</CardTitle>
            <CardText>
             Banding Kampus is a website to compare one or two campus at the same time, built with mySQL &amp; PHP backend system
            </CardText>
            <CardActions border>
              <Button colored onClick={() => window.location = "https://github.com/deaaprizal/fullstack-native-php-college-comparing-system"}>GitHub</Button>
              <Button colored disabled>Visit</Button>
            </CardActions>
          </Card>
          </Cell>
        </Grid>
      )
  }

  myProject2() {
    return(
      <Grid className="projects-grid">
      <Cell phone={12} tablet={12}>
        {/* Project 4 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', fontSize:"14px", background: 'url(https://webgradients.com/public/webgradients_png/035%20Itmeo%20Branding.png) center / cover'}} >Goverment Official Website</CardTitle>
          <CardText>
          built with Laravel. I can't describe here, so take a look into my code on github or visit the final website  
          </CardText>
          <CardActions border>
            <Button colored onClick={() => window.location = "https://github.com/deaaprizal/senkomproduction"}>GitHub</Button>
            <Button colored onClick={() => window.location = "http://www.senkom.or.id"}>Visit</Button>
          </CardActions>
        </Card>
        </Cell>
        <Cell phone={12} tablet={12}>
        {/* Project 5 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://webgradients.com/public/webgradients_png/035%20Itmeo%20Branding.png) center / cover'}} >Bandung Digital Valley</CardTitle>
          <CardText>
          Bandung Digital Valley is an information web center built with mySQL &amp; PHP backend system
          </CardText>
          <CardActions border>
            <Button colored onClick={() => window.location = "https://github.com/deaaprizal/bandungdigitalvalley-information-system-web"}>GitHub</Button>
            <Button colored onClick={() => window.location = "https://bandungdigitalvalley.com"}>Visit</Button>
          </CardActions>
        </Card>
        </Cell>
        <Cell phone={12} tablet={12}>
        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', fontSize:"14px", background: 'url(https://webgradients.com/public/webgradients_png/035%20Itmeo%20Branding.png) center / cover'}} >CyberArmy Website</CardTitle>
          <CardText>
           CyberArmy is a crowdsourced cyber security platform built with CodeIgniter Framework 
          </CardText>
          <CardActions border>
            <Button colored onClick={() => window.location = "https://github.com/deaaprizal/cyberarmy-startup-web-concept"}>GitHub</Button>
            <Button colored onClick={() => window.location = "https://cyberarmy.id"}>Visit</Button>
          </CardActions>
        </Card>
      </Cell>
      </Grid>
    )
}

myProject3() {
  return(
    <Grid className="projects-grid">
      <Cell phone={12} tablet={12}>
      {/* Project 4 */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', fontSize:"14px", background: 'url(https://webgradients.com/public/webgradients_png/035%20Itmeo%20Branding.png) center / cover'}} >Ecommerce Landing Page</CardTitle>
        <CardText>
        Built with MEVN STACK Technology (MongoDB Express Vue Node) nothing special, it just how the frontend hit the backend API   
        </CardText>
        <CardActions border>
          <Button colored onClick={() => window.location = "https://github.com/deaaprizal/basic-ecommerce-fullstack-mevn-web"}>GitHub</Button>
          <Button colored disabled>Visit</Button>
        </CardActions>
      </Card>
      </Cell>
      <Cell phone={12} tablet={12}>
      {/* Project 5 */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://webgradients.com/public/webgradients_png/035%20Itmeo%20Branding.png) center / cover'}} >IOT SmartLight Web</CardTitle>
        <CardText>
        Smartlight is a web platform that can control a lamp from anywhere. Built with PHP &amp; Python and RaspberryPi to control web interaction
        </CardText>
        <CardActions border>
          <Button colored onClick={() => window.location = "https://github.com/deaaprizal/smartlight-fullstack-web-php-python"}>GitHub</Button>
          <Button colored disabled>Visit</Button>
        </CardActions>
      </Card>
      </Cell>
      <Cell phone={12} tablet={12}>
      {/* Project 3 */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', fontSize:"14px", background: 'url(https://webgradients.com/public/webgradients_png/035%20Itmeo%20Branding.png) center / cover'}} >RESTful Note Apps</CardTitle>
        <CardText>
        A simple notes application using node js, express and mongodb with resful api in it. It just back end web development
        </CardText>
        <CardActions border>
          <Button colored onClick={() => window.location = "https://github.com/deaaprizal/restful-api-node-mongodb-simple-notesapp"}>GitHub</Button>
          <Button colored disabled>Visit</Button>
        </CardActions>
      </Card>
      </Cell>
    </Grid>
  )
}

  render() {
    return(
      <div>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.myProject()}</div>
            </Cell>
          </Grid>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.myProject2()}</div>
            </Cell>
          </Grid>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.myProject3()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}

export default Projects;