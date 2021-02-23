import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

// import {greeting} from './testing/testing'

import {bookArray} from './books'
import SpecificBook from './Book' // if it's default, i don't need the {}

function BookList() {
  return (
    <section className="booklist">
      {bookArray.map((book)=> {
        return (
          <SpecificBook 
          // img={img}
          // title={title}
          // author={author}
          
          // book={book} //we can also use the spread operator

          {...book}
          // key={index} // as key we should use smth that does not change
          key={book.id}
          >
          </SpecificBook>
        )
      })}
      
    </section>
  );
}


// const Image = () => <img src="https://upload.wikimedia.org/wikipedia/en/0/05/Littleprince.JPG" alt=""/>
// const Title = () => <h1>The little Prince</h1>
// const Author = () => <h4 style={{color: 'blue',fontSize: '0.75rem'}}>Saint-Exupery</h4>

ReactDom.render(<BookList />, document.getElementById('root'))