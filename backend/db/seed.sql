-- seed.sql: Initial Product Data for PM-Golf-Club
USE pm_golf_club;

-- Insert Products
INSERT INTO product 
(id, name, description, code, brand, price, hand, loft, flex, quantity, category_id)
VALUES
(1, 'Stealth 2 Driver', 'High performance driver with carbon face', 'DV001', 'TaylorMade', 18900.00, 'RH', 10.5, 'S', 10, 1),
(2, 'Paradym Driver', 'Forgiving driver with adjustable weight', 'DV002', 'Callaway', 19500.00, 'RH', 9.0, 'S', 8, 1),
(3, 'G430 Iron Set', 'Distance and forgiveness iron set', 'IR001', 'PING', 32000.00, 'RH', 7.0, 'R', 5, 2),
(4, 'ZX5 Iron Set', 'Forged iron set with great feel', 'IR002', 'Srixon', 28500.00, 'RH', 7.0, 'S', 6, 2),
(5, 'Scotty Cameron Putter', 'Premium milled putter', 'PT001', 'Titleist', 15000.00, 'RH', 3.5, 'S', 4, 3);

-- Insert Product Images
INSERT INTO product_image (url, name, product_id)
VALUES
('https://example.com/stealth2.jpg', 'Stealth 2 Driver', 1),
('https://example.com/paradym.jpg', 'Paradym Driver', 2),
('https://example.com/g430.jpg', 'G430 Iron', 3),
('https://example.com/zx5.jpg', 'ZX5 Iron', 4),
('https://example.com/putter.jpg', 'Scotty Cameron Putter', 5);