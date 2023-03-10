import React from "react";
import Interior from "./Interior";
import Section from "./Section";

function ModelS() {
  document.title = "Model S | Tesla";
  return (
    <div>
      <Section
        title="Model S"
        description="Plaid"
        Img="/images/model-s.jpg"
        downArrow="/images/down-arrow.svg"
        range="396 mi"
        rangeText="Range (EPA est.)"
        acceleration="1.99s"
        accelerationText="0-60 mph*"
        topSpeed="200 mph"
        topSpeedText="Top Speed"
        peakPower="1,020 hp"
        peakPowerText="Peak Power"
      />
      <Interior />
    </div>
  );
}

export default ModelS;
