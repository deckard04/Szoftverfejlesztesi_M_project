drop database if exists szfm;
CREATE DATABASE szfm;
USE szfm;
CREATE TABLE `Product`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `brand` VARCHAR(30) NOT NULL,
    `model` VARCHAR(50) NOT NULL,
    `color` VARCHAR(30) NULL,
    `release_date` DATE NULL,
    `price` INT NOT NULL,
    `description` TEXT NULL,
    `product_image` VARCHAR(255) NOT NULL);
CREATE TABLE `order`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `order_item_id` BIGINT UNSIGNED NOT NULL,
    `user_id` BIGINT UNSIGNED NOT NULL,
    `order_date` DATE NOT NULL,
    `order_status` VARCHAR(255) NOT NULL,
    `grand_total` INT NOT NULL);
CREATE TABLE `user`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `tel_number` VARCHAR(255) NOT NULL);
CREATE TABLE `order_item`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `product_id` BIGINT UNSIGNED NOT NULL,
    `quantity` INT NOT NULL,
    `part_price` INT NOT NULL
);
CREATE TABLE `product_available`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `product_id` BIGINT UNSIGNED NOT NULL,
    `size` SMALLINT NOT NULL,
    `is_in_stock` TINYINT(1) NOT NULL);
CREATE TABLE `user_details`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` BIGINT UNSIGNED NOT NULL,
    `country` VARCHAR(255) NULL,
    `city` VARCHAR(255) NULL,
    `postcode` SMALLINT NULL,
    `adress` VARCHAR(255) NOT NULL,
    `payment_method` VARCHAR(255) NULL);
ALTER TABLE
    `order` ADD CONSTRAINT `order_order_item_id_foreign` FOREIGN KEY(`order_item_id`) REFERENCES `order_item`(`id`);
ALTER TABLE
    `product_available` ADD CONSTRAINT `product_available_product_id_foreign` FOREIGN KEY(`product_id`) REFERENCES `Product`(`id`);
ALTER TABLE
    `user_details` ADD CONSTRAINT `user_details_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `user`(`id`);
ALTER TABLE
    `order_item` ADD CONSTRAINT `order_item_product_id_foreign` FOREIGN KEY(`product_id`) REFERENCES `Product`(`id`);
ALTER TABLE
    `order` ADD CONSTRAINT `order_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `user`(`id`);
    
insert into product(brand,model,color,release_date,price,description,product_image) values ('Nike','Jordan 1 Mid','Light Orewood Brown','2022-03-01','75000','Az Air Jordan 1 Mid Light Orewood Brown egy igazán különleges színkombinációt tudhat magának. Fehér ripstop nejlon alapjával és fekete-piros-barnás színkombinációjával egyedivé varázsolja az outfited!','/assets/images/j1_orewood.png');
insert into product(brand,model,color,release_date,price,description,product_image) values ('Nike','Dunk Low','Kentucky Blue','2020-11-01','120000','Ez a Nike Dunk Low SP fehér bőr felsőrészből áll, varsity royal bőr felsőrésszel. A fehér középtalp, a királyi színű talpbetét és a klasszikus Nike márkajelzés a nyelven teszi teljessé a dizájnt.','/assets/images/dunk_kentucky.png');
insert into product(brand,model,color,release_date,price,description,product_image) values ('Nike','Jordan 1 High','Lost and Found','2022-11-01','200000','Az eredeti Air Jordan 1 Chicago színváltozatot 1985-ben mutatták be először, és azóta csak néhányszor került retro kiadásra. De 2022 az az év, amikor ez a színváltozat visszatér egy hozzáadott vintage megjelenéssel. Az elősárgított ékezetek és a repedezett bőr felsőrész a kor és a kopás fabrikált megjelenését mutatja.','/assets/images/j1_lostandfound.png');
insert into product(brand,model,color,release_date,price,description,product_image) values ('Nike','Jordan 4','Yellow Thunder','2023-03-01','130000',' sneaker piacot gyökeresen megváltoztatta a Jordan 1-es sziluett. Az első modell 1984-ben jelent meg, azóta hatalmas hype övezi. Nem csoda hiszen az élő kosár legenda által fémjelzett sneakerről beszélünk. Rengeteg fajta Jordan jelent meg, leghíresebb típusai a fennt említett Jordan 1 low, mid, high, ezen kívűl a Jordan 4, 6, 11 hódít mostanában a legnagyobbat.','/assets/images/j4_yellowthunder.png');
insert into product(brand,model,color,release_date,price,description,product_image) values ('Nike','Jordan 1 High','Dior','2020-01-08','5000000','A világ egyik legfelkapottab, legikonikusabb cipője amiből összesen 8500 db készült. A két teljesen különböző profilú világmárka a Nike és a Dior kollaborációjából született szerelemgyerek már elérhető az üzletünkben is! Gyere el és nézd meg élőben!.','/assets/images/j1_dior.png');
insert into product(brand,model,color,release_date,price,description,product_image) values ('Nike','Air Force 1','Tripple White','2018-09-01','60000','A Nike Air Force 1 07 Triple White sneaker egy igazán egyszerű, de sikkes darab, hiszen a cipő talpa illetve a felső rész is fehér borítást kaptak. Bármilyen outfithez, legyen az egy hétköznapi vagy akár egy elegánsabb szett, bátran válaszhatod a tökelétes megjelenés érdekében!','/assets/images/af1_tripplewhite.png');
insert into product(brand,model,color,release_date,price,description,product_image) values ('Nike','Air Force 1','TIFFANY & CO. 1837','2023-03-01','679000','A Jordaneken kívűl az Air Force 1-es cipők azok amik megjelennek mindenki szeme előtt, ha a Nike cipőkről beszélünk. Rengeteg híresebbnél híres kollab jelent meg, pazar részletekkel, például az Air Force 1 Shadow, Pixel, illetve a sima, letisztult Triple White Air Force 1. A formavilág letisztult, könnyen lehet hozzá öltözködni, ezért is lehet ekkora sikere.','/assets/images/af1_tiffany.png');
insert into product(brand,model,color,release_date,price,description,product_image) values ('Adidas','Yeezy Slide','ONYX','2022-02-01','70000','Az első Yeezy 2016 szeptemberében jelent meg. A cipő a világ egyik leghíresebb rappere, divatikonja Kanye West és az Adidas közös szerelemgyereke. A Yeezy formavilága rendbontó, a talpában taláható Boost talp hihetetlen kényelmet és puhaságot biztosít a viselője számara. Számos sziluett jelent 2016 óta. A Yeezy 350-es modell aratta előszőr az elsöprő sikert, viszont a Yeezy 700-as, a Yeezy Foam Runnerek, a Yeezy Slide-ok is nagyon pörögnek, köszönhetően a futurisztikus látványuknak, illetve az előbb említett elképesztő kényelmük miatt.','/assets/images/onyx.png');
insert into product(brand,model,color,release_date,price,description,product_image) values ('Adidas','Yeezy Foam Runner','SAND','2022-08-01','110000','A Yeezy Foam RNNR valószínűleg a jövő egyik vezető formavilágát használja már most a jelenben. Se nem cipő, se nem papucs, de ez különleges benne, hogy bekategorizálni sem lehet, hihehetlen rendbontó formavilága miatt. Amit viszont fixen tudunk állítani Nektek, hogy az egyik legkényelmesebb sneaker ami valaha a lábunkon volt. Olyan mintha egy felhőn járna az ember, nyárra tökéletes köszönhetően az egyrészből álló EVA habnak, ami algával van összekeverve, így kapva ezt a csodát? Mindenesetre szerintünk igen, ráadásul környezetbarát is!','/assets/images/foamrunner.png');
insert into product(brand,model,color,release_date,price,description,product_image) values ('Adidas','Yeezy Boost 350','Jade Ash','2022-10-01','130000','Ez az adidas és a Yeezy által készített Jade Ash sneaker Primeknitből készült felsőrésszel rendelkezik, és a sós színben kapható, az oldalsó oldalán fekete kontrasztos 3-Stripe kereszteződéssel és SPLY-350 felirattal. A cipő alatt bordázott salt Boost talp található a tapadás és a párnázás érdekében. Emellett a hozzá illő sós fűzővel is rendelkezik.','/assets/images/boost350.png');
insert into product(brand,model,color,release_date,price,description,product_image) values ('Adidas','Yeezy 700','Salt Fade','2022-10-01','120000','Ennek a kollaboratív V3 cipőnek a felsőrésze Primeknitből készült, az RPU ketrec pedig az elülső lábfejnél nyitott, hogy a nyelv és a cipőfűzők láthatóvá váljanak. A belső rész a kényelmes illeszkedés érdekében készült, a talpbetét pedig Yeezy és adidas márkajelzéssel is rendelkezik. A vastag, poliuretán középtalp teljes hosszában EVA párnázással rendelkezik, és a sarkán adidas márkajelzéssel büszkélkedhet. A gumi talpazat halszálkás tapadást biztosít, amelyet a talpbetétek tarkítanak.','/assets/images/700.png');
insert into product(brand,model,color,release_date,price,description,product_image) values ('New Balance','550 UNC','White University Blue','2021-10-01','115000','A New Balance 550 UNC White University Blue klasszikus stílusa retro megjelenést kínál a hagyományos kosárlabda-oxford stíluselemekkel. A klasszikus "N" stílust a tornacipő oldalán, valamint a hagyományos New Balance márkajelzést a cipő nyelvén találod. Ezek a túlnyomórészt fehér cipők finom, de mégis határozottan észak-karolinai babakék színnel vannak ellátva a talpon, a nyelven és a logón, hogy visszafogott, de mégis élénk megjelenést kölcsönözzenek nekik.','/assets/images/550.png');
insert into product(brand,model,color,release_date,price,description,product_image) values ('New Balance','Vanilla','','2020-07-01','50000','','/assets/images/vanilla.png');