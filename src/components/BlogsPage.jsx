import React from 'react';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import MyProfile from './MyProfile';
import Blogs from './Blogs';
function BlogsPage() {
  return (

    <body className="my-brand">
      <header>
           <DesktopMenu />
          <MobileMenu />
      </header>
        <main className="main-section">
      
          <Blogs />
          <MyProfile />
        </main>
    </body>

  );
}

export default BlogsPage;