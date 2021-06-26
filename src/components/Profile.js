import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Michael from '../assets/michael.jpeg';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
 root: {
  display: 'flex',
  '& > *': {
  },
 },
 large: {
  width: theme.spacing(40),
  height: theme.spacing(40),
 },
}));

const SmallAvatar = withStyles((theme) => ({
 root: {
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
 },
}))(Avatar);

function Profile() {
 const classes = useStyles();

 return (<div className="white">
  <Grid
   container
   direction="column"
   alignItems="center"
   justify="center"
   style={{ minHeight: '100vh' }}>

   <Grid item>
    <Badge
     overlap="circle"
     anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
     }}
     badgeContent={<SmallAvatar> <InsertEmoticonIcon /></SmallAvatar>}
    >
     <Avatar alt="Michael Taggart" src={Michael} className={classes.large} />
    </Badge>
   </Grid>

   <Grid item xs={9}>
    <Typography variant="h4" gutterBottom>Michael Taggart</Typography>
    <Typography variant="subtitle1" color="initial">MichaelJHTaggart</Typography>
    <Typography variant="body1" gutterBottom>Striving to make meaningful connections, deep experiences, and help fulfill life.</Typography>
   </Grid>

   <Grid item xs={12}>
    <Button variant="text" color="primary">Edit Profile</Button>
   </Grid>

  </Grid>
 </div >
 )
}

export default Profile
