-- seed.sql: Initial Product Data for PM-Golf-Club
USE pm_golf_club;

-- Insert Products
INSERT INTO product 
(name, description, code, brand, price, hand, loft, flex, quantity, category_id) VALUES
-- Driver
('Honma Beres 07 Driver (2-Star)', 'A premium luxury driver featuring 2-star ARMRQ 47 graphite shaft. Known for its high-launch, draw-biased flight and elegant gold-accented design. Condition: 85%.', 'DR001', 'Honma', 6900.00, 'RH', 10.5, 'R', 3, 1),
('Callaway Paradym Ai Smoke MAX FAST Driver', '2024 model featuring the Ai Smart Face for optimized performance across the entire hitting surface. The MAX FAST version is lightweight and designed for increased swing speed. Condition: 95% (Near New).', 'DR002', 'Callaway', 12900.00, 'RH', 10.5, 'S', 2, 1),
('Callaway Great Big Bertha Epic Driver', 'The original Jailbreak technology driver that revolutionized ball speed. Features a sliding perimeter weight for shot shape customization. Condition: 70%.', 'DR003', 'Callaway', 3900.00, 'RH', 10.5, 'S', 6, 1),
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
('https://www.pmgolfclub.com/manage/product/product_picture/1_170320261116074212.JPG', 'Honma Amazing Spec Perfect Switch 460 Driver - Main', 1),
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
('https://www.pmgolfclub.com/manage/product/product_picture/m_gallery_270320261839530716.JPG', 'Taylormade Stealth - 5', 6);
-- https://www.pmgolfclub.com/product/putter/Putter/110224
-- https://www.pmgolfclub.com/product/putter/Putter/116386
-- https://www.pmgolfclub.com/product/putter/Putter/112251
-- https://www.pmgolfclub.com/product/wedge/honma/115863
-- https://www.pmgolfclub.com/product/wedge/taylormade/116105
-- https://www.pmgolfclub.com/product/wedge/other/114635
-- https://www.pmgolfclub.com/product/fairway_wood/honma/115552
-- https://www.pmgolfclub.com/product/fairway_wood/xxio/112654
-- https://www.pmgolfclub.com/product/fairway_wood/maruman/113132