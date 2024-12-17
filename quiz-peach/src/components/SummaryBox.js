import { Box, Card, Chip, Typography } from "@mui/material";
import { useGlobalFunctions } from "../GlobalContext";

const SummaryBox = ({ title, category, level, answerCount, correctAnswerCount }) => {
  const { getDifficultyLevel } = useGlobalFunctions();

  // Safely handle undefined difficulty level
  const difficultyLabel = getDifficultyLevel(level)?.getLabel?.() || "Unknown Level";

  // Calculate success rate safely
  const successRate =
    answerCount && correctAnswerCount
      ? ((correctAnswerCount / answerCount) * 100).toFixed(0)
      : 0;

  return (
    <Card
      sx={{
        px: 2,
        py: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        <Typography>{title}</Typography>
        <Typography>{difficultyLabel}</Typography>
      </Box>
      <Box textAlign={"right"} mt={2}>
        <Typography>تعداد حل: {answerCount}</Typography>
        <Typography>تعداد حل درست: {correctAnswerCount}</Typography>
        <Typography>شانس موفقیت: {successRate} درصد</Typography>
        <br />
        <Typography>
          دسته‌بندی: <Chip label={category || "No Category"} />
        </Typography>
      </Box>
    </Card>
  );
};

export default SummaryBox;