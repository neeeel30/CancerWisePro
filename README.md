# CancerWisePro
# Skin Cancer Detection using Deep Neural Networks

## Overview

This project aims to detect skin cancer using a deep neural network model. The frontend is developed with React, and the backend is built using Flask. The model is trained using a Jupyter Notebook provided in the repository.

## Features

- Skin cancer detection using a deep neural network model
- Interactive web interface built with React
- Backend API for model inference using Flask
- Visualization of model predictions

## Directory Structure

├── backend
│ ├── app.py
| |── Skin_cancer_DNN_model.ipynb
│ ├── requirements.txt
│ └── ...
├── frontend
│ ├── src
│ │ ├── App.js
│ │ ├── index.js
│ │ └── ...
│ ├── public
│ └── package.json
└── README.md


## Setup Instructions

### Prerequisites

- Node.js
- Python 3.x
- pip
- virtualenv

### Frontend Setup

1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

### Backend Setup

1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

2. Create and activate a virtual environment:
    ```bash
    virtualenv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4. Run the Flask app:
    ```bash
    flask run
    ```

### Model Setup

1. Open the `Skin_cancer_DNN_model.ipynb` file in Jupyter Notebook or JupyterLab:
    ```bash
    jupyter notebook Skin_cancer_DNN_model.ipynb
    ```

2. Follow the instructions in the notebook to train the model and save the trained model file.

#### Notebook Content Overview

The Jupyter Notebook contains the following main sections:

1. **Train test Split**: This section covers how the dataset is split into training and testing sets.
2. **Build CNN Model**: This section explains the construction and compilation of the Convolutional Neural Network (CNN) model.

3. Ensure the trained model file is placed in the appropriate directory for the Flask backend to load.

## Usage

1. Open your browser and navigate to `http://localhost:3000` to access the React frontend.
2. Use the interface to upload images and get predictions for skin cancer.


