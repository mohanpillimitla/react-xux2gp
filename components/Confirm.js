import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { List, ListItem } from "material-ui/List";

class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <div className="container">
            <AppBar title="Confirm Details" style={{ textAlign: "center" }} />
            <List>
              {Object.entries(values).map((item, value) => {
                return (
                  <ListItem primaryText={item[0]} secondaryText={item[1]} />
                );
              })}
            </List>

            <div className="button">
              <RaisedButton
                label="continue"
                primary={true}
                onClick={this.continue}
                style={{ width: 105, margin: 10 }}
              />

              <RaisedButton
                label=" back  "
                primary={false}
                onClick={() => this.props.prevStep()}
                style={{ width: 105, margin: 10 }}
              />
            </div>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
