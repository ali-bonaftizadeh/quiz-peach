import { Box, Card, Stack, Typography, Chip } from "@mui/material";
import Table from "./Table";

const Similars = ({ title, rows }) => {
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
                <Table titles={[]}
                    rows={
                        rows.map((item) => ({
                            key: item.id,
                            columns: [
                                <Typography key={item.id}>{item.name}</Typography>,
                                <Chip key={`${item.id}-tag`} size="small" label={item.Tag?.name || 'دسته‌بندی'} />,
                            ],
                        }))
                    }></Table>
            </Stack>

        </Card >

    )
}


export default Similars;