/*
 * FER WEBSHOP DB INIT SCRIPT
 */
DELETE FROM ADMIN."product_type" WHERE "id" IS NOT NULL;
-- SELECT * FROM  ADMIN."product_type";

INSERT INTO ADMIN."product_type"
("id", "name")
VALUES
(0, 'Monitors'),
(1, 'Computer Cases'),
(2, 'CPUs/Processors'),
(3, 'Fans, Heatsinks, Cooling'),
(4, 'GPUs/Video Graphic Cards'),
(5, 'Memory'),
(6, 'Hard Drives, Storage'),
(7, 'Hard Drive Enclosures'),
(8, 'Interface / Add-On Cards'),
(9, 'Optical Drives'),
(10, 'Motherboards'),
(11, 'Power Supplies'),
(12, 'Racks / Accessories');

DELETE FROM ADMIN."product" WHERE "id" IS NOT NULL;
-- SELECT * FROM "product";

INSERT INTO ADMIN."product"
("id", "description", "name", "price", "quantity", "productType_id")
VALUES
(0, 'Full HD, 30 inch Samsung monitor', 'Monitor Samsung XDF811', 2000, 10, 0),
(1, 'Full HD, 24 inch Samsung monitor', 'Monitor Samsung XDB50', 1500, 10, 0),
(2, 'Zalman Z3 Plus mid tower case black', 'Zalman Z3 Plus', 350, 10, 1),
(3, 'THERMALTAKE Suppressor F31', 'Thermaltake F31', 500, 10, 1),
(4, '6th genration intel i7 processor', 'intel i7 6700HQ', 1700, 10, 2),
(5, '6th genration intel i5 processor', 'intel i5 6500', 1200, 10, 2),
(6, 'Cooler Master CPU hyper cooler RR-212E-16PK-R1', 'Cooler Master RR-212E-16PK-R1', 250, 10, 3),
(7, 'Cooler Master CPU hyper cooler RR-212E-16PK-R1', 'Cooler Master RR-212E-16PK-R1', 250, 10, 3),
(8, 'nVidia GeForce GTX 1050 4 GB', 'nVidia GeForce GTX 1050', 1500, 10, 4),
(9, 'AMD Radeon RX 470, 4GB DDR5', 'AMD Radeon RX 470', 1800, 10, 4),
(10, 'Kingston RAM 8GB, DDR3, 1600MHz', 'Kingston RAM 8GB', 350, 10, 5),
(11, 'Kingston RAM 4GB, DDR3, 1600MHz', 'Kingston RAM 4GB', 200, 10, 5),
(12, 'Samsung SSD 500Gb', 'Samsung SSD 850 Evo', 1200, 10, 6),
(13, 'Samsung SSD 120Gb', 'Samsung SSD 750 Evo', 512, 10, 6);

SELECT * FROM "product_type";

DELETE FROM ADMIN."order_product" WHERE "Order_id" IS NOT NULL;
DELETE FROM ADMIN."order" WHERE "id" IS NOT NULL;
-- SELECT * FROM Admin."order";

DELETE FROM ADMIN."order_state" WHERE "id" IS NOT NULL;
-- SELECT * FROM Admin."order_state";

INSERT INTO ADMIN."order_state"
("id", "name")
VALUES
(0, 'initialized'),
(1, 'confirmed'),
(2, 'delivered'),
(3, 'canceled');

SELECT * FROM ADMIN."user";
SELECT * FROM ADMIN."user_role";

select ADMIN."user"."username", "role" from ADMIN."user", ADMIN."user_role" where ADMIN."user"."userRole_id"=ADMIN."user_role"."id";

DELETE FROM "user_role" WHERE "id" IS NOT NULL;

INSERT INTO "user_role"
("id", "role")
VALUES
(0, 'ROLE_USER'),
(1, 'ROLE_ADMIN');

DELETE FROM "user" WHERE "id" IS NOT NULL;

INSERT INTO "user" 
("id", "first_name", "last_name", "password", "username", "userRole_id")
VALUES
(1, 'user', 'userich', 'pass', 'user', 0); 

