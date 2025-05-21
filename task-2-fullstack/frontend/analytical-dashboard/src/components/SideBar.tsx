import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Box,
  alpha,
} from '@mui/material';
import { BsGraphUpArrow } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';
import { NavLink } from 'react-router';

const menuItems = [
  { text: 'Dashboard', icon: <BsGraphUpArrow />, path: '/' },
  { text: 'Customers', icon: <FaUserFriends />, path: '/customers' },
];

const SideBar = () => {
  return (
    <Drawer
      variant='permanent'
      anchor='left'
      sx={{
        width: 280,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 280,
          borderRight: `1px solid ${alpha('#919eab', 0.12)}`,
          boxShadow: `0 0 2px 0 ${alpha(
            '#919eab',
            0.2
          )}, 0 12px 24px -4px ${alpha('#919eab', 0.12)}`,
          boxSizing: 'border-box',
          backgroundColor: '#ffffff',
        },
      }}>
      <Toolbar sx={{ px: 2.5, py: 3 }}>
        <Typography
          variant='h6'
          sx={{
            fontWeight: 600,
            color: alpha('#212b36', 0.8),
            letterSpacing: 0.5,
          }}>
          Analytics Panel
        </Typography>
      </Toolbar>

      <Box sx={{ px: 2.5, py: 1 }}>
        <List disablePadding>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.text}
              component={NavLink}
              to={item.path ?? '/'}
              sx={{
                borderRadius: 1,
                mb: 0.5,
                color: alpha('#637381', 0.8),
                '&:hover': {
                  backgroundColor: alpha('#00a76f', 0.08),
                  color: '#00a76f',
                },
                '&.active': {
                  backgroundColor: alpha('#00a76f', 0.08),
                  color: '#00a76f',
                  '& .MuiListItemIcon-root': {
                    color: '#00a76f',
                  },
                },
              }}>
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color: 'inherit',
                }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight: 500,
                  fontSize: '0.875rem',
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideBar;
