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
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    {title}
                </AccordionSummary>
                <AccordionDetails sx={{
                    borderTop: `0.1rem solid ${theme.palette.borderColor.main}`,
                }}>
                    <FormGroup>
                        {
                            options.map(option => {
                                const checkBoxComponent = <Checkbox />
                                return (
                        <FormControlLabel color={theme.palette.borderColor.main} label = { option } key={option} control={ checkBoxComponent }/>
                                )
                            })
                        }
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
        </Card>

    )
}


export default FiltersBox;