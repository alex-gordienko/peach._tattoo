import React from "react";
import Box from "@mui/material/Box";
import { ImageList, ImageListItem } from "@mui/material";

const images = [
  "/static/img/illustrations/2025-10-08 21.58.42.jpg",
  "/static/img/illustrations/2025-10-08 21.59.47.jpg",
  "/static/img/illustrations/2025-10-08 22.00.14.jpg",
  "/static/img/illustrations/2025-10-08 22.01.12.jpg",
  "/static/img/illustrations/2025-10-08 22.01.21.jpg",
  "/static/img/illustrations/2025-10-08 22.01.33.jpg",
  "/static/img/illustrations/2025-10-08 22.01.42.jpg",
  "/static/img/illustrations/photo_2025-07-19 19.50.00.jpeg",
  "/static/img/illustrations/photo_2025-07-19 19.50.05.jpeg",
  "/static/img/illustrations/photo_2025-07-19 19.50.09.jpeg",
  "/static/img/illustrations/photo_2025-07-19 19.50.13.jpeg",
  "/static/img/illustrations/photo_2025-07-19 19.50.15.jpeg",
  "/static/img/illustrations/photo_2025-07-19 19.50.17.jpeg",
  "/static/img/illustrations/photo_2025-07-19 19.50.19.jpeg",
  "/static/img/illustrations/photo_2025-07-19 19.50.21.jpeg",
  "/static/img/illustrations/photo_2025-07-19 19.50.23.jpeg",
  "/static/img/illustrations/photo_2025-07-19 19.50.25.jpeg",
  "/static/img/illustrations/photo_2025-07-19 19.50.28.jpeg",
];

const IMAGE_WIDTH = 240;
const GAP = 8;

interface CarouselProps {
  isMobile?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ isMobile }) => {
  if (!isMobile) {
    return (
      <Box
        sx={{
          overflow: "hidden",
          height: "55vh",
        }}
      >
        <ImageList
          variant="masonry"
          cols={3}
          gap={8}
          sx={{ animation: "carousel-scroll 30s linear infinite" }}
        >
          {images.map((item) => (
            <ImageListItem key={item}>
              <img
                srcSet={`${item}?w=${IMAGE_WIDTH}&fit=crop&auto=format&dpr=2 2x`}
                src={`${item}?w=${IMAGE_WIDTH}&fit=crop&auto=format`}
                alt="illustration"
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <style>{`
        @keyframes carousel-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        height: "400px",
        my: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: `${GAP}px`,
          width: "max-content",
          animation: "carousel-scroll 30s linear infinite",
        }}
      >
        {images.map((src, idx) => (
          <Box
            key={idx}
            component="img"
            src={src}
            alt="illustration"
            sx={{
              width: IMAGE_WIDTH,
              height: "auto",
              objectFit: "cover",
              borderRadius: 2,
              boxShadow: 2,
              background: "#eee",
            }}
          />
        ))}
      </Box>
      <style>{`
        @keyframes carousel-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </Box>
  );
};

export default Carousel;
