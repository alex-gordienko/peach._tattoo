import React from "react";
import {
  Typography,
  Box,
  Paper,
  ImageListItem,
  Button,
  useMediaQuery,
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Icon,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTheme } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useTranslation } from "react-i18next";
import Carousel from "../Carousel";
import { resources } from "../../locales/i18n";
import { socialLinks } from "../../constants";

const MainPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const avatarImages = [
    "static/img/avatars/HeadLogo.jpeg",
    "static/img/avatars/photo_2025-07-21 16.18.51.jpeg",
  ];

  const avatarSize = 300; // px
  const [currentAvatar, setCurrentAvatar] = React.useState(0);
  const [fade, setFade] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentAvatar((prev) => (prev + 1) % avatarImages.length);
        setFade(true);
      }, 350);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const renderAccordions = () => {
    const language = i18n.language;
    const accordions = (
      resources[language].translation as {
        accordions: Record<string, { title: string; content: string }>;
      }
    ).accordions;

    return Object.keys(accordions).map((key) => (
      <Grid item xs={12} key={key}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5">{t(`accordions.${key}.title`)}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
              {t(`accordions.${key}.content`)}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    ));
  };

  if (isMdUp) {
    return (
      <Grid container spacing={2} alignItems="stretch">
        <Grid item xs={4}>
          <Paper
            variant="elevation"
            square={false}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box display="flex" flexDirection="row" alignItems="center">
              <Typography variant="h1">Peach._tattoo</Typography>
              <IconButton
                href="https://ig.me/m/peach_.tattoo/"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
              >
                <InstagramIcon sx={{ fontSize: 40 }} />
              </IconButton>
              <IconButton
                href="https://wa.me/4915157952788"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
              >
                <WhatsAppIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Box>
            <Typography>{t("text.headIntro")}</Typography>
            <ImageListItem
              sx={{
                display: "flex",
                justifyContent: "center",
                margin: "20px auto",
              }}
            >
              <img
                src={avatarImages[currentAvatar]}
                alt="Peach Tattoo"
                loading="lazy"
                style={{
                  width: avatarSize * 1.7,
                  height: avatarSize * 1.7,
                  objectFit: "cover",
                  borderRadius: "30%",
                  transition: "opacity 0.35s",
                  opacity: fade ? 1 : 0,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                  background: "#fff",
                }}
              />
            </ImageListItem>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper
            variant="elevation"
            square={false}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Carousel isMobile={false} />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          {renderAccordions()}
        </Grid>
        <Grid item xs={4}>
          <Paper
            variant="elevation"
            square={false}
            sx={{
              padding: 4,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                marginTop: 2,
              }}
            >
              <Typography variant="h4">{t("buttons.bookNow")}:</Typography>
              <IconButton
                href="https://ig.me/m/peach_.tattoo/"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
              >
                <InstagramIcon sx={{ fontSize: 40 }} />
              </IconButton>
              <IconButton
                href="https://wa.me/4915157952788"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
              >
                <WhatsAppIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Box sx={{ padding: 4 }}>
        <Paper
          variant="elevation"
          elevation={16}
          square={false}
          sx={{ padding: 4, maxWidth: 1200, margin: "0 auto" }}
        >
          <Typography
            variant="h1"
            sx={{ textAlign: "center", marginBottom: 5 }}
          >
            Peach._tattoo
          </Typography>
          <Typography variant="h4">{t("text.headIntro")}</Typography>
          <ImageListItem
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "20px auto",
            }}
          >
            <img
              src={avatarImages[currentAvatar]}
              alt="Peach Tattoo"
              loading="lazy"
              style={{
                width: avatarSize,
                height: avatarSize,
                objectFit: "cover",
                borderRadius: "30%",
                transition: "opacity 0.35s",
                opacity: fade ? 1 : 0,
                boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                background: "#fff",
              }}
            />
          </ImageListItem>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              marginTop: 2,
            }}
          >
            <Typography variant="h1">{t("buttons.bookNow")}:</Typography>
            <IconButton
              href={socialLinks.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              <InstagramIcon sx={{ fontSize: 50 }} />
            </IconButton>
            <IconButton
              href={socialLinks.WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              <WhatsAppIcon sx={{ fontSize: 50 }} />
            </IconButton>
          </Box>
        </Paper>
        <Carousel isMobile={true} />
        <Paper>{renderAccordions()}</Paper>
      </Box>
    );
  }
};

export default MainPage;
