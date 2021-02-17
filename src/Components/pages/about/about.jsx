import classes from './about.module.css'
import {motion} from 'framer-motion';
import Post from "./Post/Post";

let AboutPage = (props) => {
    let Posts = props.aboutPage.map(dataPost => <Post text={dataPost.text} img={dataPost.img} title={dataPost.title}/>)
    return <div> {Posts} </div>

}


export default AboutPage