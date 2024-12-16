import { Chip } from "@mui/material";
// src/useGlobalFunctions.js
import { useCallback } from 'react';

const DifficultyLevel = Object.freeze({
    MEDIUM: {
        getColor: () => 'orange',
        getText: () => 'متوسط',
        getOrder: () => 2,
        getLabel: () => (
            <Chip label="متوسط" color="warning"/>
        )
    },
    EASY: {
        getColor: () => 'yellow',
        getText: () => 'آسان',
        getOrder: () => 1,
        getLabel: () => (
            <Chip label="آسان" color="success"/>
        )
    },
    HARD: {
        getColor: () => 'red',
        getText: () => 'سخت',
        getOrder: () => 3,
        getLabel: () => (
            <Chip label="سخت" color="secondary" />
        )
    }
});


export const useGlobalFunctions = () => {
    const getDifficultyLevel = useCallback((level) => {
        return Object.values(DifficultyLevel).find(l => l.getOrder() == level)
    }, []);

    return { getDifficultyLevel };
};