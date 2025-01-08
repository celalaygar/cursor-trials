'use client'
import {
  Box,
  Container,
  InputBase,
  Button,
  IconButton,
  Popover,
  Typography,
  Avatar,
  Tabs,
  Tab,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import EmailIcon from '@mui/icons-material/Email'
import NotificationsIcon from '@mui/icons-material/Notifications'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { messages } from '@/data/messages'
import { navigationLinks } from '@/data/navigation'
import MessagesPopover from './header/MessagesPopover'
import NotificationsPopover from './header/NotificationsPopover'
import FavoritesPopover from './header/FavoritesPopover'
import UserPopover from './header/UserPopover'
import MenuIcon from '@mui/icons-material/Menu'

export default function Header() {
  const router = useRouter()
  const [messagesAnchorEl, setMessagesAnchorEl] = useState<null | HTMLElement>(null)
  const [notificationsAnchorEl, setNotificationsAnchorEl] = useState<null | HTMLElement>(null)
  const [favoritesAnchorEl, setFavoritesAnchorEl] = useState<null | HTMLElement>(null)
  const [userAnchorEl, setUserAnchorEl] = useState<null | HTMLElement>(null)
  const [activeTab, setActiveTab] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // ya da loading state
  }

  return (
    <Box className="bg-[#32455d] text-white">
      <Container maxWidth="xl">
        {/* Top Bar */}
        <Box className="flex items-center h-14 gap-4">
          {/* Mobile Menu Icon */}
          <IconButton
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Link href="/">
            <Image
              src="/sahibinden-logo.png"
              alt="sahibinden.com"
              width={150}
              height={30}
              className="cursor-pointer"
            />
          </Link>

          {/* Search */}
          <Box className="flex-grow flex gap-2 hidden md:flex">
            <Box className="flex-grow max-w-md flex">
              <InputBase
                placeholder="Kelime, ilan no veya mağaza adı ile ara"
                className="flex-grow bg-[#1c2938] text-black bg-gray-200 px-3 py-1 text-sm rounded-l"
              />
              <div className="bg-[#696d9b]">
                <Button
                  className="h-full hover:bg-[#6c8d9c] text-white min-w-[40px] rounded-r"
                >
                  <SearchIcon className="text-white" />
                </Button>
              </div>
            </Box>
            <Box className="hidden lg:block">
              <Button
                variant="text"
                className="text-gray-300 text-sm normal-case hover:text-gray-200"
                onClick={() => router.push('/detailed-search')}
              >
                Detaylı Arama
              </Button>
            </Box>
          </Box>

          {/* Right Menu */}
          <Box className="flex items-center gap-3">
            <Box className="hidden md:flex items-center gap-3">
              <Link href="/login" className="text-white text-sm hover:text-gray-200">
                Giriş Yap
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/register" className="text-white text-sm hover:text-gray-200">
                Hesap Aç
              </Link>
            </Box>

            {/* İkonlar */}
            <Box className="flex items-center gap-2">
              {/* Kullanıcı */}
              <IconButton
                onClick={(e) => setUserAnchorEl(e.currentTarget)}
                className="p-1"
              >
                <PersonOutlineIcon
                  fontSize="small"
                  className="text-gray-200 hover:text-white transition-colors"
                />
              </IconButton>

              {/* Diğer ikonlar sadece tablet ve desktop'ta görünür */}
              <Box className="hidden sm:flex items-center gap-2">
                {/* Mesajlar */}
                <IconButton
                  onClick={(e) => setMessagesAnchorEl(e.currentTarget)}
                  className="p-1"
                >
                  <Badge badgeContent={1} color="error">
                    <EmailIcon
                      fontSize="small"
                      className="text-gray-200 hover:text-white transition-colors"
                    />
                  </Badge>
                </IconButton>

                {/* Bildirimler */}
                <IconButton
                  className="p-1"
                  onClick={(e) => setNotificationsAnchorEl(e.currentTarget)}
                >
                  <Badge badgeContent={2} color="error">
                    <NotificationsIcon
                      fontSize="small"
                      className="text-gray-200 hover:text-white transition-colors"
                    />
                  </Badge>
                </IconButton>

                {/* Favoriler */}
                <IconButton
                  className="p-1"
                  onClick={(e) => setFavoritesAnchorEl(e.currentTarget)}
                >
                  <StarBorderIcon
                    fontSize="small"
                    className="text-gray-200 hover:text-white transition-colors"
                  />
                </IconButton>
              </Box>
            </Box>

            <Button
              variant="contained"
              className="bg-[#489ae9] hover:bg-[#3d83c7] normal-case hidden sm:flex"
              onClick={() => router.push('/post-ad')}
            >
              Ücretsiz* İlan Ver
            </Button>
          </Box>
        </Box>

        {/* Navigation Bar - Sadece desktop'ta görünür */}
        <Box className="hidden lg:block">
          <Box className="flex items-center h-10 border-t border-[#455873]">
            <Box className="flex gap-6">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-white text-sm hover:text-gray-200"
                >
                  {link.title}
                </Link>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <Box className="w-[280px]">
          <List>
            <ListItem>
              <Box className="w-full">
                <InputBase
                  placeholder="Ara..."
                  className="w-full bg-gray-100 px-3 py-2 rounded"
                />
              </Box>
            </ListItem>
            <Divider />
            {navigationLinks.map((link) => (
              <ListItem 
                key={link.path}
                onClick={() => {
                  router.push(link.path)
                  setMobileMenuOpen(false)
                }}
                className="cursor-pointer hover:bg-gray-100"
              >
                <ListItemText primary={link.title} />
              </ListItem>
            ))}
            <Divider />
            <ListItem 
              onClick={() => router.push('/login')}
              className="cursor-pointer hover:bg-gray-100"
            >
              <ListItemText primary="Giriş Yap" />
            </ListItem>
            <ListItem 
              onClick={() => router.push('/register')}
              className="cursor-pointer hover:bg-gray-100"
            >
              <ListItemText primary="Hesap Aç" />
            </ListItem>
            <ListItem 
              onClick={() => router.push('/post-ad')}
              className="cursor-pointer hover:bg-gray-100"
            >
              <ListItemText primary="Ücretsiz* İlan Ver" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Mesajlar Popover */}
      <Popover
        id="messages-popover"
        open={Boolean(messagesAnchorEl)}
        anchorEl={messagesAnchorEl}
        onClose={() => setMessagesAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MessagesPopover
          activeTab={activeTab}
          onTabChange={(e, newValue) => setActiveTab(newValue)}
          onClose={() => setMessagesAnchorEl(null)}
        />
      </Popover>

      {/* Bildirimler Popover */}
      <Popover
        id="notifications-popover"
        open={Boolean(notificationsAnchorEl)}
        anchorEl={notificationsAnchorEl}
        onClose={() => setNotificationsAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <NotificationsPopover
          onClose={() => setNotificationsAnchorEl(null)}
        />
      </Popover>

      {/* Favoriler Popover */}
      <Popover
        id="favorites-popover"
        open={Boolean(favoritesAnchorEl)}
        anchorEl={favoritesAnchorEl}
        onClose={() => setFavoritesAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <FavoritesPopover
          onClose={() => setFavoritesAnchorEl(null)}
        />
      </Popover>

      {/* Kullanıcı Popover */}
      <Popover
        id="user-popover"
        open={Boolean(userAnchorEl)}
        anchorEl={userAnchorEl}
        onClose={() => setUserAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <UserPopover
          onClose={() => setUserAnchorEl(null)}
        />
      </Popover>
    </Box>
  )
}