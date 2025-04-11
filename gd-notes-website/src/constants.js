// src/constants.js
export const COLOR_THEMES = {
    default: {
        light: ['#ffffff', '#f0f0f0', '#e0e0e0', '#d0d0d0'],
        dark: ['#1e1e1e', '#2e2e2e', '#3e3e3e', '#4e4e4e']
    },
    warm: {
        light: ['#FFF5F5', '#FFE6E6', '#FFCCCC', '#FFB3B3'],
        dark: ['#331A1A', '#4D1F1F', '#662626', '#803030']
    },
    cool: {
        light: ['#E6F7FF', '#CCF0FF', '#B3E6FF', '#99DBFF'],
        dark: ['#1A3333', '#1F4D4D', '#266666', '#308080']
    },
    nature: {
        light: ['#E8F5E9', '#C8E6C9', '#A5D6A7', '#81C784'],
        dark: ['#1B5E20', '#2E7D32', '#388E3C', '#43A047']
    },
    sunset: {
        light: ['#FFF3E0', '#FFE0B2', '#FFCC80', '#FFB74D'],
        dark: ['#BF360C', '#D84315', '#E64A19', '#F4511E']
    },
    blue: { // Your app's dark mode uses this, let's call it 'deep' for the website
        light: ['#E6F7FF', '#CCF0FF', '#B3E6FF', '#99DBFF'], // Same as cool light
        dark: ['#080d14', '#141928', '#1e293c', '#28344c']
    },
};

// GitHub Configuration - !! REPLACE THESE !!
export const GITHUB_USER = 'shivamsharma00';
export const GITHUB_REPO = 'GD-Notes-web';