import React from 'react';
import { Grid, ButtonGroup} from '@material-ui/core';
import Button from '@material-ui/core/Button';



class RiskPage extends React.Component {
    constructor(props) {
      super(props);
          this.state = {
  
          };
    } 

    render() {
          return (
              <Grid container direction = "column">
                  <Grid item>Risk Analysis</Grid>
                  <Grid item container> 
                    <Grid item xs ={2}/>
                    <Grid item xs = {8}>
                        <Grid container>
                             <Grid item xs = {6}>Contact Frequency Avoidance</Grid>
                             <Grid item xs = {6}>Probability of Action Deterrence</Grid>
                            <Grid item xs = {6}><ButtonGroup size="large" color="black" aria-label="large outlined primary button group">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                        </ButtonGroup></Grid>
                            <Grid item xs = {6}><ButtonGroup size="large" color="black" aria-label="large outlined primary button group">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                        </ButtonGroup></Grid>
                        <Grid item xs = {6}>Threat Capability</Grid>
                        <Grid item xs = {6}>Resistance Strength Vulnerability</Grid>
                        <Grid item xs = {6}><Button variant = "outlined" size = "large" color = "black">one</Button></Grid>
                        <Grid item xs = {6}><ButtonGroup size="large" color="black" aria-label="large outlined primary button group">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                        </ButtonGroup></Grid>
                        <Grid item xs = {6}>Primary Loss Magnitude Responsive</Grid>
                        <Grid item xs = {6}>Secondary Loss Magnitude Responsive</Grid>
                        <Grid item xs = {6}><ButtonGroup size="large" color="black" aria-label="large outlined primary button group">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                        </ButtonGroup></Grid>
                        <Grid item xs = {6}><ButtonGroup size="large" color="black" aria-label="large outlined primary button group">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                        </ButtonGroup></Grid>
                        <Grid item xs = {6}>Secondary Loss Probability</Grid>
                        <Grid item xs = {6}></Grid>
                        <Grid item xs = {6}><Button variant = "outlined" size = "large" color = "black">one</Button></Grid>
                        <Grid item xs = {3}><Button variant="contained">Reset</Button></Grid>
                        <Grid item xs ={3}><Button variant="contained">Run Analysis</Button></Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs ={2}/>
                    </Grid>
              </Grid>
        );
    }
  }
  
  export default RiskPage
