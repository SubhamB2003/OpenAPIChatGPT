import { Box, TextField, Typography, useMediaQuery } from '@mui/material';
import { Send } from '@mui/icons-material';
import React, { useState } from 'react';
import axios from "axios";
import '../App.css';
import Chat from './Chat';
import CircularProgress from '@mui/material/CircularProgress';



function ChatPage() {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);
    const isNonMobileView = useMediaQuery("(min-width:1000px)");

    const handlePost = async (e) => {
        e.preventDefault();
        setLoading(true);
        const res = await axios.post("http://localhost:3020/", {
            question
        });
        setAnswer(res.data);
        setLoading(false);
    }

    return (
        <Box marginX={isNonMobileView ? 20 : 5} color="white">
            <Box marginTop={4}>
                <Typography fontSize={40} sx={{ textAlign: "center", fontFamily: "Lobster", color: "yellow" }}>AI is here 🤖</Typography>
                <Box display="flex" justifyContent="center">
                    {loading && <CircularProgress size={25} />}
                </Box>
            </Box>
            <Box display="flex" flexDirection="column" marginTop={3}>
                <Box height="70vh" sx={{
                    overflowY: "scroll",
                    scrollBehavior: "smooth",
                    "::-webkit-scrollbar": {
                        display: "none"
                    },
                }}>
                    <Chat answer={answer} question={question} key={0} />
                </Box>

                <Box sx={{ background: "#40414f", borderRadius: "6px" }}>
                    <Box display="flex" justifyContent="space-betweens" padding={1} alignItems="center">
                        <TextField sx={{
                            width: "100%",
                        }} id="standard-basic" variant="standard"
                            onChange={(e) => setQuestion(e.target.value)}
                            value={question}
                        />
                        <Send onClick={handlePost} />
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}


export default ChatPage;