import { useEffect, useState } from "react"

function Books(){
    const[books, setBooks] = useState([])
    const[authors, setAuthors] = useState([])
    useEffect(()=>{
        fetch('/books').then(r=>r.json()).then(data=>setBooks(data))
        fetch('/authors').then(r=>r.json()).then(data=>setAuthors(data))
    },[])
    console.log(books)
    console.log(authors)
    const bkList = books.map((book)=>{
        return(
            <>
        <tr>
            <td>{book.name}</td>
            <td>{book.author.name}</td>
        </tr>
            </>
            // <h1>{book.name} by {book.author.name}</h1>
        )
    })
    const authorList = authors.map((author)=>{
        const authorBooks = author.books.length >= 1 ? author.books.map((book)=><li>{book.name}</li>) :''
        return(
            <>
          
        <tr>
            <td>{author.name}</td>
            <td>{authorBooks}</td>
        </tr>
            {/* <h1>{author.name}</h1>
            {authorBooks}  */}
            </>
                       
        )
    })
    return(
        <>
        <h1>Books List</h1>
          <table>
        <tr>
            <th>Book Name</th>
            <th>Book Author</th>
        </tr>
        {bkList}

        </table>
        <h1>Authors List</h1>
        <table>
        <tr>
            <th>Author Name</th>
            <th>Author Books</th>
        </tr>
        {authorList}

        </table>
        {/* {bkList} */}
        {/* {authorList} */}
        </>
    )
}

export default Books