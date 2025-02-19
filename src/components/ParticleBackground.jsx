import { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
      }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
      }, []);

  return (
    <div className="fixed inset-0 z-0">
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        "autoPlay": true,
        "background": {
          "color": { "value": "#050505" }
        },
        "particles": {
          "number": {
            "value": 130,
            "density": { "enable": true, "area": 800 }
          },
          "color": {
            "value": "#00a1ff"
          },
          "shape": {
            "type": "circle"
          },
          "opacity": {
            "value": 0.2,
            "random": false,
            "anim": {
              "enable": false
            }
          },
          "size": {
            "value": 3,
            "random": false,
            "anim": {
              "enable": false
            }
          },
          "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": true,
            "straight": false,
            "outModes": { "default": "out" },
            "bounce": false
          },
          "links": {
            "enable": true,
            "distance": 150,
            "color": "#00a1ff",
            "opacity": 0.5,
            "width": 1
          }
        },
        "interactivity": {
          "events": {
            "onHover": { "enable": false },
            "onClick": { "enable": false }
          }
        },
        "detectRetina": true
      }
        }
      className="w-full h-full"
    />
    </div>
  );
};
export default ParticleBackground;
