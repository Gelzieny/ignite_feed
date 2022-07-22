import { Post } from './components/Post';
import { Header } from './components/Header';
import { Siderbar } from './components/Siderbar';

import './styles/main.css';
import style from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/andersondias89.png",
      name: "Anderson Dias",
      role: "Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "👉 anderson.developer/doctorcore" },
    ],
    publisheAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat"
    },
    content: [
      { type: "paragraph", content: "E ai galera" },
      { type: "paragraph", content: "👉 Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta reiciendis quia tempore? Minus fugiat quos quam quisquam eos? Molestiae assumenda eos quidem maiores possimus omnis, error incidunt commodi quibusdam odit.  💪🏻" },
      { type: "link", content: "👉 alyson.developer/doctorcore" },
    ],
    publisheAt: new Date("2022-05-10 20:00:00"),
  },
]

export function App() {
  return (
    <>
      <Header/>

      <div className={style.wrapper}>
        <Siderbar/>
        <main>
          {posts.map((post, index) => {
            return (
              <Post
                key={`index-lista-post-${index}`}
                author={post.author}
                content={post.content}
                publisheAt={post.publisheAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

