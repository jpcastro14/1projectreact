import './styles.css';

export const PostCard = (props) => {  //POSTSANDPHOTOS//LOADPOSTS
    const { post } = props;
    return (
        <div className="post">
            <img src={post.cover} alt={post.title} />
            <div key={post.id} className="post-content">
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </div>
        </div>
    );
}


export const PostCard_2 = () => {    //NAVBAR SUPERIOR
    return (
        <header className="navbar-main">
            <a>
                RADIUS OV
            </a>
        </header>
    );
}


export const PostCard_3 = (props) => {  //USERS E COMMENTS//LOADPOSTS_2
    const { post } = props;
    return (
        <div className="post">
            <div key={post.name} className="post-content">
                <h4>{post.name}</h4>
                <hr></hr>
                <p>{post.comment}</p>
            </div>
        </div>
    );
}

export const PostCard_4 = (props) => {  //TODOS//LOADPOSTS_3
    const { post } = props;
    return (
        <div className="post">
            <div key={post.id} className="post-content">
                <h4>{post.id}</h4>
                <hr></hr>
                <p>{post.title}</p>
            </div>
        </div>
    );
}



