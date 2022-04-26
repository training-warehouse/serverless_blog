import styles from './style.module.scss'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.person}>
                <img className={styles.avatar} src='/images/avatar.jpeg' alt=""/>
                <div className={styles.title}>了空的个人小站</div>
                <div className={styles.description}>从编程到生活，分享每天的点滴收获。</div>
            </div>
        </div>
    )
}

export default Banner
