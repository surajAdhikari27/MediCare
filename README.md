# MediRemind

MediRemind is a web-based medicine reminder application designed to help users manage their medication schedule efficiently. It allows users to add, edit, track, and monitor medicines with a structured dashboard, schedule view, and history tracking.

---

## Features

1. Authentication

- User signup and login using Appwrite
- Session-based authentication
- Protected access to application features

2. Medicine Management

- Add medicines with details such as name, dosage, time, and duration
- Edit existing medicine entries
- Delete medicines
- Mark medicines as taken

3. Dashboard

- Overview of daily medicines
- Displays total, taken, and pending medicines

4. Schedule

- Medicines grouped by time slots:
  - Morning
  - Afternoon
  - Evening
  - Night
- Automatic categorization based on reminder time

5. History

- Tracks taken and missed medicines
- Groups data by date
- Calculates adherence rate


## Tech Stack

1. Frontend

- React (Vite)
- React Router DOM
- Redux Toolkit
- CSS Modules

2. Backend

- Appwrite (Backend-as-a-Service)
  - Authentication
  - Database

3. UI Utilities

- Font Awesome




## Setup Instructions

2. Install Dependencies

npm install

3. Configure Appwrite

Create a project in Appwrite and configure:

- Project ID
- Endpoint URL
- Database
- Collection for medicines

Required Collection Fields

- userID (string)
- medicineName (string)
- dosage (string)
- reminderTime (string)
- startDate (datetime)
- endDate (datetime)
- isTaken (boolean)
- isNotified (boolean)
- takenDate (datetime, optional)


---

5. Run the Application

npm run dev

---

## Authentication Flow

- Signup creates a new user in Appwrite
- Login creates a session
- Authenticated session is required for database access
- Logout removes the session

---

## Key Concepts

- Component-based architecture
- Separation of concerns using service layer
- Controlled form handling in React
- Asynchronous API handling
- Conditional rendering
- State management with Redux

---


## Future Enhancements

- Notification system using Appwrite Functions
- Improved UI responsiveness
- Analytics and reporting features
- Background reminders
- Theme customization


## Live Demo
Check out our project here:
https://medi-care-sooty-eight.vercel.app



## License

This project is for educational and personal use.
