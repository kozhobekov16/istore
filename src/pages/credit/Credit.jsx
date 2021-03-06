import React from 'react'
import styles from './Credit.module.scss'

const Credit = () => {
    return (
        <div className={styles.credit}>
            <h1>
                Купить в кредит
            </h1>
            <p>
                Вы можете легко и быстро приобрести любой товар в кредит
            </p>
            <div className={styles.docs}>
                <p>
                    Перечень документов <br />
                    1. Копия паспорта заемщика <br />
                    2. Документ подтверждающий доход за последние 3-12 месяцев
                    При официальном трудоустройстве документ, подтверждающий доход, не требуется <br />
                    3. Патент, лицензия (при наличии) свидетельство индивидуального предпринимателя или документы, подтверждающие наличие действующего бизнеса. <br />
                    Оформление кредита в нашем офисе <br />
                    Проконсультируйтесь с кредитным экспертом Банка. <br />
                    г.Бишкек, ул.Токтогула 171/1, +996 312-31-29-50, +996 312-31-29-03
                </p>
            </div>
        </div>
    )
}

export default Credit