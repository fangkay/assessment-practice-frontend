## Backend

0. Create new instance on elephantSQL and add it on config.js
1. Generate new models and migrations for Space and Story
2. Add validations to models and migrations
3. Set up relations

`space belongsTo user`
`user hasOne space`

`story belongsTo space`
`space hasMany stories`

4. Create seeds for space and story
5. Query relations (keep it symple)
6. Create new router folder and import it on index.js

## Feature 1

```js
const innitialState = {
  spaces: [] || null,
  spaceDetails: {} || null
}
```

1. Set up the endpoint in the backend and test it (http)
2. Create a new component/page, add to app.js, register a page
3. Create a new slice in the reducer and import in index (create file selectors, thunks, slice)
4. Write a thunk to fetch data (spaces)
5. Import the thunk in the page, pass it to useEffect and dispatch it
6. Check the response
7. Go back to thunk, dispatch it to the reducer
8. Write a case in the reducer
9. Create a selector to select spaces
10. Import the selector on the page, pass it to useSelector 
11. Map the data

## Feature 2

1. Set up the endpoint in the backend and test it (http)
2. Create a new component/page, add to app.js, register a page
3. Create a new property in the reducer `spaceDetails`
4. Write a thunk to fetch data (spaceDEtails)
5. Import the thunk in the page, pass it to useEffect and dispatch it
6. Check the response
7. Go back to thunk, dispatch it to the reducer
8. Write a case in the reducer
9. Create a selector to select spaceDetails
10. Import the selector on the page, pass it to useSelector 
11. Display the data


