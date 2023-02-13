import React from "react";
import { Button, Card } from "react-bootstrap";

const ContactUs = () => {
  const contacts = [
    {
      name: "Egnoel Neto",
      description: "something about me",
      image:
        "https://res.cloudinary.com/dameucg7x/image/upload/v1676284449/329938388_1121969545144233_555012502169889047_n_llqpjc.jpg",
      github: "github",
      linkedin: "linkedin",
      twitter: "twitter",
    },
    {
      name: "Name",
      description: "something about me",
      image: "http://",
      github: "github",
      linkedin: "linkedin",
      twitter: "twitter",
    },
    {
      name: "Name",
      description: "something about me",
      image: "http://",
      github: "github",
      linkedin: "linkedin",
      twitter: "twitter",
    },
    {
      name: "Name",
      description: "something about me",
      image: "http://",
      github: "github",
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
                  <Card.Text>{contact.description}</Card.Text>
                  <Card.Link href="#">{contact.github}</Card.Link>
                  <Card.Link href="#">{contact.linkedin}</Card.Link>
                  <Card.Link href="#">{contact.twitter}</Card.Link>
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
            this journey takes us!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
