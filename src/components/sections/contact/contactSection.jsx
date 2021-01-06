import React from "react";
import Card from "../../shared/card";
import "./contact.css";
import ContactStructure from "./contactStructure";

const ContactSection = React.forwardRef((props, ref) => {

  return (
    <div className="c-section" ref={ref}>
      <Card>
        <ContactStructure></ContactStructure>
      </Card>
    </div>
  );
});

export default ContactSection;
