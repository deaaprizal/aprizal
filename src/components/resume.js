import React, { Component } from 'react';
import { Grid, Cell, Tab, Tabs, Button } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Organization from './organization'
import Img from '../assets/images/2.jpeg'

class Resume extends Component {

  constructor(props) {
    super(props)
    this.state = { activeTab: 0 };
    this.moreSkills = this.moreSkills.bind(this);
  }

  moreSkills() {
    return window.location = "/moreskills"
  }

  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center', marginBottom: '-100px'}}>
              <img
                src={Img}
                alt="Dea Aprizal Resume"
                style={{height: '250px', borderRadius: 150, width: '250px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em', textAlign: 'center'}}>Dea Aprizal</h2>
            <h4 style={{color: 'grey'}}>Software Engineer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I do love coding since i knew it can <b>simplifying a complicated</b> things. I learn a lot about <b>back end</b>, <b>front end</b> and each <b>software development tools</b> such as <i><u>PostMan</u></i> for working on RESTful API project, <i><u>VScode</u></i> for text editor because it charm like a magic, i can quickly integrate my local branch into the sky :D</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Komplek GBA (Griya Bandung Asri) 3 Blok N 3 No.1 Bandung, 40287</p>
            <h5>Phone</h5>
            <p>(+62) 821-2048-7094</p>
            <h5>Email</h5>
            <p>dea.aprizal@icloud.com</p>
            <h5>My Own Community Web</h5>
            <a href="">fullsnack.org</a>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>

          <h2 style={{textAlign: "center"}}>Skill Set</h2>
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab defaultChecked><b>Hard Skill</b></Tab>
            <Tab><b>Soft Skill</b></Tab>
                </Tabs>
                <section>
                  <div className="content">
                    {this.state.activeTab === 0 ? 
                      <div>
                        <Skills
                          skill="Vue Js"
                          progress={70}
                        />
                        <Skills
                          skill="React Js"
                          progress={90}
                        />
                        <Skills
                          skill="Express Js"
                          progress={75}
                        />
                        <Skills
                          skill="HTML/CSS"
                          progress={95}
                        />
                        <Skills
                          skill="Laravel/CI"
                          progress={90}
                        />
                      </div> 
                        : 
                      <div>
                         <Skills
                          skill="Alghorithm"
                          progress={95}
                        />
                        <Skills
                          skill="Problem Solving"
                          progress={90}
                        />
                        <Skills
                          skill="Scrum Development"
                          progress={85}
                        />
                        <Skills
                          skill="Cross Functional Team"
                          progress={90}
                        />
                        <Skills
                          skill="Eagerness To Learn"
                          progress={95}
                        />
                      </div>
                    }
                    </div>
                    <p style={{textAlign: "center"}} ><Button colored onClick={this.moreSkills} raised ripple>view more skills</Button></p>
                </section>
            
          <hr style={{borderTop: '3px solid #833ab4'}} />
          
          <h2>Experience</h2>
            <Experience
              startYear={"Feb " + 2018}
              endYear={"May " + 2018}
              jobName="Web Developer - Telkom Bandung Digital Valley"
              jobDescription="Working on one of the best co-workingspace in Bandung as internship programmer. I made an administrator panel system for each employee to manage member"
              />
            <Experience
              startYear={"March " + 2018}
              endYear={"April " + 2018}
              jobName="Web Developer - CyberArmy.id"
              jobDescription="Working as freelancer on startup called CyberArmy. I'm developing and improving high quality existing code."
            />

          <hr style={{borderTop: '3px solid #833ab4'}} />

          <h2>Education</h2>
            <Education
              startYear={2015}
              endYear={2018}
              schoolName="Politeknik Lembaga Pendidikan Komputer Indonesia Amerika"
              schoolDescription="Diploma - Computer Science/Informatics"
            />
            
          <hr style={{borderTop: '3px solid #833ab4'}} />

          <h2>Organization</h2>
            <Organization
              startYear={2018}
              OrgName="Fullsnack Community Bandung"
              OrgDescription="As a Creator - fullsnack is a tech enthusiast community"
            />
            <Organization
              startYear={2018}
              OrgName="Sleeperbox Team"
              OrgDescription="As a Tech Leader - i made a team called sleeperbox, we try to stick with any technology. our code: https://github.com/sleeperbox/"
            />
            
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
