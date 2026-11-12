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
  "/static/img/illustrations/photo_2025-07-19 19.50.15.jpeg",
  "/static/img/illustrations/photo_2025-07-19 19.50.17.jpeg",
  "/static/img/illustrations/photo_2025-07-19 19.50.19.jpeg",
  "/static/img/illustrations/photo_2025-07-19 19.50.21.jpeg",
  "/static/img/illustrations/photo_2025-07-19 19.50.23.jpeg",
  "/static/img/illustrations/photo_2025-07-19 19.50.25.jpeg",
  "/static/img/illustrations/2026-10-08 22.01.42.jpg",
  "/static/img/illustrations/photo_2026-07-19 19.50.00.jpg",
  "/static/img/illustrations/photo_2026-07-19 19.50.17.jpg",
  "/static/img/illustrations/photo_2026-07-19 19.50.21.jpg",
  "/static/img/illustrations/photo_2026-07-19 19.50.23.jpg",
  "/static/img/illustrations/photo_2026-07-19 19.50.25.jpg",
];

const IMAGE_WIDTH = 240;
const GAP = 8;
const SPEED = 40; // px per second
const IDLE_MS = 60_000;
const USER_EVENTS = ["wheel", "touchstart", "touchmove", "pointerdown", "keydown"];

interface CarouselProps {
  isMobile?: boolean;
}

// Auto-scrolls a native scroll container; any user input pauses it for IDLE_MS.
const useAutoScroll = (axis: "x" | "y") => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prop = axis === "x" ? "scrollLeft" : "scrollTop";
    let pausedUntil = 0;
    let paused = false;
    let last = performance.now();
    let pos = el[prop]; // float: browsers round scrollTop, so slow steps would be lost
    let frame = requestAnimationFrame(function tick(now) {
      const dt = Math.min(now - last, 100); // a background tab must not cause a jump
      last = now;
      if (now < pausedUntil) {
        paused = true;
      } else {
        if (paused) pos = el[prop]; // continue from where the user left it
        paused = false;
        const max =
          axis === "x"
            ? el.scrollWidth - el.clientWidth
            : el.scrollHeight - el.clientHeight;
        pos = pos >= max ? 0 : pos + (SPEED * dt) / 1000;
        el[prop] = pos;
      }
      frame = requestAnimationFrame(tick);
    });
    const pause = () => {
      pausedUntil = performance.now() + IDLE_MS;
    };
    USER_EVENTS.forEach((e) => el.addEventListener(e, pause, { passive: true }));

    return () => {
      cancelAnimationFrame(frame);
      USER_EVENTS.forEach((e) => el.removeEventListener(e, pause));
    };
  }, [axis]);

  return ref;
};

const Carousel: React.FC<CarouselProps> = ({ isMobile }) => {
  const ref = useAutoScroll(isMobile ? "x" : "y");

  if (!isMobile) {
    return (
      <Box
        ref={ref}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
          height: "55vh",
        }}
      >
        <ImageList variant="masonry" cols={3} gap={8} sx={{ m: 0 }}>
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
      </Box>
    );
  }

  return (
    <Box
      ref={ref}
      sx={{
        width: "100%",
        overflowX: "auto",
        overflowY: "hidden",
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
    </Box>
  );
};

export default Carousel;
