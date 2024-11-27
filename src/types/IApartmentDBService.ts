import { Models } from "appwrite";

interface IApartmentReference {
  contact_id: string;
  apartment_images: string[];
  apartment_files: string[];
}

export interface IApartmentDto extends IApartmentReference {
  zagolovok: string;
  kategoriya_obekta: string[] | null;
  prodazha: string[] | null;
  arenda: string[] | null;
  podkategoriya_obekta: string[] | null;
  istochnik: string[] | null;
  nazvanie_zhk: string;
  vid_obekta: string[] | null;
  raspolozhenie_obekta: string[] | null;
  vid_liczenzii: string[] | null;
  tip_nedvizhimosti: string[] | null;
  kolichestvo_komnat: string;
  naznachenie_obekta: string[];
  obshhaya_ploshhad: string;
  kolichestvo_zdanij: string;
  etazh: string;
  sostoyanie_obekta: string[] | null;
  poleznaya_ploshhad: string;
  predlagaemaya_ploshhad: string;
  etazhnost: string;
  sostoyanie_remonta: string[] | null;
  mashina_mesto: string;
  kolichestvo_sotok: string;
  tip_stroeniya: string[] | null;
  parkovka: string[] | null;
  sanuzel: string[] | null;
  balkon: string[] | null;
  voda: string[] | null;
  kanalizacziya: string[] | null;
  lift_kommercziya: string[] | null;
  sistema_otopleniya: string[] | null;
  gaz: string[] | null;
  mebel: string[] | null;
  rasstoyanie_do_metro: string;
  elektrichestvo: string[] | null;
  god_postrojki: string;
  vysota_potolkov: string;
  mestopolozhenie_obekta: string[] | null;
  sistema_kondiczionirovaniya: string[] | null;
  terrasa: boolean;
  czokol_podval: boolean;
  czokol: boolean;
  podval: boolean;
  umnyj_dom: boolean;
  uglovoj: boolean;
  komnata_ohrany: boolean;
  vdol_dorogi: boolean;
  saraj: boolean;
  ogorod: boolean;
  reshetki_na_oknah: boolean;
  pozharnaya_signalizacziya: boolean;
  videonablyudenie: boolean;
  signalizacziya: boolean;
  razgruzochnyj_pandus: boolean;
  zhd_vetka: boolean;
  "sostoyanie_remonta-kvartiry": string[] | null;
  "tip-stroeniya_kvartiry": string[] | null;
  balkon_kvartira: string[] | null;
  tip_planirovki: string[] | null;
  lift_kvartira: string[] | null;
  sanuzel_kvartira: string[] | null;
  zhilaya_ploshhad: string;
  mebel_kvartira: string[] | null;
  kolichestvo_spalen: string;
  "sistema-otopleniya_kvartiry": string[] | null;
  kod_domofona: string;
  spalnya_sanuzel: string;
  energonositel_obekta: string[] | null;
  podezd_nomer: string;
  vid_iz_okna: string[] | null;
  vid_iz_okna_dom: string[] | null;
  parkovka_kvartira: string[] | null;
  garderobnaya: boolean;
  torecz: boolean;
  sobstvennoe_obsluzhivayushhee_tszh: boolean;
  konserzh: boolean;
  sostoyanie_doma: string[] | null;
  "tip-stroeniya_doma": string[] | null;
  balkon_doma: string[] | null;
  ploshhad_doma: string;
  bassejn: string[] | null;
  sanuzel_doma: string[] | null;
  voda_dom: string[] | null;
  lift_dom: string[] | null;
  "sistema-otopleniya_dom": string[] | null;
  mebel_dom: string[] | null;
  gaz_dom: string[] | null;
  "sistema-kondiczionirovaniya_dom": string[] | null;
  elektrichestvo_dom: string[] | null;
  garazh: string[] | null;
  kanalizacziya_dom: string[] | null;
  raspolozhenie_doma: string[] | null;
  "mestopolozhenie-obekta_dom": string[] | null;
  gostevoj_domik: boolean;
  barbekyu_zona: boolean;
  dva_doma_vo_dvore: boolean;
  polisadnik: boolean;
  dopolnitelnaya_pristrojka: boolean;
  "naznachenie-obekta-zemlya_uchastok": string;
  "naznachenie-obekta_zemlya": string[] | null;
  tip_zemli_uchastka: string[] | null;
  "sostoyanie-obekta_zemlya": string[] | null;
  "sostoyanie-remonta_zemlya": string[] | null;
  parkovka_zemlya: string[] | null;
  voda_zemlya: string[] | null;
  "mestopolozhenie-obekta_zemlya": string[] | null;
  rasstoyanie_do_goroda: string;
  "sistema-otopleniya_zemlya": string[] | null;
  podezdnye_puti: string[] | null;
  "sistema-kondiczionirovaniya_zemlya": string[] | null;
  elektrichestvo_zemlya: string[] | null;
  gaz_zemlya: string[] | null;
  kanalizacziya_zemlya: string[] | null;
  ohrana: boolean;
  strana: string;
  gorod: string;
  oblast: string;
  rajon: string;
  mahallya: string;
  ulicza: string;
  orientir: string;
  metro: string[] | null;
  nomer_doma: string;
  nomer_kvartiry: string;
  opisanie: string;
  vnutri_est: string[] | null;
  ryadom_est: string[] | null;
  ploshhad_gostinnoj: string;
  ploshhad_spalni: string;
  ploshhad_holla: string;
  ploshhad_kuhni: string;
  ploshhad_sanuzla: string;
  ploshhad_balkona: string;
  ploshhad_terrasy: string;
  ploshhad_komnaty_ohrany: string;
  ploshhad_gostevogo_doma: string;
  ploshhad_dopolnitelnoj_pristrojki: string;

  rent_czena: string;
  rent_czena_for: string[] | null;
  rent_czena_valyuta: string;
  rent_startovaya_czena: string;
  rent_startovaya_czena_valyuta: string;
  rent_torg: boolean;
  rent_komissiya_agenstva: string;
  rent_komissiya_agenstva_unit: string;
  rent_komissiya_menedzhera: string;
  rent_komissiya_menedzhera_unit: string;
  rent_kom_czena_sobstvennika: string;
  rent_kom_czena_sobstvennika_valyuta: string;
  rent_kom_startovaya_czena: string;
  rent_kom_startovaya_czena_valyuta: string;
  rent_kom_torg: boolean;
  rent_kom_czena_for: string[] | null;
  rent_kom_komissiya_agenstva: string;
  rent_kom_komissiya_agenstva_unit: string;
  rent_kom_komissiya_menedzhera: string;
  rent_kom_komissiya_menedzhera_unit: string;

  prod_czena: string;
  prod_czena_for: string[] | null;
  prod_czena_valyuta: string;
  prod_startovaya_czena: string;
  prod_startovaya_czena_valyuta: string;
  prod_torg: boolean;
  prod_komissiya_agenstva: string;
  prod_komissiya_agenstva_unit: string;
  prod_komissiya_menedzhera: string;
  prod_komissiya_menedzhera_unit: string;
  prod_kom_czena_sobstvennika: string;
  prod_kom_czena_sobstvennika_valyuta: string;
  prod_kom_startovaya_czena: string;
  prod_kom_startovaya_czena_valyuta: string;
  prod_kom_torg: boolean;
  prod_kom_czena_for: string[] | null;
  prod_kom_komissiya_agenstva: string;
  prod_kom_komissiya_agenstva_unit: string;
  prod_kom_komissiya_menedzhera: string;
  prod_kom_komissiya_menedzhera_unit: string;

  addon_square_names: string[] | null;
  addon_square_values: string[] | null;
}

export interface IApartmentAreaMetadata {
  system_metro: string[];
  system_rajon: string[];
  system_mahallya: string[];
}

export interface IApartmentPriceMetadata {
  system_rent_price: string;
  system_rent_kom_price: string;
  system_prod_price: string;
  system_prod_kom_price: string;
}

export interface IApartmentDocument
  extends Models.Document,
    IApartmentDto,
    IApartmentAreaMetadata,
    IApartmentPriceMetadata {
  system_access_level: number;
  system_is_rent: boolean;
  system_is_sell: boolean;
  system_is_archive: boolean;
  system_is_remove: boolean;
  system_created_by: string;
  system_only_for_owner: boolean;
  system_is_favorite: boolean;
  system_allowance: string[] | null;
  system_prod_price_entries: string[] | null;
  system_rent_price_entries: string[] | null;
  index: number;
}

export interface IApartmentRow extends IApartmentDocument {
  id: string;
}

export default IApartmentRow;
