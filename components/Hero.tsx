import Image from "next/image";
import Button from "@/components/ui/Button";
import { SocialIcon } from "@/components/ui/Icons";
import { experience, profile, socials } from "@/data/profile";

// "Aiman Ashri" -> "AA". Shown when there is no photo yet.
function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("");
}

// Each line of the hero animates in a little after the one before.
const enter = "motion-safe:animate-enter";

export default function Hero() {
  const currentRole = experience.find((item) => item.current);

  return (
    <section id="top" className="relative isolate overflow-hidden pt-16">
      <div aria-hidden className="grid-backdrop absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(60%_60%_at_50%_0%,rgb(59_130_246/0.08),transparent)]"
      />

      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col px-6">
        <div className="grid flex-1 items-center gap-14 py-16 md:grid-cols-12 md:gap-8 md:py-20">
          <div className="md:col-span-7">
            {/* {currentRole && (
              <p
                className={`${enter} inline-flex items-center gap-2.5 rounded-full border border-line bg-surface py-1.5 pr-3.5 pl-3 text-sm text-muted`}
              >
                <span className="size-2 rounded-full bg-live motion-safe:animate-pulse-dot" aria-hidden />
                {currentRole.title} at <span className="font-medium text-ink">{currentRole.place}</span>
              </p>
            )} */}

            <h1
              className={`${enter} mt-7 text-5xl leading-[1.02] font-semibold tracking-[-0.035em] text-balance [animation-delay:80ms] sm:text-6xl lg:text-7xl`}
            >
              {profile.name}
              <span className="block text-faint">{profile.role}.</span>
            </h1>

            <p
              className={`${enter} mt-7 max-w-lg text-lg leading-relaxed text-pretty text-muted [animation-delay:160ms] md:text-xl md:leading-relaxed`}
            >
              {profile.intro}
            </p>

            <div className={`${enter} mt-10 flex flex-col gap-3 [animation-delay:240ms] sm:flex-row sm:items-center`}>
              <Button href="#projects" withArrow>
                View my work
              </Button>
              <Button href="#contact" variant="secondary">
                Get in touch
              </Button>
            </div>

            <ul className={`${enter} mt-10 flex items-center gap-5 text-sm text-muted [animation-delay:320ms]`}>
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-ink"
                  >
                    <SocialIcon label={social.label} className="size-4" />
                    <span className="link">{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${enter} w-full max-w-sm [animation-delay:200ms] md:col-span-5 md:justify-self-end`}>
            <div className="group w-full rounded-[1.75rem] border border-line bg-surface p-2.5 shadow-[0_1px_2px_rgb(15_23_42/0.04),0_24px_48px_-24px_rgb(15_23_42/0.18)] transition duration-500 ease-out-soft hover:-translate-y-1">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-subtle">
                {profile.photo ? (
                  <Image
                    src={profile.photo}
                    alt={`Portrait of ${profile.name}`}
                    fill
                    priority
                    sizes="(min-width: 768px) 384px, 100vw"
                    className="object-cover object-top transition duration-700 ease-out-soft group-hover:scale-[1.03]"
                  />
                ) : (
                  <span className="flex h-full items-center justify-center text-8xl font-semibold tracking-tight text-accent">
                    {getInitials(profile.name)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${enter} flex flex-col gap-4 border-t border-line py-6 [animation-delay:400ms] sm:flex-row sm:items-center sm:gap-8`}
        >
          <p className="shrink-0 font-mono text-xs tracking-wide text-faint uppercase">Core stack</p>
          <ul className="flex flex-wrap gap-x-7 gap-y-2 text-sm font-medium text-ink-soft">
            {profile.coreStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
