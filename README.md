# Cooking

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0.

## Overview

The Cooking application is designed to manage and track the status of various dishes being prepared. It includes features such as listing dishes, updating their status, and pagination for easy navigation through the list of dishes.

## Features

- **List of Dishes**: View a list of dishes with details such as name, description, and status.
- **Update Status**: Change the status of a dish using a dropdown menu.
- **Pagination**: Navigate through the list of dishes with pagination controls.
- **Standalone Components**: The application uses Angular's standalone components for modularity and simplicity.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


## API Endpoints

- **Get Orders**: `GET /orders?page={page}&limit={limit}`
- **Update Plate Status**: `PUT /plates/{plateId}/status`

## Usage

1. **List Dishes**: The main page displays a list of dishes with their details.
2. **Update Status**: Use the dropdown menu in the status column to update the status of a dish.
3. **Pagination**: Use the pagination controls at the bottom of the list to navigate through different pages of dishes.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
