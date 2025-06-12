import { AppBar, Toolbar, Typography, Container, Box, Grid, Card, CardContent, List, ListItem, ListItemText } from '@mui/material'

const references = [
  {
    name: 'Budapest Transport App',
    stack: 'React Native, Node.js, MongoDB',
    summary: 'Mobile app for public transport schedules and ticketing.'
  },
  {
    name: 'Danube Analytics',
    stack: 'React, Django, PostgreSQL',
    summary: 'Web platform providing analytics dashboards for river logistics.'
  },
  {
    name: 'PannonShop',
    stack: 'Next.js, Express, MySQL',
    summary: 'Custom e-commerce solution for local retailers.'
  }
]

const colleagues = [
  { name: 'Gábor Kovács', role: 'CEO' },
  { name: 'Eszter Szabó', role: 'Lead Developer' },
  { name: 'Balázs Tóth', role: 'UI/UX Designer' },
  { name: 'László Németh', role: 'Mobile Developer' }
]

function App() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Codius
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography paragraph>
          Codius is a Budapest-based tech company specializing in custom web and mobile application development. We help clients transform ideas into scalable solutions using modern technologies.
        </Typography>

        <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
          References
        </Typography>
        <Grid container spacing={2}>
          {references.map((ref) => (
            <Grid item xs={12} md={4} key={ref.name}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6">{ref.name}</Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {ref.stack}
                  </Typography>
                  <Typography variant="body2">{ref.summary}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
          Team
        </Typography>
        <List>
          {colleagues.map((c) => (
            <ListItem key={c.name} disablePadding>
              <ListItemText primary={c.name} secondary={c.role} />
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  )
}

export default App
