import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles({
 field: {
  marginTop: 20,
  marginBottom: 20,
  display: 'block'
 }
})

const SearchBar = () => {
 const classes = useStyles();
 const [search, setSearch] = useState('')
 const [output, setOutput] = useState([])

 const handleSubmit = (e) => {
  e.preventDefault()

  if (search) {
   axios.get(`https://api.github.com/search/repositories?q=${search}`).then((res) => {
    let array = res.data.items
    let newArray = []
    array.forEach((el, index) => { newArray.push((array[index].full_name)) })
    setOutput(newArray)
   }
   )
  }
 }

 return (
  <div className="white">
   <form
    noValidate
    autoComplete="off"
    onSubmit={handleSubmit}
   >
    <TextField
     onChange={e => setSearch(e.target.value)}
     className={classes.field}
     label="Search for a repository..."
     color="primary"
     variant="outlined"
     fullWidth
     required
    />
   </form>

   <div>
    {output.map((repository) => {
     return (
      <Grid item xs={9}>
       <Paper>
        <Typography variant="h5" color="primary">{repository}</Typography>
       </Paper>
      </Grid>
     )
    })}
   </div>

  </div>
 )
}

export default SearchBar