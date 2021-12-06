
//import { loadPosts_2 } from './utils/load-posts_2';
//import { loadPosts_3 } from './utils/load_posts_3';
//import { PostCard_2} from '../../Components/PostCard';
//this.loadPosts_2();
//this.loadPosts_3();

import { Component } from 'react';
import './styles.css';
import { Posts } from '../../Components/Posts';
import { loadPosts } from '../../utils/load-posts';
import { Button } from '../../Components/Button';
import { TextInput } from '../../Components/TextInput';
import { PostCard_2 } from '../../Components/PostCard';


//////////////////////////////////////////////////////////////////////////////////
export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchValue: "",
  };
  componentDidMount() {
    /*  Faça algo quando o componente for montado */
    this.loadPosts();
  }
  componentDidUpdate() {
    /* Faça algo quando o componente for atualizado */
  }
  componentWillUnmount() {
    /* Faça algo quando o componente for desmontado */
  }

  //////////////////////////////////////////////////////////////////////////////////

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const allData = await loadPosts();
    this.setState({
      posts: allData.slice(page, postsPerPage),
      allPosts: allData,
    });
  };

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts, //Todos os posts, criado para o STATE não ser alterado.
      posts, //STATE original
    } = this.state;
    const nextPage = page + postsPerPage; //Diz ao STATE qual a proxima pagina
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage); //Diz ao STATE quantos posts carregar
    posts.push(...nextPosts); //Insere o SLICE no POSTS
    this.setState({ posts, page: nextPage });
  };

  loadMorePosts_2 = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;
    const proxPag = page + postsPerPage;
    const proxPosts = allPosts.slice(proxPag, proxPag + postsPerPage);
    posts.push(...proxPosts);
    this.setState({ posts, page: proxPag });
    console.log(proxPosts);
  };

  handleInputChange = (event) => {
    const  value  = event.currentTarget.value;
    this.setState({ ...this.state, searchValue:value });
  };

  /* loadPosts_2 = async () => {
    const allData = await loadPosts_2();
    this.setState({ posts: allData });
  } */

  /* loadPosts_3 = async () => {
    const allData = await loadPosts_3();
    this.setState({ posts: allData });
  } */

  //////////////////////////////////////////////////////////////////////////////////

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    const filteredPosts = !!searchValue
      ? allPosts.filter((post) => {
          return post.body.toLowerCase().includes(searchValue.toLowerCase());
        })
      : posts;
    const counterPost = filteredPosts.length;
    console.log(counterPost);

    return (
      <>
        <section className="container-first">
          <PostCard_2 className="postcard-2" />
          <TextInput
            searchValue={searchValue}
            actionfn={this.handleInputChange}
          />
        </section>

        <section className="container">
          {!!searchValue && (
            <>
              <h3 className="h3Advisor">{counterPost} posts encontrados </h3>
            </>
          )}
          <>
          {filteredPosts.length > 0 && 
          <Posts posts={filteredPosts} />}
          </>
          <div className="button-container">
            {!searchValue && (
              <Button
                text="Carregar mais"
                onClick={this.loadMorePosts_2}
                disabled={noMorePosts}
              />
            )}
          </div>
        </section>
      </>
    );
  }
}




