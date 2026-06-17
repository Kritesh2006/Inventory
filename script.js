/* =============================================
   REPAIR PRICE LOOKUP — script.js
   Internal Staff Tool
   ============================================= */

// -----------------------------------------------
// DEFAULT DATA
// -----------------------------------------------
const DEFAULT_DATA = [

  // ---- iPHONE LCD ----
  { id:'d1',  brand:'iPhone', model:'iPhone 6',           repairType:'LCD', nonProfit:50,  minimum:60,  maximum:75,  keywords:['iphone 6','6 lcd'] },
  { id:'d2',  brand:'iPhone', model:'iPhone 6 Plus',      repairType:'LCD', nonProfit:55,  minimum:60,  maximum:75,  keywords:['6 plus','6+','6plus'] },
  { id:'d3',  brand:'iPhone', model:'iPhone 6S',          repairType:'LCD', nonProfit:50,  minimum:70,  maximum:80,  keywords:['6s'] },
  { id:'d4',  brand:'iPhone', model:'iPhone 6S Plus',     repairType:'LCD', nonProfit:55,  minimum:65,  maximum:80,  keywords:['6s plus','6s+','6splus'] },
  { id:'d5',  brand:'iPhone', model:'iPhone 7',           repairType:'LCD', nonProfit:60,  minimum:65,  maximum:80,  keywords:['7 lcd','iphone7'] },
  { id:'d6',  brand:'iPhone', model:'iPhone 7 Plus',      repairType:'LCD', nonProfit:60,  minimum:70,  maximum:80,  keywords:['7 plus','7+','7plus'] },
  { id:'d7',  brand:'iPhone', model:'iPhone 8',           repairType:'LCD', nonProfit:65,  minimum:75,  maximum:90,  keywords:['8 lcd','iphone8'] },
  { id:'d8',  brand:'iPhone', model:'iPhone 8 Plus',      repairType:'LCD', nonProfit:65,  minimum:75,  maximum:90,  keywords:['8 plus','8+','8plus'] },
  { id:'d9',  brand:'iPhone', model:'iPhone SE (1st/2nd Gen)', repairType:'LCD', nonProfit:65, minimum:75, maximum:90, keywords:['se','se2','se 2nd','se1','se 1st','iphone se'] },
  { id:'d10', brand:'iPhone', model:'iPhone X',           repairType:'LCD', nonProfit:80,  minimum:90,  maximum:120, keywords:['x lcd','iphone x'] },
  { id:'d11', brand:'iPhone', model:'iPhone XS',          repairType:'LCD', nonProfit:80,  minimum:90,  maximum:120, keywords:['xs','iphone xs'] },
  { id:'d12', brand:'iPhone', model:'iPhone XS Max',      repairType:'LCD', nonProfit:80,  minimum:100, maximum:140, keywords:['xs max','xsmax','xs m'] },
  { id:'d13', brand:'iPhone', model:'iPhone XR',          repairType:'LCD', nonProfit:75,  minimum:90,  maximum:120, keywords:['xr','iphone xr'] },
  { id:'d14', brand:'iPhone', model:'iPhone 11',          repairType:'LCD', nonProfit:75,  minimum:90,  maximum:130, keywords:['11 lcd','iphone 11'] },
  { id:'d15', brand:'iPhone', model:'iPhone 11 Pro',      repairType:'LCD', nonProfit:80,  minimum:100, maximum:130, keywords:['11 pro','11pro'] },
  { id:'d16', brand:'iPhone', model:'iPhone 11 Pro Max',  repairType:'LCD', nonProfit:100, minimum:120, maximum:150, keywords:['11 pm','11 pro max','11promax','11pm'] },
  { id:'d17', brand:'iPhone', model:'iPhone 12 / 12 Pro', repairType:'LCD', nonProfit:90,  minimum:120, maximum:160, keywords:['12 lcd','12pro','iphone 12','12/12pro'] },
  { id:'d18', brand:'iPhone', model:'iPhone 12 Pro Max',  repairType:'LCD', nonProfit:120, minimum:140, maximum:180, keywords:['12 pm','12 pro max','12promax','12pm'] },
  { id:'d19', brand:'iPhone', model:'iPhone 12 Mini',     repairType:'LCD', nonProfit:90,  minimum:120, maximum:160, keywords:['12 mini','12mini'] },
  { id:'d20', brand:'iPhone', model:'iPhone 13',          repairType:'LCD', nonProfit:120, minimum:140, maximum:180, keywords:['13 lcd','iphone 13'] },
  { id:'d21', brand:'iPhone', model:'iPhone 13 Mini',     repairType:'LCD', nonProfit:115, minimum:140, maximum:180, keywords:['13 mini','13mini'] },
  { id:'d22', brand:'iPhone', model:'iPhone 13 Pro',      repairType:'LCD', nonProfit:130, minimum:150, maximum:200, keywords:['13 pro','13pro'] },
  { id:'d23', brand:'iPhone', model:'iPhone 13 Pro Max',  repairType:'LCD', nonProfit:140, minimum:180, maximum:320, keywords:['13 pm','13 pro max','13promax','13pm','iphone 13 pro max'] },
  { id:'d24', brand:'iPhone', model:'iPhone 14',          repairType:'LCD', nonProfit:120, minimum:140, maximum:180, keywords:['14 lcd','iphone 14'] },
  { id:'d25', brand:'iPhone', model:'iPhone 14 Plus',     repairType:'LCD', nonProfit:140, minimum:160, maximum:200, keywords:['14 plus','14+','14plus'] },
  { id:'d26', brand:'iPhone', model:'iPhone 14 Pro',      repairType:'LCD', nonProfit:145, minimum:180, maximum:220, keywords:['14 pro','14pro'] },
  { id:'d27', brand:'iPhone', model:'iPhone 14 Pro Max',  repairType:'LCD', nonProfit:185, minimum:250, maximum:250, keywords:['14 pm','14 pro max','14promax','14pm'] },
  { id:'d28', brand:'iPhone', model:'iPhone 15',          repairType:'LCD', nonProfit:130, minimum:160, maximum:200, keywords:['15 lcd','iphone 15'] },
  { id:'d29', brand:'iPhone', model:'iPhone 15 Plus',     repairType:'LCD', nonProfit:140, minimum:180, maximum:230, keywords:['15 plus','15+','15plus'] },
  { id:'d30', brand:'iPhone', model:'iPhone 15 Pro',      repairType:'LCD', nonProfit:145, minimum:190, maximum:260, keywords:['15 pro','15pro'] },
  { id:'d31', brand:'iPhone', model:'iPhone 15 Pro Max',  repairType:'LCD', nonProfit:190, minimum:280, maximum:350, keywords:['15 pm','15 pro max','15promax','15pm'] },
  { id:'d32', brand:'iPhone', model:'iPhone 16',          repairType:'LCD', nonProfit:140, minimum:170, maximum:220, keywords:['16 lcd','iphone 16'] },
  { id:'d33', brand:'iPhone', model:'iPhone 16e',         repairType:'LCD', nonProfit:130, minimum:170, maximum:180, keywords:['16e','16 e'] },
  { id:'d34', brand:'iPhone', model:'iPhone 16 Plus',     repairType:'LCD', nonProfit:150, minimum:200, maximum:250, keywords:['16 plus','16+','16plus'] },
  { id:'d35', brand:'iPhone', model:'iPhone 16 Pro',      repairType:'LCD', nonProfit:140, minimum:200, maximum:220, keywords:['16 pro','16pro'] },
  { id:'d36', brand:'iPhone', model:'iPhone 16 Pro Max',  repairType:'LCD', nonProfit:200, minimum:250, maximum:320, keywords:['16 pm','16 pro max','16promax','16pm'] },
  { id:'d37', brand:'iPhone', model:'iPhone 17',          repairType:'LCD', nonProfit:280, minimum:300, maximum:380, keywords:['17 lcd','iphone 17'] },
  { id:'d38', brand:'iPhone', model:'iPhone 17 Pro',      repairType:'LCD', nonProfit:290, minimum:350, maximum:400, keywords:['17 pro','17pro'] },
  { id:'d39', brand:'iPhone', model:'iPhone 17 Pro Max',  repairType:'LCD', nonProfit:340, minimum:390, maximum:450, keywords:['17 pm','17 pro max','17promax','17pm'] },

  // ---- iPHONE CAMERA ----
  { id:'d40', brand:'iPhone', model:'iPhone Camera (X – 12 Pro Max)', repairType:'Camera', minimum:80,  maximum:100, keywords:['iphone camera','x camera','11 camera','12 camera','xs camera','xr camera'] },
  { id:'d41', brand:'iPhone', model:'iPhone Camera (13 / 14 / 14 Plus / 15 / 15 Plus)', repairType:'Camera', minimum:100, maximum:130, keywords:['13 camera','14 camera','15 camera'] },
  { id:'d42', brand:'iPhone', model:'iPhone Camera (13 Pro / 13 PM / 14 Pro / 14 PM)', repairType:'Camera', minimum:150, maximum:200, keywords:['13 pro camera','14 pro camera','13pm camera','14pm camera'] },

  // ---- iPHONE PROXIMITY ----
  { id:'d43', brand:'iPhone', model:'iPhone Proximity (Up to 12 Pro Max)', repairType:'Proximity', minimum:60, maximum:80, keywords:['proximity','iphone proximity','6 proximity','7 proximity','8 proximity','x proximity','11 proximity','12 proximity'] },
  { id:'d44', brand:'iPhone', model:'iPhone Proximity (13 – 15 Pro Max)', repairType:'Proximity', minimum:80, maximum:100, keywords:['13 proximity','14 proximity','15 proximity'] },

  // ---- iPHONE CHARGING PORT / SPEAKER ----
  { id:'d45', brand:'iPhone', model:'iPhone Charging Port / Speaker (Up to 12 Pro Max)', repairType:'Charging Port', minimum:60, maximum:100, keywords:['iphone charging','iphone port','charging port','6 port','7 port','8 port','x port','11 port','12 port','speaker','loud speaker'] },
  { id:'d46', brand:'iPhone', model:'iPhone Charging Port / Speaker (13 – 15 Pro Max)', repairType:'Charging Port', minimum:80, maximum:160, keywords:['13 port','14 port','15 port','13 charging','14 charging','15 charging'] },

  // ---- iPHONE BATTERY ----
  { id:'d47', brand:'iPhone', model:'iPhone Battery (8 / SE / X / XS / XS Max / XR)', repairType:'Battery', minimum:70, maximum:90, keywords:['8 battery','se battery','x battery','xs battery','xr battery'] },
  { id:'d48', brand:'iPhone', model:'iPhone Battery (11 / 11 Pro / 11 Pro Max)', repairType:'Battery', minimum:80, maximum:100, keywords:['11 battery','11 pro battery','11 pm battery'] },
  { id:'d49', brand:'iPhone', model:'iPhone Battery (12 / 12 Pro / 12 Pro Max)', repairType:'Battery', minimum:90, maximum:120, keywords:['12 battery','12 pro battery','12pm battery'] },
  { id:'d50', brand:'iPhone', model:'iPhone Battery (13 / 13 Pro / 13 Pro Max)', repairType:'Battery', minimum:80, maximum:120, keywords:['13 battery','13 pro battery','13pm battery'] },
  { id:'d51', brand:'iPhone', model:'iPhone Battery (14 / 14 Plus)', repairType:'Battery', minimum:80, maximum:120, keywords:['14 battery','14 plus battery'] },
  { id:'d52', brand:'iPhone', model:'iPhone Battery (14 Pro / 14 Pro Max)', repairType:'Battery', minimum:100, maximum:140, keywords:['14 pro battery','14pm battery'] },
  { id:'d53', brand:'iPhone', model:'iPhone Battery (15 / 15 Plus)', repairType:'Battery', minimum:100, maximum:150, keywords:['15 battery','15 plus battery'] },
  { id:'d54', brand:'iPhone', model:'iPhone Battery (15 Pro / 15 Pro Max)', repairType:'Battery', minimum:120, maximum:180, keywords:['15 pro battery','15pm battery'] },
  { id:'d55', brand:'iPhone', model:'iPhone Battery (16 Pro Max)', repairType:'Battery', minimum:140, maximum:200, keywords:['16 pro max battery','16pm battery'] },

  // ---- SAMSUNG LCD ----
  { id:'d60', brand:'Samsung', model:'Samsung S8',         repairType:'LCD', nonProfit:140, minimum:170, maximum:200, keywords:['s8','galaxy s8'] },
  { id:'d61', brand:'Samsung', model:'Samsung S8 Plus',    repairType:'LCD', nonProfit:150, minimum:190, maximum:230, keywords:['s8+','s8 plus'] },
  { id:'d62', brand:'Samsung', model:'Samsung S9',         repairType:'LCD', nonProfit:140, minimum:180, maximum:220, keywords:['s9','galaxy s9'] },
  { id:'d63', brand:'Samsung', model:'Samsung S9 Plus',    repairType:'LCD', nonProfit:150, minimum:190, maximum:230, keywords:['s9+','s9 plus'] },
  { id:'d64', brand:'Samsung', model:'Samsung S10',        repairType:'LCD', nonProfit:145, minimum:180, maximum:220, keywords:['s10','galaxy s10'] },
  { id:'d65', brand:'Samsung', model:'Samsung S10e',       repairType:'LCD', nonProfit:140, minimum:180, maximum:220, keywords:['s10e'] },
  { id:'d66', brand:'Samsung', model:'Samsung S10 Plus',   repairType:'LCD', nonProfit:150, minimum:190, maximum:230, keywords:['s10+','s10 plus'] },
  { id:'d67', brand:'Samsung', model:'Samsung S10 5G',     repairType:'LCD', nonProfit:140, minimum:180, maximum:220, keywords:['s10 5g'] },
  { id:'d68', brand:'Samsung', model:'Samsung S10 Lite',   repairType:'LCD', nonProfit:140, minimum:180, maximum:220, keywords:['s10 lite'] },
  { id:'d69', brand:'Samsung', model:'Samsung S20',        repairType:'LCD', nonProfit:160, minimum:190, maximum:240, keywords:['s20','galaxy s20'] },
  { id:'d70', brand:'Samsung', model:'Samsung S20 FE',     repairType:'LCD', nonProfit:180, minimum:200, maximum:240, keywords:['s20 fe','s20fe'] },
  { id:'d71', brand:'Samsung', model:'Samsung S20 Plus',   repairType:'LCD', nonProfit:195, minimum:220, maximum:260, keywords:['s20+','s20 plus'] },
  { id:'d72', brand:'Samsung', model:'Samsung S20 Ultra',  repairType:'LCD', nonProfit:200, minimum:240, maximum:280, keywords:['s20 ultra','s20ultra'] },
  { id:'d73', brand:'Samsung', model:'Samsung S21',        repairType:'LCD', nonProfit:170, minimum:200, maximum:240, keywords:['s21','galaxy s21'] },
  { id:'d74', brand:'Samsung', model:'Samsung S21 FE',     repairType:'LCD', nonProfit:195, minimum:230, maximum:280, keywords:['s21 fe','s21fe'] },
  { id:'d75', brand:'Samsung', model:'Samsung S21 Ultra',  repairType:'LCD', nonProfit:200, minimum:230, maximum:280, keywords:['s21 ultra','s21ultra'] },
  { id:'d76', brand:'Samsung', model:'Samsung S22',        repairType:'LCD', nonProfit:200, minimum:230, maximum:280, keywords:['s22','galaxy s22'] },
  { id:'d77', brand:'Samsung', model:'Samsung S22 Plus',   repairType:'LCD', nonProfit:200, minimum:230, maximum:280, keywords:['s22+','s22 plus'] },
  { id:'d78', brand:'Samsung', model:'Samsung S22 Ultra',  repairType:'LCD', nonProfit:220, minimum:250, maximum:300, keywords:['s22 ultra','s22ultra'] },
  { id:'d79', brand:'Samsung', model:'Samsung S23',        repairType:'LCD', nonProfit:205, minimum:230, maximum:280, keywords:['s23','galaxy s23'] },
  { id:'d80', brand:'Samsung', model:'Samsung S23 Plus',   repairType:'LCD', nonProfit:220, minimum:250, maximum:280, keywords:['s23+','s23 plus'] },
  { id:'d81', brand:'Samsung', model:'Samsung S23 FE',     repairType:'LCD', nonProfit:220, minimum:250, maximum:240, keywords:['s23 fe','s23fe'] },
  { id:'d82', brand:'Samsung', model:'Samsung S23 Ultra',  repairType:'LCD', nonProfit:240, minimum:260, maximum:350, keywords:['s23 ultra','s23ultra'] },
  { id:'d83', brand:'Samsung', model:'Samsung Note 8',     repairType:'LCD', nonProfit:190, minimum:210, maximum:250, keywords:['note 8','note8'] },
  { id:'d84', brand:'Samsung', model:'Samsung Note 9',     repairType:'LCD', nonProfit:190, minimum:220, maximum:250, keywords:['note 9','note9'] },
  { id:'d85', brand:'Samsung', model:'Samsung Note 10',    repairType:'LCD', nonProfit:200, minimum:230, maximum:260, keywords:['note 10','note10'] },
  { id:'d86', brand:'Samsung', model:'Samsung Note 10 Plus', repairType:'LCD', nonProfit:210, minimum:240, maximum:280, keywords:['note 10+','note 10 plus'] },
  { id:'d87', brand:'Samsung', model:'Samsung Note 20',    repairType:'LCD', nonProfit:210, minimum:240, maximum:280, keywords:['note 20','note20'] },
  { id:'d88', brand:'Samsung', model:'Samsung Note 20 Ultra', repairType:'LCD', nonProfit:230, minimum:250, maximum:300, keywords:['note 20 ultra','note20ultra'] },
  { id:'d89', brand:'Samsung', model:'Samsung A10e',  repairType:'LCD', nonProfit:70,  minimum:70,  maximum:80,  keywords:['a10e'] },
  { id:'d90', brand:'Samsung', model:'Samsung A02s',  repairType:'LCD', nonProfit:75,  minimum:100, maximum:120, keywords:['a02s'] },
  { id:'d91', brand:'Samsung', model:'Samsung A03s',  repairType:'LCD', nonProfit:75,  minimum:100, maximum:120, keywords:['a03s'] },
  { id:'d92', brand:'Samsung', model:'Samsung A11',   repairType:'LCD', nonProfit:75,  minimum:100, maximum:120, keywords:['a11'] },
  { id:'d93', brand:'Samsung', model:'Samsung A12',   repairType:'LCD', nonProfit:75,  minimum:100, maximum:120, keywords:['a12'] },
  { id:'d94', brand:'Samsung', model:'Samsung A13',   repairType:'LCD', nonProfit:80,  minimum:110, maximum:130, keywords:['a13'] },
  { id:'d95', brand:'Samsung', model:'Samsung A14',   repairType:'LCD', nonProfit:80,  minimum:110, maximum:130, keywords:['a14'] },
  { id:'d96', brand:'Samsung', model:'Samsung A15',   repairType:'LCD', nonProfit:80,  minimum:110, maximum:160, keywords:['a15'] },
  { id:'d97', brand:'Samsung', model:'Samsung A20',   repairType:'LCD', nonProfit:80,  minimum:110, maximum:130, keywords:['a20'] },
  { id:'d98', brand:'Samsung', model:'Samsung A21',   repairType:'LCD', nonProfit:80,  minimum:110, maximum:130, keywords:['a21'] },
  { id:'d99', brand:'Samsung', model:'Samsung A23',   repairType:'LCD', nonProfit:80,  minimum:110, maximum:130, keywords:['a23'] },
  { id:'d100',brand:'Samsung', model:'Samsung A32',   repairType:'LCD', nonProfit:80,  minimum:110, maximum:130, keywords:['a32'] },
  { id:'d101',brand:'Samsung', model:'Samsung A42',   repairType:'LCD', nonProfit:100, minimum:110, maximum:130, keywords:['a42'] },
  { id:'d102',brand:'Samsung', model:'Samsung A43',   repairType:'LCD', nonProfit:100, minimum:110, maximum:130, keywords:['a43'] },
  { id:'d103',brand:'Samsung', model:'Samsung A52',   repairType:'LCD', nonProfit:90,  minimum:110, maximum:130, keywords:['a52'] },
  { id:'d104',brand:'Samsung', model:'Samsung A53',   repairType:'LCD', nonProfit:120, minimum:140, maximum:160, keywords:['a53'] },
  { id:'d105',brand:'Samsung', model:'Samsung A54',   repairType:'LCD', nonProfit:160, minimum:190, maximum:240, keywords:['a54'] },
  { id:'d106',brand:'Samsung', model:'Samsung A55',   repairType:'LCD', nonProfit:160, minimum:190, maximum:130, keywords:['a55'] },
  { id:'d107',brand:'Samsung', model:'Samsung A70',   repairType:'LCD', nonProfit:160, minimum:190, maximum:130, keywords:['a70'] },
  { id:'d108',brand:'Samsung', model:'Samsung A71',   repairType:'LCD', nonProfit:160, minimum:190, maximum:130, keywords:['a71'] },
  { id:'d109',brand:'Samsung', model:'Samsung A73',   repairType:'LCD', nonProfit:160, minimum:190, maximum:130, keywords:['a73'] },

  // ---- SAMSUNG BATTERY / CHARGING ----
  { id:'d110',brand:'Samsung', model:'Samsung Battery (All A Series)', repairType:'Battery', minimum:60,  maximum:80,  keywords:['samsung battery','a series battery','samsung a battery'] },
  { id:'d111',brand:'Samsung', model:'Samsung Battery (All S Series)', repairType:'Battery', minimum:120, maximum:120, keywords:['samsung s battery','s series battery','s20 battery','s21 battery','s22 battery','s23 battery'] },
  { id:'d112',brand:'Samsung', model:'Samsung Charging Port (All A Series)', repairType:'Charging Port', minimum:60, maximum:90,  keywords:['samsung charging','samsung a port'] },
  { id:'d113',brand:'Samsung', model:'Samsung Charging Port (All S Series)', repairType:'Charging Port', minimum:70, maximum:110, keywords:['samsung s port','samsung s charging','s21 port','s22 port','s23 port'] },

  // ---- MOTOROLA LCD ----
  { id:'d120',brand:'Motorola', model:'Moto G Stylus 2020 (XT2043)',    repairType:'LCD', nonProfit:110, minimum:110, maximum:140, keywords:['moto stylus','g stylus','stylus 2020','xt2043'] },
  { id:'d121',brand:'Motorola', model:'Moto G Stylus 2021 4G (XT2115)', repairType:'LCD', nonProfit:110, minimum:110, maximum:140, keywords:['stylus 2021','xt2115','g stylus 2021 4g'] },
  { id:'d122',brand:'Motorola', model:'Moto G Stylus 2021 5G (XT2131)', repairType:'LCD', nonProfit:110, minimum:110, maximum:140, keywords:['stylus 2021 5g','xt2131'] },
  { id:'d123',brand:'Motorola', model:'Moto G Stylus 2022 (XT2211)',    repairType:'LCD', nonProfit:110, minimum:110, maximum:140, keywords:['stylus 2022','xt2211'] },
  { id:'d124',brand:'Motorola', model:'Moto G Stylus 2023 (XT2315)',    repairType:'LCD', nonProfit:110, minimum:110, maximum:150, keywords:['stylus 2023','xt2315','moto stylus 2023'] },
  { id:'d125',brand:'Motorola', model:'Moto G 5G 2022 (XT2213)',        repairType:'LCD', nonProfit:110, minimum:110, maximum:140, keywords:['g 5g 2022','xt2213'] },
  { id:'d126',brand:'Motorola', model:'Moto G 5G 2023 (XT2313)',        repairType:'LCD', nonProfit:110, minimum:110, maximum:150, keywords:['g 5g 2023','xt2313'] },
  { id:'d127',brand:'Motorola', model:'Moto One 5G Ace / G 5G (XT2113)',repairType:'LCD', nonProfit:110, minimum:110, maximum:140, keywords:['one 5g ace','xt2113'] },
  { id:'d128',brand:'Motorola', model:'Moto G Pure (XT2163)',            repairType:'LCD', nonProfit:110, minimum:110, maximum:140, keywords:['g pure','xt2163'] },
  { id:'d129',brand:'Motorola', model:'Moto G Play 2023 (XT2271)',      repairType:'LCD', nonProfit:110, minimum:110, maximum:150, keywords:['g play 2023','xt2271','moto g play'] },
  { id:'d130',brand:'Motorola', model:'Moto G Fast (XT2045)',           repairType:'LCD', nonProfit:110, minimum:110, maximum:140, keywords:['g fast','xt2045'] },
  { id:'d131',brand:'Motorola', model:'Moto G Power 2022 (XT2165)',     repairType:'LCD', nonProfit:110, minimum:110, maximum:140, keywords:['g power 2022','xt2165'] },
  { id:'d132',brand:'Motorola', model:'Moto G Power 5G 2023 (XT2311)',  repairType:'LCD', nonProfit:110, minimum:110, maximum:150, keywords:['g power 5g','xt2311'] },
  { id:'d133',brand:'Motorola', model:'Moto G Power (XT2041)',          repairType:'LCD', nonProfit:110, minimum:110, maximum:140, keywords:['g power xt2041','xt2041'] },
  { id:'d134',brand:'Motorola', model:'Moto G Power / G10 Play 2021 (XT2117)', repairType:'LCD', nonProfit:110, minimum:110, maximum:140, keywords:['g10 play','xt2117'] },
  { id:'d135',brand:'Motorola', model:'Motorola Battery (All Models)',   repairType:'Battery',       minimum:80, maximum:100, keywords:['motorola battery','moto battery'] },
  { id:'d136',brand:'Motorola', model:'Motorola Charging Port (All Models)', repairType:'Charging Port', minimum:60, maximum:90, keywords:['motorola port','moto port','moto charging'] },

  // ---- GOOGLE PIXEL LCD ----
  { id:'d140',brand:'Google Pixel', model:'Pixel 6',        repairType:'LCD', nonProfit:120, minimum:140, maximum:180, keywords:['pixel 6','google pixel 6','p6'] },
  { id:'d141',brand:'Google Pixel', model:'Pixel 6A',       repairType:'LCD', nonProfit:140, minimum:150, maximum:180, keywords:['pixel 6a','pixel6a','p6a'] },
  { id:'d142',brand:'Google Pixel', model:'Pixel 7',        repairType:'LCD', nonProfit:120, minimum:140, maximum:180, keywords:['pixel 7','google pixel 7','p7'] },
  { id:'d143',brand:'Google Pixel', model:'Pixel 7A',       repairType:'LCD', nonProfit:140, minimum:150, maximum:180, keywords:['pixel 7a','pixel7a','p7a'] },
  { id:'d144',brand:'Google Pixel', model:'Pixel 7 Pro',    repairType:'LCD', nonProfit:150, minimum:180, maximum:null, keywords:['pixel 7 pro','pixel7pro'] },
  { id:'d145',brand:'Google Pixel', model:'Pixel 8A',       repairType:'LCD', nonProfit:140, minimum:180, maximum:null, keywords:['pixel 8a','pixel8a','p8a'] },
  { id:'d146',brand:'Google Pixel', model:'Pixel 8 Pro',    repairType:'LCD', nonProfit:150, minimum:180, maximum:null, keywords:['pixel 8 pro','pixel8pro'] },
  { id:'d147',brand:'Google Pixel', model:'Pixel 9A',       repairType:'LCD', nonProfit:160, minimum:190, maximum:null, keywords:['pixel 9a','pixel9a','p9a'] },
  { id:'d148',brand:'Google Pixel', model:'Pixel 9 Pro',    repairType:'LCD', nonProfit:155, minimum:200, maximum:null, keywords:['pixel 9 pro','pixel9pro'] },
  { id:'d149',brand:'Google Pixel', model:'Pixel 9 Pro XL', repairType:'LCD', nonProfit:250, minimum:320, maximum:null, keywords:['pixel 9 pro xl','9 pro xl'] },

  // ---- iPAD LCD (screen only — no digitizer) ----
  { id:'d162',brand:'iPad', model:'iPad 7/8/9 LCD',               repairType:'LCD', nonProfit:120, minimum:150, maximum:180, keywords:['ipad 7 lcd','ipad 8 lcd','ipad 9 lcd'] },
  { id:'d164',brand:'iPad', model:'iPad 10 LCD',                  repairType:'LCD', nonProfit:155, minimum:190, maximum:240, keywords:['ipad 10 lcd','ipad 10th gen lcd'] },
  { id:'d165',brand:'iPad', model:'iPad 5/6 LCD',                 repairType:'LCD', nonProfit:120, minimum:130, maximum:160, keywords:['ipad 5 lcd','ipad 6 lcd'] },
  { id:'d167',brand:'iPad', model:'iPad Air 1 LCD',               repairType:'LCD', nonProfit:100, minimum:120, maximum:150, keywords:['air 1 lcd','ipad air 1 lcd'] },
  { id:'d168',brand:'iPad', model:'iPad Air 2 LCD',               repairType:'LCD', nonProfit:130, minimum:150, maximum:180, keywords:['air 2','ipad air 2'] },
  { id:'d169',brand:'iPad', model:'iPad Air 3 LCD',               repairType:'LCD', nonProfit:130, minimum:150, maximum:180, keywords:['air 3','ipad air 3'] },
  { id:'d170',brand:'iPad', model:'iPad Air 4 LCD',               repairType:'LCD', nonProfit:175, minimum:200, maximum:240, keywords:['air 4','ipad air 4'] },
  { id:'d171',brand:'iPad', model:'iPad Air 5 LCD',               repairType:'LCD', nonProfit:180, minimum:200, maximum:250, keywords:['air 5','ipad air 5'] },
  { id:'d173',brand:'iPad', model:'iPad Mini 1/2 LCD',            repairType:'LCD', nonProfit:160, minimum:200, maximum:290, keywords:['mini 1 lcd','mini 2 lcd','ipad mini 1 lcd','ipad mini 2 lcd'] },
  { id:'d175',brand:'iPad', model:'iPad Mini 3 LCD',              repairType:'LCD', nonProfit:180, minimum:220, maximum:360, keywords:['mini 3 lcd','ipad mini 3 lcd'] },
  { id:'d176',brand:'iPad', model:'iPad Mini 4 LCD',              repairType:'LCD', nonProfit:190, minimum:240, maximum:360, keywords:['mini 4','ipad mini 4'] },
  { id:'d177',brand:'iPad', model:'iPad Mini 5 LCD',              repairType:'LCD', nonProfit:220, minimum:280, maximum:360, keywords:['mini 5','ipad mini 5'] },
  { id:'d178',brand:'iPad', model:'iPad Mini 6 LCD',              repairType:'LCD', nonProfit:270, minimum:320, maximum:360, keywords:['mini 6','ipad mini 6'] },
  { id:'d179',brand:'iPad', model:'iPad Pro 10.5 LCD',            repairType:'LCD', nonProfit:180, minimum:190, maximum:230, keywords:['pro 10.5','ipad pro 10','10.5 lcd'] },
  { id:'d180',brand:'iPad', model:'iPad Pro 11 LCD (Gen 1/2)',    repairType:'LCD', nonProfit:190, minimum:220, maximum:260, keywords:['pro 11 gen 1','pro 11 gen 2','ipad pro 11 g1','ipad pro 11 g2'] },
  { id:'d181',brand:'iPad', model:'iPad Pro 11 LCD (Gen 3/4)',    repairType:'LCD', nonProfit:210, minimum:240, maximum:280, keywords:['pro 11 gen 3','pro 11 gen 4','ipad pro 11 g3','ipad pro 11 g4'] },
  { id:'d182',brand:'iPad', model:'iPad Pro 12.9 LCD (Gen 3/4)',  repairType:'LCD', nonProfit:200, minimum:220, maximum:260, keywords:['pro 12.9 gen 3','pro 12.9 gen 4','ipad pro 12 g3'] },
  { id:'d183',brand:'iPad', model:'iPad Pro 12.9 LCD (Gen 5/6)',  repairType:'LCD', nonProfit:275, minimum:300, maximum:380, keywords:['pro 12.9 gen 5','pro 12.9 gen 6','ipad pro 12 g5'] },

  // ---- iPAD DIGITIZER (Touch Only — separate from LCD) ----
  { id:'dg1', brand:'iPad', model:'iPad 5/6 Touch Digitizer',      repairType:'Digitizer', minimum:90,  maximum:150, keywords:['ipad 5 digi','ipad 6 digi','ipad 5 digitizer','ipad 6 digitizer','ipad 5 touch','ipad 6 touch'] },
  { id:'dg2', brand:'iPad', model:'iPad 7/8/9 Touch Digitizer',    repairType:'Digitizer', minimum:90,  maximum:180, keywords:['ipad 7 digi','ipad 8 digi','ipad 9 digi','ipad 7 digitizer','ipad 7 touch'] },
  { id:'dg3', brand:'iPad', model:'iPad 10 Touch Digitizer',       repairType:'Digitizer', minimum:100, maximum:180, keywords:['ipad 10 digi','ipad 10 digitizer','ipad 10 touch'] },
  { id:'dg4', brand:'iPad', model:'iPad Air 1 Touch Digitizer',    repairType:'Digitizer', minimum:90,  maximum:140, keywords:['air 1 digi','air 1 touch','ipad air 1 digitizer'] },
  { id:'dg5', brand:'iPad', model:'iPad Mini 1/2 Touch Digitizer', repairType:'Digitizer', minimum:85,  maximum:140, keywords:['mini 1 digi','mini 2 digi','mini 1 touch','mini 2 touch'] },
  { id:'dg6', brand:'iPad', model:'iPad Mini 3 Touch Digitizer',   repairType:'Digitizer', minimum:180, maximum:360, keywords:['mini 3 digi','mini 3 touch','mini 3 digitizer'] },

  // ---- iPAD BATTERY / CHARGING ----
  { id:'d190',brand:'iPad', model:'iPad Battery (All iPads)',        repairType:'Battery',      minimum:130, maximum:180, keywords:['ipad battery','ipad air battery','ipad mini battery','ipad pro battery'] },
  { id:'d191',brand:'iPad', model:'iPad Charging Port (All iPads)', repairType:'Charging Port', minimum:140, maximum:180, keywords:['ipad charging','ipad port'] },
];

// -----------------------------------------------
// QUICK-ACCESS chips
// -----------------------------------------------
const QUICK_REPAIRS = [
  { label:'iPhone 11 LCD',         icon:'📱', searchFor:'iPhone 11 LCD' },
  { label:'iPhone 13 LCD',         icon:'📱', searchFor:'iPhone 13 LCD' },
  { label:'iPhone 13 Pro Max LCD', icon:'📱', searchFor:'iPhone 13 Pro Max' },
  { label:'iPhone 14 Pro LCD',     icon:'📱', searchFor:'iPhone 14 Pro LCD' },
  { label:'iPhone 15 Pro Max LCD', icon:'📱', searchFor:'iPhone 15 Pro Max' },
  { label:'iPhone 16 Pro Max LCD', icon:'📱', searchFor:'iPhone 16 Pro Max' },
  { label:'Samsung S23 Ultra LCD', icon:'📱', searchFor:'S23 Ultra' },
  { label:'Pixel 8A LCD',          icon:'📱', searchFor:'Pixel 8A' },
  { label:'iPhone Battery',        icon:'🔋', searchFor:'iPhone Battery' },
  { label:'iPhone Charging Port',  icon:'🔌', searchFor:'iPhone Charging Port' },
  { label:'Samsung Battery',       icon:'🔋', searchFor:'Samsung Battery' },
  { label:'iPad Battery',          icon:'🔋', searchFor:'iPad Battery' },
];

// -----------------------------------------------
// STORAGE
// -----------------------------------------------
const LS_KEY         = 'repairPriceData_v2';
const LS_CAT_KEY     = 'repairCustomCategories';
const LS_IPAD_CAT_KEY = 'repairIpadCustomCategories';

function loadData() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch(e) {}
  return null;
}
function saveData(data) { localStorage.setItem(LS_KEY, JSON.stringify(data)); }

function loadCustomCategories() {
  try {
    const raw = localStorage.getItem(LS_CAT_KEY);
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return [];
}
function saveCustomCategories(cats) { localStorage.setItem(LS_CAT_KEY, JSON.stringify(cats)); }

function loadIpadCustomCategories() {
  try {
    const raw = localStorage.getItem(LS_IPAD_CAT_KEY);
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return [];
}
function saveIpadCustomCategories(cats) { localStorage.setItem(LS_IPAD_CAT_KEY, JSON.stringify(cats)); }

function initData() {
  const stored = loadData();
  repairs = stored || JSON.parse(JSON.stringify(DEFAULT_DATA));
  if (!stored) saveData(repairs);
  customCategories     = loadCustomCategories();
  ipadCustomCategories = loadIpadCustomCategories();
}

// -----------------------------------------------
// STATE
// -----------------------------------------------
let repairs = [];
let customCategories = [];
let ipadCustomCategories = [];
let activeCategory = 'all';
let activeIpadSubCategory = 'all';
let editingId = null;

// -----------------------------------------------
// INIT
// -----------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initData();
  buildQuickGrid();
  attachSearchListeners();
  renderDynamicFilters();
  renderDynamicIpadFilters();
  populateBrandSelect();
  renderAdminList();
  updateAdminCount();
});

// -----------------------------------------------
// VIEW SWITCHING
// -----------------------------------------------
function showView(view) {
  document.getElementById('viewLookup').style.display = view === 'lookup' ? '' : 'none';
  document.getElementById('viewAdmin').style.display  = view === 'admin'  ? '' : 'none';
  document.getElementById('navLookup').classList.toggle('active', view === 'lookup');
  document.getElementById('navAdmin').classList.toggle('active',  view === 'admin');
  if (view === 'admin') { renderAdminList(); updateAdminCount(); }
}

// -----------------------------------------------
// QUICK GRID
// -----------------------------------------------
function buildQuickGrid() {
  const grid = document.getElementById('quickGrid');
  grid.innerHTML = QUICK_REPAIRS.map(q => `
    <button class="quick-chip" onclick="quickSearch('${q.searchFor}')">
      <span class="quick-chip-icon">${q.icon}</span>${q.label}
    </button>
  `).join('');
}

function quickSearch(term) {
  document.getElementById('searchInput').value = term;
  activeCategory = 'all';
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === 'all'));
  runSearch(term);
}

// -----------------------------------------------
// DYNAMIC FILTERS (custom categories)
// -----------------------------------------------
function renderDynamicFilters() {
  const span = document.getElementById('dynamicFilters');
  span.innerHTML = customCategories.map(cat => `
    <button class="filter-btn" data-cat="${cat}" onclick="setFilter(this, '${cat}')">${cat}</button>
  `).join('');
}

function setFilter(btn, cat) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeCategory = cat;
  const subStrip = document.getElementById('ipadSubfilters');
  if (cat === 'iPad') {
    subStrip.style.display = '';
    activeIpadSubCategory = 'all';
    document.querySelectorAll('.ipad-sub-btn').forEach(b => b.classList.toggle('active', b.dataset.icat === 'all'));
  } else {
    subStrip.style.display = 'none';
    activeIpadSubCategory = 'all';
  }
  runSearch(document.getElementById('searchInput').value);
}

function setIpadSubFilter(btn, icat) {
  document.querySelectorAll('.ipad-sub-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeIpadSubCategory = icat;
  runSearch(document.getElementById('searchInput').value);
}

function renderDynamicIpadFilters() {
  const span = document.getElementById('dynamicIpadFilters');
  span.innerHTML = ipadCustomCategories.map(cat => `
    <button class="ipad-sub-btn" data-icat="${cat}" onclick="setIpadSubFilter(this,'${cat}')">${cat}</button>
  `).join('');
}

// -----------------------------------------------
// SEARCH
// -----------------------------------------------
function attachSearchListeners() {
  const input    = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearBtn');

  input.addEventListener('input', () => {
    clearBtn.style.display = input.value ? 'block' : 'none';
    runSearch(input.value);
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    clearBtn.style.display = 'none';
    showHomepage();
    input.focus();
  });

  document.querySelectorAll('#filters .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.cat;
      // Show iPad sub-filter strip only when iPad is selected
      const subStrip = document.getElementById('ipadSubfilters');
      if (activeCategory === 'iPad') {
        subStrip.style.display = '';
        activeIpadSubCategory = 'all';
        document.querySelectorAll('.ipad-sub-btn').forEach(b => b.classList.toggle('active', b.dataset.icat === 'all'));
      } else {
        subStrip.style.display = 'none';
        activeIpadSubCategory = 'all';
      }
      runSearch(input.value);
    });
  });

  // iPad sub-filter buttons (static ones wired here; dynamic ones use setIpadSubFilter)
  document.querySelectorAll('.ipad-sub-btn').forEach(btn => {
    btn.addEventListener('click', () => setIpadSubFilter(btn, btn.dataset.icat));
  });
}

function normalize(str) {
  return (str || '').toLowerCase().replace(/\s+/g,' ').replace(/[^a-z0-9 ]/g,'').trim();
}

const ALIASES = [
  [/\b(\d{2})\s*pm\b/g,  '$1 pro max'],
  [/\b(\d{2})\s*p\b/g,   '$1 pro'],
  [/\b(\d{2})[+]\b/g,    '$1 plus'],
  [/\biphone\s*/g,        'iphone '],
  [/\bsamsung\s*/g,       'samsung '],
  [/\bgalaxy\s*/g,        'samsung '],
  [/\bmoto\s*/g,          'motorola '],
  [/\bpixel\s*/g,         'pixel '],
  [/\bdigi\b/g,           'digitizer'],
];

function expandAliases(q) {
  let s = q.toLowerCase();
  ALIASES.forEach(([re, rep]) => { s = s.replace(re, rep); });
  return s.replace(/\s+/g,' ').trim();
}

function matchScore(entry, query) {
  if (!query) return 0;
  const q        = normalize(expandAliases(query));
  const model    = normalize(entry.model);
  const brand    = normalize(entry.brand);
  const type     = normalize(entry.repairType);
  const combined = `${brand} ${model} ${type}`;
  const keywords = (entry.keywords || []).map(normalize);

  if (combined === q) return 100;
  if (combined.includes(q)) return 80;
  if (model.includes(q)) return 75;
  if (keywords.some(k => k === q)) return 90;
  if (keywords.some(k => k.includes(q))) return 70;

  const tokens  = q.split(' ').filter(Boolean);
  const allMatch = tokens.every(t => combined.includes(t) || keywords.some(k => k.includes(t)));
  if (allMatch) return 60;

  const partial = tokens.filter(t => combined.includes(t) || keywords.some(k => k.includes(t)));
  if (partial.length >= Math.ceil(tokens.length / 2)) return 30;
  return 0;
}

const STATIC_CATS = ['iPhone','Samsung','Motorola','Google Pixel','iPad','Battery','Charging Port','Camera'];

function getRepairCategory(entry) {
  const type = (entry.repairType || '').toLowerCase();
  if (type === 'lcd' || type === 'digitizer') return entry.brand;
  if (type === 'battery') return 'Battery';
  if (type === 'charging port') return 'Charging Port';
  if (type === 'camera') return 'Camera';
  return entry.brand || 'Other';
}

function runSearch(query) {
  const q = query.trim();
  if (!q && activeCategory === 'all') { showHomepage(); return; }

  document.getElementById('mostUsed').style.display = 'none';
  document.getElementById('resultsSection').style.display = '';

  let results = repairs.map(entry => ({ entry, score: matchScore(entry, q) }));

  // Main category filter
  if (activeCategory !== 'all') {
    results = results.filter(({ entry }) => {
      const cat = getRepairCategory(entry);
      if (activeCategory === 'Other') {
        return !STATIC_CATS.includes(cat) && !customCategories.includes(cat);
      }
      return cat === activeCategory;
    });
    if (!q) results.forEach(r => r.score = 1);
  }

  // iPad sub-category filter (only active when category is iPad)
  if (activeCategory === 'iPad' && activeIpadSubCategory !== 'all') {
    results = results.filter(({ entry }) =>
      (entry.repairType || '').toLowerCase() === activeIpadSubCategory.toLowerCase()
    );
  }

  results = results.filter(r => r.score > 0).sort((a,b) => b.score - a.score);

  const grid = document.getElementById('resultsGrid');
  const meta = document.getElementById('resultsMeta');

  if (results.length === 0) {
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('noResults').style.display = '';
  } else {
    document.getElementById('noResults').style.display = 'none';
    meta.textContent = `${results.length} result${results.length !== 1 ? 's' : ''} found`;
    grid.innerHTML = results.map(r => renderCard(r.entry)).join('');
  }
}

function showHomepage() {
  document.getElementById('mostUsed').style.display = '';
  document.getElementById('resultsSection').style.display = 'none';
  document.getElementById('noResults').style.display = 'none';
}

// -----------------------------------------------
// RENDER CARD
// -----------------------------------------------
function typeClass(repairType) {
  const t = (repairType || '').toLowerCase();
  if (t === 'lcd')          return 'type-lcd';
  if (t === 'digitizer')    return 'type-digi';
  if (t === 'battery')      return 'type-battery';
  if (t === 'charging port')return 'type-charging';
  if (t === 'camera')       return 'type-camera';
  return 'type-other';
}

function fmt(val) {
  if (val == null || val === '') return null;
  return '$' + Number(val).toLocaleString();
}

function renderCard(entry) {
  const isLCD = entry.repairType === 'LCD';
  const npStr  = fmt(entry.nonProfit);
  const minStr = fmt(entry.minimum);
  const maxStr = fmt(entry.maximum);

  let pillsHTML = '';
  if (isLCD && npStr) {
    pillsHTML += `<div class="price-pill pill-np"><div class="price-pill-label">Non-Profit</div><div class="price-pill-value">${npStr}</div></div>`;
  }
  if (minStr) {
    pillsHTML += `<div class="price-pill pill-min"><div class="price-pill-label">Minimum</div><div class="price-pill-value">${minStr}</div></div>`;
  }
  if (maxStr) {
    pillsHTML += `<div class="price-pill pill-max"><div class="price-pill-label">Maximum</div><div class="price-pill-value">${maxStr}</div></div>`;
  }

  const variableNote = (!maxStr && minStr) ? '<p class="price-variable">Max price varies — quote based on parts availability.</p>' : '';

  return `
    <div class="price-card">
      <div class="card-brand">${entry.brand}</div>
      <div class="card-model">${entry.model}</div>
      <span class="card-type ${typeClass(entry.repairType)}">${entry.repairType}</span>
      <div class="card-prices">${pillsHTML}</div>
      ${variableNote}
    </div>`;
}

// -----------------------------------------------
// ADMIN FORM
// -----------------------------------------------
function handleRepairTypeChange() {
  const type   = document.getElementById('fRepairType').value;
  const npGroup = document.getElementById('npGroup');
  const npInput = document.getElementById('fNonProfit');
  if (type === 'LCD') {
    npGroup.style.display = '';
  } else {
    npGroup.style.display = 'none';
    npInput.value = '';
  }
}

function populateBrandSelect() {
  const sel = document.getElementById('fBrand');
  // Remove existing custom options (keep first 6: placeholder + 5 defaults)
  while (sel.options.length > 6) sel.remove(6);
  customCategories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat; opt.textContent = cat;
    sel.appendChild(opt);
  });
}

function genId() {
  return 'u' + Date.now() + Math.random().toString(36).slice(2,6);
}

function saveEntry() {
  const brand      = document.getElementById('fBrand').value.trim();
  const model      = document.getElementById('fModel').value.trim();
  const repairType = document.getElementById('fRepairType').value.trim();
  const nonProfit  = document.getElementById('fNonProfit').value;
  const minimum    = document.getElementById('fMin').value;
  const maximum    = document.getElementById('fMax').value;
  const kwRaw      = document.getElementById('fKeywords').value;
  const errEl      = document.getElementById('formError');

  errEl.textContent = '';
  if (!brand || !model || !repairType) { errEl.textContent = 'Brand, Model, and Repair Type are required.'; return; }
  if (!minimum) { errEl.textContent = 'Minimum Price is required.'; return; }

  const keywords = kwRaw.split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
  const entry = {
    id: editingId || genId(),
    brand, model, repairType,
    nonProfit: repairType === 'LCD' && nonProfit ? parseFloat(nonProfit) : null,
    minimum: parseFloat(minimum),
    maximum: maximum ? parseFloat(maximum) : null,
    keywords,
  };

  if (editingId) {
    const idx = repairs.findIndex(r => r.id === editingId);
    if (idx !== -1) repairs[idx] = entry;
  } else {
    repairs.push(entry);
  }

  saveData(repairs);
  resetForm();
  renderAdminList();
  updateAdminCount();
  toast(editingId ? '✅ Repair updated!' : '✅ New repair added!');
  editingId = null;
}

function resetForm() {
  ['fBrand','fModel','fRepairType','fNonProfit','fMin','fMax','fKeywords'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('npGroup').style.display = 'none';
  document.getElementById('formTitle').textContent = '➕ Add New Repair';
  document.getElementById('cancelEditBtn').style.display = 'none';
  document.getElementById('formError').textContent = '';
  editingId = null;
}
function cancelEdit() { resetForm(); }

function editEntry(id) {
  const entry = repairs.find(r => r.id === id);
  if (!entry) return;
  editingId = id;
  document.getElementById('fBrand').value      = entry.brand || '';
  document.getElementById('fModel').value      = entry.model || '';
  document.getElementById('fRepairType').value = entry.repairType || '';
  document.getElementById('fNonProfit').value  = entry.nonProfit || '';
  document.getElementById('fMin').value        = entry.minimum || '';
  document.getElementById('fMax').value        = entry.maximum || '';
  document.getElementById('fKeywords').value   = (entry.keywords || []).join(', ');
  handleRepairTypeChange();
  document.getElementById('formTitle').textContent = '✏️ Edit Repair';
  document.getElementById('cancelEditBtn').style.display = '';
  document.getElementById('formCard').scrollIntoView({ behavior:'smooth', block:'start' });
}

function deleteEntry(id) {
  const entry = repairs.find(r => r.id === id);
  if (!entry) return;
  if (!confirm(`Delete "${entry.model} — ${entry.repairType}"?\n\nThis cannot be undone.`)) return;
  repairs = repairs.filter(r => r.id !== id);
  saveData(repairs);
  renderAdminList();
  updateAdminCount();
  toast('🗑️ Entry deleted.');
}

// -----------------------------------------------
// ADMIN LIST
// -----------------------------------------------
function renderAdminList() {
  const q = normalize(document.getElementById('adminSearch').value);
  const list = document.getElementById('adminList');
  const filtered = q
    ? repairs.filter(r => normalize(r.brand + ' ' + r.model + ' ' + r.repairType).includes(q))
    : repairs;

  if (filtered.length === 0) {
    list.innerHTML = '<p style="color:var(--gray-500);font-size:14px;padding:20px 0;">No entries match.</p>';
    return;
  }

  list.innerHTML = filtered.map(entry => {
    const npStr  = entry.repairType === 'LCD' && entry.nonProfit ? `<span class="admin-price-tag tag-np">NP $${entry.nonProfit}</span>` : '';
    const minStr = entry.minimum ? `<span class="admin-price-tag tag-min">Min $${entry.minimum}</span>` : '';
    const maxStr = entry.maximum ? `<span class="admin-price-tag tag-max">Max $${entry.maximum}</span>` : '';
    return `
      <div class="admin-row">
        <div class="admin-row-info">
          <div class="admin-row-brand">${entry.brand}</div>
          <div class="admin-row-model">${entry.model}</div>
          <div class="admin-row-meta">${entry.repairType}</div>
        </div>
        <div class="admin-row-prices">${npStr}${minStr}${maxStr}</div>
        <div class="admin-row-btns">
          <button class="btn-edit"   onclick="editEntry('${entry.id}')">✏️ Edit</button>
          <button class="btn-delete" onclick="deleteEntry('${entry.id}')">🗑️ Delete</button>
        </div>
      </div>`;
  }).join('');
}

function updateAdminCount() {
  document.getElementById('adminCount').textContent = repairs.length;
}

// -----------------------------------------------
// ADD CATEGORY MODAL
// -----------------------------------------------
function openAddCategoryModal() {
  document.getElementById('catName').value = '';
  document.getElementById('catError').textContent = '';
  // Reset to global scope
  document.querySelector('input[name="catScope"][value="global"]').checked = true;
  updateCatScopeHint();
  document.getElementById('catModal').classList.add('open');
  setTimeout(() => document.getElementById('catName').focus(), 100);
}
function closeCatModal() {
  document.getElementById('catModal').classList.remove('open');
}
function closeCatModalOutside(e) {
  if (e.target === document.getElementById('catModal')) closeCatModal();
}
function updateCatScopeHint() {
  const scope = document.querySelector('input[name="catScope"]:checked').value;
  const hint = document.getElementById('catScopeHint');
  if (scope === 'ipad') {
    hint.textContent = 'Appears as a sub-filter under iPad (e.g. Battery, Camera, Face ID, Speaker).';
    document.getElementById('catName').placeholder = 'e.g. Battery, Camera, Face ID, Speaker…';
  } else {
    hint.textContent = 'Appears as a top-level filter and Brand option (e.g. iWatch, MacBook).';
    document.getElementById('catName').placeholder = 'e.g. iWatch, MacBook, Google Pixel Parts…';
  }
}
// Allow Enter key in modal
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('catName').addEventListener('keydown', e => {
    if (e.key === 'Enter') saveCategory();
    if (e.key === 'Escape') closeCatModal();
  });
});

function saveCategory() {
  const name  = document.getElementById('catName').value.trim();
  const scope = document.querySelector('input[name="catScope"]:checked').value;
  const errEl = document.getElementById('catError');
  errEl.textContent = '';

  if (!name) { errEl.textContent = 'Please enter a category name.'; return; }

  if (scope === 'ipad') {
    const existing = ['all','LCD','Digitizer', ...ipadCustomCategories];
    if (existing.map(c => c.toLowerCase()).includes(name.toLowerCase())) {
      errEl.textContent = 'That iPad category already exists.'; return;
    }
    ipadCustomCategories.push(name);
    saveIpadCustomCategories(ipadCustomCategories);
    renderDynamicIpadFilters();
    closeCatModal();
    toast(`✅ iPad category "${name}" added!`);
  } else {
    const allExisting = ['all','iPhone','Samsung','Motorola','Google Pixel','iPad','Battery','Charging Port','Camera','Other', ...customCategories];
    if (allExisting.map(c => c.toLowerCase()).includes(name.toLowerCase())) {
      errEl.textContent = 'That category already exists.'; return;
    }
    customCategories.push(name);
    saveCustomCategories(customCategories);
    renderDynamicFilters();
    populateBrandSelect();
    closeCatModal();
    toast(`✅ Category "${name}" added!`);
  }
}

// -----------------------------------------------
// EXPORT / IMPORT
// -----------------------------------------------
function exportData() {
  const payload = { repairs, customCategories, ipadCustomCategories };
  const json = JSON.stringify(payload, null, 2);
  const blob = new Blob([json], { type:'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url;
  a.download = 'repair-prices-backup-' + new Date().toISOString().slice(0,10) + '.json';
  a.click();
  URL.revokeObjectURL(url);
  toast('📥 Backup downloaded!');
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      let newRepairs, newCats, newIpadCats;
      if (Array.isArray(parsed)) {
        newRepairs = parsed; newCats = []; newIpadCats = [];
      } else if (parsed.repairs && Array.isArray(parsed.repairs)) {
        newRepairs   = parsed.repairs;
        newCats      = parsed.customCategories || [];
        newIpadCats  = parsed.ipadCustomCategories || [];
      } else {
        throw new Error('Invalid format');
      }
      if (!confirm(`Import ${newRepairs.length} repair entries?\n\nThis will REPLACE your current data.`)) return;
      repairs = newRepairs;
      customCategories = newCats;
      ipadCustomCategories = newIpadCats;
      saveData(repairs);
      saveCustomCategories(customCategories);
      saveIpadCustomCategories(ipadCustomCategories);
      renderAdminList();
      updateAdminCount();
      renderDynamicFilters();
      renderDynamicIpadFilters();
      populateBrandSelect();
      toast(`✅ Imported ${newRepairs.length} entries!`);
    } catch(err) {
      alert('Import failed — invalid file. Please use a backup exported from this tool.');
    }
    event.target.value = '';
  };
  reader.readAsText(file);
}

// -----------------------------------------------
// TOAST
// -----------------------------------------------
function toast(msg) {
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}
