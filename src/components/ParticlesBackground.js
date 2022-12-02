import Particles from 'particlesjs';
import { useEffect } from 'react';

export default function PacritclesBackground() {
    useEffect(() => {
        Particles.init({
            selector: "#background",
            color: ["#DA0463", "#404B69", "#DBEDF3"],
            connectParticles: true,
            speed: 0.2,
        });
    }, []);

    return <canvas id="background" style={{ position: "absolute" }} />;
}
