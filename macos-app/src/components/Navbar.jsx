import React from 'react'
import { navLinks, navIcons } from "#constants";  // ← 重点在这里！
import dayjs from 'dayjs'

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">yuminghui's project</p>
        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img
                src={img}
                className="icon"           // 改成你已定义的类
                alt={`icon-${id}`}
              />
            </li>
          ))}
        </ul>
      </div>

      <time dateTime={dayjs().format('YYYY-MM-DD')}>
        {dayjs().format('MMMM D, YYYY')}
      </time>
    </nav>
  )
}

export default Navbar