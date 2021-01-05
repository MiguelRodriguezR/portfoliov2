import React from "react";
import Card from "../../shared/card";
import "./contact.css";
import ContactStructure from "./contactStructure";

const ContactSection = () => {

  return (
    <div className="c-section">
      <Card>
        <ContactStructure></ContactStructure>
      </Card>
    </div>
  );
};

export default ContactSection;
