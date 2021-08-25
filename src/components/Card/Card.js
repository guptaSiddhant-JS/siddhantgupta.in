import styles from './Card.module.css';

const Card = props =>{
   return (
       <div className={styles.container}>
          
          <ul className={styles.icon}>
           <li><img src='about.png' /></li>
          </ul>
          
          <div
           className={`${styles.card} ${props.className}`} 
           style={props.style}
          >
             <h2 className={styles.title}>About</h2>
          {props.children}
         </div>
       </div>
   
 );
}
export default Card;
