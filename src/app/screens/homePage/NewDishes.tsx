import { Box, Card, Container, Stack, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Divider from "../../components/divider";

const newDishes = [
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
];

export default function NewDishes() {
  return (
    <div className="new-products-frame">
      <Container>
        <Stack className="main">
          <Box className="category-title">Fresh Menu</Box>
          <Stack className="cards-frame">
            {newDishes.length !== 0 ? (
              newDishes.map((ele, index) => {
                return (
                  <Card
                    key={index}
                    variant="outlined"
                    className="card"
                    sx={{
                      borderRadius: "8px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Rasm qismi: kartochkadagi bo'sh joyni egallaydi */}
                    <Box sx={{ position: "relative", flex: 1, minHeight: 0 }}>
                      <div className="product-sale">Normal size</div>
                      <Box
                        component="img"
                        src={ele.imagePath}
                        alt={ele.productName}
                        sx={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>

                    {/* Pastki qism: balandligi CSS'da belgilanadi */}
                    <Box className="product-detail">
                      <Stack className="info">
                        <Stack direction="row" sx={{ alignItems: "center" }}>
                          <Typography className="title">
                            {ele.productName}
                          </Typography>
                          <Divider width="2" height="24" bg="#d9d9d9" />
                          <Typography className="price">$12</Typography>
                        </Stack>
                        <Stack>
                          <Typography
                            className="views"
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            20
                            <VisibilityIcon
                              sx={{ fontSize: 20, marginLeft: "5px" }}
                            />
                          </Typography>
                        </Stack>
                      </Stack>
                    </Box>
                  </Card>
                );
              })
            ) : (
              <Box className="no-data">New products are not available!</Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
