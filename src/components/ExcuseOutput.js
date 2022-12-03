import { BlenderOutlined } from '@mui/icons-material';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { useCallback, useState } from 'react';

import { generateExcuse } from '../services/excusesGenerator';

export default function ExcuseOutput() {
    const [excuse, setExcuse] = useState(generateExcuse());

    const generate = useCallback(() => {
        setExcuse(generateExcuse());
    }, []);

    return (
        <>
            <Card sx={{ m: 1 }}>
                <CardContent>
                    <Typography variant="h4">{excuse}</Typography>
                </CardContent>
            </Card>
            <Button variant="contained" onClick={generate} endIcon={<BlenderOutlined />}>
                Generate
            </Button>
        </>
    );
}
