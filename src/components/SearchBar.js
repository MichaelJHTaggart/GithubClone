import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
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
    setOutput(res)
    console.log(output)
   })
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
     fullwidth
     required
    />
   </form>

   <div>
    <p>Search results</p>
   </div>
  </div>
 )
}

export default SearchBar