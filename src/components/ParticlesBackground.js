import { faker } from '@faker-js/faker';
import Particles from 'particlesjs';
import { useEffect } from 'react';

export default function PacritclesBackground() {
    useEffect(() => {
        Particles.init({
            selector: "#background",
            color: [faker.color.rgb(), faker.color.rgb(), faker.color.rgb(), faker.color.rgb()],
            connectParticles: true,
            speed: 0.2,
        });
    }, []);

    return <canvas id="background" style={{ position: "absolute", zIndex: -1 }} />;
}
