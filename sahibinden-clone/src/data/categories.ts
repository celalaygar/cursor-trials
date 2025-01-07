import HomeIcon from '@mui/icons-material/Home'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import BuildIcon from '@mui/icons-material/Build'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ConstructionIcon from '@mui/icons-material/Construction'
import HandymanIcon from '@mui/icons-material/Handyman'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import PetsIcon from '@mui/icons-material/Pets'
import HelpIcon from '@mui/icons-material/Help'
import { SvgIconProps } from '@mui/material'

interface Category {
  id: number
  name: string
  IconComponent: React.ComponentType<SvgIconProps>
  iconColor: string
  borderColor: string
  link: string
}

export const categories: Category[] = [
  {
    id: 1,
    name: 'Emlak',
    IconComponent: HomeIcon,
    iconColor: '#ff8a00',
    borderColor: 'border-t-[#ff8a00]',
    link: '/real-estate'
  },
  {
    id: 2,
    name: 'Vasıta',
    IconComponent: DirectionsCarIcon,
    iconColor: '#ff0034',
    borderColor: 'border-t-[#ff0034]',
    link: '/vehicles'
  },
  {
    id: 3,
    name: 'Yedek Parça, Aksesuar,\nDonanım & Tuning',
    IconComponent: BuildIcon,
    iconColor: '#00c9d6',
    borderColor: 'border-t-[#00c9d6]',
    link: '/spare-parts'
  },
  {
    id: 4,
    name: 'İkinci El ve\nSıfır Alışveriş',
    IconComponent: ShoppingCartIcon,
    iconColor: '#7040ff',
    borderColor: 'border-t-[#7040ff]',
    link: '/shopping'
  },
  {
    id: 5,
    name: 'İş Makineleri\n& Sanayi',
    IconComponent: ConstructionIcon,
    iconColor: '#a600ff',
    borderColor: 'border-t-[#a600ff]',
    link: '/heavy-equipment'
  },
  {
    id: 6,
    name: 'Ustalar ve\nHizmetler',
    IconComponent: HandymanIcon,
    iconColor: '#00b0ff',
    borderColor: 'border-t-[#00b0ff]',
    link: '/services'
  },
  {
    id: 7,
    name: 'Özel Ders\nVerenler',
    IconComponent: SchoolIcon,
    iconColor: '#2bb673',
    borderColor: 'border-t-[#2bb673]',
    link: '/tutoring'
  },
  {
    id: 8,
    name: 'İş\nİlanları',
    IconComponent: WorkIcon,
    iconColor: '#91c504',
    borderColor: 'border-t-[#91c504]',
    link: '/jobs'
  },
  {
    id: 9,
    name: 'Hayvanlar\nAlemi',
    IconComponent: PetsIcon,
    iconColor: '#00c9d6',
    borderColor: 'border-t-[#00c9d6]',
    link: '/pets'
  },
  {
    id: 10,
    name: 'Yardımcı\nArayanlar',
    IconComponent: HelpIcon,
    iconColor: '#ff6f00',
    borderColor: 'border-t-[#ff6f00]',
    link: '/helpers'
  }
] 