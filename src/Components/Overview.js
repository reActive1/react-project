import React from 'react';
import "./CssComponents/Overview.css";
import Racheli from "../Common/Team/racheli.jpg"
class Overview extends React.Component {

  
    render(){
        return (
<div className="container container-about">
<div className="row">
<div className="col-md-4 col-sm-6">
<div className="our-team">
<div className="pic">
<img src={Racheli}/>
</div>
<ul className="social">
<li><a href="#"><i className="fab fa-facebook"></i></a></li>
<li><a href="#"><i className="fab fa-google-plus"></i></a></li>
<li><a href="#"><i className="fab fa-twitter"></i></a></li>
<li><a href="#"><i className="fab fa-linkedin"></i></a></li>
</ul>
<div className="team-content">
<h3 className="title">Williamson</h3>
<span className="post">web developer</span>
<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar feugiat fermentum. Donec efficitur posuere eros, vitae placerat.</p>
</div>
</div>
</div>
<div className="col-md-4 col-sm-6">
<div className="our-team">
<div className="pic">
<img src="../Common/Team/racheli.jpg"></img>
</div>
<ul className="social">
<li><a href="#"><i className="fab fa-facebook"></i></a></li>
<li><a href="#"><i className="fab fa-google-plus"></i></a></li>
<li><a href="#"><i className="fab fa-twitter"></i></a></li>
<li><a href="#"><i className="fab fa-linkedin"></i></a></li>
</ul>
<div className="team-content">
<h3 className="title">kristina</h3>
<span className="post">Web Designer</span>
<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar feugiat fermentum. Donec efficitur posuere eros, vitae placerat.
</p>
</div>
</div>
</div>
</div>
</div>
        )
    }
}

export default Overview;