// components/Layout.js

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen ">
      {/* Sidebar */}

      {/* Main content area */}
      <main className="flex-1 ">
        {/* Admin dashboard content */}
        {children}
      </main>
    </div>
  );
};

export default Layout;
