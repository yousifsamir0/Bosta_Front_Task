
# React App with Vite

This repository contains a React app setup using [Vite](https://vitejs.dev/), a fast build tool and development server. Follow the instructions below to install, run, and work with the app.

## Assumptions

During the process of working with the API documentation, I assumed the following transit event codes and their meanings:

-   `10`: "Picked Up"
-   `24`: "Processing"
-   `30`: "Processing"
-   `41`: "Out for Delivery"
-   `45`: "Delivered"
-   `47`: "Canceled"
-   `46`: "Returned"

### Progress Bar Assumptions

-   For "Canceled" and "Returned" events, I assumed that the status should be displayed without a progress bar.
-   For other transit events, the progress bar will display only the timestamp of the current state, as the explanation for unknown transit event codes is unavailable.
## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yousifsamir0/Bosta_Front_Task.git
   cd Bosta_Front_Task
   ```

  1. Install the required dependencies:

	  ```bash
	  npm install
	  ```
	  

## Running the App

1. To start the app in development mode, run the following command:

   ```bash
   npm run dev
   ```

  1. After running the command, open your browser and navigate to:

	  ```bash
	  http://localhost:5173
	  ```
