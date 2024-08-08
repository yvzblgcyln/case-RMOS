import { PersonDataTypes } from "../types/dataTypes";

export const initialGetValues = {
  db_Id: 9,
  xRez_Sirket: 9,
  xBas_Tar: "2024-06-01",
  xBit_Tar: "2024-06-10",
  xtip: 1,
  kon1: "ALL",
  kon2: "BB",
  xchkFis_Fazla_otel_10: 0,
  bas_Yil: 2022,
  bit_Yil: 2022,
  fisrci_Kapalioda_10: 0,
  xRez_C_W: "C",
  xSistem_Tarihi: "2024-01-01",
  xAlis_Tarihi: "2024-01-01",
  sistem_Bas1: "2020-01-01",
  sistem_Bit1: "2029-01-01",
  pmdahil_10: 0,
  tip_1: "001",
  xFis_Bela_tutar_10: 0,
  trace_Dus_10: 0,
  cev_01: null,
};

export const initialFormValues = {
  userName: "yunus@test.com",
  password: "yunus",
};

export const tableHeaders = [
  "Tarih",
  "Mevcut",
  "Oda",
  "Yetişkin",
  "Çocuk",
  "Free",
  "Toplam Kişi",
  "Pax",
  "Son Durum",
  "Gun Tarih",
  "Pax(Y/C2)",
];
export const RoomTableHeaders = [
  "Id",
  "Adi",
  "Soy",
  "Aciklama",
  "Tcno",
  "Kimlik_no",
  "Dogum_tarihi",
  "Sistem_tarihi",
  "Sistem_grubu",
  "Otel_kodu",
  "Ulke_xml",
  "Kulanici",
  "Acenta",
  "Xml_Kodu",
  "ULke_Adı",
];

export const initialGetPeopleValues = {
  db_Id: 9,
  Adi: "ALL?",
};

export const PersonHeaderList: Array<keyof PersonDataTypes> = [
  "Id",
  "Adi",
  "Soy",
  "Aciklama",
  "Tcno",
  "Kimlik_no",
  "Dogum_tarihi",
  "Sistem_tarihi",
  "Sistem_grubu",
  "Otel_kodu",
  "Ulke_xml",
  "Kulanici",
  "Acenta",
  "Xml_Kodu",
  "ULke_Adı",
];

export const initialAddUserForm = {
  db_Id: 9,
  Id: 0,
  Adi: "",
  Soy: "",
  Aciklama: "",
};
