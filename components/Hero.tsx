import Image from "next/image";
import Button from "@/components/Button";
import { profile } from "@/data/profile";

// "Aiman Ashri" -> "AA". Shown when there is no photo yet.
function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("");
}

export default function Hero() {
  return (
    <section id="top" className="flex min-h-svh items-center pt-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr]">
        <div>
          <h1 className="text-5xl leading-[1.05] tracking-tight motion-safe:animate-rise md:text-7xl">
            {profile.name}
            <span className="block text-muted">{profile.role}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted motion-safe:animate-rise motion-safe:[animation-delay:120ms] md:text-xl">
            {profile.intro}
          </p>

          <div className="mt-10 flex flex-col gap-3 motion-safe:animate-rise motion-safe:[animation-delay:240ms] sm:flex-row">
            <Button href="#projects">See my projects</Button>
            <Button href="#contact" variant="secondary">
              Get in touch
            </Button>
          </div>
        </div>

        <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl bg-surface motion-safe:animate-rise motion-safe:[animation-delay:360ms] md:justify-self-end">
          {profile.photo ? (
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              priority
              sizes="(min-width: 768px) 384px, 100vw"
              className="object-cover object-top"
            />
          ) : (
            <span className="flex h-full items-center justify-center text-8xl tracking-tight text-accent">
              {getInitials(profile.name)}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
