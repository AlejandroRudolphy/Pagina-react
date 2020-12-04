import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { useState } from 'react';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1];

export default function Album() {
  const classes = useStyles();

const DrogbaBayern = e => {
    e.preventDefault()
    window.location.replace(`https://www.youtube.com/watch?v=RehvEUebRCo`)
  }
  const VargasEspaña = e => {
    e.preventDefault()
    window.location.replace(`https://www.youtube.com/watch?v=GAL90Lec19A`)
  }
  const TorresBarcelona = e => {
    e.preventDefault()
    window.location.replace(`https://www.youtube.com/watch?v=KVRzE7i3FSw`)
  }
  const SuazoVenezuela = e => {
    e.preventDefault()
    window.location.replace(`https://www.youtube.com/watch?v=tc547-eiNYA`)
  }
  const ChileMexico = e => {
    e.preventDefault()
    window.location.replace(`https://www.youtube.com/watch?v=jQTIp3j9CAk`)
  }
  const BravoArgentina = e => {
    e.preventDefault()
    window.location.replace(`https://www.youtube.com/watch?v=YZg_eA-nnco`)
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Tu album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Lugar donde puedes acceder a tus fotos y recuerdos favoritos
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2012/5/22/1337706809179/Didier-Drogba-scores-in-t-010.jpg?width=700&quality=85&auto=format&fit=max&s=562540fe1347f94bf1e8cfc81a2058f5"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Drogba vs Bayern Munich
                    </Typography>
                    <Typography>
                      Final Champions League 2012
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary"
                      onClick={DrogbaBayern}>
                      Link to
                    </Button>
                  </CardActions>
                </Card>
                
              </Grid>
            ))}
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://lh3.googleusercontent.com/proxy/5LgF6aAqAWzsfjzwpQ_jRKK366Nef5vmuEXDK8AUURboyWeHFp3evU_vg7UZRI-1lfzKh98qOHY8q2jjhn3tlx3-T7vBIYDQQPnxwlFOmqNznWNwhyataZtrPaL0rMLOy30CO_fzYu4ozA33PDMxVMNlQwB7E65wrlVv-g"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Eduardo Vargas vs España 
                    </Typography>
                    <Typography>
                      Mundial Brasil 2014 - Fase de grupos
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary"
                      onClick={VargasEspaña}>
                      Link to
                    </Button>
                  </CardActions>
                </Card>
                
              </Grid>
            ))}
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://img.bleacherreport.net/img/images/photos/001/670/957/143338406_crop_north.jpg?1335308789&w=3072&h=2048"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Fernando Torres vs Barcelona
                    </Typography>
                    <Typography>
                      Semifinal Champions League 2012
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary"
                      onClick={TorresBarcelona}>
                      Link to
                    </Button>
                  </CardActions>
                </Card>
                
              </Grid>
            ))}
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.mediotiempo.com/qF-Gd3qpLM7MGez5VVZFtpMERLQ=/936x566/uploads/media/2016/03/14/chile-gano-con-goles-del.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Humberto Suazo vs Venezuela
                    </Typography>
                    <Typography>
                      Clasificatorias Mundial Sudáfrica 2010
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary"
                    onClick={SuazoVenezuela}>
                     Link to
                    </Button>
                  </CardActions>
                </Card>
                
              </Grid>
            ))}
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://mexico.as.com/mexico/imagenes/2016/06/19/futbol/1466307717_994935_1466313135_noticia_normal.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Chile 7-0 Mexico
                    </Typography>
                    <Typography>
                      Copa América 2016
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary"
                     onClick={ChileMexico}>
                     Link to
                    </Button>
                  </CardActions>
                </Card>
                
              </Grid>
            ))}
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.pinimg.com/originals/72/53/8a/72538a6e5d093772058f07f7e4e85d82.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Claudio Bravo vs Argentina
                    </Typography>
                    <Typography>
                      Final Copa America 2015
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary"
                    onClick={BravoArgentina}>
                     Link to
                    </Button>
                  </CardActions>
                </Card>
                
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
