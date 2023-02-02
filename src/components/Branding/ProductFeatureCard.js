import { Box, Card, CardContent, Typography } from '@mui/material';

export default function ProductFeatureCard({
  FeatureIcon,
  heading,
  subHeading
}) {
  return(
    <Card
      sx={{
        boxShadow: '1px 4px 23px rgba(0, 0, 0, 0.12)',
        borderRadius: '12px',
        display: 'flex',
        padding: '8px',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box display="flex">
          <Box sx={{ flex: '1 0 auto', alignItems: 'center', display: 'flex' }}>
            <FeatureIcon />
          </Box>
          <CardContent sx={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant='h2'
              sx={{
                fontFamily: 'Helvetica',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '24px',
                lineHeight: '28px',
                color: '#5690FF',
                marginBottom: '12px',
                alignItems: 'center',
              }}
            >
              {heading}
            </Typography>
            <Typography
              variant='p'
              sx={{
                fontFamily: 'Helvetica',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '22px',
                color: '#7E7E7E',
              }}
            >
              {subHeading}
            </Typography>
          </CardContent>
        </Box>
      </Box>
    </Card>
  )
}