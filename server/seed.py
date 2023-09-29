from setup import db,app
from faker import Faker
from models import Book, Author

fake = Faker()

with app.app_context():
    Book.query.delete()
    Author.query.delete()

    authors = []
    for i in range(20):
        author = Author(name=fake.name())
        authors.append(author)
    db.session.add_all(authors)
    db.session.commit()

    dbAuthors = Author.query.all()
    # for author in dbAuthors:
    #     print (author.id)

    print("Authors Seeded")
    # print(Author.query.first().id)

    # print(Author.query.filter_by(na).first().id)
    # print(Author.query.filter_by(id=1).first().name)

    books = []
    for author in dbAuthors:
        book = Book(name=fake.name(), author_id=author.id)
        books.append(book)
    db.session.add_all(books)
    db.session.commit()
    print("Books seeded")

