import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';
import img from '../../img/Animals_530.jpg'


class AboutChannel extends Component {
    render() {
        return (
            <Card>
                <CardActionArea>
                    <div className="card" style={{width: 18 + 'rem'}}>
                    <img className="card-img-top" src={img} alt="post"/>
                    </div>
                    <CardMedia
                        image="/home/rez/WebstormProjects/Web_Project/src/img/img1.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <div className="d-flex justify-content-center flex-column">
                            <b className="d-flex justify-content-center">channel name</b>
                            <h4 className="d-flex justify-content-center">{this.props.username}</h4>
                        </div>
                    </CardContent>
                    <CardContent>
                        {this.props.massege}
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share Link
                    </Button>
                    <ShareIcon/>
                </CardActions>
            </Card>
        );
    }
}

export default AboutChannel
