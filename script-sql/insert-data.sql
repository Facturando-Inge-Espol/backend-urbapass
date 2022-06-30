INSERT INTO Persona
VALUES
	("1204322885","Evan","Dennis"),
	("1204313174","Ima","Santana"),
	("1204365351","Ferris","Kemp"),
	("1204366675","Jeremy","Torres"),
	("1204345264","Amery","Hayden"),
	("1204365728","Quyn","Rowe"),
	("1204363554","Brynn","Tanner"),
	("1204311386","Denton","Byrd"),
	("1204335027","Emerald","Collier"),
	("1204363441","Amal","Morales"),
	("1204389793","Cheryl","Gates"),
	("1204338159","Justin","Vasquez"),
	("1204319417","Xenos","Sanford"),
	("1204347267","Abdul","Cabrera"),
	("1204383569","Kenyon","Bright"),
	("1204327243","Illiana","Holder"),
	("1204361271","Neil","Hill"),
	("1204369811","Rhea","Garrett"),
	("1204371455","Allistair","Rosales"),
	("1204360729","Reece","Rose");

INSERT INTO Direccion
VALUES
	("42928dd3-ba4c-4725-825c-354190aa09ee", "Av. Principal 1", "Av. Secundaria 1", "Guayaquil", "Guayas", "Ecuador"),
	("b97acbbb-a44d-44a3-891e-5f7c6bbe066b", "Av. Principal 3", "Av. Secundaria 3", "Guayaquil", "Guayas", "Ecuador");

INSERT INTO Urbanizacion
VALUES
	("7cf51953-8b04-4125-bdc3-f93d52df72d2", "Urba1", 130.25, "42928dd3-ba4c-4725-825c-354190aa09ee", "101010"),
	("673a612a-c517-4576-aca8-8f1ffe2dccc9", "Urba2", 140.50, "b97acbbb-a44d-44a3-891e-5f7c6bbe066b", "202020");

INSERT INTO CuentaBancaria
VALUES
	("b8dcd7d2-6aa6-4f0c-bca2-fc34f2271416", "86287", "098761", "juanito@gmail.com", "Corriente", "7cf51953-8b04-4125-bdc3-f93d52df72d2", "UrbaCuenta1", "Banco Pichincha"),
	("65972c6e-fac6-42a6-ba4a-82466c03027d", "61276", "098762", "alimana@gmail.com", "Ahorro", "673a612a-c517-4576-aca8-8f1ffe2dccc9", "UrbaCuenta2","Banco Pichincha");

INSERT INTO Usuario
VALUES
	("1204322885","7cf51953-8b04-4125-bdc3-f93d52df72d2","Dennis", "Dennis@gmail.com", "12345"),
	("1204313174","7cf51953-8b04-4125-bdc3-f93d52df72d2","Santana", "Santana@gmail.com", "12345"),
	("1204365351","7cf51953-8b04-4125-bdc3-f93d52df72d2","Kemp", "Kemp@gmail.com", "12345"),
	("1204366675","7cf51953-8b04-4125-bdc3-f93d52df72d2","Torres", "Torres@gmail.com", "12345"),
	("1204345264","7cf51953-8b04-4125-bdc3-f93d52df72d2","Hayden", "Hayden@gmail.com", "12345"),
	("1204365728","7cf51953-8b04-4125-bdc3-f93d52df72d2","Rowe", "Rowe@gmail.com", "12345"),
	("1204363554","7cf51953-8b04-4125-bdc3-f93d52df72d2","Tanner", "Tanner@gmail.com", "12345"), 
	("1204311386","7cf51953-8b04-4125-bdc3-f93d52df72d2","Byrd", "Byrd@gmail.com", "12345"),
	("1204335027","7cf51953-8b04-4125-bdc3-f93d52df72d2","Collier", "Collier@gmail.com", "12345"),
	("1204363441","673a612a-c517-4576-aca8-8f1ffe2dccc9","Morales", "Morales@gmail.com", "12345"),
	("1204389793","673a612a-c517-4576-aca8-8f1ffe2dccc9","Gates", "Gates@gmail.com", "12345"),
	("1204338159","673a612a-c517-4576-aca8-8f1ffe2dccc9","Vasquez", "Vasquez@gmail.com", "12345"),
	("1204319417","673a612a-c517-4576-aca8-8f1ffe2dccc9","Sanford", "Sanford@gmail.com", "12345"),
	("1204347267","673a612a-c517-4576-aca8-8f1ffe2dccc9","Cabrera", "Cabrera@gmail.com", "12345"),
	("1204383569","673a612a-c517-4576-aca8-8f1ffe2dccc9","Bright", "Bright@gmail.com", "12345"),
	("1204327243","673a612a-c517-4576-aca8-8f1ffe2dccc9","Holder", "Holder@gmail.com", "12345"),
	("1204361271","673a612a-c517-4576-aca8-8f1ffe2dccc9","Hill", "Hill@gmail.com", "12345"),
	("1204369811","673a612a-c517-4576-aca8-8f1ffe2dccc9","Garrett", "Garrett@gmail.com", "12345"),
	("1204371455","673a612a-c517-4576-aca8-8f1ffe2dccc9","Rosales", "Rosales@gmail.com", "12345"),
	("1204360729","673a612a-c517-4576-aca8-8f1ffe2dccc9","Rose", "Rose@gmail.com", "12345");

INSERT INTO Administrador
VALUES 
	("1204313174");

INSERT INTO Guardia
VALUES
	("1204365351"),
	("1204366675"),
	("1204345264"),
	("1204365728"),
	("1204363554");

INSERT INTO Residente
VALUES
	("1204311386", "1", "1"),
	("1204335027", "1", "2"),
	("1204363441", "1", "3"),
	("1204389793", "1", "4"),
	("1204338159", "2", "1"),
	("1204319417", "2", "2"),
	("1204322885", "2", "3"),
	("1204347267", "2", "4"),
	("1204383569", "3", "1"),
	("1204327243", "3", "2"),
	("1204361271", "3", "3");

INSERT INTO QR
VALUES 
	("e59049f2-8fec-433b-982f-3a5183ff052f", "1204311386", "1204322885", "PHG-129", "2022-05-20"),
	("3f28883a-f4ed-4631-bbb0-253577bcb4df", "1204335027", "1204369811", "PHG-128", "2022-05-20"),
	("af27b728-30da-441c-92ca-e19e86272f3e", "1204363441", "1204371455", "PHG-127", "2022-05-20"),
	("814305f1-0f35-4fc0-98b8-9e22fe7ab643", "1204389793", "1204360729", "PHG-126", "2022-05-20");

INSERT INTO Alicuota
VALUES
	("f1fa69d9-5876-4365-8f81-972dddcbb1d9", "SIN PAGAR", "7cf51953-8b04-4125-bdc3-f93d52df72d2", "2022-04-01", "1204311386"),
	("59989b9f-7b32-4637-b7ae-d1b52d2b2a0d", "SIN PAGAR", "7cf51953-8b04-4125-bdc3-f93d52df72d2", "2022-04-01", "1204311386"),
	("6e3cdcd9-d3a0-402c-80e5-562096edc7f1", "SIN PAGAR", "7cf51953-8b04-4125-bdc3-f93d52df72d2", "2022-04-01", "1204335027"),
	("09c4942a-5fb0-4808-95e8-821c29a08731", "SIN PAGAR", "7cf51953-8b04-4125-bdc3-f93d52df72d2", "2022-04-01", "1204335027"),
	("fdfd212b-9bcc-40cd-9afd-ca1bea542abe", "SIN PAGAR", "7cf51953-8b04-4125-bdc3-f93d52df72d2", "2022-04-01", "1204363441"),
	("b41d526d-5ab7-47cb-94de-187d28610fbb", "SIN PAGAR", "673a612a-c517-4576-aca8-8f1ffe2dccc9", "2022-04-01", "1204363441"),
	("a2dafc7d-504f-4cb7-9b33-7f8d1de3d3ed", "SIN PAGAR", "673a612a-c517-4576-aca8-8f1ffe2dccc9", "2022-04-01", "1204389793"),
	("1390db9b-0e23-4831-a2f5-62d2cc02cdcc", "SIN PAGAR", "673a612a-c517-4576-aca8-8f1ffe2dccc9", "2022-04-01", "1204389793");

