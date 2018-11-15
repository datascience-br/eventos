'use strict'

import React from 'react'

const footerLinks = [{
  href: 'https://github.com/datascience-br/forum',
  title: 'Acesso nosso fórum',
  content: 'Fórum'
}, {
  href: 'https://github.com/datascience-br/vagas',
  title: 'Publique ou encontre uma vaga',
  content: 'Vagas'
}]

const MainFooter = () => (
  <footer className='footer' role='contentinfo'>
    <div className='footer-inner'>
      <div className='container-flex'>
        <div className='footer-inner--main'>
          <p>Esse projeto é uma iniciativa da organização {' '}
            <a href='https://github.com/datascience-br'>
              Data science Brasil do GitHub.
            </a>
          </p>
        </div>
        <ul className='footer-inner--nav'>
          {footerLinks.map(({ href, title, content }, index) => (
            <li key={index}>
              <a className='btn-link' href={href} title={title}>
                {content}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className='footer-hold'>
      <div className='container'>
        <p>
          &copy; 2018 {' '}
          <a href='https://github.com/datascience-br/'>
            Data science Brasil
          </a>
        </p>
      </div>
    </div>
  </footer>

)

export default MainFooter
