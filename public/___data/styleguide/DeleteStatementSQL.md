```sql
-- sql the hard way
/* Make sure there's dead pets */
SELECT name, age FROM pet WHERE dead=1;

DELETE FROM pet WHERE dead = 1;

SELECT * FROM pet;

INSERT into pet VALUES (1, 'Gigantor', 'Robot', 1, 0);

SELECT * FROM pet;

DELETE FROM pet WHERE id IN (
	SELECT pet.id
	FROM pet, person_pet, person
	WHERE
	person.id = person_pet.person_id AND
	pet.id = person_pet.pet.id AND
	person.first_name = 'Zes'
);

SELECT * FROM pet;
SELECT * FROM person_pet;

DELETE FROM person_pet
	WHERE pet_id NOT IT (
		SELECT id FROM pet
	);
	
SELECT * FROM person_pet;
```