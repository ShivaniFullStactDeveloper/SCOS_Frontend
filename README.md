MentrixOS – Login Flow (Frontend)
🔗 Live Demo

You can access the live application here:

Link: https://meek-tanuki-c6de34.netlify.app/

 Login Credentials

Use the following credentials to test different scenarios:

Email	                Password	              Scenario

leo@scos.com            Leo@123	                  No Institute

max@scos.com            Max@123	                  1 Institute & 1 Role

arlo@scos.com           Arlo@123                  1 Institute & Multiple Roles

alex@scos.com          Alex@123	                  Multiple Institutes & Multiple Roles

ethan@scos.com         Ethan@123	              Multiple Institutes & Single Role

## Note:
## Authentication is handled via backend APIs
Tech Stack
React.js
JavaScript
CSS (Dark Mode Supported)
Fetch (API Calls)

##  Application Flow

## Invalid Credentials
If user enters wrong email or password
 Shows: "Invalid credentials"

## No Institute (leo@scos.com)
Login → No institute found

## 1 Institute & 1 Role (max@scos.com)
Login → Direct Dashboard

## 1 Institute & Multiple Roles (arlo@scos.com)
Login → Role Selection Page
Select role → Dashboard

## Multiple Institutes & Multiple Roles (alex@scos.com)
Login → Institute Selection
Select institute → Role Selection
Select role → Dashboard

## Multiple Institutes & Single Role (ethan@scos.com)
Login → Institute Selection
Select institute → Direct Dashboard

# API Integration
## This frontend connects to backend APIs for:

User login
Fetching institutes
Fetching roles
Role selection

## All API calls are handled using Fetch.
