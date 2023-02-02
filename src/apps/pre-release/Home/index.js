import { Box, Typography } from "@mui/material";
import MainSection from "../../../components/Branding/MainSection";
import ProductFeaturesList from "../../../components/Branding/ProductFeaturesList";
import Header from "../../../components/Header/Header";

export default function Home(){
  return (
    <Box>
      <Header />
      <Typography sx={{ padding: '16px' }} />
      <MainSection />
      <Typography sx={{ padding: '16px' }} />
      <ProductFeaturesList />
    </Box>
  )
}