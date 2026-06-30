/* =============================================
   REPAIR 1.0 / V1 — script.js
   Changes: Search fix · RON orb+chat · Boot loader
   ============================================= */

// -----------------------------------------------
// DEFAULT DATA
// -----------------------------------------------
const DEFAULT_DATA = [
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
  { id:'d40', brand:'iPhone', model:'iPhone Camera (X – 12 Pro Max)', repairType:'Camera', minimum:80,  maximum:100, keywords:['iphone camera','x camera','11 camera','12 camera','xs camera','xr camera'] },
  { id:'d41', brand:'iPhone', model:'iPhone Camera (13 / 14 / 14 Plus / 15 / 15 Plus)', repairType:'Camera', minimum:100, maximum:130, keywords:['13 camera','14 camera','15 camera'] },
  { id:'d42', brand:'iPhone', model:'iPhone Camera (13 Pro / 13 PM / 14 Pro / 14 PM)', repairType:'Camera', minimum:150, maximum:200, keywords:['13 pro camera','14 pro camera','13pm camera','14pm camera'] },
  { id:'d43', brand:'iPhone', model:'iPhone Proximity (Up to 12 Pro Max)', repairType:'Proximity', minimum:60, maximum:80, keywords:['proximity','iphone proximity','6 proximity','7 proximity','8 proximity','x proximity','11 proximity','12 proximity'] },
  { id:'d44', brand:'iPhone', model:'iPhone Proximity (13 – 15 Pro Max)', repairType:'Proximity', minimum:80, maximum:100, keywords:['13 proximity','14 proximity','15 proximity'] },
  { id:'d45', brand:'iPhone', model:'iPhone Charging Port / Speaker (Up to 12 Pro Max)', repairType:'Charging Port', minimum:60, maximum:100, keywords:['iphone charging','iphone port','charging port','6 port','7 port','8 port','x port','11 port','12 port','speaker','loud speaker'] },
  { id:'d46', brand:'iPhone', model:'iPhone Charging Port / Speaker (13 – 15 Pro Max)', repairType:'Charging Port', minimum:80, maximum:160, keywords:['13 port','14 port','15 port','13 charging','14 charging','15 charging'] },
  { id:'d47', brand:'iPhone', model:'iPhone Battery (8 / SE / X / XS / XS Max / XR)', repairType:'Battery', minimum:70, maximum:90, keywords:['8 battery','se battery','x battery','xs battery','xr battery'] },
  { id:'d48', brand:'iPhone', model:'iPhone Battery (11 / 11 Pro / 11 Pro Max)', repairType:'Battery', minimum:80, maximum:100, keywords:['11 battery','11 pro battery','11 pm battery'] },
  { id:'d49', brand:'iPhone', model:'iPhone Battery (12 / 12 Pro / 12 Pro Max)', repairType:'Battery', minimum:90, maximum:120, keywords:['12 battery','12 pro battery','12pm battery'] },
  { id:'d50', brand:'iPhone', model:'iPhone Battery (13 / 13 Pro / 13 Pro Max)', repairType:'Battery', minimum:80, maximum:120, keywords:['13 battery','13 pro battery','13pm battery'] },
  { id:'d51', brand:'iPhone', model:'iPhone Battery (14 / 14 Plus)', repairType:'Battery', minimum:80, maximum:120, keywords:['14 battery','14 plus battery'] },
  { id:'d52', brand:'iPhone', model:'iPhone Battery (14 Pro / 14 Pro Max)', repairType:'Battery', minimum:100, maximum:140, keywords:['14 pro battery','14pm battery'] },
  { id:'d53', brand:'iPhone', model:'iPhone Battery (15 / 15 Plus)', repairType:'Battery', minimum:100, maximum:150, keywords:['15 battery','15 plus battery'] },
  { id:'d54', brand:'iPhone', model:'iPhone Battery (15 Pro / 15 Pro Max)', repairType:'Battery', minimum:120, maximum:180, keywords:['15 pro battery','15pm battery'] },
  { id:'d55', brand:'iPhone', model:'iPhone Battery (16 Pro Max)', repairType:'Battery', minimum:140, maximum:200, keywords:['16 pro max battery','16pm battery'] },
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
  { id:'d110',brand:'Samsung', model:'Samsung Battery (All A Series)', repairType:'Battery', minimum:60,  maximum:80,  keywords:['samsung battery','a series battery','samsung a battery'] },
  { id:'d111',brand:'Samsung', model:'Samsung Battery (All S Series)', repairType:'Battery', minimum:120, maximum:120, keywords:['samsung s battery','s series battery','s20 battery','s21 battery','s22 battery','s23 battery'] },
  { id:'d112',brand:'Samsung', model:'Samsung Charging Port (All A Series)', repairType:'Charging Port', minimum:60, maximum:90,  keywords:['samsung charging','samsung a port'] },
  { id:'d113',brand:'Samsung', model:'Samsung Charging Port (All S Series)', repairType:'Charging Port', minimum:70, maximum:110, keywords:['samsung s port','samsung s charging','s21 port','s22 port','s23 port'] },
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
  { id:'dg1', brand:'iPad', model:'iPad 5/6 Touch Digitizer',      repairType:'Digitizer', minimum:90,  maximum:150, keywords:['ipad 5 digi','ipad 6 digi','ipad 5 digitizer','ipad 6 digitizer','ipad 5 touch','ipad 6 touch'] },
  { id:'dg2', brand:'iPad', model:'iPad 7/8/9 Touch Digitizer',    repairType:'Digitizer', minimum:90,  maximum:180, keywords:['ipad 7 digi','ipad 8 digi','ipad 9 digi','ipad 7 digitizer','ipad 7 touch'] },
  { id:'dg3', brand:'iPad', model:'iPad 10 Touch Digitizer',       repairType:'Digitizer', minimum:100, maximum:180, keywords:['ipad 10 digi','ipad 10 digitizer','ipad 10 touch'] },
  { id:'dg4', brand:'iPad', model:'iPad Air 1 Touch Digitizer',    repairType:'Digitizer', minimum:90,  maximum:140, keywords:['air 1 digi','air 1 touch','ipad air 1 digitizer'] },
  { id:'dg5', brand:'iPad', model:'iPad Mini 1/2 Touch Digitizer', repairType:'Digitizer', minimum:85,  maximum:140, keywords:['mini 1 digi','mini 2 digi','mini 1 touch','mini 2 touch'] },
  { id:'dg6', brand:'iPad', model:'iPad Mini 3 Touch Digitizer',   repairType:'Digitizer', minimum:180, maximum:360, keywords:['mini 3 digi','mini 3 touch','mini 3 digitizer'] },
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
const LS_KEY          = 'repairPriceData_v2';
const LS_CAT_KEY      = 'repairCustomCategories';
const LS_IPAD_CAT_KEY = 'repairIpadCustomCategories';

function loadData() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) { const p = JSON.parse(raw); if (Array.isArray(p) && p.length > 0) return p; }
  } catch(e) {}
  return null;
}
function saveData(data) { localStorage.setItem(LS_KEY, JSON.stringify(data)); }
function loadCustomCategories() {
  try { const r = localStorage.getItem(LS_CAT_KEY); if (r) return JSON.parse(r); } catch(e) {}
  return [];
}
function saveCustomCategories(c) { localStorage.setItem(LS_CAT_KEY, JSON.stringify(c)); }
function loadIpadCustomCategories() {
  try { const r = localStorage.getItem(LS_IPAD_CAT_KEY); if (r) return JSON.parse(r); } catch(e) {}
  return [];
}
function saveIpadCustomCategories(c) { localStorage.setItem(LS_IPAD_CAT_KEY, JSON.stringify(c)); }

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
// BOOT LOADER  (premium, minimal)
// -----------------------------------------------
function runBoot() {
  const loader = document.getElementById('bootLoader');
  const line1  = document.getElementById('bootLine1');
  const line2  = document.getElementById('bootLine2');
  const orbEl  = document.getElementById('bootOrb');
  if (!loader || !line1 || !line2) return;

  // Sequence: blank (300ms) → line 1 fades in → line 2 fades in beneath → orb flies → fade out
  setTimeout(() => {
    line1.textContent = 'nxtlevel server initialized';
    line1.classList.add('visible');
  }, 600);

  setTimeout(() => {
    line2.textContent = 'connecting to developer device…';
    line2.classList.add('visible');
  }, 1900);

  // Begin flight to corner at ~3.2s — text starts to fade
  setTimeout(() => {
    line1.classList.remove('visible');
    line2.classList.remove('visible');
  }, 3000);

  setTimeout(() => {
    if (orbEl) {
      // Lock current position so the transition is geometrically smooth
      const rect = orbEl.getBoundingClientRect();
      orbEl.style.position = 'fixed';
      orbEl.style.top  = rect.top + 'px';
      orbEl.style.left = rect.left + 'px';
      orbEl.style.margin = 0;
      // Force reflow before adding the destination class
      void orbEl.offsetWidth;
      orbEl.classList.add('fly-to-corner');
    }
  }, 3200);

  setTimeout(() => {
    loader.classList.add('fade-out');
    setTimeout(() => {
      loader.style.display = 'none';
      const realOrb = document.getElementById('ronOrb');
      if (realOrb) realOrb.style.opacity = '1';
    }, 850);
  }, 4200);
}

// -----------------------------------------------
// INIT
// -----------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  runBoot();
  initData();
  buildQuickGrid();
  attachSearchListeners();
  renderDynamicFilters();
  renderDynamicIpadFilters();
  populateBrandSelect();
  renderAdminList();
  updateAdminCount();
  ronInit();
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
    </button>`).join('');
}

function quickSearch(term) {
  document.getElementById('searchInput').value = term;
  activeCategory = 'all';
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === 'all'));
  runSearch(term);
}

// -----------------------------------------------
// DYNAMIC FILTERS
// -----------------------------------------------
function renderDynamicFilters() {
  document.getElementById('dynamicFilters').innerHTML = customCategories.map(cat =>
    `<button class="filter-btn" data-cat="${cat}" onclick="setFilter(this,'${cat}')">${cat}</button>`
  ).join('');
}

function setFilter(btn, cat) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeCategory = cat;
  const sub = document.getElementById('ipadSubfilters');
  if (cat === 'iPad') {
    sub.style.display = '';
    activeIpadSubCategory = 'all';
    document.querySelectorAll('.ipad-sub-btn').forEach(b => b.classList.toggle('active', b.dataset.icat === 'all'));
  } else {
    sub.style.display = 'none';
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
  document.getElementById('dynamicIpadFilters').innerHTML = ipadCustomCategories.map(cat =>
    `<button class="ipad-sub-btn" data-icat="${cat}" onclick="setIpadSubFilter(this,'${cat}')">${cat}</button>`
  ).join('');
}

// -----------------------------------------------
// SEARCH  (CHANGE 1 — precision fix)
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
      const sub = document.getElementById('ipadSubfilters');
      if (activeCategory === 'iPad') {
        sub.style.display = '';
        activeIpadSubCategory = 'all';
        document.querySelectorAll('.ipad-sub-btn').forEach(b => b.classList.toggle('active', b.dataset.icat === 'all'));
      } else {
        sub.style.display = 'none';
        activeIpadSubCategory = 'all';
      }
      runSearch(input.value);
    });
  });
  document.querySelectorAll('.ipad-sub-btn').forEach(btn => {
    btn.addEventListener('click', () => setIpadSubFilter(btn, btn.dataset.icat));
  });
}

function normalize(str) {
  return (str || '').toLowerCase().replace(/\s+/g,' ').replace(/[^a-z0-9 ]/g,'').trim();
}

// Alias table: casual shorthand → canonical form
const ALIASES = [
  [/\b(\d{2})\s*pm\b/g,        '$1 pro max'],
  [/\b(\d{2})\s*p\b/g,         '$1 pro'],
  [/\b(\d{2})[+]\b/g,          '$1 plus'],
  [/\bip\b/g,                   'iphone'],
  [/\biphone\s*/g,              'iphone '],
  [/\bsamsung\s*/g,             'samsung '],
  [/\bgalaxy\s*/g,              'samsung '],
  [/\bmoto\s*/g,                'motorola '],
  [/\bpixel\s*/g,               'pixel '],
  [/\bdigi\b/g,                 'digitizer'],
  [/\bscreen\b/g,               'lcd'],
  [/\bdisplay\b/g,              'lcd'],
  [/\bcharge port\b/g,          'charging port'],
  [/\bcharger port\b/g,         'charging port'],
  [/\bcharge\b/g,               'charging'],
  [/\bcam\b/g,                  'camera'],
  [/\bfix\b/g,                  ''],
  [/\bhow much (to|for)\b/g,    ''],
  [/\bprice\b/g,                ''],
  [/\bcost\b/g,                 ''],
];

function expandAliases(q) {
  let s = q.toLowerCase();
  ALIASES.forEach(([re, rep]) => { s = s.replace(re, rep); });
  return s.replace(/\s+/g,' ').trim();
}

// ---- PRECISION SEARCH: prevent "iPhone 11" matching "iPhone 12", "13", etc. ----
// Extract a model number token if present (e.g. "11", "13", "8a", "s23", "a15")
function extractModelNumber(q) {
  // Match patterns like: 11, 13, 15, 8a, s23, a15, 7a, 9a, 9 pro, etc.
  const m = q.match(/\b(s\d+|a\d+|\d+[a-z]?)\b/i);
  return m ? m[1].toLowerCase() : null;
}

function modelNumberMatches(entry, queryModelNum) {
  if (!queryModelNum) return true; // no number constraint — let everything through
  const haystack = normalize(entry.model) + ' ' + (entry.keywords || []).map(normalize).join(' ');

  // If query has a prefixed token like 'a15' or 's23', match it exactly
  if (/^[sa]\d+/i.test(queryModelNum)) {
    const re = new RegExp('\\b' + queryModelNum.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + '\\b');
    return re.test(haystack);
  }

  // Otherwise it's a bare number like '11', '13'. Match either bare ('iphone 11')
  // or check if entry's brand context implies the same number lineage.
  const bareRe = new RegExp('\\b' + queryModelNum.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + '\\b');
  return bareRe.test(haystack);
}

function matchScore(entry, query) {
  if (!query) return 0;
  const expanded  = expandAliases(query);
  const q         = normalize(expanded);
  const model     = normalize(entry.model);
  const brand     = normalize(entry.brand);
  const type      = normalize(entry.repairType);
  const combined  = `${brand} ${model} ${type}`;
  const keywords  = (entry.keywords || []).map(normalize);

  // --- PRECISION GATE ---
  // If the query contains a model number, ONLY entries whose model also contains that exact number pass
  const queryModelNum = extractModelNumber(q);
  if (queryModelNum && !modelNumberMatches(entry, queryModelNum)) return 0;

  if (combined === q) return 100;
  if (combined.includes(q)) return 80;
  if (model.includes(q)) return 75;
  if (keywords.some(k => k === q)) return 90;
  if (keywords.some(k => k.includes(q))) return 70;

  const tokens   = q.split(' ').filter(Boolean);
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

  if (activeCategory !== 'all') {
    results = results.filter(({ entry }) => {
      const cat = getRepairCategory(entry);
      if (activeCategory === 'Other') return !STATIC_CATS.includes(cat) && !customCategories.includes(cat);
      return cat === activeCategory;
    });
    if (!q) results.forEach(r => r.score = 1);
  }

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
function typeClass(t) {
  t = (t||'').toLowerCase();
  if (t==='lcd')           return 'type-lcd';
  if (t==='digitizer')     return 'type-digi';
  if (t==='battery')       return 'type-battery';
  if (t==='charging port') return 'type-charging';
  if (t==='camera')        return 'type-camera';
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
  let pills = '';
  if (isLCD && npStr) pills += `<div class="price-pill pill-np"><div class="price-pill-label">Non-Profit</div><div class="price-pill-value">${npStr}</div></div>`;
  if (minStr)          pills += `<div class="price-pill pill-min"><div class="price-pill-label">Minimum</div><div class="price-pill-value">${minStr}</div></div>`;
  if (maxStr)          pills += `<div class="price-pill pill-max"><div class="price-pill-label">Maximum</div><div class="price-pill-value">${maxStr}</div></div>`;
  const note = (!maxStr && minStr) ? '<p class="price-variable">Max price varies — quote based on parts availability.</p>' : '';
  return `<div class="price-card">
    <div class="card-brand">${entry.brand}</div>
    <div class="card-model">${entry.model}</div>
    <span class="card-type ${typeClass(entry.repairType)}">${entry.repairType}</span>
    <div class="card-prices">${pills}</div>${note}
  </div>`;
}

// -----------------------------------------------
// ADMIN FORM
// -----------------------------------------------
function handleRepairTypeChange() {
  const type = document.getElementById('fRepairType').value;
  const npGroup = document.getElementById('npGroup');
  document.getElementById('fNonProfit').value = '';
  npGroup.style.display = type === 'LCD' ? '' : 'none';
}
function populateBrandSelect() {
  const sel = document.getElementById('fBrand');
  while (sel.options.length > 6) sel.remove(6);
  customCategories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat; opt.textContent = cat;
    sel.appendChild(opt);
  });
}
function genId() { return 'u' + Date.now() + Math.random().toString(36).slice(2,6); }

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
    id: editingId || genId(), brand, model, repairType,
    nonProfit: repairType === 'LCD' && nonProfit ? parseFloat(nonProfit) : null,
    minimum: parseFloat(minimum),
    maximum: maximum ? parseFloat(maximum) : null,
    keywords,
  };
  if (editingId) {
    const idx = repairs.findIndex(r => r.id === editingId);
    if (idx !== -1) repairs[idx] = entry;
  } else { repairs.push(entry); }
  saveData(repairs);
  resetForm();
  renderAdminList();
  updateAdminCount();
  toast(editingId ? '✅ Repair updated!' : '✅ New repair added!');
  editingId = null;
}
function resetForm() {
  ['fBrand','fModel','fRepairType','fNonProfit','fMin','fMax','fKeywords'].forEach(id => document.getElementById(id).value = '');
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
  document.getElementById('fKeywords').value   = (entry.keywords||[]).join(', ');
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
    ? repairs.filter(r => normalize(r.brand+' '+r.model+' '+r.repairType).includes(q))
    : repairs;
  if (filtered.length === 0) {
    list.innerHTML = '<p style="color:var(--gray-500);font-size:14px;padding:20px 0;">No entries match.</p>';
    return;
  }
  list.innerHTML = filtered.map(entry => {
    const npStr  = entry.repairType==='LCD' && entry.nonProfit ? `<span class="admin-price-tag tag-np">NP $${entry.nonProfit}</span>` : '';
    const minStr = entry.minimum ? `<span class="admin-price-tag tag-min">Min $${entry.minimum}</span>` : '';
    const maxStr = entry.maximum ? `<span class="admin-price-tag tag-max">Max $${entry.maximum}</span>` : '';
    return `<div class="admin-row">
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
function updateAdminCount() { document.getElementById('adminCount').textContent = repairs.length; }

// -----------------------------------------------
// ADD CATEGORY MODAL
// -----------------------------------------------
function openAddCategoryModal() {
  document.getElementById('catName').value = '';
  document.getElementById('catError').textContent = '';
  document.querySelector('input[name="catScope"][value="global"]').checked = true;
  updateCatScopeHint();
  document.getElementById('catModal').classList.add('open');
  setTimeout(() => document.getElementById('catName').focus(), 100);
}
function closeCatModal() { document.getElementById('catModal').classList.remove('open'); }
function closeCatModalOutside(e) { if (e.target===document.getElementById('catModal')) closeCatModal(); }
function updateCatScopeHint() {
  const scope = document.querySelector('input[name="catScope"]:checked').value;
  const hint  = document.getElementById('catScopeHint');
  if (scope==='ipad') {
    hint.textContent = 'Appears as a sub-filter under iPad (e.g. Battery, Camera, Face ID, Speaker).';
    document.getElementById('catName').placeholder = 'e.g. Battery, Camera, Face ID, Speaker…';
  } else {
    hint.textContent = 'Appears as a top-level filter and Brand option (e.g. iWatch, MacBook).';
    document.getElementById('catName').placeholder = 'e.g. iWatch, MacBook, Google Pixel Parts…';
  }
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('catName').addEventListener('keydown', e => {
    if (e.key==='Enter') saveCategory();
    if (e.key==='Escape') closeCatModal();
  });
});
function saveCategory() {
  const name  = document.getElementById('catName').value.trim();
  const scope = document.querySelector('input[name="catScope"]:checked').value;
  const errEl = document.getElementById('catError');
  errEl.textContent = '';
  if (!name) { errEl.textContent = 'Please enter a category name.'; return; }
  if (scope==='ipad') {
    const existing = ['all','LCD','Digitizer',...ipadCustomCategories];
    if (existing.map(c=>c.toLowerCase()).includes(name.toLowerCase())) { errEl.textContent='That iPad category already exists.'; return; }
    ipadCustomCategories.push(name);
    saveIpadCustomCategories(ipadCustomCategories);
    renderDynamicIpadFilters();
    closeCatModal();
    toast(`✅ iPad category "${name}" added!`);
  } else {
    const allExisting = ['all','iPhone','Samsung','Motorola','Google Pixel','iPad','Battery','Charging Port','Camera','Other',...customCategories];
    if (allExisting.map(c=>c.toLowerCase()).includes(name.toLowerCase())) { errEl.textContent='That category already exists.'; return; }
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
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type:'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url;
  a.download = 'repair-prices-backup-' + new Date().toISOString().slice(0,10) + '.json';
  a.click();
  URL.revokeObjectURL(url);
  toast('📥 Backup downloaded!');
}
function importData(event) {
  const file = event.target.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      let nr, nc, ni;
      if (Array.isArray(parsed)) { nr=parsed; nc=[]; ni=[]; }
      else if (parsed.repairs && Array.isArray(parsed.repairs)) { nr=parsed.repairs; nc=parsed.customCategories||[]; ni=parsed.ipadCustomCategories||[]; }
      else throw new Error();
      if (!confirm(`Import ${nr.length} repair entries?\n\nThis will REPLACE your current data.`)) return;
      repairs=nr; customCategories=nc; ipadCustomCategories=ni;
      saveData(repairs); saveCustomCategories(customCategories); saveIpadCustomCategories(ipadCustomCategories);
      renderAdminList(); updateAdminCount(); renderDynamicFilters(); renderDynamicIpadFilters(); populateBrandSelect();
      toast(`✅ Imported ${nr.length} entries!`);
    } catch { alert('Import failed — invalid file.'); }
    event.target.value = '';
  };
  reader.readAsText(file);
}

// -----------------------------------------------
// TOAST
// -----------------------------------------------
function toast(msg) {
  const el = document.createElement('div');
  el.className = 'toast'; el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

// ===============================================
// RON — AI ORB ASSISTANT
// ===============================================

// --- Idle speech bubbles ---
const RON_IDLE_BUBBLES = [
  'Need my help?',
  'I know every repair price.',
  'Still searching manually?',
  'Click me.',
  'I\'ll make this faster.',
  'RON is online.',
  'Hey... over here.',
  'Ask me anything.',
  'I can find any price.',
  'I\'m still here...',
];

// --- Personality responses ---
const RON_GREETINGS = [
  "Hey, I'm RON. Your personal repair assistant. What repair price can I help you with?"
];

// --- Idle bubbles (20–45s interval) ---
const RON_IDLE_BUBBLES_V2 = [
  'Need a price?',
  "I'll help.",
  'Still searching manually?',
  'Ask me.',
];

// --- Unrelated topic guard ---
const UNRELATED_KEYWORDS = [
  'weather','joke','movie','politics','election','president','ronaldo','messi',
  'football','soccer','basketball','programming','code','recipe','food','song',
  'music','tell me about','story','news','stock','crypto','bitcoin','game','sport',
  'who is','what is the meaning','girlfriend','poem','translate','homework',
  'math','algebra','philosophy','language','dog','cat'
];
const UNRELATED_REPLY = "Sorry, I'm too simple to answer that. Try asking me for a repair price.";

// --- RON state ---
let ronOpen         = false;
let ronIdleTimer    = null;
let ronAnnoyTimer   = null;
let ronBubbleTimer  = null;
let ronMood         = 'normal'; // normal | thinking | happy | confused | annoyed | sleeping
let ronAddFlow      = null;     // { stage, brand, model, repairType, nonProfit }
let ronLastActivity = Date.now();

// --- RON orb mood ---
function ronSetMood(mood, duration = 2000) {
  const orb = document.getElementById('ronOrb');
  if (!orb) return;
  orb.classList.remove('mood-thinking','mood-happy','mood-confused','mood-annoyed','mood-sleeping');
  if (mood !== 'normal') {
    orb.classList.add('mood-' + mood);
    if (duration > 0) setTimeout(() => {
      orb.classList.remove('mood-' + mood);
      ronMood = 'normal';
    }, duration);
  }
  ronMood = mood;
}

// --- Speech bubble beside orb ---
function ronShowBubble(text, durationMs = 3500) {
  const bubble = document.getElementById('ronBubble');
  if (!bubble || ronOpen) return;
  bubble.textContent = text;
  bubble.style.display = 'block';
  clearTimeout(ronBubbleTimer);
  ronBubbleTimer = setTimeout(() => { bubble.style.display = 'none'; }, durationMs);
}

// --- Idle timer: show bubbles after inactivity (Change 5) ---
function ronResetIdleTimer() {
  ronLastActivity = Date.now();
  clearTimeout(ronIdleTimer);
  clearTimeout(ronAnnoyTimer);
  if (!ronOpen) {
    // Random interval 20-45s
    const delay = 20000 + Math.floor(Math.random() * 25000);
    ronIdleTimer = setTimeout(() => {
      const msg = RON_IDLE_BUBBLES_V2[Math.floor(Math.random() * RON_IDLE_BUBBLES_V2.length)];
      ronShowBubble(msg, 4000);
      ronSetMood('normal', 0);
      // After bubble fades, schedule the next one
      setTimeout(() => ronResetIdleTimer(), 4500);
      // Annoyed phase after very long ignore
      ronAnnoyTimer = setTimeout(() => {
        if (!ronOpen) {
          ronSetMood('annoyed', 2000);
          const annoyMsgs = ["I'm still here.", "Need a price?", "Still searching manually?"];
          ronShowBubble(annoyMsgs[Math.floor(Math.random()*annoyMsgs.length)], 4000);
        }
      }, 60000);
    }, delay);
  }
}

// --- Toggle open/close ---
function ronToggle() {
  ronOpen = !ronOpen;
  const panel  = document.getElementById('ronPanel');
  const bubble = document.getElementById('ronBubble');
  bubble.style.display = 'none';
  clearTimeout(ronBubbleTimer);

  if (ronOpen) {
    panel.style.display = 'flex';
    ronSetMood('normal', 0);
    clearTimeout(ronIdleTimer);
    clearTimeout(ronAnnoyTimer);
    if (document.getElementById('ronMessages').children.length === 0) {
      ronAppend('ron', RON_GREETINGS[0]);
    }
    setTimeout(() => document.getElementById('ronInput').focus(), 100);
  } else {
    panel.style.display = 'none';
    ronAddFlow = null;
    ronResetIdleTimer();
  }
}

// --- Append message to chat ---
function ronAppend(who, content, isHtml = false) {
  const box = document.getElementById('ronMessages');
  const wrap = document.createElement('div');
  wrap.className = 'ron-msg ' + who;

  if (who === 'ron') {
    const uid = 'a' + Date.now() + Math.random().toString(36).slice(2,6);
    wrap.innerHTML = `
      <div class="ron-msg-avatar">
        <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="${uid}-shell" cx="38%" cy="32%" r="72%">
              <stop offset="0%"   stop-color="#0a2418" stop-opacity="0.9"/>
              <stop offset="60%"  stop-color="#020906"/>
              <stop offset="100%" stop-color="#000000"/>
            </radialGradient>
            <radialGradient id="${uid}-plasma" cx="40%" cy="38%" r="55%">
              <stop offset="0%"  stop-color="#9affc4" stop-opacity="0.95"/>
              <stop offset="35%" stop-color="#1aff7c" stop-opacity="0.6"/>
              <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
            </radialGradient>
            <radialGradient id="${uid}-halo" cx="50%" cy="50%" r="50%">
              <stop offset="0%"  stop-color="#3dff8a" stop-opacity="0.5"/>
              <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
            </radialGradient>
            <clipPath id="${uid}-clip"><circle cx="18" cy="18" r="13"/></clipPath>
          </defs>
          <circle cx="18" cy="18" r="17" fill="url(#${uid}-halo)"/>
          <circle cx="18" cy="18" r="13" fill="url(#${uid}-shell)"/>
          <g clip-path="url(#${uid}-clip)">
            <ellipse cx="18" cy="18" rx="12" ry="10" fill="url(#${uid}-plasma)"/>
          </g>
          <ellipse cx="14" cy="13" rx="3.5" ry="1.8" fill="#ffffff" opacity="0.35" transform="rotate(-22 14 13)"/>
        </svg>
      </div>`;
    const bubble = document.createElement('div');
    bubble.className = 'ron-msg-bubble';
    if (isHtml) bubble.innerHTML = content;
    else bubble.textContent = content;
    wrap.appendChild(bubble);
  } else {
    const bubble = document.createElement('div');
    bubble.className = 'ron-msg-bubble';
    bubble.textContent = content;
    wrap.appendChild(bubble);
  }

  box.appendChild(wrap);
  box.scrollTop = box.scrollHeight;
}

// --- Thinking animation ---
function ronThinkingStart() {
  ronSetMood('thinking', 0);
  document.getElementById('ronStatus').textContent = '● Searching...';
  const box  = document.getElementById('ronMessages');
  const dots = document.createElement('div');
  dots.className = 'ron-msg ron';
  dots.id = 'ronThinkDots';
  dots.innerHTML = `<div class="ron-msg-avatar"><svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="thinkShell" cx="38%" cy="32%" r="72%">
        <stop offset="0%"   stop-color="#0a2418" stop-opacity="0.9"/>
        <stop offset="60%"  stop-color="#020906"/>
        <stop offset="100%" stop-color="#000000"/>
      </radialGradient>
      <radialGradient id="thinkPlasma" cx="40%" cy="38%" r="55%">
        <stop offset="0%"  stop-color="#9affc4" stop-opacity="0.95"/>
        <stop offset="35%" stop-color="#1aff7c" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="thinkHalo" cx="50%" cy="50%" r="50%">
        <stop offset="0%"  stop-color="#3dff8a" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
      </radialGradient>
      <clipPath id="thinkClip"><circle cx="18" cy="18" r="13"/></clipPath>
    </defs>
    <circle cx="18" cy="18" r="17" fill="url(#thinkHalo)"/>
    <circle cx="18" cy="18" r="13" fill="url(#thinkShell)"/>
    <g clip-path="url(#thinkClip)">
      <ellipse cx="18" cy="18" rx="12" ry="10" fill="url(#thinkPlasma)"/>
    </g>
    <ellipse cx="14" cy="13" rx="3.5" ry="1.8" fill="#ffffff" opacity="0.35" transform="rotate(-22 14 13)"/>
    </svg></div>
    <div class="ron-msg-bubble"><div class="ron-thinking"><span></span><span></span><span></span></div></div>`;
  box.appendChild(dots);
  box.scrollTop = box.scrollHeight;
}
function ronThinkingStop() {
  document.getElementById('ronStatus').textContent = '● Online';
  const d = document.getElementById('ronThinkDots');
  if (d) d.remove();
}

// --- Build RON price card HTML ---
function ronBuildCard(entry) {
  const isLCD = entry.repairType === 'LCD';
  const npStr  = fmt(entry.nonProfit);
  const minStr = fmt(entry.minimum);
  const maxStr = fmt(entry.maximum);
  let pills = '';
  if (isLCD && npStr) pills += `<div class="ron-card-pill p-np"><div class="ron-card-pill-label">Non-Profit</div><div class="ron-card-pill-value">${npStr}</div></div>`;
  if (minStr)          pills += `<div class="ron-card-pill p-min"><div class="ron-card-pill-label">Minimum</div><div class="ron-card-pill-value">${minStr}</div></div>`;
  if (maxStr)          pills += `<div class="ron-card-pill p-max"><div class="ron-card-pill-label">Maximum</div><div class="ron-card-pill-value">${maxStr}</div></div>`;
  return `<div class="ron-price-card">
    <div class="ron-card-brand">${entry.brand}</div>
    <div class="ron-card-model">${entry.model}</div>
    <span class="ron-card-type">${entry.repairType}</span>
    <div class="ron-card-prices">${pills}</div>
  </div>`;
}

// --- RON search prices ---
function ronSearchRepairs(rawQuery) {
  return repairs
    .map(entry => ({ entry, score: matchScore(entry, rawQuery) }))
    .filter(r => r.score > 0)
    .sort((a,b) => b.score - a.score)
    .map(r => r.entry);
}

// --- Parse what the user is actually asking for ---
// Returns { brand, modelNum, repairType } — any field may be null.
function parseQueryIntent(rawQuery) {
  const expanded = expandAliases(rawQuery);
  const q = expanded.toLowerCase();

  // Brand detection (after alias expansion, 'ip' is already 'iphone')
  let brand = null;
  if (/\biphone\b/.test(q))               brand = 'iPhone';
  else if (/\bipad\b/.test(q))            brand = 'iPad';
  else if (/\b(samsung|galaxy)\b/.test(q))brand = 'Samsung';
  else if (/\bpixel\b/.test(q))           brand = 'Google Pixel';
  else if (/\b(moto|motorola)\b/.test(q)) brand = 'Motorola';

  // Repair type detection (aliases already expanded: screen→lcd, display→lcd, cam→camera, digi→digitizer)
  let repairType = null;
  if (/\blcd\b/.test(q))                          repairType = 'LCD';
  else if (/\bdigitizer\b/.test(q))               repairType = 'Digitizer';
  else if (/\bbattery\b/.test(q))                 repairType = 'Battery';
  else if (/\bcharging\b|\bport\b/.test(q))       repairType = 'Charging Port';
  else if (/\bcamera\b/.test(q))                  repairType = 'Camera';
  else if (/\bproximity\b/.test(q))               repairType = 'Proximity';
  else if (/\bspeaker\b/.test(q))                 repairType = 'Charging Port'; // grouped in data

  // Model number (uses existing helper)
  const modelNum = extractModelNumber(normalize(q));

  return { brand, modelNum, repairType };
}

// --- Is the query specific enough that we should answer immediately? ---
// True when at least (brand + modelNum) OR (modelNum + repairType with brand) is present.
function isSpecificEnough(intent) {
  if (intent.brand && intent.modelNum)                   return true;  // e.g. "iphone 11"
  if (intent.brand && intent.modelNum && intent.repairType) return true; // e.g. "iphone 13 lcd"
  if (intent.brand && intent.repairType && intent.modelNum) return true; // same
  return false;
}

// --- Filter results to a specific repairType when the user named one ---
function filterByRepairType(results, repairType) {
  if (!repairType) return results;
  return results.filter(e => (e.repairType || '').toLowerCase() === repairType.toLowerCase());
}

// --- Parse "add X" intent ---
function ronParseAdd(input) {
  const lower = input.toLowerCase().replace(/^add\s*/,'').trim();
  // Try to detect repairType
  let repairType = null;
  if (/\blcd\b|screen|display/.test(lower)) repairType = 'LCD';
  else if (/battery/.test(lower)) repairType = 'Battery';
  else if (/charg|port/.test(lower)) repairType = 'Charging Port';
  else if (/camera|cam/.test(lower)) repairType = 'Camera';
  else if (/digi/.test(lower)) repairType = 'Digitizer';

  // Strip repair type words to get model name
  let modelRaw = lower
    .replace(/\blcd\b|screen|display|battery|charging port|charger port|charge port|camera|cam|digitizer|digi/g,'')
    .replace(/\s+/g,' ').trim();

  // Detect brand
  let brand = null;
  if (/\biphone\b|\bip\b/.test(modelRaw)) brand = 'iPhone';
  else if (/\bsamsung\b|\bgalaxy\b/.test(modelRaw)) brand = 'Samsung';
  else if (/\bpixel\b/.test(modelRaw)) brand = 'Google Pixel';
  else if (/\bmoto\b|\bmotorola\b/.test(modelRaw)) brand = 'Motorola';
  else if (/\bipad\b/.test(modelRaw)) brand = 'iPad';

  // Capitalize model
  const model = modelRaw.replace(/\b\w/g, c => c.toUpperCase()).trim();
  return { brand, model, repairType };
}

// --- Main RON process message ---
function ronProcess(input) {
  const raw   = input.trim();
  const lower = raw.toLowerCase();

  ronLastActivity = Date.now();

  // ---- ADD FLOW ----
  if (ronAddFlow) {
    const stage = ronAddFlow.stage;

    if (stage === 'confirm') {
      if (/yes|yeah|yep|save|confirm|ok|sure/.test(lower)) {
        // Save to repairs
        const entry = {
          id: genId(),
          brand:      ronAddFlow.brand,
          model:      ronAddFlow.model,
          repairType: ronAddFlow.repairType,
          nonProfit:  ronAddFlow.repairType === 'LCD' && ronAddFlow.nonProfit ? parseFloat(ronAddFlow.nonProfit) : null,
          minimum:    parseFloat(ronAddFlow.minimum),
          maximum:    ronAddFlow.maximum ? parseFloat(ronAddFlow.maximum) : null,
          keywords:   [ronAddFlow.model.toLowerCase(), ronAddFlow.brand.toLowerCase() + ' ' + ronAddFlow.model.toLowerCase()],
        };
        repairs.push(entry);
        saveData(repairs);
        renderAdminList();
        updateAdminCount();
        ronAddFlow = null;
        ronSetMood('happy', 1500);
        ronThinkingStop();
        ronAppend('ron', `Saved. ${entry.model} — ${entry.repairType} is now in the system. You can find it in search too.`);
        return;
      } else if (/no|nope|cancel|stop/.test(lower)) {
        ronAddFlow = null;
        ronAppend('ron', 'Got it. Cancelled.');
        return;
      } else {
        ronAppend('ron', 'Just say yes to save or no to cancel.');
        return;
      }
    }

    if (stage === 'np') {
      if (isNaN(parseFloat(raw))) { ronAppend('ron', 'Give me a number — like 140'); return; }
      ronAddFlow.nonProfit = raw;
      ronAddFlow.stage = 'min';
      ronAppend('ron', 'Got it. Minimum price?');
      return;
    }
    if (stage === 'min') {
      if (isNaN(parseFloat(raw))) { ronAppend('ron', 'Number only — like 180'); return; }
      ronAddFlow.minimum = raw;
      ronAddFlow.stage = 'max';
      ronAppend('ron', 'Maximum price?');
      return;
    }
    if (stage === 'max') {
      if (isNaN(parseFloat(raw)) && !/skip|none|var/i.test(raw)) { ronAppend('ron', 'Number, or say "skip" if it varies.'); return; }
      ronAddFlow.maximum = /skip|none|var/i.test(raw) ? null : raw;
      ronAddFlow.stage = 'confirm';
      const npLine = ronAddFlow.repairType === 'LCD' && ronAddFlow.nonProfit ? `\nNon-Profit: $${ronAddFlow.nonProfit}` : '';
      const maxLine = ronAddFlow.maximum ? `\nMaximum: $${ronAddFlow.maximum}` : '\nMaximum: varies';
      ronAppend('ron', `Here's what I have:\n\nBrand: ${ronAddFlow.brand || 'Unknown'}\nModel: ${ronAddFlow.model}\nType: ${ronAddFlow.repairType}${npLine}\nMinimum: $${ronAddFlow.minimum}${maxLine}\n\nSave this?`);
      return;
    }
    if (stage === 'brand') {
      ronAddFlow.brand = raw.trim();
      ronAddFlow.stage = ronAddFlow.repairType === 'LCD' ? 'np' : 'min';
      if (ronAddFlow.repairType === 'LCD') ronAppend('ron', `Got it. Non-profit price for ${ronAddFlow.model}?`);
      else ronAppend('ron', `Got it. Minimum price for ${ronAddFlow.model}?`);
      return;
    }
    if (stage === 'repairType') {
      let rt = null;
      if (/lcd|screen|display/.test(lower)) rt = 'LCD';
      else if (/battery/.test(lower)) rt = 'Battery';
      else if (/charg|port/.test(lower)) rt = 'Charging Port';
      else if (/camera|cam/.test(lower)) rt = 'Camera';
      else if (/digi/.test(lower)) rt = 'Digitizer';
      if (!rt) { ronAppend('ron', 'What type? LCD, Battery, Charging Port, Camera, or Digitizer?'); return; }
      ronAddFlow.repairType = rt;
      ronAddFlow.stage = ronAddFlow.repairType === 'LCD' ? 'np' : 'min';
      if (ronAddFlow.repairType === 'LCD') ronAppend('ron', `Non-profit price?`);
      else ronAppend('ron', `Minimum price?`);
      return;
    }
  }

  // ---- ADD INTENT ----
  if (/^add\s+.+/.test(lower)) {
    const parsed = ronParseAdd(raw);
    ronAddFlow = { stage: null, ...parsed };
    if (!parsed.model || parsed.model.length < 2) {
      ronAddFlow = null;
      ronAppend('ron', 'What model do you want to add? Like: add iPhone 18 LCD');
      return;
    }
    if (!parsed.brand) {
      ronAddFlow.stage = 'brand';
      ronAppend('ron', `What brand is "${parsed.model}"? iPhone, Samsung, Google Pixel, Motorola, iPad?`);
      return;
    }
    if (!parsed.repairType) {
      ronAddFlow.stage = 'repairType';
      ronAppend('ron', `What repair type for ${parsed.model}? LCD, Battery, Charging Port, Camera, or Digitizer?`);
      return;
    }
    ronAddFlow.stage = parsed.repairType === 'LCD' ? 'np' : 'min';
    if (parsed.repairType === 'LCD') ronAppend('ron', `Got it — ${parsed.brand} ${parsed.model} LCD. Non-profit price?`);
    else ronAppend('ron', `Got it — ${parsed.brand} ${parsed.model} ${parsed.repairType}. Minimum price?`);
    return;
  }

  // ---- GREETING ----
  if (/^(hi|hey|hello|yo|sup|what'?s up|wassup|ron\??$)/.test(lower)) {
    ronAppend('ron', RON_GREETINGS[0]);
    return;
  }

  // ---- UNRELATED TOPIC GUARD (Change 8) ----
  // Only trigger if the message is clearly off-topic — has no repair/model words
  // AND contains a known unrelated keyword OR is a long sentence without numbers
  const looksLikePriceQuery = /\b(iphone|ipad|samsung|galaxy|pixel|moto|ip|lcd|screen|display|battery|charging|charge|camera|cam|digi|digitizer|port|speaker|proximity|fix|repair|cost|price|how much|s\d+|a\d+|\d+[a-z]?|add)\b/i.test(lower);
  const looksUnrelated = UNRELATED_KEYWORDS.some(k => lower.includes(k));
  if (!looksLikePriceQuery && (looksUnrelated || lower.split(/\s+/).length >= 4)) {
    ronSetMood('confused', 1500);
    ronAppend('ron', UNRELATED_REPLY);
    return;
  }

  // ---- PRICE SEARCH ----
  ronThinkingStart();
  ronSetMood('thinking', 0);

  setTimeout(() => {
    ronThinkingStop();
    let results = ronSearchRepairs(raw);
    const intent = parseQueryIntent(raw);

    if (results.length === 0) {
      ronSetMood('confused', 2000);
      ronAppend('ron', "Call your manager for price info please. I don't have that data yet.");
      return;
    }

    // If the user named a repair type, narrow to that type
    if (intent.repairType) {
      const filtered = filterByRepairType(results, intent.repairType);
      if (filtered.length > 0) results = filtered;
    }

    // ---- Specific query → answer immediately, never ask ----
    if (isSpecificEnough(intent)) {
      ronSetMood('happy', 1500);
      if (results.length === 1) {
        ronAppend('ron', 'Found it.', false);
        ronAppend('ron', ronBuildCard(results[0]), true);
      } else {
        ronAppend('ron', `Found ${results.length} matches:`, false);
        results.forEach(r => ronAppend('ron', ronBuildCard(r), true));
      }
      return;
    }

    // ---- Single result regardless of specificity → just show it ----
    if (results.length === 1) {
      ronSetMood('happy', 1500);
      ronAppend('ron', 'Found it.', false);
      ronAppend('ron', ronBuildCard(results[0]), true);
      return;
    }

    // ---- Same-brand cluster ≤ 5 → just show ----
    const brands = new Set(results.map(r => r.brand));
    if (brands.size === 1 && results.length <= 5) {
      ronSetMood('happy', 1500);
      ronAppend('ron', `Found ${results.length} matches:`, false);
      results.forEach(r => ronAppend('ron', ronBuildCard(r), true));
      return;
    }

    // ---- True ambiguity: multiple brands, no brand specified by user → ask ----
    if (brands.size > 1 && !intent.brand) {
      ronSetMood('confused', 1500);
      // Build chips per brand; suggestions ONLY come from actual matched results,
      // so they're guaranteed to contain the user's model number.
      const brandList = [...brands];
      let chipsHtml = '<div class="ron-chips">';
      brandList.forEach(b => {
        const sample = results.find(r => r.brand === b);
        const label  = sample.model;  // show the actual matching model, not "Brand (n)"
        const safe   = label.replace(/'/g,"\\'");
        chipsHtml += `<button class="ron-chip" onclick="ronChipClick('${safe}')">${label}</button>`;
      });
      chipsHtml += '</div>';
      ronAppend('ron', 'Do you mean:', false);
      ronAppend('ron', chipsHtml, true);
      return;
    }

    // ---- Same brand, many results → just show them all (no looping clarification) ----
    ronSetMood('happy', 1500);
    ronAppend('ron', `Found ${results.length} matches:`, false);
    results.forEach(r => ronAppend('ron', ronBuildCard(r), true));
  }, 650);
}

function ronChipClick(label) {
  document.getElementById('ronInput').value = label;
  ronAppend('user', label);
  ronProcess(label);
}

// --- Send ---
function ronSend() {
  const inp = document.getElementById('ronInput');
  const val = inp.value.trim();
  if (!val) return;
  ronAppend('user', val);
  inp.value = '';
  ronProcess(val);
}

// --- Enter key in RON input ---
function ronInit() {
  const inp = document.getElementById('ronInput');
  if (inp) {
    inp.addEventListener('keydown', e => {
      if (e.key === 'Enter') ronSend();
    });
  }
  ronResetIdleTimer();
  // Reset idle on any page interaction
  document.addEventListener('click', () => ronResetIdleTimer());
  document.addEventListener('keydown', () => ronResetIdleTimer());
}
