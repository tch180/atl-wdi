 SELECT name, region, population FROM country WHERE region='Southern Europe' ORDER BY population;  /* vatican */
 SELECT language FROM countrylanguage Where countrycode = 'VAT';  /* italian */
 SELECT name FROM country WHERE code ='SMR'; /* san marino */
 SELECT name FROM city WHERE countrycode = 'SMR'; /* Serravalle */ SELECT * FROM city WHERE name LIKE 'Serr%';
 SELECT name FROM country WHERE code ='BRA';
 Select name FROM city WHERE id ='211';
SELECT name, district, countrycode FROM city WHERE population = 91084;
 