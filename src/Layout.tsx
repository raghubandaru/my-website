import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          backgroundColor: '#4285F4',
          zIndex: 9999,
        }}
      />
      <Outlet />
    </>
  );
}
