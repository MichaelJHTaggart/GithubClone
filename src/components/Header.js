import React, { useState } from 'react'
import Badge from '@material-ui/core/Badge';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import MenuBookIcon from '@material-ui/icons/MenuBook';
import BookIcon from '@material-ui/icons/Book';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

export default function Header() {
 const [value, setValue] = useState(1);

 const handleChange = (event, newValue) => {
  setValue(newValue);
 };

 return (
  <div className="white">
   <Paper square>
    <Tabs
     value={value}
     indicatorColor="primary"
     textColor="primary"
     onChange={handleChange}
     aria-label="disabled tabs example"
    >
     <Tab icon={<MenuBookIcon />} label="Overview" />
     <Badge
      overlap="circle"
      badgeContent={25}
      color="primary"
      anchorOrigin={{
       vertical: 'top',
       horizontal: 'right',
      }}
     >
      <Tab icon={<BookIcon />} label="Repositories" />
     </Badge>
     <Tab icon={<AccountTreeIcon />} label="Projects" />
     <Tab icon={<LocalShippingIcon />} label="Packages" />
    </Tabs>
   </Paper>
  </div >
 );
}