import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Link } from '@material-ui/core';
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
 const [name, setName] = useState([])
 const [url, setUrl] = useState([])
 const [description, setDescription] = useState([])
 const [language, setLanguage] = useState([])

 const openNewTab = (url) => {
  const win = window.open(`${url}`);
  win.focus();
 }

 const handleSubmit = (e) => {
  e.preventDefault()

  if (search) {
   axios.get(`https://api.github.com/search/repositories?q=${search}`).then((res) => {
    let array = res.data.items
    let repositoryName = []
    let repositoryUrl = []
    array.map((el, index) => { return repositoryName.push((array[index].full_name)) })
    setName(repositoryName)
    array.map((el, index) => { return repositoryUrl.push((array[index].svn_url)) })
    setUrl(repositoryUrl)
    array.map((el, index) => { return description.push((array[index].description)) })
    setDescription(description)
    array.map((el, index) => { return language.push((array[index].language)) })
    setLanguage(language)
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
    {name.map((repository, index) => {
     return (
      <Grid item xs={12}>
       <Paper>
        <Link onClick={() => openNewTab(`${url[index]}`)} aria-label="Open this repository">
         <Typography variant="h5" color="primary">{repository}</Typography>
        </Link>
        <Typography variant="subtitle1" display="block" gutterBottom>Description: {description[index]}</Typography>
        <Typography variant="caption" display="block" gutterBottom>Coding Language: {language[index]}</Typography>
       </Paper>
      </Grid>
     )
    })}
   </div>
  </div>
 )
}

export default SearchBar