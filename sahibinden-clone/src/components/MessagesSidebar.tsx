'use client'
import { 
  Box, 
  List, 
  ListItemButton, 
  ListItemText, 
  Collapse 
} from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { useState } from 'react'

export default function MessagesSidebar() {
  const [offerMenuOpen, setOfferMenuOpen] = useState(false)

  return (
    <Box className="bg-white border border-[#dfdfdf] rounded">
      <List component="nav" className="p-0">
        <ListItemButton selected className="border-b border-[#dfdfdf]">
          <ListItemText 
            primary="Mesajlarım" 
            primaryTypographyProps={{ className: 'text-sm' }}
          />
        </ListItemButton>
        
        <ListItemButton className="border-b border-[#dfdfdf]">
          <ListItemText 
            primary="Bilgilendirmeler" 
            primaryTypographyProps={{ className: 'text-sm' }}
          />
        </ListItemButton>

        <ListItemButton 
          onClick={() => setOfferMenuOpen(!offerMenuOpen)}
          className="border-b border-[#dfdfdf]"
        >
          <ListItemText 
            primary="Ürün Tekliflerim" 
            primaryTypographyProps={{ className: 'text-sm' }}
          />
          {offerMenuOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        
        <Collapse in={offerMenuOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton className="pl-8">
              <ListItemText 
                primary="Satıcıyım" 
                primaryTypographyProps={{ className: 'text-sm' }}
              />
            </ListItemButton>
            <ListItemButton className="pl-8">
              <ListItemText 
                primary="Alıcıyım" 
                primaryTypographyProps={{ className: 'text-sm' }}
              />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  )
} 