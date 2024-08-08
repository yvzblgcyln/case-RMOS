export interface DataTypes {
  Arızalı_Oda: number;
  Arızalı_Toplam: number;
  Bebek: number;
  Birleşme: number;
  Birleşme_Trace: number;
  Blokajsız_Oda: number;
  Brut_Tutar: number;
  Comp_Oda: number;
  Day_Use: number;
  Doviz_Gerçek: number;
  Doviz_Tutar: number;
  Fark_Yuzde: number;
  Forecast: number;
  Forecast_Gelir: number;
  Forecast_Kalan: number;
  Forecast_Satılan: number;
  Forecasttan_Kalan_Tek: number;
  Free: number;
  Gelen_Free: number;
  Gelen_Oda: number;
  Gelen_Pax: number;
  Gelen_Top_Kişi: number;
  Gelen_Yetişkin: number;
  Gelen_Çocuk: number;
  Giden_Free: number;
  Giden_Oda: number;
  Giden_Pax: number;
  Giden_Toplam_Kişi: number;
  Giden_Yetişkin: number;
  Giden_Çocuk: number;
  Gun_Tarih: string;
  His_For: string;
  House_Use_Oda: number;
  Info_Oda: number;
  Kalan_1: number;
  Kalan_2: number;
  Kalan_3: number;
  Kalan_4: number;
  Kalan_5: number;
  Kalan_6: number;
  Kapalı_Oda: number;
  Kdv: number;
  Kon_Vergisi: number;
  Kontenjan_Kalan: number;
  Kontenjan_Oda: number;
  Kontenjan_Satılan: number;
  Konum1: number;
  Konum1_Persent: number;
  Konum2: number;
  Konum2_Persent: number;
  Konum3: number;
  Konum3_Persent: number;
  Konum4: number;
  Konum4_Persent: number;
  Konum5: number;
  Konum5_Persent: number;
  Konum6: number;
  Mevcut: number;
  Mevcut_Net: number;
  Müşteri_Tipi_1: number;
  Müşteri_Tipi_2: number;
  Müşteri_Tipi_3: number;
  Müşteri_Tipi_4: number;
  Müşteri_Tipi_5: number;
  Müşteri_Tipi_6: number;
  Müşteri_Tipi_7: number;
  Müşteri_Tipi_8: number;
  Net_Oda: number;
  NoShow: number;
  Oda: number;
  Ort_Pax_Prm: number;
  Ort_Oda_Brut: number;
  Ort_Paxp_Brut: number;
  Otel_Adı: string;
  Otel_Kodu: number;
  Package_Kdv: number;
  Package_Kdvsiz: number;
  Package_Kon_Vergisi: number;
  Package_Tutar: number;
  Pax: number;
  Pax_P: number;
  Pax_Prm: number;
  Pax_Y_C2: number;
  Paxp_Free: number;
  Paxp_Yetişkin: number;
  Paxp_Çocuk: number;
  Pm_Sanal: number;
  Satılan_Birleşme: number;
  Son_Durum: number;
  Son_Yuzdem: number;
  Stop: number;
  TL_Gerçek: number;
  Tarih: string;
  TarihAy: string;
  Tentative_Oda: number;
  Toplam_Kişi: number;
  Yatak: number;
  Yatak_Persent: number;
  Yatak_Mevcut: number;
  Yetişkin: number;
  Yuzde_Net: number;
  Yuzde_Sondurum: number;
  Yüzde: number;
  Çocuk: number;
}

export interface DataTableProps {
  data: DataTypes[] | null;
}

export interface PersonDataTypes {
  Id: number;
  Adi: string;
  Soy: string;
  Aciklama: string;
  Tcno: string;
  Kimlik_no: string;
  Dogum_tarihi: string;
  Sistem_tarihi: string | null;
  Sistem_grubu: string;
  Otel_kodu: string;
  Ulke_xml: string;
  Kulanici: string;
  Acenta: string;
  Xml_Kodu: string;
  ULke_Adı: string;
}

export interface PersonDataTableProps {
  data: PersonDataTypes[] | null;
  // handleSelectUser: (Id: number) => void;
  open: () => void;
  setSelectedUser: React.Dispatch<React.SetStateAction<PersonDataTypes | undefined>>;
}

export interface addPeopleProps {
  db_Id: number;
  Id: number;
  Adi: string;
  Soy: string;
  Aciklama: string;
}
