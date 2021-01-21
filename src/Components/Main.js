import React, { Component } from 'react';
import logo from '../logo.svg';

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            style1: {},
            height: '96px',
            height1: '64px',
            height2: '32px'
        }
    }



    render() {
        return (
<div id="content" className="site-content">
<div id="primary" className="content-area">
<main id="main" className="site-main">
<article id="post-5" className="post-5 page type-page status-publish hentry">
	<header className="entry-header">
		<h1 className="entry-title">Maywood</h1>	
    </header>
    <div className="entry-content">
		<div className="wp-block-cover alignfull has-background-dim-30 has-foreground-dark-background-color has-background-dim" >
            <div className="wp-block-cover__inner-container">
                <div aria-hidden="true" className="wp-block-spacer"></div>
                <div className="wp-block-columns alignwide">
                    <div className="wp-block-column">
                        <h1>Enjoy Our Food Experience</h1>
                        <p>We don&#8217;t just make food. We make people&#8217;s experience. Maywood was built on the belief that food should be special, and we carry that belief into everything we do.</p>
                        <div className="wp-block-buttons">
                            <div className="wp-block-button">
                                <a className="wp-block-button__link no-border-radius" href="#">View our menu</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wp-block-column"></div>
            </div>
            <div aria-hidden="true" className="wp-block-spacer"></div>
        </div>
    </div>

    <div className="wp-block-group alignfull has-background-background-color has-background">
        <div className="wp-block-group__inner-container">
            <div aria-hidden="true" className="wp-block-spacer"></div>
            <div className="wp-block-columns alignwide">
                <div className="wp-block-column">
                    <p className="margin-bottom-half has-small-font-size"><span className="uppercase">OUR STOR</span><span className="uppercase">Y</span></p>
                    <h2 className="has-text-align-left margin-top-half">Welcome to Maywood</h2>
                    <p className="has-text-align-left has-small-font-size">Chef Patron Joan Smith and Executive Chef François Lemoine have teamed up to open one of the most exciting restaurants in Anytown.</p>
                    <p className="has-small-font-size">Our speciality is delicious&nbsp;cuisine created with the ingenuity and passion inspired by the fantastic flavours of France&nbsp;itself. We take great pride in improving upon your favourite French&nbsp;dishes in new and creative ways.</p>
                </div>

                <div className="wp-block-column">
                    <div aria-hidden="true" className="wp-block-spacer"></div>
                    <figure className="wp-block-image size-large"><img src="https://maywoodstarter.files.wordpress.com/2020/06/tatiana-zhukova-mejzeyi0pji-unsplash.jpg?w=768" alt="" className="wp-image-43" /></figure>
                </div>
                <div className="wp-block-column">
                    <figure className="wp-block-image size-large"><img src="https://maywoodstarter.files.wordpress.com/2020/06/chef-cook-cooked-1327215.jpg?w=763" alt="" className="wp-image-44" /></figure>
                    <div aria-hidden="true" className="wp-block-spacer"></div>
                </div>
            </div>
            <div aria-hidden="true" className="wp-block-spacer"></div>
        </div>
    </div>
    <div className="wp-block-cover alignfull has-background-dim-30 has-foreground-dark-background-color has-background-dim" >
        <div className="wp-block-cover__inner-container">
            <div aria-hidden="true" className="wp-block-spacer"></div>
            <h2 className="has-text-align-center">Discover Our Menu</h2>
            <p className="has-text-align-center">The menu is a mix of French regional cuisines, and the menu changes with the seasons. Be sure to ask about the daily specials!</p>
            <div className="wp-block-buttons is-content-justification-center">
                <div className="wp-block-button aligncenter">
                    <a className="wp-block-button__link no-border-radius" href="#">View Our Menu</a>
                </div>
            </div>
        </div>
        <div aria-hidden="true" className="wp-block-spacer"></div>
    </div>

    <div className="wp-block-group alignfull has-background-background-color has-background">
        <div className="wp-block-group__inner-container">
        <div aria-hidden="true" className="wp-block-spacer"></div>
        <h3 className="has-text-align-center">Sample Menu</h3>
        <div aria-hidden="true" className="wp-block-spacer"></div>
        <div className="wp-block-columns alignwide">
            <div className="wp-block-column">
            <h4>Starter</h4>
            <p><strong>Fricassée of Wild Mushrooms</strong><br/><em>Braised wild mushrooms served with seaweed and liquid nitrogen</em><br/>$14.50</p>
        </div>
        <div className="wp-block-column">
            <h4>Main</h4>
            <p><strong>Coq au Vin d&#8217;Alsace</strong><br/><em>Chicken cooked in Riesling with onions, mushrooms and herbs</em><br/>$25.50</p>
        </div>
        <div className="wp-block-column">
            <h4>Dessert</h4>
            <p><strong>Pumpkin Soufflé</strong><br/><em>With bourbon, cinnamon and molasses sauce</em><br/>$9.00</p>
        </div>
    </div>
    <div aria-hidden="true" className="wp-block-spacer"></div>
    <div className="wp-block-buttons is-content-justification-center">
        <div className="wp-block-button aligncenter"><a className="wp-block-button__link no-border-radius" href="#">View Our Full Menu</a></div>
    </div>
    <div aria-hidden="true" className="wp-block-spacer"></div>

    <div className="wp-block-cover alignfull has-background-dim-40 has-background-dim" >
        <div className="wp-block-cover__inner-container">
            <div aria-hidden="true" className="wp-block-spacer"></div>
            <h2 className="has-text-align-center">Book Your Table</h2>
            <p className="has-text-align-center">To book a table, call us (123) 444–5678 or use the form below.</p>
            <div aria-hidden="true" className="wp-block-spacer"></div>
        </div>
    </div>
    <div className="wp-block-group alignfull has-background-background-color has-background">
        <div className="wp-block-group__inner-container">
            <div aria-hidden="true" className="wp-block-spacer"></div>
                <div className="wp-block-columns">
                    <div className="wp-block-column"></div>
                        <div className="wp-block-column" >
                            <div id='contact-form-5'>
                                <form action='https://hormalno.wordpress.com/#contact-form-5' method='post' className='contact-form commentsblock'>
                                    <div className='grunion-field-wrap grunion-field-name-wrap'  >
                                        <label
                                            for='g5-name'
                                            className='grunion-field-label name'
                                            >Name<span>(required)</span>
                                        </label>
                                        <input
                                            type='text'
                                            name='g5-name'
                                            id='g5-name'
                                            value=''
                                            className='name' 
                                            required aria-required='true'
                                        />
	                                </div>
                                    <div className='grunion-field-wrap grunion-field-email-wrap'  >
                                        <label
                                            for='g5-email'
                                            className='grunion-field-label email'
                                            >Email<span>(required)</span></label>
                                        <input
                                            type='email'
                                            name='g5-email'
                                            id='g5-email'
                                            value=''
                                            className='email' 
                                            required aria-required='true'
                                        />
	                                </div>
                                    <div className='grunion-field-wrap grunion-field-telephone-wrap'  >
                                        <label
                                            for='g5-phone'
                                            className='grunion-field-label telephone'
                                            >Phone
                                        </label>
                                        <input
                                            type='tel'
                                            name='g5-phone'
                                            id='g5-phone'
                                            value=''
                                            className='telephone' 
                                            
                                        />
                                    </div>
                                    <div className='grunion-field-wrap grunion-field-date-wrap jp-contact-form-date-wrap'  >
                                        <label
                                            for='g5-date'
                                            className='grunion-field-label date'
                                            >Date<span>(required)</span>
                                        </label>
                                        <input
                                            type='text'
                                            name='g5-date'
                                            id='g5-date'
                                            value=''
                                            className='date jp-contact-form-date' 
                                            required aria-required='true'
                                        />
                                    </div>
                                    <div className='grunion-field-wrap grunion-field-select-wrap'  >
                                        <label
                                            for='g5-time'
                                            className='grunion-field-label select'
                                            >Time<span>(required)</span>
                                        </label>
                                        <select name='g5-time' id='g5-time' className='select' required aria-required='true'>
                                            <option value='11:30 am'>11:30 am</option>
                                            <option value='12:00 pm'>12:00 pm</option>
                                            <option value='12:30 pm'>12:30 pm</option>
                                            <option value='1:00 pm'>1:00 pm</option>
                                            <option value='1:30 pm'>1:30 pm</option>
                                            <option value='2:00 pm'>2:00 pm</option>
                                            <option value='7:00 pm'>7:00 pm</option>
                                            <option value='7:30 pm'>7:30 pm</option>
                                            <option value='8:00 pm'>8:00 pm</option>
                                            <option value='8:30 pm'>8:30 pm</option>
                                            <option value='9:00 pm'>9:00 pm</option>
                                            <option value='9:30 pm'>9:30 pm</option>
                                        </select>
                                    </div>
                                    <div className='grunion-field-wrap grunion-field-select-wrap'  >
                                        <label
                                            for='g5-partysize'
                                            className='grunion-field-label select'
                                            >Party size<span>(required)</span>
                                        </label>
                                        <select name='g5-partysize' id='g5-partysize' className='select' required aria-required='true'>
                                            <option value='1 person'>1 person</option>
                                            <option value='2 people'>2 people</option>
                                            <option value='3 people'>3 people</option>
                                            <option value='4 people'>4 people</option>
                                            <option value='5 people'>5 people</option>
                                            <option value='6 people'>6 people</option>
                                            <option value='Larger party'>Larger party</option>
                                        </select>
                                    </div>
                                    <div className='grunion-field-wrap grunion-field-textarea-wrap'  >
                                        <label
                                            for='contact-form-comment-g5-specialrequests'
                                            className='grunion-field-label textarea'
                                            >Special requests
                                        </label>
                                        <textarea
                                            name='g5-specialrequests'
                                            id='contact-form-comment-g5-specialrequests'
                                            rows='20' className='textarea'  >
                                        </textarea>
	                                </div>
                                    <p className='contact-submit'>
                                        <button type='submit' className='pushbutton-wide'>Submit</button>		
                                        <input type="hidden" id="_wpnonce" name="_wpnonce" value="9dab042369" />
                                        <input type="hidden" name="_wp_http_referer" value="/" />
                                        <input type='hidden' name='contact-form-id' value='5' />
                                        <input type='hidden' name='action' value='grunion-contact-form' />
                                        <input type='hidden' name='contact-form-hash' value='8f18b3665f064365944dfe83ac0182e30c52d9a3' />
                                    </p>
                                </form>
                            </div>
                        </div>
                        <div className="wp-block-column"></div>
                    </div>
                    <div aria-hidden="true" className="wp-block-spacer"></div>
                </div>
            </div>
        </div>
    </div>
    <div className="wp-block-cover alignfull has-background-dim-80 has-foreground-dark-background-color has-background-dim" >
        <div className="wp-block-cover__inner-container">
        <div aria-hidden="true" className="wp-block-spacer"></div>
            <p className="has-text-align-center has-large-font-size"><strong><span className="uppercase">Maywood</span></strong></p>
            <p className="has-text-align-center">Visitors will want to know who is on the other side of the page. Use this space to write about your business.</p>
            <p className="has-text-align-center">
                <a href="http://facebook.com">Facebook</a> / 
                <a href="http://instgram.com">Instagram</a> / 
                <a href="http://foursquare.com">Foursquare</a> / 
                <a href="http://yelp.com">Yelp</a>
            </p>
            <div aria-hidden="true" className="wp-block-spacer"></div>
            <div className="wp-block-columns alignwide">
                <div className="wp-block-column" >
                    <h5>Open Hours</h5>
                    <p><strong>Mon</strong> &#8211; <strong>Sat:</strong> 10:00 am – 8:00 pm<br/><strong>Sun</strong>: 12:00 pm – 6:00 pm</p>
                </div>
                <div className="wp-block-column">
                    <h5>Location</h5>
                    <p>1 Example Street<br/>Anytown, NY 10100 USA</p>
                </div>
                <div className="wp-block-column">
                    <h5>Reservation</h5>
                    <p>01234567890<br/>myemail@example.com</p>
                </div>
            </div>
            <div aria-hidden="true" className="wp-block-spacer"></div>
        </div>
    </div>



    <p></p>
	<footer className="entry-footer">
        <span className="edit-link">
            <svg className="icon icon-edit" aria-labelledby="title-60097bc4d2c0c" role="img">
                <title id="title-60097bc4d2c0c">Edit</title> 
            </svg>
            <a className="post-edit-link" href="https://wordpress.com/page/hormalno.wordpress.com/5">Edit <span className="screen-reader-text">Maywood</span></a>
        </span>		
    </footer>
</article>
</main>
</div>
</div>
        );
    }
}

export default Main;