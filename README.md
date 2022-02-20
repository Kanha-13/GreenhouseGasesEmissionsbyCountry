OpenAPI for fetching data of greenhouse gases emission by countries

This is deployed at:
https://greenhousegasemission.herokuapp.com

There are two api exposed:

1. /countries - get all countries gases emission from given year range

  valid request => /countries?startYear=2012&endYear=2014

2. /country/id?queries=explained-below
    
  valid request => /country/id?startYear=2012&endYear=2014&gases=co2,n2o


Queries explanation:

  For "id" refer country_id.js file
  For "gases" refer gas_codes.js file

  temporal queries - startYear | endYear (e.g - startYear=2012&endYear=2014)
  parameters queries - gases - one or parameters (e.g - CO2 or CO2 and NO2)