import Image from 'next/image';
import { resumeData } from '../../data/resume';
import styles from './page.module.css';


export default function ResumePage() {
  const { profile, introduction, education, career, projects, skills, closing } =
  resumeData;
  
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.profileCopy}>
            <p className={styles.role}>{profile.role}</p>
            <h1 className={styles.name}>{profile.name}</h1>
            <p className={styles.heroMessage}>{introduction.title}</p>

            <div className={styles.contactList}>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={`tel:${profile.phone.replaceAll('-', '')}`}>
                {profile.phone}
              </a>
              <span>{profile.location}</span>
              <span>{profile.birth}</span>
            </div>
          </div>

          <div className={styles.profileImageWrap}>
            <Image
              src={profile.image}
              alt={`${profile.name} 프로필 사진`}
              width={420}
              height={520}
              className={styles.profileImage}
              priority
            />
          </div>
        </div>
      </header>

      <nav className={styles.navigation} aria-label="이력서 영역 이동">
        <div className={styles.navigationInner}>
          <a href="#about">소개</a>
          <a href="#career">경력</a>
          <a href="#projects">프로젝트</a>
          <a href="#skills">기술</a>
        </div>
      </nav>

      <section className={styles.section} id="about">
        <div className={styles.sectionHeading}>
          <p className={styles.sectionLabel}>About</p>
          <h2>소개</h2>
        </div>

        <div className={styles.sectionContent}>
          <div className={styles.introduction}>
            {introduction.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.educationBlock}>
            <h3>Education</h3>
            {education.map((item) => (
              <article className={styles.educationItem} key={item.school}>
                <div>
                  <strong>{item.school}</strong>
                  <p>
                    {item.major} · {item.status}
                  </p>
                </div>
                <span>{item.period}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="career">
        <div className={styles.sectionHeading}>
          <p className={styles.sectionLabel}>Career</p>
          <h2>경력</h2>
        </div>

        <div className={styles.sectionContent}>
          <article className={styles.careerCard}>
            <div className={styles.careerHeader}>
              <Image
                src={`${basePath}${career.logo}`}
                alt={`${career.company} 로고`}
                width={200}
                height={74}
                className={styles.companyLogo}
              />

              <div className={styles.careerTitleGroup}>
                <h3>{career.company}</h3>
                <p>{career.previousName}</p>
                <strong>
                  {career.team} · {career.position}
                </strong>
              </div>

              <p className={styles.period}>{career.period}</p>
            </div>

            <div className={styles.responsibilityGrid}>
              {career.responsibilities.map((responsibility) => (
                <div
                  className={styles.responsibilityCard}
                  key={responsibility.title}
                >
                  <h4>{responsibility.title}</h4>
                  <ul>
                    {responsibility.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className={styles.section} id="projects">
        <div className={styles.sectionHeading}>
          <p className={styles.sectionLabel}>Projects</p>
          <h2>프로젝트</h2>
        </div>

        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <article className={styles.projectCard} key={project.title}>
              <div className={styles.projectAside}>
                <span className={styles.projectNumber}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className={styles.period}>{project.period}</p>
              </div>

              <div className={styles.projectBody}>
                <div className={styles.projectHeader}>
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                  </div>

                  {project.links && (
                    <div className={styles.linkList}>
                      {project.links.map((link) => (
                        <a
                          href={link.href}
                          key={link.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <div className={styles.detailGrid}>
                  {project.details.map((detail) => (
                    <div className={styles.detailItem} key={detail.title}>
                      <h4>{detail.title}</h4>
                      <ul>
                        {detail.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {project.learnings && (
                  <div className={styles.learningBox}>
                    <strong>프로젝트를 통해 배운 점</strong>
                    {project.learnings.map((learning) => (
                      <p key={learning}>{learning}</p>
                    ))}
                  </div>
                )}

                <ul className={styles.tagList} aria-label="사용 기술">
                  {project.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="skills">
        <div className={styles.sectionHeading}>
          <p className={styles.sectionLabel}>Skills</p>
          <h2>기술</h2>
        </div>

        <div className={styles.skillGrid}>
          {skills.map((skillGroup) => (
            <article className={styles.skillCard} key={skillGroup.category}>
              <h3>{skillGroup.category}</h3>
              <ul>
                {skillGroup.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.closingSection}>
        <p className={styles.sectionLabel}>More About Me</p>
        <h2>이력서에 담지 못한 이야기</h2>
        <div className={styles.closingCopy}>
          {closing.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>{profile.name}</p>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </footer>
    </main>
  );
}
