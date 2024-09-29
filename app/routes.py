from flask import render_template
from app import app, socketio
from flask_socketio import send

# Route to load the chat page
@app.route('/')
def chat():
    return render_template('chat.html')

# Socket event for receiving and sending messages in real-time
@socketio.on('message')
def handle_message(msg):
    print('Message: ' + msg)
    send(msg, broadcast=True)  # Broadcasts message to all connected clients
