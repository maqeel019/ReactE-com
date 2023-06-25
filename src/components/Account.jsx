import React, { useState } from 'react';

export default function Account() {
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  let heading = null;

  if (selectedItem === '' || selectedItem === 'Dashboard') {
    heading = <h4>Hello ! 
      From your ecommerce dashboard you can views your Details
    </h4>;
  } else if (selectedItem === 'Orders') {
    heading = <h4>Orders Section</h4>;
  } else if (selectedItem === 'Address') {
    heading = <h4>Address Section</h4>;
  } else if (selectedItem === 'Details') {
    heading = <h4>Details Section</h4>;
  } else if (selectedItem === 'Download') {
    heading = <h4>Download Section</h4>;
  } else if (selectedItem === 'Logout') {
    heading = <h4>Logout Section</h4>;
  }

  return (
    <div>
      <header className='headerSectionAccount'>
        
      </header>
      <div className="sectionAccount">
        <aside>
          <ul>
            <li onClick={() => handleItemClick('Dashboard')}>Dashboard</li>
            <li onClick={() => handleItemClick('Orders')}>
               Orders
            </li>
            <li onClick={() => handleItemClick('Address')}>
              Address
            </li>
            <li onClick={() => handleItemClick('Details')}>
              Details
            </li>
            <li onClick={() => handleItemClick('Download')}>
              Download
            </li>
            <li onClick={() => handleItemClick('Logout')}>
              Logout
            </li>
          </ul>
        </aside>
        <aside>
        {heading}
        </aside>
        
      </div>
    </div>
  );
}
