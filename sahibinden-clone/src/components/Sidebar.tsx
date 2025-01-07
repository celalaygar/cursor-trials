'use client'
import { Box, List, ListItemButton, ListItemText, Collapse, ListItemIcon } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
import { menuItems } from '@/data/sidebarMenu'

export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState<string[]>([])

  const handleClick = (index: number) => {
    setOpenMenus(prev => 
      prev.includes(index.toString()) 
        ? prev.filter(item => item !== index.toString())
        : [...prev, index.toString()]
    )
  }

  return (
    <Box className="bg-white border border-[#dfdfdf]">
      <List component="nav" className="p-0">
        {menuItems.map((item, index) => {
          const Icon = item.icon
          return (
            <Box key={index}>
              <ListItemButton
                onClick={() => handleClick(index)}
                className={`
                  hover:bg-gray-50 py-1
                  ${item.isNew ? 'border-l-4 border-[#ffde00]' : ''}
                `}
              >
                <ListItemIcon className="min-w-[32px]">
                  <Icon className="text-blue-500" sx={{ fontSize: 16 }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Box className="flex items-center gap-2">
                      <span className="text-sm text-[#333]">{item.title}</span>
                      {item.isNew && (
                        <span className="bg-[#e11f21] text-white text-[10px] px-1 rounded">
                          Yeni
                        </span>
                      )}
                      {item.count && (
                        <span className="text-xs text-[#999]">{item.count}</span>
                      )}
                    </Box>
                  }
                />
                {item.subItems && (
                  openMenus.includes(index.toString()) ? <ExpandLess /> : <ExpandMore />
                )}
              </ListItemButton>
              {item.subItems && (
                <Collapse in={openMenus.includes(index.toString())} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.subItems.map((subItem, subIndex) => {
                      const SubIcon = subItem.icon
                      return (
                        <ListItemButton
                          key={subIndex}
                          className="pl-14 py-1 hover:bg-gray-50"
                        >
                          {SubIcon && (
                            <ListItemIcon className="min-w-[32px]">
                              <SubIcon sx={{ fontSize: 16 }} />
                            </ListItemIcon>
                          )}
                          <ListItemText
                            primary={
                              <Box className="flex items-center justify-between">
                                <span className="text-sm text-[#0066ff] hover:underline">
                                  {subItem.title}
                                </span>
                                <Box className="flex items-center gap-2">
                                  {subItem.isNew && (
                                    <span className="bg-[#e11f21] text-white text-[10px] px-1 rounded">
                                      Yeni
                                    </span>
                                  )}
                                  <span className="text-xs text-[#999]">{subItem.count}</span>
                                </Box>
                              </Box>
                            }
                          />
                        </ListItemButton>
                      )
                    })}
                  </List>
                </Collapse>
              )}
            </Box>
          )
        })}
      </List>
    </Box>
  )
} 