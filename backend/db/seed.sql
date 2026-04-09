-- seed.sql: Initial Product Data for PM-Golf-Club
use pm_golf_club;

-- Insert Products
insert into product 
(name, description, code, brand, price, hand, loft, flex, quantity, category_id)
VALUES
-- Driver
('Honma Beres 07 Driver (2-Star)', 'A premium luxury driver featuring 2-star ARMRQ 47 graphite shaft. Known for its high-launch, draw-biased flight and elegant gold-accented design. Condition: 85%.', 'DV001', 'Honma', 6900.00, 'RH', 10.5, 'R', 3, 1),
('Callaway Paradym Ai Smoke MAX FAST Driver', '2024 model featuring the Ai Smart Face for optimized performance across the entire hitting surface. The MAX FAST version is lightweight and designed for increased swing speed. Condition: 95% (Near New).', 'DV002', 'Callaway', 12900.00, 'RH', 10.5, 'S', 2, 1),
('Callaway Great Big Bertha Epic Driver', 'The original Jailbreak technology driver that revolutionized ball speed. Features a sliding perimeter weight for shot shape customization. Condition: 70%.', 'DV003', 'Callaway', 3900.00, 'RH', 10.5, 'S', 6, 1),
-- Iron
('Honma Beres IS-02 Iron Set', 'Luxury iron set (5-11, SW) featuring ARMRQ B49 2-Star shafts. Designed with a wide sole and deep undercut cavity for maximum forgiveness and high launch. Condition: 80%.', 'IR001', 'Honma', 9900.00, 'RH', 24.0, 'R', 8, 2),
('Callaway APEX DCB Forged Iron Set', '2024 model set (5-9, PW, AW) powered by the Ai Smart Face. This set offers modern distance and tight dispersion in a sleek, game-improvement profile. Condition: 90%.', 'IR002', 'Callaway', 15600.00, 'RH', 22.0, 'S', 7, 2),
('TaylorMade Stealth Iron Set', 'Set (5-9, PW, SW) featuring the Cap Back Design with toe wrap construction. Engineered to improve face flexibility for faster ball speeds and a solid feel. Condition: 85%.', 'IR003', 'TaylorMade', 14500.00, 'RH', 21.0, 'R', 7, 2),
-- Putter
('Yamaha YP-101 Putter', 'Modern blade putter with AI-designed face insert for consistent roll and improved accuracy. Equipped with Stroke Lab shaft, length 34 inches.', 'PT001', 'Yamaha', 4900.00, 'RH', 3.0, null, 4, 3),
('Ping Anser 2 Putter', 'A classic blade putter featuring a 33-inch length and a sleek, multi-material construction for improved MOI. This 2022 edition offers a firm feel and consistent roll. Item is in good pre-owned condition (85%).', 'PT002', 'PING', 3900.00, 'RH', 3.0, null, 1, 3),
('Ping Scottsdale DS72 Putter', 'The latest 2025 Ping Scottsdale DS72 features a 34-inch shaft and a mid-mallet design for exceptional stability and forgiveness. Engineered with a precision-milled face for consistent impact feel. Item is in excellent condition (95%).', 'PT003', 'PING', 6900.00, 'RH', 3.0, null, 5, 3),
-- Wedge
('Honma LB-W Wedge', 'Brand new, original plastic-wrapped Honma LB-W Wedge with a 57-degree loft. Equipped with an NS Pro Zelos 7 steel shaft in Regular (R) flex. High-performance design for precision short game control.', 'WD001', 'Honma', 2800.00, 'RH', 57.0, 'R', 2, 4),
('TaylorMade ZTP Milled Wedge', 'A high-spin TaylorMade ZTP Milled Wedge featuring a 56-degree loft for versatile greenside performance. Milled grooves provide consistent control. Equipped with a Dynamic Gold steel shaft in Stiff (S) flex. Product condition: 75%.', 'WD002', 'TaylorMade', 1600.00, 'RH', 56.0, 'S', 1, 4),
('Yamaha Inpres RMX Tourmodel Forged Wedge', 'Premium forged Yamaha Inpres RMX Tourmodel Wedge with a 58-degree loft. Designed for elite spin control and soft feel. Features an NS Pro Modus steel shaft. Product condition: 70%.', 'WD003', 'Yamaha', 1600.00, 'RH', 58.0, 'S', 3, 4),
-- Fairway Wood
('Honma Beres 09 Black Fairway Wood (Wood 5)', 'The latest 2024 Honma Beres 09 Black Wood 5 features a premium ARMRQ FX Black shaft in Stiff (S) flex. Designed with an 18-degree loft for a powerful, high-launch trajectory and elegant matte black aesthetics. Condition: 85-90%.', 'FW001', 'Honma', 7900.00, 'RH', 18.0, 'S', 1, 5),
('XXIO Prime 12 Utility Wood (2023 Model)', 'Brand new, plastic-wrapped XXIO Prime 12 Utility (2023). This is XXIOs most premium, lightweight line designed for maximum distance and ease of use. Features a 22-degree loft and a high-end SP-1200 graphite shaft in Flex R2. Condition: NEW.', 'FW002', 'XXIO', 14900.00, 'RH', 22.0, 'R', 1, 5),
('Maruman Shuttle Titanium Wood 3 (2016)', 'The 2016 Maruman Shuttle Titanium Fairway Wood 3 features a 15-degree loft and a lightweight graphite shaft in Regular (R) flex. Known for its large, forgiving titanium head that provides high launch and exceptional distance. Condition: 80%.', 'FW003', 'Maruman', 2100.00, 'RH', 15.0, 'R', 1, 5);

-- Insert Product Images
INSERT INTO product_image (url, name, product_id)
VALUES
-- https://www.pmgolfclub.com/product/driver/honma/114758
('https://www.pmgolfclub.com/manage/product/product_picture/m_1_170320261116074212.JPG', 'Honma Amazing Spec Perfect Switch 460 Driver - Main', 1),
('https://www.pmgolfclub.com/manage/product/product_picture/m_gallery_170320261116036888.JPG', 'Honma Amazing Spec Perfect Switch 460 Driver - 2', 1),
('https://www.pmgolfclub.com/manage/product/product_picture/m_gallery_170320261116036924.JPG', 'Honma Amazing Spec Perfect Switch 460 Driver - 3', 1),
('https://www.pmgolfclub.com/manage/product/product_picture/m_gallery_170320261116041007.JPG', 'Honma Amazing Spec Perfect Switch 460 Driver - 4', 1),
('https://www.pmgolfclub.com/manage/product/product_picture/m_gallery_170320261116048642.JPG', 'Honma Amazing Spec Perfect Switch 460 Driver - 5', 1),
-- https://www.pmgolfclub.com/product/driver/callaway/114876
('https://www.pmgolfclub.com/manage/product/product_picture/1_190320262025572707.JPG', 'Paradym Triple Diamond - Main', 2),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_190320262025511431.JPG', 'Paradym Triple Diamond -  2', 2),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_190320262025529997.JPG', 'Paradym Triple Diamond -  3', 2),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_190320262025521594.JPG', 'Paradym Triple Diamond -  4', 2),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_190320262025527415.JPG', 'Paradym Triple Diamond -  5', 2),
-- https://www.pmgolfclub.com/product/driver/callaway/116142
('https://www.pmgolfclub.com/manage/product/product_picture/1_030420262036382950.JPG', 'Callaway ELYTE X Driver - Main', 3),
('https://www.pmgolfclub.com/manage/product/product_picture/m_gallery_030420262036288041.JPG', 'Callaway ELYTE X Driver - 2', 3),
('https://www.pmgolfclub.com/manage/product/product_picture/m_gallery_030420262036280134.JPG', 'Callaway ELYTE X Driver - 3', 3),
('https://www.pmgolfclub.com/manage/product/product_picture/m_gallery_030420262036314241.JPG', 'Callaway ELYTE X Driver - 4', 3),
('https://www.pmgolfclub.com/manage/product/product_picture/m_gallery_030420262036320922.JPG', 'Callaway ELYTE X Driver - 5', 3),
-- https://www.pmgolfclub.com/product/iron_set/honma/114932
('https://www.pmgolfclub.com/manage/product/product_picture/3_200320261101309862.JPG', 'Honma Beres IS-02 - Main', 4),
('https://www.pmgolfclub.com/manage/product/product_picture/m_gallery_200320261101274905.JPG', 'Honma Beres IS-02 - 2', 4),
('https://www.pmgolfclub.com/manage/product/product_picture/m_gallery_200320261101272710.JPG', 'Honma Beres IS-02 - 3', 4),
('https://www.pmgolfclub.com/manage/product/product_picture/m_gallery_200320261101278425.JPG', 'Honma Beres IS-02 - 4', 4),
('https://www.pmgolfclub.com/manage/product/product_picture/m_gallery_200320261101279579.JPG', 'Honma Beres IS-02 - 5', 4),
-- https://www.pmgolfclub.com/product/iron_set/callaway/114963
('https://www.pmgolfclub.com/manage/product/product_picture/3_200320261254300798.JPG', 'Callaway ELYTE X Driver - Main', 5),
('https://www.pmgolfclub.com/manage/product/product_picture/m_gallery_200320261254275943.JPG', 'Callaway ELYTE X Driver - 2', 5),
('https://www.pmgolfclub.com/manage/product/product_picture/m_gallery_200320261254277282.JPG', 'Callaway ELYTE X Driver - 3', 5),
('https://www.pmgolfclub.com/manage/product/product_picture/m_gallery_200320261254274356.JPG', 'Callaway ELYTE X Driver - 4', 5),
('https://www.pmgolfclub.com/manage/product/product_picture/m_gallery_200320261254287890.JPG', 'Callaway ELYTE X Driver - 5', 5),
-- https://www.pmgolfclub.com/product/iron_set/taylormade/115466
('https://www.pmgolfclub.com/manage/product/product_picture/3_270320261839580493.JPG', 'Taylormade Stealth - Main', 6),
('https://www.pmgolfclub.com/manage/product/product_picture/m_gallery_270320261839486188.JPG', 'Taylormade Stealth - 2', 6),
('https://www.pmgolfclub.com/manage/product/product_picture/m_gallery_270320261839504721.JPG', 'Taylormade Stealth - 3', 6),
('https://www.pmgolfclub.com/manage/product/product_picture/m_gallery_270320261839520265.JPG', 'Taylormade Stealth - 4', 6),
('https://www.pmgolfclub.com/manage/product/product_picture/m_gallery_270320261839530716.JPG', 'Taylormade Stealth - 5', 6),
-- https://www.pmgolfclub.com/product/putter/Putter/110224
('https://www.pmgolfclub.com/manage/product/product_picture/5_090120261310121208.JPG', ' Yamaha YP-101 - Main', 7),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_090120261310091338.JPG', 'Yamaha YP-101 - 2', 7),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_090120261310090621.JPG', 'Yamaha YP-101 - 3', 7),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_090120261310090318.JPG', 'Yamaha YP-101 - 4', 7),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_090120261310095274.JPG', 'Yamaha YP-101 - 5', 7),
-- https://www.pmgolfclub.com/product/putter/Putter/116386
('https://www.pmgolfclub.com/manage/product/product_picture/5_060420261240437408.JPG', ' Ping Anser 2 - Main', 8),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_060420261240407154.JPG', 'Ping Anser 2 - 2', 8),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_060420261240414517.JPG', 'Ping Anser 2 - 3', 8),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_060420261240417643.JPG', 'Ping Anser 2 - 4', 8),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_060420261240411138.JPG', 'Ping Anser 2 - 5', 8),
-- https://www.pmgolfclub.com/product/putter/Putter/112251
('https://www.pmgolfclub.com/manage/product/product_picture/5_110220261754393860.JPG', 'Ping Scottsdale DS72 - Main', 9),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_110220261754290870.JPG', 'Ping Scottsdale DS72 - 2', 9),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_110220261754302984.JPG', 'Ping Scottsdale DS72 - 3', 9),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_110220261754300175.JPG', 'Ping Scottsdale DS72 - 4', 9),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_110220261754311755.JPG', 'Ping Scottsdale DS72 - 5', 9),
-- https://www.pmgolfclub.com/product/wedge/honma/115863
('https://www.pmgolfclub.com/manage/product/product_picture/4_310320262201316420.JPG', 'Wedge Honma LB-W Loft 57 - Main', 10),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_310320262201273838.JPG', 'Wedge Honma LB-W Loft 57 - 2', 10),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_310320262201274818.JPG', 'Wedge Honma LB-W Loft 57 - 3', 10),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_310320262201287117.JPG', 'Wedge Honma LB-W Loft 57 - 4', 10),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_310320262201286857.JPG', 'Wedge Honma LB-W Loft 57 - 5', 10),
-- https://www.pmgolfclub.com/product/wedge/taylormade/116105
('https://www.pmgolfclub.com/manage/product/product_picture/4_030420261454488865.JPG', 'Wedge Taylormade ZTP Milled Loft 56 - Main', 11),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_030420261454451415.JPG', 'Wedge Taylormade ZTP Milled Loft 56 - 2', 11),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_030420261454453611.JPG', 'Wedge Taylormade ZTP Milled Loft 56 - 3', 11),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_030420261454462775.JPG', 'Wedge Taylormade ZTP Milled Loft 56 - 4', 11),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_030420261454468065.JPG', 'Wedge Taylormade ZTP Milled Loft 56 - 5', 11),
-- https://www.pmgolfclub.com/product/wedge/other/114635
('https://www.pmgolfclub.com/manage/product/product_picture/4_160320261208487334.JPG', 'Wedge Yamaha Inpres RMX Tourmodel Forged Loft 58 - Main', 12),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_160320261208465888.JPG', 'Wedge Yamaha Inpres RMX Tourmodel Forged Loft 58 - 2', 12),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_160320261208469599.JPG', 'Wedge Yamaha Inpres RMX Tourmodel Forged Loft 58 - 3', 12),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_160320261208464189.JPG', 'Wedge Yamaha Inpres RMX Tourmodel Forged Loft 58 - 4', 12),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_160320261208461045.JPG', 'Wedge Yamaha Inpres RMX Tourmodel Forged Loft 58 - 5', 12),
-- https://www.pmgolfclub.com/product/fairway_wood/honma/115552
('https://www.pmgolfclub.com/manage/product/product_picture/2_280320261305311868.JPG', 'Honma Beres 09 Black - Main', 13),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_280320261305250815.JPG', 'Honma Beres 09 Black - 2', 13),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_280320261305254227.JPG', 'Honma Beres 09 Black - 3', 13),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_280320261305258242.JPG', 'Honma Beres 09 Black - 4', 13),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_280320261305251447.JPG', 'Honma Beres 09 Black - 5', 13),
-- https://www.pmgolfclub.com/product/fairway_wood/xxio/112654
('https://www.pmgolfclub.com/manage/product/product_picture/2_180220261007482555.JPG', 'XXIO Prime 12 - Main', 14),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_180220261007395203.JPG', 'XXIO Prime 12 - 2', 14),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_180220261007402265.JPG', 'XXIO Prime 12 - 3', 14),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_180220261007403011.JPG', 'XXIO Prime 12 - 4', 14),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_180220261007414937.JPG', 'XXIO Prime 12 - 5', 14),
-- https://www.pmgolfclub.com/product/fairway_wood/maruman/113132
('https://www.pmgolfclub.com/manage/product/product_picture/2_230220261132437038.JPG', 'Maruman Shuttle Titanium  - Main', 15),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_230220261132393506.JPG', 'Maruman Shuttle Titanium  - 2', 15),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_230220261132403910.JPG', 'Maruman Shuttle Titanium  - 3', 15),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_230220261132404352.JPG', 'Maruman Shuttle Titanium  - 4', 15),
('https://www.pmgolfclub.com/manage/product/product_picture/gallery_230220261132401809.JPG', 'Maruman Shuttle Titanium  - 5', 15);

insert into admin (name, phone) values
('Admin1 Test', '0001112223'),
('Alice Smith', '0812345678'),
('Bob Johnson', '0898765432'),
('Charlie Brown', '0876543210'),
('Diana Prince', '0823456789'),
('Edward Clark', '0834567890');

INSERT INTO admin_account (username, password, email, admin_id) VALUES
('admin', 'password', 'admin@example.com', 1),
('alice', 'password123', 'alice@example.com', 2),
('bob', 'mypassword', 'bob@example.com', 3),
('charlie', 'charlie456', 'charlie@example.com', 4),
('diana', 'diana789', 'diana@example.com', 5),
('edward', 'edward321', 'edward@example.com', 6);