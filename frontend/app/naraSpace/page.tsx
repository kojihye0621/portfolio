import Image from 'next/image';
import { resumeData } from '../../data/resume';
import { Cake, Mail, MapPin, GraduationCap, PencilRuler} from 'lucide-react';

export default function ResumePage() {
  const { profile, introduction, educationBlind, certifications, career, projects, skills, closing } =
    resumeData;

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="mx-auto grid min-h-108 max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1fr_380px] md:px-10 lg:px-12">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              {profile.role}
            </p>

            <h1 className="text-5xl font-bold tracking-tighter text-slate-950 sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600 sm:text-2xl">
              {introduction.title}
            </p>

            <div className="mt-10 flex flex-col gap-3 text-sm text-slate-600">
              <div className="flex flex-wrap gap-x-2 items-center">
                <Mail/><span className="w-20 font-semibold text-slate-900">Email</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="underline-offset-4 transition hover:text-slate-950 hover:underline"
                >
                  {profile.email}
                </a>
              </div>

              <div className="flex flex-wrap gap-x-2 items-center">
                <MapPin/><span className="w-20 font-semibold text-slate-900">
                  Address
                </span>
                <span>{profile.location}</span>
              </div>

              <div className="flex flex-wrap gap-x-2 items-center">
                <Cake/><span className="w-20 font-semibold text-slate-900">Birth</span>
                <span>{profile.birth}</span>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-95 overflow-hidden rounded-3xl bg-slate-100 md:mx-0">
            <Image
              src={`${basePath}${profile.image}`}
              alt={`${profile.name} 프로필 사진`}
              width={420}
              height={520}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </header>

      <nav
        className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur"
        aria-label="이력서 영역 이동"
      >
        <div className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-6 py-4 text-sm font-semibold text-slate-500 md:px-10 lg:px-12">
          <a href="#about" className="nav-link">
            소개
          </a>
          <a href="#career" className="nav-link">
            경력
          </a>
          <a href="#projects" className="nav-link">
            프로젝트
          </a>
          <a href="#skills" className="nav-link">
            기술
          </a>
        </div>
      </nav>

      <section
        className="mx-auto grid max-w-6xl gap-10 border-b border-slate-200 px-6 py-24 md:grid-cols-[200px_1fr] md:px-10 lg:px-12"
        id="about"
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">소개</h2>
        </div>

        <div className="space-y-14">
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-slate-600">
            {introduction.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div>
            <div className='mb-5 flex items-center gap-2.5'>
            <GraduationCap/>
            <h2 className=" text-2xl font-bold ">학력</h2>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-300">
              Education
            </h3>
            </div>

            <div className="pl-3 divide-y divide-slate-200 border-y border-slate-200">
              {educationBlind.map((item) => (
                <article
                  className="flex flex-col justify-between gap-3 py-6 sm:flex-row sm:items-start"
                  key={item.school}
                >
                  <div>
                    <strong className="text-lg text-slate-950">
                      {item.school}
                    </strong>
                    <p className="mt-1 text-slate-500">
                      {item.major} · {item.status}
                    </p>
                  </div>

                  <span className="text-sm text-slate-400">{item.period}</span>
                </article>
              ))}
            </div>
          </div>
          <div>
            <div className='mb-5 flex items-center gap-2.5'>
            <PencilRuler/>
            <h2 className=" text-2xl font-bold ">자격증</h2>
            <h3 className="ml-2 text-sm font-semibold uppercase tracking-[0.14em] text-blue-300">
              Certifications
            </h3>
            </div>

            <div className="pl-3 divide-y divide-slate-200 border-y border-slate-200">
              {certifications.map((item) => (
                <article
                  className="flex flex-col justify-between gap-3 py-6 sm:flex-row sm:items-start"
                  key={item.name}
                >
                  <div>
                     <strong className="text-lg text-slate-950">
                      {item.name}
                    </strong>
                    <p className="mt-1 text-slate-500">
                      {item.memo}
                    </p>
                  </div>

                  <span className="text-sm text-slate-600">{item.status}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="mx-auto grid max-w-6xl gap-10 border-b border-slate-200 px-6 py-24 md:grid-cols-[200px_1fr] md:px-10 lg:px-12"
        id="career"
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
            Career
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">경력</h2>
        </div>

        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
          <div className="grid gap-6 border-b border-slate-200 p-7 sm:grid-cols-[140px_1fr_auto] sm:items-center">
            <Image
              src={`${basePath}${career.logo}`}
              alt={`${career.company} 로고`}
              width={200}
              height={74}
              className="h-auto max-h-16 w-auto max-w-35 object-contain object-left"
            />

            <div>
              <h3 className="text-2xl font-bold text-slate-950">
                {career.company}
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                {career.previousName}
              </p>
              <strong className="mt-3 block text-sm font-semibold text-slate-700">
                {career.team} · {career.position}
              </strong>
            </div>

            <p className="text-sm text-slate-400 sm:text-right">
              {career.period}
            </p>
          </div>

          <div className="grid gap-5 p-7 lg:grid-cols-2">
            {career.responsibilities.map((responsibility) => (
              <div
                className="rounded-2xl bg-slate-50 p-6"
                key={responsibility.title}
              >
                <h4 className="text-lg font-bold text-slate-950">
                  {responsibility.title}
                </h4>

                <ul className="mt-4 list-disc space-y-2 pl-3 text-sm leading-6 text-slate-600 ">
                  {responsibility.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section
        className="mx-auto max-w-6xl border-b border-slate-200 px-6 py-24 md:px-10 lg:px-12"
        id="projects"
      >
        <div className="grid gap-10 md:grid-cols-[200px_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              Projects
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              프로젝트
            </h2>
          </div>

          <div className="divide-y divide-slate-200 border-t border-slate-200">
            {projects.map((project, index) => (
              <article
                className="grid gap-8 py-14 lg:grid-cols-[100px_1fr]"
                key={project.title}
              >
                <div>
                  <span className="text-4xl font-bold tracking-tighter text-blue-200">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {project.period}
                  </p>
                </div>

                <div>
                  <div className="flex flex-col justify-between gap-6 sm:flex-row">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                        {project.title}
                      </h3>
                    </div>

                    {project.links && (
                      <div className="flex shrink-0 flex-wrap gap-2">
                        {project.links.map((link) => (
                          <a
                            href={link.href}
                            key={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-10 items-center rounded-full border border-slate-300 px-4 text-sm font-semibold text-slate-700 transition hover:bg-blue-200"
                            >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                    
                  </div>
                  <p className="mt-3 max-w-2xl leading-7 text-slate-500">
                        {project.summary}
                      </p>

                  <div className="mt-10 grid gap-5 lg:grid-cols-2">
                    {project.details.map((detail) => (
                      <div
                        className="rounded-2xl border border-slate-200 p-6"
                        key={detail.title}
                      >
                        <h4 className="font-bold text-slate-950">
                          {detail.title}
                        </h4>

                        <ul className="mt-4 list-disc space-y-2 pl-2 text-sm leading-6 text-slate-600 ">
                          {detail.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {project.learnings&& !project.learningsNara &&(
                    <div className="mt-6 rounded-2xl bg-slate-950 p-6 text-white">
                      <strong className="text-sm font-semibold">
                        프로젝트를 통해 배운 점
                      </strong>

                      <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                        {project.learnings.map((learning) => (
                          <p key={learning}>{learning}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.learningsNara && (
                    <div className="mt-6 rounded-2xl bg-slate-950 p-6 text-white">
                      <strong className="text-sm font-semibold">
                        프로젝트를 통해 배운 점
                      </strong>

                      <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                        {project.learningsNara.map((learning) => (
                          <p key={learning}>{learning}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  <ul
                    className="mt-6 flex flex-wrap gap-2"
                    aria-label="사용 기술"
                  >
                    {project.skills.map((skill) => (
                      <li
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600"
                        key={skill}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="mx-auto grid max-w-6xl gap-10 border-b border-slate-200 px-6 py-24 md:grid-cols-[200px_1fr] md:px-10 lg:px-12"
        id="skills"
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">기술</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((skillGroup) => (
            <article
              // className="rounded-2xl border border-slate-200 p-6"
              className="rounded-2xl border border-blue-100 border-l-4 border-l-blue-200 p-6"
              key={skillGroup.category}
            >
              <h3 className="text-lg font-bold text-slate-950">
                {skillGroup.category}
              </h3>

              <ul className="mt-5 flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <li
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-600"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
            More About Me
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            이력서에 담지 못한 이야기
          </h2>

          <div className="mx-auto mt-10 max-w-3xl space-y-5 text-left text-base leading-8 text-slate-300 sm:text-center">
            {closing.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

{/* 차후 위치 수정 필 */}
      <footer className="flex flex-col items-center justify-between gap-3 border-t border-slate-800 bg-slate-950 px-6 py-8 text-sm text-slate-400 sm:flex-row sm:px-10 lg:px-12">
        <p className="font-semibold text-white">{profile.name}</p>

        <a
          href={`mailto:${profile.email}`}
          className="underline-offset-4 hover:text-white hover:underline"
        >
          {profile.email}
        </a>
      </footer>
    </main>
  );
}