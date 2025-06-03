import { Outlet } from 'react-router-dom';
import { SidebarProvider } from 'src/components/ui/Sidebar';

import AppSidebar from '../AppSidebar';
import Header from '../Header';

const AuthenticatedLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto bg-background p-8">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AuthenticatedLayout;
