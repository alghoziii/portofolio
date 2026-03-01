"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function StarsBackground() {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setEngineReady(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fullScreen: {
        enable: false,
      },
      fpsLimit: 60,
      detectRetina: true,
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          onClick: {
            enable: false,
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          repulse: {
            distance: 90,
            duration: 0.45,
          },
        },
      },
      particles: {
        number: {
          value: 120,
          density: {
            enable: true,
            area: 900,
          },
        },
        color: {
          value: "#ffffff",
        },
        links: {
          enable: false,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: {
            min: 1,
            max: 2.5,
          },
        },
        opacity: {
          value: {
            min: 0.2,
            max: 0.7,
          },
          animation: {
            enable: true,
            speed: 0.6,
          },
        },
        move: {
          enable: true,
          speed: 0.8,
          random: true,
          direction: "none",
          outModes: {
            default: "out",
          },
        },
      },
    }),
    []
  );

  if (!engineReady) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Particles
        id="stars-bg"
        className="h-full w-full"
        style={{ width: "100%", height: "100%", backgroundColor: "transparent" }}
        options={options}
      />
    </div>
  );
}
