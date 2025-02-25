import Post from "./Post"

const posts = [
  {id: 1, title: "Hello World", content: "Welcome to learning React!"},
  {id: 2, title: "Installation", content: "You can install React from npm."}
]

const Blog = () => {

    // Version 1: Wrong way

    // "Key" is used for React to optimize re-render of an updated list.
    // If no key is assigned to the element, then a warning will be displayed in the console,
    // and by default React will use the array index as a "key".
    // But index as key is error prione and cannot be trusted.
    // let postList = posts.map((post, index) => {
    //     console.log(index);
    //     return (
    //         <div key={index}>
    //             <h3>{post.title}</h3>
    //             <p>{post.content}</p>
    //         </div>
    //     )
    // })

    // Version 2: Right way

    // Correct usage of the key attribute. Ensures that the ID will always be unique

    // let postList = posts.map((post) => {
    //     console.log(post.id);
    //     return (
    //         <div key={post.id}>
    //             <h3>{post.title}</h3>
    //             <p>{post.content}</p>
    //         </div>
    //     )
    // })

    // Version 3: Refactor to child component
    // let postList = posts.map((post) => {
    //     return (
    //         <Post key={post.id} title={post.title} content={post.content} />
    //     )
    // })

  // Version 4: Run .map directly in JSX
  return (
    <>
    {
        posts.map((post) => {
            return (
                <Post key={post.id} title={post.title} content={post.content} />
            )
        })
    }
    </>
  )
}

export default Blog
