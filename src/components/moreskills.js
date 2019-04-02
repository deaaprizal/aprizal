import React, { Component } from 'react';
import { Grid, Cell, Table, TableHeader } from 'react-mdl';

class Moreskills extends Component {

  render() {
    return(
    <div style={{width: '80%', margin: 'auto'}}>
      <Grid>
          <Cell col={2}>
          </Cell>
        <Cell col={6}>
        <h4><u>technical</u></h4>
        <Table
            sortable
            shadow={0}
            rows={[
                {aspect: 'Analytical', description: 'inspect any possible performance issues and bug', value: 90},
                {aspect: 'Debugging', description: 'debugging javascript code', value: 80},
                {aspect: 'Agile', description: 'familiar with scrum development', value: 80},
                {aspect: 'Linux / MacOS Env', description: 'experienced with non-windows / UNIX environment', value: 90},
                {aspect: 'Version Control System', description: 'git', value: 100},
                {aspect: 'Fullstack Working', description: 'backend, front end & database', value: 80}
            ]}
        >
            <TableHeader
                name="aspect"
                tooltip="aspect category"
            >
            Aspect
            </TableHeader>
            <TableHeader
                name="description"
            >
            Description
            </TableHeader>
            <TableHeader
                numeric
                name="value"
            >
            Value (max 100)
            </TableHeader>
        </Table>
        </Cell>
        <Cell col={2}>
        </Cell>
      </Grid>
      <Grid>
          <Cell col={2}>
          </Cell>
          <Cell col={6}>
          <h4><u>other</u></h4>
          <Table
            sortable
            shadow={0}
            rows={[
                {aspect: 'English', description: 'fluently speaking, reading & listening', value: 80},
                {aspect: 'Team Work', description: 'discuss, sharing knowledge, socialize &communication', value: 100},
                {aspect: 'Presentation', description: 'presenting progress from any task', value: 90},
                {aspect: 'Fast & Self Learning', description: 'continuous improvement', value: 100},

            ]}
        >
            <TableHeader
                name="aspect"
                tooltip="aspect category"
            >
            Aspect
            </TableHeader>
            <TableHeader
                name="description"
            >
            Description
            </TableHeader>
            <TableHeader
                numeric
                name="value"
            >
            Value (max 100)
            </TableHeader>
        </Table>
        </Cell>
        <Cell col={2}>
        </Cell>
      </Grid>
    </div>
    )
  }
}

export default Moreskills;
