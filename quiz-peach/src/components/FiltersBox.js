import { Box, Card, Stack, Typography, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from "@emotion/react";

const FiltersBox = ({ title, options }) => {
    const theme = useTheme();
    return (
        <Card>
        <Accordion disableGutters>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                    minHeight: 'initial'
                }}
            >
                <Box sx={{
                    display: 'flex',
                    cursor: 'pointer',
                }}
                >
                    <Typography>{title}</Typography>
                </Box>
            </AccordionSummary>
            <AccordionDetails sx={{
                borderTop: `0.1rem solid ${theme.palette.borderColor.main}`,
            }}>
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
                                    <FormControlLabel key={option} sx={{ m: 0 }} control={<Checkbox />} label={option} />
                                )
                            })
                        }
                    </FormGroup>
                </Box>
            </AccordionDetails>
        </Accordion>
        </Card>

    )
}


export default FiltersBox;