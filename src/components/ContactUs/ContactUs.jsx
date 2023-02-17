import React from "react";
import { Button, Card } from "react-bootstrap";

const ContactUs = () => {
  const contacts = [
    {
      name: "Egnoel Neto",
      description: "something about me",
      image:
        "https://res.cloudinary.com/dameucg7x/image/upload/v1676284449/329938388_1121969545144233_555012502169889047_n_llqpjc.jpg",
      github: "https://github.com/Egnoel",
      linkedin: "https://www.linkedin.com/in/egnoel-neto/",
      twitter: "https://twitter.com/Egnoel_Neto",
    },
    {
      name: "Ianel",
      description: "something about me",
      image: "https://avatars.githubusercontent.com/u/48760301?v=4",
      github: "https://github.com/Ianel",
      linkedin: "linkedin",
      twitter: "twitter",
    },
    {
      name: "Or Degani",
      description: "something about me",
      image: "https://avatars.githubusercontent.com/u/77922002?v=4",
      github: "https://github.com/ordegani",
      linkedin: "linkedin",
      twitter: "twitter",
    },
    {
      name: "Saleh Hadi Aburah",
      description: "something about me",
      image: "https://avatars.githubusercontent.com/u/110779753?v=4",
      github: "https://github.com/salehHadi",
      linkedin: "linkedin",
      twitter: "twitter",
    },
  ];
  return (
    <div className="container py-5 my-5">
      <div className="row justify-content-center">
        <div>
          <h4>Welcome to the Contact Us page of v42-geckos-team-16</h4>
          <p>
            A group of aspiring developers participating in the Chingu voyage
            42. We value your feedback and inquiries and are always happy to
            hear from our community.
          </p>
          <p>
            If you have any questions, comments or suggestions, please don't
            hesitate to reach out to us. You can reach us through the following
            channels:
          </p>
          <p>
            Team{" "}
            <a href="https://github.com/chingu-voyages/v42-geckos-team-16">
              GitHub{" "}
            </a>
          </p>
          <div className="d-flex flex-row justify-content-center gap-4 mt-2 mb-4">
            {contacts.map((contact) => (
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src={contact.image}
                  style={{ objectFit: "cover", height: "60%" }}
                />
                <Card.Body style={{ height: "30%" }}>
                  <Card.Title>{contact.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Web Developer
                  </Card.Subtitle>
                  <br />
                  <Card.Link href={contact.github}>Github</Card.Link>
                  <Card.Link href={contact.linkedin}>Linkedin</Card.Link>
                  <Card.Link href={contact.twitter}>Twitter</Card.Link>
                </Card.Body>
              </Card>
            ))}
          </div>

          <p>
            Together, we are working on a number of exciting projects and
            constantly pushing ourselves to learn and improve. If you'd like to
            follow our journey or get in touch with us, please feel free to
            reach out!
          </p>

          <p>
            Thank you for visiting our about us page. We can't wait to see where
            this journey takes us!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
