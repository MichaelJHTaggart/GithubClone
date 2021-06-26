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
    setOutput(res.data.items)
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
     fullWidth
     required
    />
   </form>

   <div>

    {output[0].full_name}
    {output[1].full_name}
    {output[2].full_name}
    {output[3].full_name}
   </div>
  </div>
 )
}

export default SearchBar