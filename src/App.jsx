import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import  styles  from "./App.module.css"

import './global.css'



function App() {
  return (
  <div>
    <Header />
  

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
      <Post 
      author= "Diego Fernandes" 
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sit ad animi, totam fugit, doloribus libero ratione dolorum consequatur pariatur ipsam inventore accusantium perferendis facilis rerum commodi eius eveniet est!"
    />

    <Post 
      author= "Mateus Macedo" 
      content="Um novo post"
    />
      </main>
    </div>
  </div>  
  )
}

export default App


