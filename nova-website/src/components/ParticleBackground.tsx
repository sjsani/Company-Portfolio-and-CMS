import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

interface DesignProps {
  imageUrl: string;
}

const ParticleBackground = ({ imageUrl }: DesignProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // console.log(container);
  }, []);

  return (
    <div
      className="w-full h-full relative bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <Particles
        className="w-full h-full"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          fullScreen: false,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 200, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 120,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: { enable: false }, // avoid bounce acceleration
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "out" },
              random: false,
              speed: 2,
              straight: false,
              drift: 0,
              attract: { enable: false }
            },
            number: {
              density: { enable: true, area: 1000 },
              value: 90,
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },

          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticleBackground;
