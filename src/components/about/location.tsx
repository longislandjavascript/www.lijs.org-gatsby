import React from "react";
import { Card } from "../card";
import { AlertBox } from "../alert-box";

export const Location = () => {
  return (
    <Card title="Location">
      <br />
      <AlertBox>
        Due to CoronaVirus, we are meeting virtually until further notice.
      </AlertBox>
      <br />
      <iframe
        title="Map to LaunchPad Huntington"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.0286646919844!2d-73.43112128465668!3d40.871245135794986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8287816d84b91%3A0x9a83753169b72bea!2sLaunchPad%20Huntington!5e0!3m2!1sen!2sus!4v1588010246359!5m2!1sen!2sus"
        width={700}
        height={450}
        style={{ maxWidth: "100%", border: 0, borderRadius: ".75rem" }}
        frameBorder={0}
        aria-hidden="false"
        tabIndex={0}
      />
    </Card>
  );
};
