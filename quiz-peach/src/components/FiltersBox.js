import { Box, Card, Stack, Typography, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import Divider from '@mui/material/Divider';

const FiltersBox = ({title, options}) => {
    return (
        <Card>
            <Stack>
        <Box sx={{
                display: 'flex',
                px: 2,
                py: 2,
                cursor: 'pointer',
            }}
            >
            <Typography>{title}</Typography>
        </Box>
        <Divider />
        <Box sx={{
                display: 'flex',
                py: 1,
                cursor: 'pointer',
            }}
            >
            <FormGroup>
            {
                options.map(option => {
                    return (
                        <FormControlLabel key={option} sx={{m:0}} control={<Checkbox/>} label={option} />
                    )
                })
            }
        </FormGroup>
        </Box>
        </Stack>

        </Card >

    )
}


export default FiltersBox;