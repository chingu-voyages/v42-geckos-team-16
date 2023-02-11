function ContactUs() {
  const teamMembers = [
    {
      name: "Saleh H. Aburah",
      description: "Is a full stack dev specialist to work as a backend dev",
      github: "#",
      twitter: "#",
      linkedIn: "#",
    },
    {
      name: "Egnoel",
      description: "",
      github: "#",
      twitter: "#",
      linkedIn: "#",
    },
    {
      name: "Ianel",
      description: "",
      github: "#",
      twitter: "#",
      linkedIn: "#",
    },
    {
      name: "Shaymaa91",
      description: "Is a full stack dev specialist to work as a backend dev",
      github: "#",
      twitter: "#",
      linkedIn: "#",
    },
    {
      name: "Saleh H. Aburah",
      description: "Is a full stack dev specialist to work as a backend dev",
      github: "#",
      twitter: "#",
      linkedIn: "#",
    },
  ];

  const teamMembersDisplay = teamMembers.map((el) => {
    return (
      <div>
        <h4>{el.name}</h4>
        <p>{el.description}</p>
        <p>Social media acounts: </p>
        <a href={el.github}>
          <i class="ri-github-fill"></i>
        </a>
        <a href={el.twitter}>
          <i class="ri-twitter-line"></i>
        </a>
        <a href={el.linkedIn}>
          <i class="ri-linkedin-line"></i>
        </a>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="container py-5 my-5">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1 className="mb-5 display-6 fw-normal fs-3 text-center">
              Team member those created this misttion true
            </h1>
          </div>
          {teamMembersDisplay}
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
