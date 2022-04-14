import React from "react";

const Post = (props) => {

    console.log(props);
    return (
        <React.Fragment>
            <div>img / nickname / time / btn</div>
            <div>contents</div>
            <div>image</div>
            <div>comment cnt</div>
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