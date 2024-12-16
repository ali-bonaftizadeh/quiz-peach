import { Box, Card, Chip, Typography } from "@mui/material";
import { useGlobalFunctions } from '../GlobalContext';

const SummaryBox = ({ title, category, level }) => {

    const { getDifficultyLevel } = useGlobalFunctions();

    return (
        <Card sx={{
            px: 2,
            py: 1,
        }}>
        <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                cursor: 'pointer',
            }}
            >
            <Typography>{title}</Typography>
            {getDifficultyLevel(level).getLabel()}
        </Box>
        <Box textAlign={"right"} mt={2}>
            <Typography>تعداد حل: ۱۳۶۵</Typography>
            <Typography>تعداد حل درست: ۶۳۴</Typography>
            <Typography>شانس موفقیت: ۵۶ درصد</Typography>
            <br></br>
            <Typography>دسته‌بندی: <Chip label={category}></Chip></Typography>
        </Box>

        </Card >

    )
}

export default SummaryBox;