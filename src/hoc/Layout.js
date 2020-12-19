import React from 'react'
import MenuToggle from '../components/Navigations/MenuToggle'
import s from './Layout.module.css'


class Layout extends React.Component{
  state={
    menu:false
  }

  toggleMenuHandler=()=>{
    this.setState({
      menu:!this.state.menu
    })
  }


  render(){
    return(
      <div className={s.Layout}>
        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout