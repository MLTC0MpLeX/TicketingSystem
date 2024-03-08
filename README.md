# Ticketing System

This is a ticketing system built with Angular. It allows users to create and verify tickets.

## Project Structure

The main application code is located in the `src/app/` directory. Here are some of the key files and directories:

- `add-ticket/`: Contains the logic for adding new tickets.
- `verify-ticket/`: Contains the logic for verifying tickets.
- `ticket.service.ts`: Contains the `TicketService` class which handles HTTP requests related to tickets.
- `app.component.ts`: The main component of the application.
- `app.module.ts`: The main module of the application.

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Replace `#YOUR_API_URL#` in `ticket.service.ts` with your actual API URL.
4. Run `npm start` to start the development server.

## Testing

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Building

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)