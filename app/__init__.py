from flask import Flask
from flask_socketio import SocketIO

# Initialize Flask app
app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'

# Initialize Flask-SocketIO
socketio = SocketIO(app)

from app import routes  # Import routes to link with this app
