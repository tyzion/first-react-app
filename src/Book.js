
const Book = (props) => {

  // const {img, title, author, publish} = props.book //destructuring
  const {img, title, author, publish} = props // w/ spread operator

  const clickHandler = () => {
    alert('hello')
  }
  const complexExample = (author) => {
    console.log(author)
  }
  return (
  <article className="book">
      <img src={img} className="img" alt=""/>
      <h1 onMouseOver={() => {
            console.log(title)
        }}>
            {title}</h1>
      <h4 >{author}</h4>
      <h6>{publish}</h6>
      <button type="button" onClick={clickHandler}>hello</button>
      <button type="button" onClick={() => complexExample(author)}>author</button>
      {/* <button type="button" onClick={complexExample(author)}>author</button> //it'll console instantly */}
  </article>
  );
}

// we can export default only 1 element
export default Book