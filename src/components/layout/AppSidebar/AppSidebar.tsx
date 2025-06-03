import {
  ChartBarIcon,
  ChevronRightIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from 'src/components/ui/Collapsible';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from 'src/components/ui/Sidebar';
import { dashboardRoles } from 'src/constants.ts';
import { cn } from 'src/lib/utils.ts';
import { useAuthStore } from 'src/store/authStore.ts';

const menuItems = [
  {
    title: 'Home',
    path: '/home',
    icon: HomeIcon,
    items: [],
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: Squares2X2Icon,
    items: [],
    roles: dashboardRoles,
  },
  {
    title: 'Store',
    icon: ShoppingBagIcon,
    items: [
      {
        title: 'Products',
        path: '/products',
      },
      {
        title: 'Add Product',
        path: '/add/product',
      },
    ],
  },
  {
    title: 'Analytics',
    icon: ChartBarIcon,
    items: [
      {
        title: 'Traffic',
        path: '/traffic',
      },
      {
        title: 'Earning',
        path: '/earning',
      },
    ],
  },
  {
    title: 'Finances',
    icon: CreditCardIcon,
    items: [
      {
        title: 'Payment',
        path: '/payment',
      },
      {
        title: 'Payout',
        path: '/payout',
      },
    ],
  },
  {
    title: 'Account Settings',
    icon: Cog6ToothIcon,
    items: [
      {
        title: 'My Profile',
        path: '/my-profile',
      },
      {
        title: 'Security',
        path: '/security',
      },
    ],
  },
  {
    title: 'Help And Support',
    icon: QuestionMarkCircleIcon,
    path: '/support',
    items: [],
  },
];

const AppSidebar = () => {
  const { user } = useAuthStore();
  const location = useLocation();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex min-h-12 items-center gap-x-3 overflow-hidden py-3">
          <UserCircleIcon className="h-8 w-8 min-w-8 text-foreground" />
          <span className="text-lg font-semibold text-foreground">
            Bitstore
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {menuItems.map((item) => {
              if (
                item.roles?.length &&
                (!user?.role || !item.roles.includes(user.role))
              ) {
                return null;
              }

              if (item.items?.length) {
                const isGroupActive = item.items.some((subItem) =>
                  location.pathname.toLowerCase().startsWith(subItem.path)
                );

                return (
                  <Collapsible
                    key={item.title}
                    asChild
                    defaultOpen={isGroupActive}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={item.title}>
                          {item.icon && <item.icon />}
                          <span>{item.title}</span>
                          <ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down">
                        <SidebarMenuSub>
                          {item.items?.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <NavLink
                                to={subItem.path}
                                className={({ isActive }) =>
                                  cn(
                                    'flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sm text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground',
                                    {
                                      'bg-sidebar-primary text-sidebar-primary-foreground':
                                        isActive,
                                    }
                                  )
                                }
                              >
                                {subItem.title}
                              </NavLink>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                );
              } else {
                const isActive =
                  item.path &&
                  location.pathname.toLowerCase().startsWith(item.path);

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={cn({
                        'bg-sidebar-primary text-sidebar-primary-foreground drop-shadow-sm':
                          isActive,
                      })}
                      tooltip={item.title}
                    >
                      {item.path ? (
                        <NavLink
                          to={item.path}
                          className={({ isActive }) =>
                            cn('flex', {
                              'bg-sidebar-primary text-sidebar-primary-foreground':
                                isActive,
                            })
                          }
                        >
                          {item.icon && <item.icon height={18} width={18} />}
                          {item.title}
                        </NavLink>
                      ) : (
                        <span>{item.title}</span>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              }
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
