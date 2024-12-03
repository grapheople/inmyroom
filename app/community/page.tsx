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
            <Typography variant="h4" gutterBottom textAlign="center">
                화려한 게시판
            </Typography>
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={handleDialogOpen}
                sx={{ mb: 3 }}
            >
                새 게시글 작성
            </Button>

            {/* 게시글 리스트 */}
            <Grid container spacing={3}>
                {posts.length === 0 ? (
                    <Typography
                        variant="body1"
                        color="textSecondary"
                        textAlign="center"
                        sx={{ width: "100%" }}
                    >
                        게시글이 없습니다. 새 게시글을 작성해주세요.
                    </Typography>
                ) : (
                    posts.map((post) => (
                        <Grid item xs={12} sm={6} md={4} key={post.id}>
                            <Card sx={{ boxShadow: 3 }}>
                                <CardHeader
                                    title={post.title}
                                    subheader={post.date}
                                    titleTypographyProps={{ variant: "h6" }}
                                    subheaderTypographyProps={{ variant: "body2", color: "text.secondary" }}
                                />
                                <CardContent>
                                    <Typography variant="body1">{post.content}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        size="small"
                                        color="primary"
                                        onClick={() => handleViewPost(post)} // 상세보기 클릭
                                    >
                                        자세히 보기
                                    </Button>
                                    <IconButton
                                        color="error"
                                        onClick={() => handleDeletePost(post.id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                )}
            </Grid>

            {/* 새 게시글 작성 다이얼로그 */}
            <Dialog open={open && postToView === null} onClose={handleDialogClose}>
                <DialogTitle>새 게시글 작성</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="제목"
                        fullWidth
                        variant="outlined"
                        value={newPost.title}
                        onChange={(e) =>
                            setNewPost((prev) => ({ ...prev, title: e.target.value }))
                        }
                    />
                    <TextField
                        margin="dense"
                        label="내용"
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        value={newPost.content}
                        onChange={(e) =>
                            setNewPost((prev) => ({ ...prev, content: e.target.value }))
                        }
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="secondary">
                        취소
                    </Button>
                    <Button onClick={handleAddPost} color="primary">
                        작성
                    </Button>
                </DialogActions>
            </Dialog>

            {/* 게시글 상세보기 다이얼로그 */}
            <Dialog open={open && postToView !== null} onClose={() => setOpen(false)}>
                <DialogTitle>{postToView?.title}</DialogTitle>
                <DialogContent>
                    <Typography variant="body1" gutterBottom>
                        <strong>내용:</strong>
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {postToView?.content}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} color="primary">
                        닫기
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default Board;