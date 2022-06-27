import styles from './Report.module.css';
import { React, useState, useEffect } from 'react';

function Report({ type, msg }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!msg) {
            setVisible(false);
            return;
        } else {
            setVisible(true);
            const Timer = setTimeout(() => {
                setVisible(false);
            }, 3000);
            return () => clearTimeout(Timer);
        }
    }, [msg]);

    return (
        <>
            {visible && (
                <div className={`${styles.report} ${styles[type]}`}>{msg}</div>
            )}
        </>
    );
}

export default Report;