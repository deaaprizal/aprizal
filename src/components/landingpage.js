import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Img from '../assets/images/1.jpeg'

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12} phone={12} tablet={12}>
            <img
              src={Img}
              alt="avatar"
              className="avatar-img"
              />
            <div className="banner-text">
              <h1 className="fullcolorh1">
                  FullStack Web Developer
              </h1>
              <hr/>
              <p>HTML/CSS | Bootstrap | Material UI | Semantic UI | <br/> PHP | Javascript | Vue JS |  React JS | Node JS | Express JS | Laravel | CodeIgniter | <br/> MongoDB | MySQL</p>
              <div className="social-links">
                <a href="https://api.whatsapp.com/send?phone=6282120487094&text=Hai%20mas%20Dea,saya%20tertarik,%20untuk%20..." rel="noopener noreferrer" target="_blank" title="My Business Number">
                  <i className="fa fa-whatsapp" aria-hidden="true" style={{color: "#25D366"}} />
                </a>

                <a href="https://github.com/deaaprizal" rel="noopener noreferrer" target="_blank" title="My Github Repository">
                  <i className="fa fa-github-square" aria-hidden="true" style={{color: "#dd5143"}} />
                </a>

                <a href="https://www.linkedin.com/in/dea-aprizal/" rel="noopener noreferrer" target="_blank" title="My LinkedIn Profile">
                  <i className="fa fa-linkedin-square" aria-hidden="true" style={{color: "#0077b5"}}/>
                </a>

                <a href="https://instagram.com/deaaprizal" rel="noopener noreferrer" target="_blank" title="My Instagram Account">
                  <i className="fa fa-instagram" aria-hidden="true" style={{color: "#FFDC80"}}/>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
