/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Box, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import bot from "../assets/robo.png";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import Typewriter from 'typewriter-effect';



function Chat({ answer, question, i }) {

    const index = useRef(0);
    const [currentText, setCurrentText] = useState("");
    const text = answer;

    useEffect(() => {
        index.current = 0;
        setCurrentText(text.charAt(0));
    }, [text]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            index.current += 1;
            setCurrentText((value) => value + text.charAt(index.current));

        }, 20);
        return () => {
            clearTimeout(timeoutId);
        }
    }, [currentText, text]);

    return (
        <Box sx={{ marginBottom: "20px" }} key={i++}>
            <Box sx={{ marginBottom: "8px", display: "flex", flexDirection: "row", alignItems: "flex-start" }}>
                <Box sx={{ background: "#5436DA", padding: "6px", borderRadius: "4px", width: "35px", height: "35px" }}>
                    <PersonOutlineIcon sx={{ width: "24px", height: "24px" }} alt="user" />
                </Box>
                <Box sx={{ paddingBottom: "2px" }}>
                    <Typography fontFamily={'serif'} fontSize={19} paddingLeft={2} sx={{ color: "white", paddingY: "3px" }}>
                        {question ? question : "Asked me anything..."}</Typography>
                </Box>
            </Box>
            <Box sx={{ marginBottom: "8px", display: "flex", flexDirection: "row", alignItems: "flex-start", background: "#40414F" }}>
                <Box sx={{ background: "#10a37f", padding: "6px", borderRadius: "4px", width: "35px", height: "35px" }}>
                    <Avatar sx={{ width: "24px", height: "24px" }} src={bot} alt="bot" />
                </Box>
                <Box sx={{ paddingBottom: "2px" }}>
                    <Typography fontFamily={'serif'} fontSize={18} paddingLeft={2} sx={{ color: "white", paddingY: "3px", whiteSpace: "pre-wrap" }}>
                        {/* <Typewriter
                            options={{
                                strings: answer,
                                autoStart: true,
                                skipAddStyles: false,
                                wrapperClassName: "typeWriterText"
                            }}
                        /> */}
                        {answer ? currentText : "Searching..."}
                    </Typography>
                </Box>
            </Box>
        </Box >
    )
}

export default Chat