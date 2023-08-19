# My Fuzzy Friends

Hi Ervin and Pontus!
Welcome to My Fuzzy Friends. It allows users to view, add, edit, and delete pets.

## Features

- View a list of pets based on type (cats or dogs).
- Add new pets with details such as name, gender, date of birth, status, happy place, and life story.
- Edit existing pet records to update their information.
- Delete pets
- Filter pets by Search
- Sort pets by different criteria.

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies: `npm install`

### Usage

1. Start the development server: `npm start`
2. Open your browser and navigate to http://localhost:3000.

### Custom Hook: usePetData

The `usePetData` hook is a custom hook used to manage pet data in the application. It provides functions for adding, updating, and deleting pet records, as well as searching and sorting capabilities.

- `pets`: An array of pet records based on the specified type.
- `pet(id)`: Retrieves the details of a pet with the given ID.
- `addPet(petData)`: Adds a new pet record.
- `updatePet(updatedPetData)`: Updates an existing pet record.
- `deletePet(id)`: Deletes a pet record.
- `error`: An optional error message related to pet data operations.

### Suggestions for Further Improvement

- Responsive Design- The app is not responivse now :)
- Adding routing
- Implement pagination for the pet list if the number of records grows.
- Considering memorization if pet records grow
- Add unit and intergration tests
- Accessibility: Ensure your components are accessible to users with disabilities, Semantic Html

Best Regard,

Martin
