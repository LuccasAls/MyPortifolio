import Logo from '../../assets/LogoL.png'
import Menu from '../../assets/menu.png'
import Close from '../../assets/close.png'
import "./styles.css"
import { Component  } from 'react'

class Navbar extends Component {
    state = { clicked : false}
    handleClick = () => {
        this.setState({ clicked : !this.state.clicked })
    }

    render() {

        return (
            <header>
                <nav >
                    <div className='logo'>
                        <a href='index.html'><img src={Logo} /></a>
                        <span>UCCAS ALVES</span>
                    </div>
                    <div>
                        <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"} >
                            <li >
                                <a className='active' href='' >Home</a>
                                
                            </li>
                            <li><a href=''>Sobre</a></li>
                            <li><a href=''>Tecnologias</a></li>
                            <li><a href=''>Carreira</a></li>
                            <li><a href=''>Contato</a></li>
                        </ul>
                    </div>
    
                    <div className='menuIconContent' onClick={this.handleClick}>
                        <img className='menuIcon' src={this.state.clicked ? Close : Menu}/>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Navbar;