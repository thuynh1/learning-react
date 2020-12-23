import "./SeasonDisplay.css";
import React from "react";

// BEST PRACTICE: Use a config object
const seasonConfig = {
  summer: {
    text: "Lets hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Brrr, it is chilly!",
    iconName: "snowflake",
  },
};

/**
 * Northern Hemisphere: Winter = [Jan...Mar - Oct...Dec], Summer = [Apr...Sept]
 * Southern Hemisphere: Winter = [Apr...Sept], Summer = [Jan...Mar - Oct...Dec]
 */
class SeasonDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getLatitude() {
    return this.props.lat;
  }

  /**
   * Returns current month. Jan = 0 ... Dec = 11
   */
  getMonth() {
    return new Date().getMonth();
  }

  getSeason(lat, month) {
    if (month > 2 && month < 9) {
      return lat > 0 ? "summer" : "winter";
    } else {
      return lat > 0 ? "winter" : "summer";
    }
  }

  getIconName() {
    const season = this.getSeason(this.getLatitude(), this.getMonth());
    return seasonConfig[season].iconName;
  }

  getText() {
    const season = this.getSeason(this.getLatitude(), this.getMonth());
    return seasonConfig[season].text;
  }

  render() {
    const season = this.getSeason(this.getLatitude(), this.getMonth());

    return (
      <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${this.getIconName()} icon`} />
        <h1>{this.getText()}</h1>
        <i className={`icon-right massive ${this.getIconName()} icon`} />
      </div>
    );
  }
}

export default SeasonDisplay;
