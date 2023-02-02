import { Box, Grid } from '@mui/material';
import ProductFeatureCard from './ProductFeatureCard';
import { ReactComponent as HLDLogo } from '../../image-3.svg';
export default function ProductFeaturesList() {
  return(
    <Box id="section3" display="flex" alignItems="center" justifyContent="center" mt="16px" ml="96px" mr="96px" pl="24px" pr="24px">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ProductFeatureCard
            FeatureIcon={HLDLogo}
            heading="Boost visitor involvement for greater engagement and satisfaction."
            subHeading="Poplitu allows you to survey visitors, gather their feedback, and present them with content that aligns with their interests, increasing engagement and satisfaction."
          /> 
        </Grid>
        <Grid item xs={6}>
          <ProductFeatureCard
            FeatureIcon={HLDLogo}
            heading="Grow email list by acquiring more subscribers."
            subHeading="Poplitu displayed at the right moment can dramatically increase subscription rate by several times, helping you build a larger email list."
          />
        </Grid>
        <Grid item xs={6}>
          <ProductFeatureCard
            FeatureIcon={HLDLogo}
            heading="Boost leads and sales by capturing more prospects."
            subHeading="Maximize conversion rates by serving visitors relevant offers tailored to their individual behavior, ensuring a personalized experience."
          />
        </Grid>
        <Grid item xs={6}>
          <ProductFeatureCard
            FeatureIcon={HLDLogo}
            heading="Lower shopping cart abandonment by improving the checkout experience."
            subHeading="Prevent shopping cart abandonment by offering irresistible deals, increasing number of completed purchases."
          />
        </Grid>
      </Grid>
    </Box>
  )
}