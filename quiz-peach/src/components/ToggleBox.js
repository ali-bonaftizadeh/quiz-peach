import { Box, Card, Switch, Typography } from "@mui/material";


const ToggleBox = ({ title }) => {
    return (
        <Card>
        <Box sx={{
                display: 'flex',
                px: 2,
                py: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
            }}
            >
            <Typography>{title}</Typography>
            <Switch></Switch>
        </Box>
        </Card >
    )
}

export default ToggleBox;