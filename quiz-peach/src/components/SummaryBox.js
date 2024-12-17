import { Box, Card, Chip, Typography } from "@mui/material";
import { useGlobalFunctions } from '../GlobalContext';

const SummaryBox = ({ title, category, level }) => {

    const { getDifficultyLevel } = useGlobalFunctions();

    const difficultyLabel = getDifficultyLevel(level)?.getLabel?.() || 'Unknown Level';

    return (
        <Card sx={{
            px: 2,
            py: 1,
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                cursor: 'pointer',
            }}>
                <Typography>{title}</Typography>
                <Typography>{difficultyLabel}</Typography>
            </Box>
            <Box textAlign={"right"} mt={2}>
                <Typography>تعداد حل: ۱۳۶۵</Typography>
                <Typography>تعداد حل درست: ۶۳۴</Typography>
                <Typography>شانس موفقیت: ۵۶ درصد</Typography>
                <br />
                <Typography>دسته‌بندی: <Chip label={category} /></Typography>
            </Box>
        </Card>
    )
}

export default SummaryBox;