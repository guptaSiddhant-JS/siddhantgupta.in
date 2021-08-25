import styles from './Card.module.css';

const Card = props =>{
   return (
       <div className={styles.container}>
          <ul className={styles.icon}>
           <li></li>
          </ul>
          <div
           className={`${styles.card} ${props.className}`} 
           style={props.style}
          >
          {props.children}
         </div>
       </div>
   
 );
}
export default Card;
