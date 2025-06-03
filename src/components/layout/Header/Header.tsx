import {
  ArrowLeftStartOnRectangleIcon,
  BellIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  Squares2X2Icon,
  SunIcon,
} from '@heroicons/react/24/outline';
import Button from 'src/components/ui/Button';
import { InputBase } from 'src/components/ui/Input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'src/components/ui/Select';
import { SidebarTrigger } from 'src/components/ui/Sidebar';
import { useAuthStore } from 'src/store/authStore.ts';
import { useThemeStore } from 'src/store/themeStore.ts';

const Header = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();
  const { user, logout, isLogoutPending } = useAuthStore();

  return (
    <header className="flex items-center justify-between px-8 py-4">
      <form className="flex w-1/2 max-w-md items-center gap-2">
        <SidebarTrigger />
        <InputBase
          placeholder="Search"
          iconPlacement="end"
          Icon={MagnifyingGlassIcon}
        />
        <Button size="lg" type="submit">
          Search
        </Button>
      </form>

      <div className="flex items-center gap-4">
        {user?.role && (
          <Select defaultValue={user.role}>
            <SelectTrigger aria-readonly className="h-10 w-24 capitalize">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-card" side="top">
              {[user.role].map((role) => (
                <SelectItem className="capitalize" key={role} value={role}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
        <Button variant="ghost" size="icon">
          <Squares2X2Icon className="size-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <BellIcon className="size-6" />
        </Button>
        <Button
          onClick={toggleTheme}
          variant="ghost"
          size="icon"
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <SunIcon className="size-6" />
          ) : (
            <MoonIcon className="size-6" />
          )}
        </Button>
        <Button
          isPending={isLogoutPending}
          variant="ghost"
          size="icon"
          onClick={logout}
        >
          <ArrowLeftStartOnRectangleIcon className="size-6" />
        </Button>
        <img
          src={user?.image}
          alt="avatar"
          className="h-10 w-10 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
