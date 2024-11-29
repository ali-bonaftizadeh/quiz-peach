import { Typography } from "@mui/material";

const Label = ({value}) => {
    return(
        <Typography variant="caption" sx={{bgcolor: '#eee', borderRadius: '1rem', paddingX:'.8rem', paddingY:'0.2rem'}} width={'fit-content'}>{value}</Typography>
    )
}


export default Label;