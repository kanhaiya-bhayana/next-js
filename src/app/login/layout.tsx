import styles from './styles.module.css'

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <nav>About Login</nav>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}