import "./About.scss";

function About() {
  return (
    <ul className="principles">
      <li className="principles__item">
        <div className="principles__title-container">
          <h3 className="principles__title">Fairness and inclusiveness</h3>
        </div>
        <p className="principles__content">
          The fairness assessment component of the Responsible AI dashboard
          enables data scientists and developers to assess model fairness across
          sensitive groups defined in terms of gender, ethnicity, age, and other
          characteristics.
        </p>
      </li>
      <li className="principles__item">
        <div className="principles__title-container">
          <h3 className="principles__title">Reliability and safety</h3>
        </div>
        <p className="principles__content">
          To build trust, it is critical that AI systems operate reliably,
          safely, and consistently.
        </p>
      </li>
      <li className="principles__item">
        <div className="principles__title-container">
          {" "}
          <h3 className="principles__title">Transparency</h3>
        </div>
        <p className="principles__content">
          A crucial part of transparency is interpretability: the useful
          explanation of the behavior of AI systems and their components.
          Improving interpretability requires stakeholders to comprehend how and
          why AI systems function the way they do.
        </p>
      </li>
      <li className="principles__item">
        <div className="principles__title-container">
          {" "}
          <h3 className="principles__title">Privacy and security</h3>
        </div>
        <p className="principles__content">
          With AI, privacy and data security require close attention because
          access to data is essential for AI systems to make accurate and
          informed predictions and decisions about people.
        </p>
      </li>
      <li className="principles__item">
        <div className="principles__title-container">
          {" "}
          <h3 className="principles__title">Accountability</h3>
        </div>
        <p className="principles__content">
          Creates accountability by enabling cross-stakeholder communications.
          The scorecard also creates accountability by empowering developers to
          configure, download, and share their model health insights with their
          technical and non-technical stakeholders about AI data and model
          health.
        </p>
      </li>
      <li className="principles__item">
        <div className="principles__title-container">
          {" "}
          <h3 className="principles__title">Next steps</h3>
        </div>
        <p className="principles__content">
          Learn about the Responsible AI Standard for building AI systems
          according to six key principles.
        </p>
      </li>
    </ul>
  );
}

export default About;
