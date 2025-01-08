'use client'
import { useState } from 'react'
import { Box, List, ListItem, ListItemIcon, ListItemText, Collapse, Chip } from '@mui/material'
import { useRouter } from 'next/navigation'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { menuItems } from '@/data/sidebarMenu'

export default function Sidebar() {
  const router = useRouter()
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})

  const handleClick = (title: string) => {
    setOpenItems(prev => ({
      ...prev,
      [title]: !prev[title]
    }))
  }

  const handleItemClick = (link?: string) => {
    if (link) {
      router.push(link)
    }
  }

  return (
    <Box className="bg-white border border-[#dfdfdf]">
      <List component="nav" className="p-0">
        {menuItems.map((item, index) => (
          <Box key={index}>
            <ListItem
              onClick={() => {
                if (item.subItems) {
                  handleClick(item.title)
                } else if (item.link) {
                  handleItemClick(item.link)
                }
              }}
              className={`hover:bg-gray-50 cursor-pointer ${
                item.subItems ? 'pr-4' : ''
              }`}
            >
              <ListItemIcon className="min-w-[40px]">
                <item.icon className="text-gray-600" fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Box className="flex items-center gap-2">
                    <span className="text-sm">{item.title}</span>
                    {item.count && (
                      <span className="text-xs text-gray-500">{item.count}</span>
                    )}
                    {item.isNew && (
                      <Chip
                        label="yeni"
                        size="small"
                        className="bg-[#e11f21] text-white text-[10px] h-5"
                      />
                    )}
                  </Box>
                }
              />
              {item.subItems && (
                openItems[item.title] ? <ExpandLess /> : <ExpandMore />
              )}
            </ListItem>

            {item.subItems && (
              <Collapse in={openItems[item.title]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem, subIndex) => (
                    <ListItem
                      key={subIndex}
                      onClick={() => handleItemClick(subItem.link)}
                      className="pl-14 hover:bg-gray-50 cursor-pointer"
                    >
                      {subItem.icon && (
                        <ListItemIcon className="min-w-[40px]">
                          <subItem.icon className="text-gray-600" fontSize="small" />
                        </ListItemIcon>
                      )}
                      <ListItemText
                        primary={
                          <Box className="flex items-center gap-2">
                            <span className="text-sm">{subItem.title}</span>
                            {subItem.count && (
                              <span className="text-xs text-gray-500">
                                {subItem.count}
                              </span>
                            )}
                            {subItem.isNew && (
                              <Chip
                                label="yeni"
                                size="small"
                                className="bg-[#e11f21] text-white text-[10px] h-5"
                              />
                            )}
                          </Box>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </Box>
        ))}
      </List>
    </Box>
  )
} 