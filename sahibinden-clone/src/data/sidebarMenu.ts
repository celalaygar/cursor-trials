import { SvgIconProps } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave'
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import ElectricCarIcon from '@mui/icons-material/ElectricCar'
import CarRentalIcon from '@mui/icons-material/CarRental'
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat'
import GarageIcon from '@mui/icons-material/Garage'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle'
import FlightIcon from '@mui/icons-material/Flight'
import TerrainIcon from '@mui/icons-material/Terrain'
import AccessibleIcon from '@mui/icons-material/Accessible'
import HomeIcon from '@mui/icons-material/Home'
import BuildIcon from '@mui/icons-material/Build'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ConstructionIcon from '@mui/icons-material/Construction'
import ComputerIcon from '@mui/icons-material/Computer'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import ChairIcon from '@mui/icons-material/Chair'
import DevicesIcon from '@mui/icons-material/Devices'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import WatchIcon from '@mui/icons-material/Watch'
import ChildCareIcon from '@mui/icons-material/ChildCare'
import FaceIcon from '@mui/icons-material/Face'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'
import DiamondIcon from '@mui/icons-material/Diamond'
import CollectionsIcon from '@mui/icons-material/Collections'
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing'
import AgricultureIcon from '@mui/icons-material/Agriculture'
import FactoryIcon from '@mui/icons-material/Factory'
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices'
import BusinessIcon from '@mui/icons-material/Business'
import LandscapeIcon from '@mui/icons-material/Landscape'
import ApartmentIcon from '@mui/icons-material/Apartment'
import DomainIcon from '@mui/icons-material/Domain'
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage'
import HotelIcon from '@mui/icons-material/Hotel'
import NightShelterIcon from '@mui/icons-material/NightShelter'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import PetsIcon from '@mui/icons-material/Pets'
import HelpIcon from '@mui/icons-material/Help'

interface SubItem {
  title: string
  count?: string
  link?: string
  icon?: React.ComponentType<SvgIconProps>
  isNew?: boolean
}

interface MenuItem {
  title: string
  count?: string
  icon: React.ComponentType<SvgIconProps>
  link?: string
  isNew?: boolean
  subItems?: SubItem[]
}

export const menuItems: MenuItem[] = [
  {
    title: 'Acil Acil',
    icon: CircleIcon,
    link: '/urgent'
  },
  {
    title: 'Son 48 Saat / 1 Hafta / 1 Ay',
    icon: AccessTimeIcon,
    link: '/recent'
  },
  {
    title: 'otobid ile Aracını Sat',
    isNew: true,
    icon: DirectionsCarIcon,
    link: '/sell-vehicle'
  },
  {
    title: 'Vasıta',
    count: '(797.059)',
    icon: TimeToLeaveIcon,
    link: '/vehicles',
    subItems: [
      { title: 'Otomobil', count: '(412.512)', link: '/vehicles/cars' },
      { title: 'Arazi, SUV & Pickup', count: '(86.687)', link: '/vehicles/suv' },
      { title: 'Motosiklet', count: '(111.474)', icon: TwoWheelerIcon },
      { title: 'Minivan & Panelvan', count: '(87.859)', icon: AirportShuttleIcon },
      { title: 'Ticari Araçlar', count: '(57.711)', icon: LocalShippingIcon },
      { title: 'Elektrikli Araçlar', count: '(6.832)', icon: ElectricCarIcon, isNew: true },
      { title: 'Kiralık Araçlar', count: '(9.717)', icon: CarRentalIcon },
      { title: 'Deniz Araçları', count: '(8.783)', icon: DirectionsBoatIcon },
      { title: 'Hasarlı Araçlar', count: '(5.239)', icon: GarageIcon },
      { title: 'Karavan', count: '(4.804)', icon: AirportShuttleIcon },
      { title: 'Klasik Araçlar', count: '(1.824)', icon: DirectionsCarIcon },
      { title: 'Hava Araçları', count: '(28)', icon: FlightIcon },
      { title: 'ATV', count: '(2.844)', icon: TerrainIcon },
      { title: 'UTV', count: '(546)', icon: TerrainIcon },
      { title: 'Engelli Plakalı Araçlar', count: '(199)', icon: AccessibleIcon }
    ]
  },
  {
    title: 'Emlak',
    count: '(1.122.083)',
    icon: HomeIcon,
    link: '/real-estate',
    subItems: [
      { title: 'Konut', count: '(702.584)', link: '/real-estate/residential' },
      { title: 'İş Yeri', count: '(127.277)', link: '/real-estate/commercial' },
      { title: 'Arsa', count: '(279.141)', icon: LandscapeIcon },
      { title: 'Konut Projeleri', count: '(1.374)', icon: ApartmentIcon, isNew: true },
      { title: 'Bina', count: '(9.299)', icon: DomainIcon },
      { title: 'Devre Mülk', count: '(2.083)', icon: HolidayVillageIcon },
      { title: 'Turistik Tesis', count: '(1.698)', icon: HotelIcon },
      { title: 'Kiralık Konut', count: '(412.512)', icon: HomeIcon },
      { title: 'Kiralık İş Yeri', count: '(86.687)', icon: BusinessIcon },
      { title: 'Günlük Kiralık', count: '(111.474)', icon: NightShelterIcon },
      { title: 'Projeli Arsa', count: '(87.859)', icon: LandscapeIcon },
      { title: 'Sanayi', count: '(57.711)', icon: FactoryIcon }
    ]
  },
  {
    title: 'Yedek Parça, Aksesuar, Donanım & Tuning',
    count: '(2.672.441)',
    icon: BuildIcon,
    subItems: [
      { title: 'Otomotiv Ekipmanları', count: '(2.532.639)', icon: BuildIcon },
      { title: 'Motosiklet Ekipmanları', count: '(122.126)', icon: TwoWheelerIcon },
      { title: 'Deniz Aracı Ekipmanları', count: '(17.676)', icon: DirectionsBoatIcon }
    ]
  },
  {
    title: 'İkinci El ve Sıfır Alışveriş',
    count: '(3.004.680)',
    icon: ShoppingCartIcon,
    isNew: true,
    subItems: [
      { title: 'Bilgisayar', count: '(374.764)', icon: ComputerIcon },
      { title: 'Cep Telefonu', count: '(357.368)', icon: PhoneAndroidIcon },
      { title: 'Fotoğraf & Kamera', count: '(53.127)', icon: CameraAltIcon },
      { title: 'Ev Dekorasyon', count: '(387.100)', icon: ChairIcon },
      { title: 'Ev Elektroniği', count: '(106.596)', icon: DevicesIcon },
      { title: 'Elektrikli Ev Aletleri', count: '(188.605)', icon: DevicesIcon },
      { title: 'Giyim & Aksesuar', count: '(223.657)', icon: FaceIcon },
      { title: 'Saat', count: '(62.891)', icon: WatchIcon },
      { title: 'Anne & Bebek', count: '(105.033)', icon: ChildCareIcon },
      { title: 'Kişisel Bakım & Kozmetik', count: '(48.668)', icon: FaceIcon },
      { title: 'Hobi & Oyuncak', count: '(133.203)', icon: SportsEsportsIcon },
      { title: 'Oyun & Konsol', count: '(75.304)', icon: SportsEsportsIcon },
      { title: 'Kitap, Dergi & Film', count: '(43.899)', icon: MenuBookIcon },
      { title: 'Müzik', count: '(92.710)', icon: MusicNoteIcon },
      { title: 'Spor', count: '(196.874)', icon: SportsSoccerIcon },
      { title: 'Takı, Mücevher & Altın', count: '(11.606)', icon: DiamondIcon },
      { title: 'Koleksiyon', count: '(50.285)', icon: CollectionsIcon },
      { title: 'Antika', count: '(81.083)', icon: CollectionsIcon },
      { title: 'Bahçe & Yapı Market', count: '(212.479)', icon: TerrainIcon },
      { title: 'Teknik Elektronik', count: '(91.665)', icon: DevicesIcon },
      { title: 'Ofis & Kırtasiye', count: '(86.879)', icon: MenuBookIcon },
      { title: 'Yiyecek & İçecek', count: '(3.966)', icon: ShoppingCartIcon }
    ]
  },
  {
    title: 'İş Makineleri & Sanayi',
    count: '(133.567)',
    icon: ConstructionIcon,
    subItems: [
      { title: 'İş Makineleri', count: '(23.240)', icon: PrecisionManufacturingIcon },
      { title: 'Tarım Makineleri', count: '(45.362)', icon: AgricultureIcon },
      { title: 'Sanayi', count: '(60.903)', icon: FactoryIcon },
      { title: 'Elektrik & Enerji', count: '(4.062)', icon: ElectricalServicesIcon }
    ]
  },
  {
    title: 'Ustalar ve Hizmetler',
    count: '(289.456)',
    icon: BuildIcon,
    subItems: [
      { title: 'Ev Tadilat & Dekorasyon', count: '(98.234)', icon: ChairIcon },
      { title: 'Nakliye', count: '(45.678)', icon: LocalShippingIcon },
      { title: 'Araç Servis & Bakım', count: '(67.890)', icon: BuildIcon },
      { title: 'Tamir & Teknik Servis', count: '(77.654)', icon: BuildIcon }
    ]
  },
  {
    title: 'Özel Ders Verenler',
    count: '(95.234)',
    icon: SchoolIcon,
    subItems: [
      { title: 'Lise & Üniversite', count: '(45.678)', icon: SchoolIcon },
      { title: 'Yabancı Dil', count: '(23.456)', icon: MenuBookIcon },
      { title: 'Müzik & Sanat', count: '(15.789)', icon: MusicNoteIcon },
      { title: 'Spor', count: '(10.311)', icon: SportsSoccerIcon }
    ]
  },
  {
    title: 'İş İlanları',
    count: '(156.789)',
    icon: WorkIcon,
    subItems: [
      { title: 'Tam Zamanlı', count: '(89.456)', icon: WorkIcon },
      { title: 'Yarı Zamanlı', count: '(34.567)', icon: WorkIcon },
      { title: 'Stajyer', count: '(12.345)', icon: SchoolIcon },
      { title: 'Freelance', count: '(20.421)', icon: WorkIcon }
    ]
  }
]