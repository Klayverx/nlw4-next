import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/CompetedChallenges.module.css'

export function CompetedChallenges() {
    const {challengesCompleted} = useContext(ChallengesContext)

    return(
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}