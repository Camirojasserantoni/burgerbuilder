import React, {Component} from 'react';
import Aeux from '../Aeux/Aeux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    
    state={
        showSideDrawer: false
    }
    
    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState(( prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        } );
    }
  
    render() {
        return (
            <Aeux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer 
                open={this.state.showSideDrawer}
                closed={this.SideDrawerClosedHandler}/>
                    <main className={classes.Content}>
                        {this.props.children}
                    </main>
                </Aeux>

        )
    }

}

export default Layout;
