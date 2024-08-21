import { Header } from "./components/Header"
import { Post } from "./Post"
import './global.css'
function App() {
  return (
  <div>
    <Header />
    <Post 
      author= "Diego Fernandes" 
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sit ad animi, totam fugit, doloribus libero ratione dolorum consequatur pariatur ipsam inventore accusantium perferendis facilis rerum commodi eius eveniet est!"
    />

    <Post 
      author= "Mateus Macedo" 
      content="Um novo post"
    />
  </div>  
  )
}

export default App


