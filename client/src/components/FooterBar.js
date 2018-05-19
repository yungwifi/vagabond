import React, { Component } from 'react';

const nav = {
    backgroundColor: '#2E4A62'
};

class FooterBar extends Component {
    render() {
        return (
            <div>
                        <footer style="nav" class="page-footer">
          <div class="container">
            <div class="row">
           
            
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
            </div>
        );
    }
}

export default FooterBar;