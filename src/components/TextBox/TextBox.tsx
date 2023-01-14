import React, {FC} from 'react';
import {isYellow} from "../../utils";

type TextBoxProps = {
    text: string;
    keyword: string;
    isDescription?: boolean;
}

const TextBox: FC<TextBoxProps> = ({text, keyword, isDescription}) => {
    const textArray = text.split(' ')
    return (
        <div>
            {textArray.map((word, idx) => <span key={idx}>
                <span style={{backgroundColor: isYellow(word, keyword) ? '#FFF96E' : ''}}>{word}</span>
                <span>{(textArray.length === idx+1 && isDescription) ? '...' : ' '}</span>
            </span>)
            }
        </div>
    );
};

export default TextBox;