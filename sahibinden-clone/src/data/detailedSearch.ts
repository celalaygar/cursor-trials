export const searchCategories = [
  { value: '', label: 'Tümü' },
  { value: 'emlak', label: 'Emlak', count: '(1.122.083)' },
  { value: 'vasita', label: 'Vasıta', count: '(2.345.678)' },
  { value: 'yedek-parca', label: 'Yedek Parça, Aksesuar...', count: '(567.890)' },
  { value: 'ikinci-el', label: 'İkinci El ve Sıfır Al.', count: '(890.123)' },
  { value: 'is-makineleri', label: 'İş Makineleri & Sanayi', count: '(133.567)' },
  { value: 'ustalar', label: 'Ustalar ve Hizmetler', count: '(289.456)' },
  { value: 'ozel-ders', label: 'Özel Ders Verenler', count: '(95.234)' },
  { value: 'is-ilanlari', label: 'İş İlanları', count: '(156.789)' },
  { value: 'hayvanlar', label: 'Hayvanlar Alemi', count: '(78.901)' }
]

export const cities = [
  { value: '', label: 'İl' },
  { value: 'istanbul', label: 'İstanbul' },
  { value: 'ankara', label: 'Ankara' },
  { value: 'izmir', label: 'İzmir' },
  { value: 'bursa', label: 'Bursa' },
  { value: 'antalya', label: 'Antalya' },
  { value: 'adana', label: 'Adana' },
  { value: 'konya', label: 'Konya' },
  { value: 'mersin', label: 'Mersin' },
  { value: 'kayseri', label: 'Kayseri' }
]

export const districts = {
  istanbul: [
    { value: '', label: 'İlçe' },
    { value: 'kadikoy', label: 'Kadıköy' },
    { value: 'besiktas', label: 'Beşiktaş' },
    { value: 'sisli', label: 'Şişli' },
    { value: 'uskudar', label: 'Üsküdar' },
    { value: 'maltepe', label: 'Maltepe' },
    { value: 'beylikduzu', label: 'Beylikdüzü' },
    { value: 'pendik', label: 'Pendik' },
    { value: 'kartal', label: 'Kartal' },
    { value: 'umraniye', label: 'Ümraniye' }
  ],
  ankara: [
    { value: '', label: 'İlçe' },
    { value: 'cankaya', label: 'Çankaya' },
    { value: 'yenimahalle', label: 'Yenimahalle' },
    { value: 'kecioren', label: 'Keçiören' },
    { value: 'etimesgut', label: 'Etimesgut' },
    { value: 'mamak', label: 'Mamak' },
    { value: 'sincan', label: 'Sincan' },
    { value: 'pursaklar', label: 'Pursaklar' }
  ],
  izmir: [
    { value: '', label: 'İlçe' },
    { value: 'karsiyaka', label: 'Karşıyaka' },
    { value: 'bornova', label: 'Bornova' },
    { value: 'konak', label: 'Konak' },
    { value: 'buca', label: 'Buca' },
    { value: 'cigli', label: 'Çiğli' }
  ],
  bursa: [
    { value: '', label: 'İlçe' },
    { value: 'nilufer', label: 'Nilüfer' },
    { value: 'osmangazi', label: 'Osmangazi' },
    { value: 'yildirim', label: 'Yıldırım' },
    { value: 'gemlik', label: 'Gemlik' }
  ],
  antalya: [
    { value: '', label: 'İlçe' },
    { value: 'muratpasa', label: 'Muratpaşa' },
    { value: 'konyaalti', label: 'Konyaaltı' },
    { value: 'kepez', label: 'Kepez' },
    { value: 'alanya', label: 'Alanya' }
  ]
}

export const datePeriods = [
  { value: '', label: 'Tümü' },
  { value: 'last-24h', label: 'Son 24 saat' },
  { value: 'last-3d', label: 'Son 3 gün içinde' },
  { value: 'last-7d', label: 'Son 7 gün içinde' },
  { value: 'last-15d', label: 'Son 15 gün içinde' },
  { value: 'last-30d', label: 'Son 30 gün içinde' },
  { value: 'last-3m', label: 'Son 3 ay içinde' },
  { value: 'last-6m', label: 'Son 6 ay içinde' }
]

export const sortOptions = [
  { value: 'price-desc', label: 'Fiyata göre (Önce en yüksek)' },
  { value: 'price-asc', label: 'Fiyata göre (Önce en düşük)' },
  { value: 'date-desc', label: 'Tarihe göre (Önce en yeni)' },
  { value: 'date-asc', label: 'Tarihe göre (Önce en eski)' },
  { value: 'relevance', label: 'Öne Çıkanlar' },
  { value: 'distance', label: 'Uzaklığa göre' }
] 