import { Box, Card, Container, Stack, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const list = [
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];

/** Joy UI'dagi standart shrift va ranglar (dizayn bir xil chiqishi uchun) */
const FONT =
  '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
const NEUTRAL_300 = "#CDD7E1";
const CARD_PADDING = "16px";

export default function PopularDishes() {
  return (
    <div className="popular-dishes-frame">
      <Container>
        <Stack className="popular-section">
          <Box className="category-title">Popular Dishes</Box>
          <Stack className="cards-frame">
            {list.map((ele, index) => {
              return (
                <Card
                  key={index}
                  className={"card"}
                  elevation={0}
                  sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    p: CARD_PADDING,
                    pb: 0,
                    borderRadius: "8px",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                    fontFamily: FONT,
                  }}
                >
                  {/* Fon rasmi */}
                  <Box
                    component="img"
                    src={ele.imagePath}
                    alt={ele.productName}
                    sx={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  {/* Qora gradient — rangi home.css dagi .card-cover dan */}
                  <Box
                    className={"card-cover"}
                    sx={{ position: "absolute", inset: 0 }}
                  />

                  {/* Nomi va ko'rishlar soni */}
                  <Stack
                    sx={{
                      position: "relative",
                      zIndex: 1,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: "12px",
                    }}
                  >
                    <Typography
                      component="h2"
                      sx={{
                        fontFamily: FONT,
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      {ele.productName}
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontFamily: FONT,
                        fontSize: "16px",
                        fontWeight: 500,
                        color: NEUTRAL_300,
                      }}
                    >
                      20
                      <VisibilityIcon sx={{ fontSize: 25, ml: "5px" }} />
                    </Typography>
                  </Stack>

                  {/* Pastki qism: chiziq + tavsif */}
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 1,
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      height: "60px",
                      mx: `-${CARD_PADDING}`,
                      px: CARD_PADDING,
                      borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                      color: NEUTRAL_300,
                    }}
                  >
                    <DescriptionOutlinedIcon sx={{ fontSize: 22 }} />
                    <Typography
                      sx={{
                        fontFamily: FONT,
                        fontSize: "16px",
                        color: "inherit",
                      }}
                    >
                      This is delicious meal
                    </Typography>
                  </Box>
                </Card>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
