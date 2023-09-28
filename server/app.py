from setup import app,db
from flask_restful import Resource, Api
from models import Book, Author, User
from flask import jsonify,make_response, session, request

api = Api(app)
@app.before_request
def check_valid_user():
    print(session.get('random_user'))
    if not session.get('random_user') and request.endpoint != 'sign_up':
        return {"message":"You cannot access this route"}, 403
@app.route('/')
def home():
    return {"hello":"Welcome to my api"}

class Books(Resource):
    def get(self):
        books = [book.to_dict() for book in Book.query.all()]
        return books,200
    
class Authors(Resource):
    def get(self):
        authors = [author.to_dict() for author in Author.query.all()]
        return authors,200
    
class SignUp(Resource):
    def post(self):
        userData = request.get_json()
        username = userData['username']
        password = userData['password']

        new_user = User(username = username, password_hash = password)
        # new_user.password_hash = password

        db.session.add(new_user)
        db.session.commit()
        session['random_user'] = new_user.id

        return {"message":"New User created successfully"}, 201
    
    # def get(self):
    #     return("zxjhkl;")
    

api.add_resource(Authors,'/authors')
api.add_resource(Books,'/books')
api.add_resource(SignUp,'/signup', endpoint="sign_up")

if __name__ == '__main__':
    app.run()
