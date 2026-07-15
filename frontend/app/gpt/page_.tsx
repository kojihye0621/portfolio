const experiences = [
  {
    period: '2023.01 — 2025.12',
    company: '회사명',
    position: '백엔드 개발자',
    description:
      '서비스 운영과 유지보수, 결제 연동, 관리자 기능 및 신규 서비스 개발을 담당했습니다.',
  },
];

const skills = [
  'Node.js',
  'NestJS',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'PHP',
  'MariaDB',
  'Git',
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Backend Developer</p>

          <h1 className="title">
            안녕하세요.
            <br />
            개발자 고지혜입니다.
          </h1>

          <p className="introduction">
            사용자 경험과 서비스 안정성을 함께 고민하며,
            <br />
            운영하기 좋은 서비스를 만드는 백엔드 개발자입니다.
          </p>

          <div className="actions">
            <a className="primaryButton" href="#experience">
              경력 보기
            </a>

            <a className="secondaryButton" href="#contact">
              연락하기
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <p className="sectionLabel">About</p>
          <h2 className="sectionTitle">저를 소개합니다.</h2>

          <p className="sectionDescription">
            백엔드 개발을 중심으로 서비스 유지보수와 신규 기능 개발을
            경험했습니다. 문제를 단순히 해결하는 것을 넘어, 이후에도 이해하고
            관리하기 쉬운 코드를 작성하는 것을 중요하게 생각합니다.
          </p>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="container">
          <p className="sectionLabel">Experience</p>
          <h2 className="sectionTitle">경력</h2>

          <div className="experienceList">
            {experiences.map((experience) => (
              <article
                className="experienceItem"
                key={`${experience.company}-${experience.period}`}
              >
                <p className="period">{experience.period}</p>

                <div>
                  <h3 className="company">{experience.company}</h3>
                  <p className="position">{experience.position}</p>
                  <p className="description">{experience.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="container">
          <p className="sectionLabel">Skills</p>
          <h2 className="sectionTitle">기술</h2>

          <ul className="skillList">
            {skills.map((skill) => (
              <li className="skillItem" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="contactSection" id="contact">
        <div className="container">
          <p className="sectionLabel">Contact</p>
          <h2 className="contactTitle">함께 이야기해요.</h2>

          <p className="sectionDescription">
            새로운 기회와 협업에 열려 있습니다.
          </p>

          <a className="email" href="mailto:이메일주소">
            이메일주소
          </a>
        </div>
      </section>
    </main>
  );
}