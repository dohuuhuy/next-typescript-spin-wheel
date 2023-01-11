import cx from 'classnames'
import { range, size } from 'lodash'
import React from 'react'
import styles from './styles.module.scss'

const SpinWheel = ({ wsize = 400 }) => {
  const transform = (number = 0) => 'rotate(' + number + 'deg)'

  const [state, setState] = React.useState(0)

  const onRunStart = () => {
    setState(state + Math.ceil(Math.random() * 5000))
  }

  return (
    <div className={cx(styles.SpinWheel)}>
      <section className={styles.wrapperWheel}>
        <span className={styles.arrow}></span>
        <button className={styles.spin} onClick={onRunStart}>
          Spin
        </button>

        <ul
          className={styles.wheel}
          style={{
            width: wsize,
            height: wsize,
            transform: transform(state)
          }}
        >
          {segment.map((v, i = 0) => {
            const PI2 = Math.PI * 2

            const angle = PI2 * (i / size(segment)) * (180 / Math.PI)

            return (
              <li
                key={i}
                style={{
                  transform: `rotate(calc(${angle}deg))`
                }}
                className={cx(styles.segment, styles['segment-' + i + 1])}
              >
                <div className={styles.itemContain}>{v}</div>
              </li>
            )
          })}
        </ul>
      </section>

      <div className={styles.groupAction}>
        <button onClick={onRunStart} className={styles.btn}>
          Bắt đầu
        </button>
      </div>
    </div>
  )
}
export default SpinWheel

export const segment = range(1, 9)
