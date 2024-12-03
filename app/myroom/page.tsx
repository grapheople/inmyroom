"use client"

import React, {useRef, useState} from "react";
import {Box, Button} from "@mui/material";
import {styled} from '@mui/material/styles';
import {Cropper, ReactCropperElement} from "react-cropper";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import "cropperjs/dist/cropper.css";
import {Grid} from "@mui/system";


class AddedImage {
    id: number;
    url: string;
    blob: Blob;

    constructor(id: number, url: string, blob: Blob) {
        this.id = id;
        this.url = url;
        this.blob = blob;
    }
}

const ImageCropper: React.FC = () => {
    const cropperRef = useRef<ReactCropperElement>(null);
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const [idIndex, setIdIndex] = useState<number>(1);

    const [addedImageList, setAddedImageList] = useState<AddedImage[]>([]);

    // 파일 업로드 핸들러
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setUploadedImage(reader.result as string); // Base64로 변환한 이미지를 설정
            };
            reader.readAsDataURL(file);
        }
    };

    // 크롭 및 WebP 변환 핸들러
    const handleCrop = () => {
        const cropper = cropperRef.current?.cropper;
        if (cropper) {
            // 1080x1080 크롭
            const canvas = cropper.getCroppedCanvas({
                width: 1080,
                height: 1080,
            });

            // WebP 포맷으로 변환
            canvas.toBlob(
                (blob: Blob | null) => {
                    if (blob) {
                        const webpUrl = URL.createObjectURL(blob);
                        const addedImage = new AddedImage(idIndex, webpUrl, blob);
                        setAddedImageList([...addedImageList, addedImage]);
                        setIdIndex(idIndex + 1);
                        setUploadedImage(null);
                    }
                },
                "image/webp",
                0.8 // 압축 품질 (0.0 ~ 1.0)
            );
        }
    };

    const VisuallyHiddenInput = styled('input')({
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    return (
        <Box sx={{textAlign: "center", maxWidth: 600, margin: "auto"}}>
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                sx={{
                    width: 100,  // 정사각형 크기
                    height: 100, // 정사각형 크기
                    padding: 0,  // 패딩 없애기
                    minWidth: 0, // 최소 너비 0
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "primary.main", // 배경 색상
                    "&:hover": {
                        backgroundColor: "primary.dark", // 호버 시 색상 변경
                    }
                }}
            >
                <AddPhotoAlternateIcon sx={{fontSize: 60, color: "white"}}/>
                <VisuallyHiddenInput
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    multiple
                />
            </Button>

            {/* 이미지 크롭 UI */}
            {uploadedImage && (
                <Box>
                    <Cropper
                        src={uploadedImage}
                        style={{height: 400, width: "100%"}}
                        initialAspectRatio={1}
                        aspectRatio={1}
                        guides={true}
                        ref={cropperRef}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleCrop}
                        sx={{marginTop: 2}}
                    >
                        Crop & Convert to WebP
                    </Button>
                </Box>
            )}


            {/* 크롭된 이미지 미리보기 */}
            {addedImageList && (
                <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={{xs: 1, md: 1}} columns={{xs: 4, sm: 8, md: 12}}>
                        {
                            addedImageList.map((addedImage, index) => (
                                <Grid key={index} size={{xs: 2, sm: 4, md: 4}}>
                                    <img
                                        src={addedImage.url}
                                        alt="Cropped Preview"
                                        style={{width: "100%", height: "auto"}}
                                    />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            )}
        </Box>
    );
};

export default ImageCropper;