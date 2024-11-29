import { Box, Card, Stack, Typography, FormGroup, FormControlLabel, Checkbox, Chip } from "@mui/material";
import Table from "./Table";
import Divider from '@mui/material/Divider';
import { column } from "stylis";

const Similars = ({title, rows}) => {
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
            <Table titles={[]} rows={[
                {
                    key: "1",
                    columns: [
                        <Typography>سوال اول</Typography>,
                        <Chip size="small" label="پایگاه داده"></Chip>
                    ]
                },
                {
                    key: "1",
                    columns: [
                        <Typography>سوال اول</Typography>,
                        <Chip size="small" label="سیستم عامل"></Chip>
                    ]
                },
                {
                    key: "1",
                    columns: [
                        <Typography>سوال اول</Typography>,
                        <Chip size="small" label="عربی"></Chip>
                    ]
                },
                {
                    key: "1",
                    columns: [
                        <Typography>سوال اول</Typography>,
                        <Chip size="small" label="گسسته"></Chip>
                    ]
                }
            ]}></Table>
        </Stack>

        </Card >

    )
}


export default Similars;