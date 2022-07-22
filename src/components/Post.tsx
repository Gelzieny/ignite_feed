import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js'
import { FormEvent, useState, ChangeEvent } from 'react'

import { Coment } from './Coment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';

interface Content{
  type: 'paragraph' | 'link';
  content: string
}

interface PostProps{
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  },
  publisheAt: Date;
  content: Content[];
}

export const Post = ({ author, publisheAt, content }: PostProps) => {
  const [coments, setComents] = useState([
    "Post muito massa, parabéns!"
  ])

  const [newComent, setNewComent] = useState('')

  const publishedDateFormatted = format(publisheAt, "d 'de' LLLL 'ás' HH:mm'h'", {
      locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publisheAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComent(e: FormEvent) {
    e.preventDefault()

    setComents([
      ...coments,
      newComent,
    ])
    setNewComent('')
  }

  function handleNewComentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewComent(event.target.value)
  }

  function deleteComent(comentToDelete: string) {
    const comentsWithoutDeletedOne = coments.filter(coment => {
      return coment !== comentToDelete
    })
    setComents(comentsWithoutDeletedOne)
  }

  const isNewComentEmpty = newComent.length === 0
  return(
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}  /> 
          <div className={styles.autorInfo} >
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={'ok'} dateTime={publisheAt.toISOString()}>                           
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line, index) => {
          if (line.type === 'paragraph') {
            return <p key={`index-lista-line-${index}`} >{line.content}</p>
          } else if (line.type === 'link') {
            return <a key={`index-lista-line-${index}`} href="#">{line.content}</a>
          }
        })}
      </div>
      <form className={styles.commentForm} onSubmit={handleCreateNewComent}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          required={true}
          value={newComent}
          onChange={handleNewComentChange}
          name='coment'
          placeholder="Escreva um comentário..."
        />
        <footer>
          <button disabled={isNewComentEmpty} type="submit">Publicar</button>
        </footer>  
      </form>
      <div className={styles.commentLsit}>
        {coments.map((coment, index) => {
          return (
            <Coment
              key={`index-lista-comentario-${index}`}
              content={coment} 
              onDeleteComent={deleteComent} 
            />
          )
        })}
      </div>
    </article>
  );
}