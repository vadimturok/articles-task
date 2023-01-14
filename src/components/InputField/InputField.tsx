import React, {ChangeEvent, FC} from 'react';
import styles from "../../pages/Home/home.module.scss";
import {InputAdornment, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useWindowSize} from "../../hooks";

type InputFieldProps = {
    keyword: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: FC<InputFieldProps> = ({keyword, onChange}) => {
    const [width] = useWindowSize()
    return (
        <div className={styles.form}>
            <div className={styles.title}>Filter by keywords</div>
            <TextField
                value={keyword}
                onChange={onChange}
                className={styles.input}
                id="outlined-start-adornment"
                sx={{ m: 1,
                    width: width > 650 ? '50ch' : '30ch',
                    margin: '0',
                    boxShadow: 3,
                    borderRadius: '5px',
                }}
                size={'small'}
                InputProps={{
                    startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
                }}
            />
        </div>
    );
};

export default InputField;