import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <div>
      <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`https://socio-pedia-be.vercel.app/assets/${image}`}
      />
    </Box>
    </div>
  );
};

export default UserImage;
