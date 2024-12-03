import React from "react";
import {Divider, ListItemText, Typography} from "@mui/material";

const ResponsibleListItemText: React.FC<{ text1: string, text2: string, displable: boolean }> = ({ text1, text2, displable }) => {
    return (
        displable ? (
            <>
                <Divider orientation="vertical" variant="middle" flexItem/>
                <ListItemText sx={{textAlign: 'center'}}
                    primary={
                        <Typography variant="subtitle1" sx={{ textWrap: "nowrap" }}>
                            {text1}
                        </Typography>
                    }
                    secondary={
                        <Typography variant="subtitle1" fontWeight="bold" sx={{ textWrap: "nowrap" }}>
                            {text2}
                        </Typography>
                    }
                />
            </>
        ) : null
    );
};

export default ResponsibleListItemText;