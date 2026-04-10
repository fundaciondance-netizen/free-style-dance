"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const defaultSlides = [
  {
    name: "URBANO",
    image: "/dance_image/urbano/URBANO.webp",
    alt: "Grupo bailando danza urbana",
  },
  {
    name: "Bachata",
    image: "/dance_image/bachata/BACHATA.webp",
    alt: "Pareja bailando bachata",
  },
  {
    name: "K-pop",
    image: "/dance_image/kpop/KPOP.webp",
    alt: "Grupo de baile estilo K-pop",
  },
  {
    name: "Salsa Choke",
    image: "/dance_image/salsa_choke/SALSA_CHOKE.webp",
    alt: "Pareja bailando salsa choke",
  },
  {
    name: "Contemporáneo",
    image: "/dance_image/contemporaneo/CONTEMPORANEO.webp",
    alt: "Pareja bailando contemporáneo",
  },
  {
    name: "Latino",
    image: "/dance_image/latino/LATINO.webp",
    alt: "Pareja bailando latino",
  },
  {
    name: "Baile Social",
    image: "/dance_image/baile_social/BAILE_SOCIAL_1.webp",
    alt: "Pareja bailando baile social",
  },
  {
    name: "Danzas Tradicionales",
    image: "/dance_image/danza/DANZAS_TRADICIONALES_1.webp",
    alt: "Pareja bailando danza tradicional",
  },
  {
    name: "Gimnasia",
    image: "/dance_image/gimnasia/gim_1.webp",
    alt: "Pareja bailando gimnasia",
  },
];

const defaultBackgrounds = [
  "/hero_1.webp",
  "/hero_2.webp",
  "/hero_3.webp",
  "/hero_4.webp",
];

const preloadImage = (src: string) =>
  new Promise<void>((resolve) => {
    const img = new window.Image();
    img.decoding = "async";
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });

type DanceHeroProps = {
  backgroundImages?: string[];
  slides?: typeof defaultSlides;
};

export function DanceHero({
  backgroundImages = defaultBackgrounds,
  slides = defaultSlides,
}: DanceHeroProps) {
  const normalizedSlides = useMemo(
    () => (slides.length ? slides : defaultSlides),
    [slides]
  );

  const normalizedBackgrounds = useMemo(
    () => (backgroundImages.length ? backgroundImages : defaultBackgrounds),
    [backgroundImages]
  );

  const [current, setCurrent] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);
  const [assetsReady, setAssetsReady] = useState(false);

  useEffect(() => {
    let alive = true;

    const run = async () => {
      await Promise.all([
        ...normalizedSlides.map((s) => preloadImage(s.image)),
        ...normalizedBackgrounds.map((bg) => preloadImage(bg)),
      ]);

      if (alive) setAssetsReady(true);
    };

    void run();

    return () => {
      alive = false;
    };
  }, [normalizedSlides, normalizedBackgrounds]);

  useEffect(() => {
    if (!assetsReady || normalizedSlides.length < 2) return;

    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % normalizedSlides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [assetsReady, normalizedSlides.length]);

  useEffect(() => {
    if (!assetsReady || normalizedBackgrounds.length < 2) return;

    const timer = window.setInterval(() => {
      setBgIndex((prev) => (prev + 1) % normalizedBackgrounds.length);
    }, 8000);

    return () => window.clearInterval(timer);
  }, [assetsReady, normalizedBackgrounds.length]);

  const activeSlide = normalizedSlides[current];
  const activeBackground = normalizedBackgrounds[bgIndex];

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src={activeBackground}
          alt=""
          fill
          priority={bgIndex === 0}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-y-0 left-0 hidden w-[45%] bg-gradient-to-r from-black/90 to-transparent md:block" />

      <div className="relative z-10 mx-auto grid min-h-[100dvh] w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 pt-24 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex items-center">
          <div className="max-w-2xl px-6 md:px-10 lg:px-14 mt-20">
            <h1 className="text-4xl leading-[0.95] text-white md:text-6xl xl:text-7xl">
              Academia de baile en Cali
            </h1>

            <p className="mt-6 max-w-lg text-white/85">
              Si estás buscando clases de danza urbana en Cali, este es el lugar donde puedes empezar sin presión. No importa si nunca has bailado o si ya tienes experiencia.
            </p>

            <div className="mt-8 flex gap-3">
              <Link
                href="/servicios"
                className="flex items-center rounded-full bg-[#ec3236] px-6 py-3 text-white transition hover:scale-105"
              >
                Ver servicios
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center lg:justify-end">
          <div className="w-full max-w-[21.25rem] rounded-3xl border border-white/15 bg-white/10 p-3 backdrop-blur-sm md:p-4 md:backdrop-blur-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-black">
              <Image
                src={activeSlide.image}
                alt={activeSlide.alt}
                fill
                priority={current === 0}
                sizes="(max-width: 1024px) 90vw, 380px"
                className="object-cover object-center transition-opacity duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute left-4 top-4">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase text-black">
                  {activeSlide.name}
                </span>
              </div>

              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {normalizedSlides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrent(index)}
                    aria-label={`Ver slide ${index + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      index === current ? "w-6 bg-white" : "w-2 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}