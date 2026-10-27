import { Box, Card, CardContent, Container, Stack, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const list = [
    { productName: "Lavash", imagePath: "/img/lavash.webp" },
    { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
    { productName: "Kebab", imagePath: "/img/kebab.webp" },
    { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];

export default function PopularDishes() {
    return (
        <div className="popular-dishes-frame">
            <Container>
                <Stack className="popular-section">
                    <Box className="category-title">Popular Dishes</Box>
                    <Stack className="cards-frame">
                        {list.length !== 0 ? (
                            list.map((ele, index) => {
                                return (
                                    <Card
                                        key={index}
                                        className="card"
                                        sx={{
                                            position: "relative",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "flex-end",
                                            borderRadius: "8px",
                                            overflow: "hidden",
                                        }}
                                    >
                                        {/* Rasm (CardCover o'rniga) */}
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

                                        {/* Qoraytiruvchi qatlam (ikkinchi CardCover o'rniga) */}
                                        <Box
                                            className="card-cover"
                                            sx={{ position: "absolute", inset: 0 }}
                                        />

                                        {/* Nom va ko'rishlar soni (CardContent) */}
                                        <CardContent
                                            sx={{
                                                position: "relative",
                                                zIndex: 1,
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "flex-end",
                                                flex: 1,
                                            }}
                                        >
                                            <Stack
                                                direction="row"
                                                sx={{
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <Typography
                                                    component="h2"
                                                    sx={{
                                                        fontSize: "18px",
                                                        fontWeight: 700,
                                                        color: "#fff",
                                                        mb: 1,
                                                    }}
                                                >
                                                    {ele.productName}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontWeight: 500,
                                                        color: "#CDD7E1",
                                                        alignItems: "center",
                                                        display: "flex",
                                                    }}
                                                >
                                                    20
                                                    <VisibilityIcon
                                                        sx={{ fontSize: 25, marginLeft: "5px" }}
                                                    />
                                                </Typography>
                                            </Stack>
                                        </CardContent>

                                        {/* Pastki qism (CardOverflow o'rniga) */}
                                        <Box
                                            sx={{
                                                position: "relative",
                                                zIndex: 1,
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 1.5,
                                                py: 1.5,
                                                px: 2,
                                                height: "60px",
                                                flexShrink: 0,
                                                borderTop: "1px solid #CDD7E1",
                                                backgroundColor: "#fff",
                                                color: "#9FA6AD",
                                            }}
                                        >
                                            <DescriptionOutlinedIcon />
                                            <Typography sx={{ color: "inherit" }}>
                                                This is delicious meal
                                            </Typography>
                                        </Box>
                                    </Card>
                                );
                            })
                        ) : (
                            <Box className="no-data">Popular products are not available!</Box>
                        )}
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}
