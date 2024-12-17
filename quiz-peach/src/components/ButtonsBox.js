import React from 'react';
import { Button, Accordion, AccordionSummary, AccordionDetails, Card } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@emotion/react';

const ButtonsBox = ({ title, options, onClick }) => {
    const theme = useTheme();

    return (
        <Card>
            <Accordion disableGutters>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    {title}
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        borderTop: `0.1rem solid ${theme.palette.borderColor?.main || theme.palette.divider}`,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                    }}
                >
                    {options.map((option) => (
                        <Button
                            key={option}
                            onClick={() => onClick(option)} // Trigger onClick with the option
                            variant="text"
                            sx={{
                                textTransform: 'none',
                                justifyContent: 'flex-start',
                                color: theme.palette.primary.light,
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
