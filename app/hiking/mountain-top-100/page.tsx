'use client';

import React, { useState } from "react";
import {
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

// 게시글 데이터 타입 정의
interface Post {
    id: number;
    title: string;
    content: string;
    date: string;
}

const Board: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]); // 게시글 목록 상태
    const [open, setOpen] = useState(false); // 다이얼로그 상태
    const [postToView, setPostToView] = useState<Post | null>(null); // 상세보기 게시글
    const [newPost, setNewPost] = useState({ title: "", content: "" }); // 새 게시글 데이터

    // 다이얼로그 열기/닫기
    const handleDialogOpen = () => setOpen(true);
    const handleDialogClose = () => {
        setOpen(false);
        setNewPost({ title: "", content: "" }); // 입력 초기화
    };

    // 게시글 추가
    const handleAddPost = () => {
        if (!newPost.title || !newPost.content) return; // 제목과 내용이 비어있으면 추가하지 않음
        const newPostData: Post = {
            id: posts.length + 1,
            title: newPost.title,
            content: newPost.content,
            date: new Date().toLocaleString(),
        };
        setPosts([newPostData, ...posts]);
        handleDialogClose();
    };

    // 게시글 삭제
    const handleDeletePost = (id: number) => {
        setPosts(posts.filter((post) => post.id !== id));
    };

    // 상세보기 다이얼로그 열기
    const handleViewPost = (post: Post) => {
        setPostToView(post);
        setOpen(true); // 다이얼로그 열기
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 5 }}>
            준비중입니다
        </Container>
    );
};

export default Board;