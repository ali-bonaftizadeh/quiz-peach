import { Box, Card, Stack, Typography, FormGroup, FormControlLabel, Checkbox, Button } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from "@emotion/react";

const ButtonsBox = ({ title, options }) => {
    const theme = useTheme();
    return (
        <Card>
            <Accordion disableGutters>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    {title}
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        borderTop: `0.1rem solid ${theme.palette.borderColor?.main || theme.palette.divider}`, // Fallback to divider
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem", // Spacing between buttons
                    }}
                >
                    {options.map((option) => (
                        <Button
                            key={option}
                            variant="text"
                            sx={{
                                textTransform: "none", // Optional: disable uppercase text
                                justifyContent: "flex-start", // Align text to the right
                                // backgroundColor: theme.palette.primary.main,
                                color: theme.palette.primary.light,
                                // "&:hover": {
                                    // backgroundColor: theme.palette.primary.dark,
                                // },
                            }}
                        >
                            {option}
                        </Button>
                    ))}
                </AccordionDetails>
            </Accordion>
        </Card>
    );
};


export default ButtonsBox;
