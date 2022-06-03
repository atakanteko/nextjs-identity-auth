import styles from '../styles/Guides.module.css'
import {useEffect} from "react";

export default function Guides() {
    useEffect(() => {
        fetch('/.netlify/functions/supermario')
            .then(res => res.json())
            .then(res => console.log(res))
    }, [])
  return (
    <div className={styles.guides}>
      <h2>All Guides</h2>
    </div>
  )
}