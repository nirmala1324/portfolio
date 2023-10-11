import os
from os.path import join, dirname
from dotenv import load_dotenv
from flask import Flask, render_template

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

# instantiate the Flask web application
app = Flask(__name__)

# ROUTE BASE
@app.route('/')
def get_index():
    return render_template('index.html')

# run the app in port 5000
app.run('0.0.0.0', port=5000, debug=True)