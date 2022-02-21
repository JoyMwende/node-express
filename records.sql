CREATE TABLE attachee(id INT IDENTITY PRIMARY KEY,
					firstName varchar(20),
					secondName varchar(20),
					email varchar(50),
					project varchar(20),
					password binary(10));

INSERT INTO attachee(firstName, secondName, email, project, password) 
			VALUES('Janice', 'Karwi', 'janice@gmail.com', 'testimonial', 37787);

INSERT INTO attachee(firstName, secondName, email, project, password) 
			VALUES('Joy', 'Karimi', 'karimi@gmail.com', 'portfolio', 5477);

INSERT INTO attachee(firstName, secondName, email, project, password) 
			VALUES('Maureen', 'Kauria', 'maureen@gmail.com', 'order', 3635);

INSERT INTO attachee(firstName, secondName, email, project, password) 
			VALUES('Jackie', 'Clarkson', 'jackie@gmail.com', 'ecommerce', 4976);

INSERT INTO attachee(firstName, secondName, email, project, password) 
			VALUES('Eva', 'Kairi', 'eva@gmail.com', 'card', 3534);

INSERT INTO attachee(firstName, secondName, email, project, password) 
			VALUES('Kelly', 'Kananu', 'kanash@gmail.com', 'react', 5356);

SELECT * FROM attachee;

