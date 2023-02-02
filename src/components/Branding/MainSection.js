import { Box, Grid, Typography } from '@mui/material';
import { ReactComponent as Branding } from '../../branding-1.svg';

export default function MainSection() {
  return(
    <>
      <Box id="section1" mt="8px" ml="96px" mr="96px" pl="24px" pr="24px">
        <Grid container spacing={4}>
          <Grid item xs={5}>
            <Box mt="96px">
              <Typography
                variant='h2'
                component='h2'
                sx={{
                  color: '#5690FF',
                  fontFamily: 'Baloo',
                  fontStyle: 'normal',
                  fontWeight: '800',
                  fontSize: '58px',
                  lineHeight: '61px',
                }}
              >
                Maximize conversion rates by effectively engaging with potential customers.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Branding />
          </Grid>
        </Grid>
      </Box>
      <Typography sx={{ padding: '16px' }} />
      <Box id="section2" mt="16px" ml="96px" mr="96px" alignItems="center" justifyContent="center" display="flex" flexDirection="column" pl="24px" pr="24px">
        <Typography
          variant='h3'
          component='h3'
          sx={{
            fontFamily: 'Helvetica',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '32px',
            lineHeight: '48px',
            textAlign: 'center',
            color: '#4B4B4B',
            marginBottom: '8px',
            width: '651px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Here's what Poplitu can do for you
        </Typography>
        <Typography
          variant='p'
          component='p'
          sx={{
            fontFamily: 'Helvetica',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '18px',
            lineHeight: '30px',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#4B4B4B',
            width: '600px',
          }}
        >
          Poplitu is the solution for all your customer engagement needs. Our innovative platform is designed to help businesses like yours connect with their target audience and turn visitors into loyal customers. With Poplitu, you can easily create personalized experiences that drive engagement, increase conversions, and build lasting relationships with your customers. Whether you're looking to increase website traffic, boost sales, or improve customer satisfaction, Poplitu has the tools and features you need to succeed. So why wait? Sign up for Poplitu today and start unlocking the full potential of your customer engagement strategy!
        </Typography>
      </Box>
    </>
  )
}