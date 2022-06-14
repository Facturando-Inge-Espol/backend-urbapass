INSERT INTO Persona
VALUES
	("22885","Evan","Dennis"),
	("13174","Ima","Santana"),
	("65351","Ferris","Kemp"),
	("66675","Jeremy","Torres"),
	("45264","Amery","Hayden"),
	("65728","Quyn","Rowe"),
	("63554","Brynn","Tanner"),
	("11386","Denton","Byrd"),
	("35027","Emerald","Collier"),
	("63441","Amal","Morales"),
	("89793","Cheryl","Gates"),
	("38159","Justin","Vasquez"),
	("19417","Xenos","Sanford"),
	("47267","Abdul","Cabrera"),
	("83569","Kenyon","Bright"),
	("27243","Illiana","Holder"),
	("61271","Neil","Hill"),
	("69811","Rhea","Garrett"),
	("71455","Allistair","Rosales"),
	("60729","Reece","Rose");

INSERT INTO CuentaBancaria
VALUES
	("b8dcd7d2-6aa6-4f0c-bca2-fc34f2271416", "86287", "Urba1", "Banco Pichincha"),
	("65972c6e-fac6-42a6-ba4a-82466c03027d", "61276", "Urba2","Banco Pichincha");

INSERT INTO Direccion
VALUES
	("42928dd3-ba4c-4725-825c-354190aa09ee", "Av. Principal 1", "Av. Secundaria 1", "Guayaquil", "Guayas", "Ecuador"),
	("b97acbbb-a44d-44a3-891e-5f7c6bbe066b", "Av. Principal 3", "Av. Secundaria 3", "Guayaquil", "Guayas", "Ecuador");

INSERT INTO Urbanizacion
VALUES
	("7cf51953-8b04-4125-bdc3-f93d52df72d2", "Urba1", "b8dcd7d2-6aa6-4f0c-bca2-fc34f2271416", "42928dd3-ba4c-4725-825c-354190aa09ee", "101010"),
	("673a612a-c517-4576-aca8-8f1ffe2dccc9", "Urba2", "65972c6e-fac6-42a6-ba4a-82466c03027d", "b97acbbb-a44d-44a3-891e-5f7c6bbe066b", "202020");

INSERT INTO Usuario
VALUES
	("22885","7cf51953-8b04-4125-bdc3-f93d52df72d2","Dennis@gmail.com", "12345"),
	("13174","7cf51953-8b04-4125-bdc3-f93d52df72d2","Santana@gmail.com", "12345"),
	("65351","7cf51953-8b04-4125-bdc3-f93d52df72d2","Kemp@gmail.com", "12345"),
	("66675","7cf51953-8b04-4125-bdc3-f93d52df72d2","Torres@gmail.com", "12345"),
	("45264","7cf51953-8b04-4125-bdc3-f93d52df72d2","Hayden@gmail.com", "12345"),
	("65728","7cf51953-8b04-4125-bdc3-f93d52df72d2","Rowe@gmail.com", "12345"),
	("63554","7cf51953-8b04-4125-bdc3-f93d52df72d2","Tanner@gmail.com", "12345"), 
	("11386","7cf51953-8b04-4125-bdc3-f93d52df72d2","Byrd@gmail.com", "12345"),
	("35027","7cf51953-8b04-4125-bdc3-f93d52df72d2","Collier@gmail.com", "12345"),
	("63441","673a612a-c517-4576-aca8-8f1ffe2dccc9","Morales@gmail.com", "12345"),
	("89793","673a612a-c517-4576-aca8-8f1ffe2dccc9","Gates@gmail.com", "12345"),
	("38159","673a612a-c517-4576-aca8-8f1ffe2dccc9","Vasquez@gmail.com", "12345"),
	("19417","673a612a-c517-4576-aca8-8f1ffe2dccc9","Sanford@gmail.com", "12345"),
	("47267","673a612a-c517-4576-aca8-8f1ffe2dccc9","Cabrera@gmail.com", "12345"),
	("83569","673a612a-c517-4576-aca8-8f1ffe2dccc9","Bright@gmail.com", "12345"),
	("27243","673a612a-c517-4576-aca8-8f1ffe2dccc9","Holder@gmail.com", "12345"),
	("61271","673a612a-c517-4576-aca8-8f1ffe2dccc9","Hill@gmail.com", "12345"),
	("69811","673a612a-c517-4576-aca8-8f1ffe2dccc9","Garrett@gmail.com", "12345"),
	("71455","673a612a-c517-4576-aca8-8f1ffe2dccc9","Rosales@gmail.com", "12345"),
	("60729","673a612a-c517-4576-aca8-8f1ffe2dccc9","Rose@gmail.com", "12345");

INSERT INTO Administrador
VALUES 
	("13174");

INSERT INTO Guardia
VALUES
	("65351"),
	("66675"),
	("45264"),
	("65728"),
	("63554");

INSERT INTO Residente
VALUES
	("11386", "42928dd3-ba4c-4725-825c-354190aa09ee"),
	("35027", "42928dd3-ba4c-4725-825c-354190aa09ee"),
	("63441", "42928dd3-ba4c-4725-825c-354190aa09ee"),
	("89793", "42928dd3-ba4c-4725-825c-354190aa09ee"),
	("38159", "42928dd3-ba4c-4725-825c-354190aa09ee"),
	("19417", "42928dd3-ba4c-4725-825c-354190aa09ee"),
	("47267", "42928dd3-ba4c-4725-825c-354190aa09ee"),
	("83569", "42928dd3-ba4c-4725-825c-354190aa09ee"),
	("27243", "42928dd3-ba4c-4725-825c-354190aa09ee"),
	("61271", "42928dd3-ba4c-4725-825c-354190aa09ee");

INSERT INTO QR
VALUES 
	("e59049f2-8fec-433b-982f-3a5183ff052f", "11386", "22885", "PHG-129", "2022-05-20"),
	("3f28883a-f4ed-4631-bbb0-253577bcb4df", "35027", "69811", "PHG-128", "2022-05-20"),
	("af27b728-30da-441c-92ca-e19e86272f3e", "63441", "71455", "PHG-127", "2022-05-20"),
	("814305f1-0f35-4fc0-98b8-9e22fe7ab643", "89793", "60729", "PHG-126", "2022-05-20");

INSERT INTO Alicuota
VALUES
	("f1fa69d9-5876-4365-8f81-972dddcbb1d9", "SIN PAGAR", 120.25, "2022-04-01", "11386"),
	("59989b9f-7b32-4637-b7ae-d1b52d2b2a0d", "PAGADO", 120.25, "2022-04-01", "11386"),
	("6e3cdcd9-d3a0-402c-80e5-562096edc7f1", "COMPROBANDO", 120.25, "2022-04-01", "35027"),
	("09c4942a-5fb0-4808-95e8-821c29a08731", "SIN PAGAR", 120.25, "2022-04-01", "35027"),
	("fdfd212b-9bcc-40cd-9afd-ca1bea542abe", "SIN PAGAR", 120.25, "2022-04-01", "63441"),
	("b41d526d-5ab7-47cb-94de-187d28610fbb", "PAGADO", 120.25, "2022-04-01", "63441"),
	("a2dafc7d-504f-4cb7-9b33-7f8d1de3d3ed", "SIN PAGAR", 120.25, "2022-04-01", "89793"),
	("1390db9b-0e23-4831-a2f5-62d2cc02cdcc", "SIN PAGAR", 120.25, "2022-04-01", "89793");

INSERT INTO Pago
VALUES 
	("e92e9f14-3f29-45a8-b798-e3e8d21eeff1", "59989b9f-7b32-4637-b7ae-d1b52d2b2a0d", "2022-04-30"),
	("9672d24d-9c5b-4a49-95f6-e4dc80c428a9", "b41d526d-5ab7-47cb-94de-187d28610fbb", "2022-04-29");

