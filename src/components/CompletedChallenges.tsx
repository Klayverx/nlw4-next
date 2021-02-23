import styles from '../styles/components/CompetedChallenges.module.css'

export function CompetedChallenges() {
    return(
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>5</span>
        </div>
    )
}