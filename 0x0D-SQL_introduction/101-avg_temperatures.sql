-- displays the average temp by city
-- ordered by temperature in descending

SELECT city, AVG(value) as avg_temp
FROM temperatures
GROUP BY city
ORDER BY avg_temp DESC;
