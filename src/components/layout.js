import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Container from './container'
import Navigation from './navigation'

class Template extends React.Component {
  render() {
    const { location, children, title, navList } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>

        <div className="content-container">
          <Navigation navList={navList} title={title} /> 
          <main className="content">
            <div className="header"> 
              <svg className="logo"  xmlns="http://www.w3.org/2000/svg" version="1.0" width="100" height="100" viewBox="0 0 150 150"><path d="M88.5 34.2c-.8 2.8-11.4 31-16.9 45-1.4 3.6-2.6 7.1-2.6 7.7 0 2.9-1.9.4-4.7-6.2-1.7-3.9-7.1-15.9-11.9-26.6l-8.8-19.4-3.6 7.9C16.2 93.8 5 118 5 118.4c0 .3 2.8.6 6.3.6h6.2l4.1-9.2 4.1-9.3h34.6l4.1 9.4c3.1 7.1 4.2 8.9 4.8 7.5.4-1.1 1.8-4.8 3.1-8.4 6.3-16.7 12.1-32 14.3-37.7 1.3-3.4 2.4-6.7 2.4-7.4 0-3.1 1.2-.2 9.1 22.1 5.9 16.5 11.2 30.5 11.9 31.3.5.6 35-79.7 35-81.7 0-.3-2.8-.6-6.3-.6h-6.2l-10.4 25.2c-5.7 13.9-10.7 25.7-11.1 26.1-.4.4-1.6-1.8-2.7-5s-4-11-6.3-17.3c-2.3-6.3-5.8-16.1-7.8-21.7-2-5.7-4-10.3-4.4-10.3-.4 0-1 1-1.3 2.2zM50.1 77l4.7 10.5-11 .3c-6.1.1-11.3 0-11.6-.3-.3-.2 2.1-6.2 5.4-13.1C42.9 63 43.5 62 44.4 64.1c.6 1.3 3.2 7.1 5.7 12.9z" /></svg>
            </div>
            {children}
          </main>
        </div>
      </Container>
    )
  }
}

export default Template
