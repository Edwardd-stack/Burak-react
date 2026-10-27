import { Box, Card, Container, Stack, Typography } from "@mui/material";

const activeUsers = [
  { memberNick: "Martin", memberImage: "/img/martin.webp" },
  { memberNick: "Justin", memberImage: "/img/justin.webp" },
  { memberNick: "Rose", memberImage: "/img/rose.webp" },
  { memberNick: "Nusret", memberImage: "/img/nusret.webp" },
];

export default function ActiveUsers() {
  return (
    <div className="active-users-frame">
      <Container>
        <Stack className="main">
          <Box className="category-title">Active Users</Box>
          <Stack className="cards-frame">
            {activeUsers.length !== 0 ? (
              activeUsers.map((ele, index) => {
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
                      <Box
                        component="img"
                        src={ele.memberImage}
                        alt={ele.memberNick}
                        sx={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>

                    {/* Pastki qism: balandligi CSS'da belgilanadi */}
                    <Box className="member-detail">
                      <Stack className="info">
                        <Stack direction="row" sx={{ alignItems: "center" }}>
                          <Typography className="member-nickname">
                            {ele.memberNick}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Box>
                  </Card>
                );
              })
            ) : (
              <Box className="no-data">No Active Users!</Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
