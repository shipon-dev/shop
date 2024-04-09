import {
  Home,
  Menu,
  Info,
  LucideIcon,
  MoonStar,
  Sun,
  User,
  BarChart,
  Bell,
  LogOut,
  Eye,
  EyeOff,
} from 'lucide-react-native';
import { cssInterop } from 'nativewind';

function interopIcon(icon: LucideIcon) {
  cssInterop(icon, {
    className: {
      target: 'style',
      nativeStyleToProp: {
        color: true,
        opacity: true,
        width: true,
        height: true,
      },
    },
  });
}

const icons = [Home, Menu, Info, MoonStar, Sun, User, BarChart, Bell, LogOut, Eye, EyeOff];
icons.forEach((icon) => interopIcon(icon));

export { Home, Menu, Info, MoonStar, Sun, User, BarChart, Bell, LogOut, Eye, EyeOff };
