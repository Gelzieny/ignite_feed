import { useState } from 'react'
import { Trash, ThumbsUp } from 'phosphor-react';

import { Avatar } from './Avatar';
import styles from './Coment.module.css';


interface ComentProps{
  content: string;
  onDeleteComent: (comment: string) => void;
}


export const Coment = ({ content, onDeleteComent }: ComentProps) => {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComent() {
    onDeleteComent(content)
  }

  function handleLikeCount() {
    const newLikeCount = likeCount + 1
      
    setLikeCount(newLikeCount)
  }

  return(
    <div className={styles.coment}>
      <Avatar hasBorder={false} src="https://github.com/Gelzieny.png" alt=""/>
      <div className={styles.connentBox}>
        <div className={styles.connentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gelzieny R. Martins</strong>
              <time 
                title= "27 de julho de 2022 às 08:08" 
                dateTime="2022-07-20 08:08:00"
              >Cerca de 2h atrás</time>
            </div>
            <button onClick={handleDeleteComent} title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        
        <footer>
          <button onClick={handleLikeCount} type='button'>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}