import { Stack } from '@mui/system';

import ExcuseOutput from './components/ExcuseOutput';
import PacritclesBackground from './components/ParticlesBackground';

function App() {
    return (
        <Stack height="100%" width="100%" justifyContent="center" alignItems="center" textAlign="center" gap={4}>
            <PacritclesBackground />
            <ExcuseOutput />
        </Stack>
    );
}

export default App;
