import React from 'react';
import "./CssComponents/Us.css";
import emailjs from 'emailjs-com';
// ---template, please override this :)
class ContactUs extends React.Component {
    sendEmail(e) {
		e.preventDefault();
		emailjs.sendForm('gmail', 'template_reactiveContact', e.target, 'user_Z7LFrvscaqMDqmneHCVWV')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
		  e.target.reset()
	}
    render(){
        return (

    <div className="container">
        <div className="myCard">
            <div className="row">
                <div className="col-md-6">
                    <div className="myLeftCtn"> 
                        <form className="myForm text-center" onSubmit={this.sendEmail}>
                            <header>Contact Us</header>
                            <div className="form-group">
                                <i className="fas fa-user"></i>
								<input className="myInput" type="text" placeholder="Full Name" id="username" name="full_name" required/>
                            </div>
                            <div className="form-group">
                                <i className="fas fa-envelope"></i>
								<input className="myInput" type="email" placeholder="E-mail" id="email" name="email" required/>
                            </div>
                            <div className="form-group">
                                <i className="fas fa-phone"></i>
								<input className="myInput" type="text" id="phone" placeholder="Phone" name="phone"/> 
                            </div>
							<div className="form-group text-area">
								<i className="fas fa-envelope-open-text"></i>
								<textarea className="myInput" id="message" placeholder="Your Message" rows="4" cols="30" name="message"/>
                            </div>
							<input type="submit"  className="butt" value="SEND"/>
                        </form>
                    </div>
                </div> 
                <div className="col-md-6">
                    <div className="myRightCtn">
                            <div className="box"><header>Hello World!</header>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam.</p>
                                <input type="button" className="butt_out" value="Learn More"/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
</div>
      

            )
    }
}

export default ContactUs;