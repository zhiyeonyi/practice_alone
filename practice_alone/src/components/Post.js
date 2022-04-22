import React from "react";
import {Grid,Image,Text} from "../elements";

const Post = (props) => {

    console.log(props);
    return (
        <React.Fragment>
            <Grid >
                <Grid is_flex>
                    <Image shape="circle" src={props.src}></Image>
                    <Text bold >{props.user_info.user_name}</Text>
                    <Text>{props.insert_dt}</Text>
                </Grid>
                <Grid padding="16px">
                    <Text>{props.contents}</Text>

                </Grid>
                <Grid>
                    <Image shape="rectangle" src={props.src}/>
                </Grid>
                <Grid padding="16px">
                    <Text bold>댓글 {props.comment_cnt}개</Text>
                </Grid>

            </Grid>
            
        </React.Fragment>
    )
}

Post.defaultProps = {
    user_info: {
        user_name: "zhiyeon",
        user_profile: "https://mpng.subpng.com/20180505/rce/kisspng-kitten-cornish-rex-bicolor-cat-tuxedo-suit-cat-pattern-printing-5aedd2c7861424.4878579315255354315492.jpg",
    },
    image_url: "https://mpng.subpng.com/20180505/rce/kisspng-kitten-cornish-rex-bicolor-cat-tuxedo-suit-cat-pattern-printing-5aedd2c7861424.4878579315255354315492.jpg",
    contents: "차냥이 캐릭터네요!",
    comment_cnt: 10,
    insert_dt: "2021-02-27 10:00:00",
};

export default Post;