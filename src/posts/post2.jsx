import PropTypes from 'prop-types';
import React from 'react'

function App(props) {
    const [like, setLike] = React.useState(false);
    const [save, setSave] = React.useState(false);
    const [share, setShare] = React.useState(false);
    const [comment, setComment] = React.useState("");
    return (
      <>
        <header>
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <a href="#">
                      <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220609090809/download-200x200.png" 
                        alt="img1" height="30px"/>
                    </a>
                </div>
                <div className="searchbar">
                    <input type="text" 
                           placeholder="Search"/>
                    <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220609093658/search-200x200.png"
                         height="18"
                         alt="img2" />
                </div>
                <div className="nav-links">
                    <ul className="nav-group">
                        <li className="nav-item">
                            <a href="#">
                                <i className="fas fa-home"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="">
                                <i className="fab fa-facebook-messenger"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="">
                                <i className="far fa-compass"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="">
                                <i className="far fa-heart"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <div className="action">
                                <div className="profile">
                                    <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220609093221/g2-200x200.jpg" 
                                        alt="user Avatar"/>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  
    <main>
        <div className="container">
            <div className="col-9">
                <div className="statuses">
                    <div className="status">
                        <div className="image">
                            <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220604085434/GeeksForGeeks-300x243.png"
                                 alt="img3"/>
                        </div>
                    </div>
                    <div className="status">
                        <div className="image">
                            <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220609093221/g2-200x200.jpg" 
                                 alt="img4"/>
                        </div>
                    </div>
                    <div className="status">
                        <div className="image">
                            <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220609093241/g3-200x200.png" 
                                 alt="img5"/>
                        </div>
                    </div>
                    <div className="status">
                        <div className="image">
                            <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220609093229/g-200x200.png" 
                                 alt="img6"/>
                        </div>
                    </div>
                    <div className="status">
                        <div className="image">
                            <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220609093221/g2-200x200.jpg" 
                                 alt="img7"/>
                        </div>
                    </div>
                    <div className="status">
                        <div className="image">
                            <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220604085434/GeeksForGeeks-300x243.png" 
                                 alt="img8" />
                        </div>
                    </div>
                </div>
              
              <div className="card">
                <div className="top">
                    <div className="userDetails">
                        <div className="profilepic">
                            <div className="profile_img">
                                <div className="image">
                                    <img src=
"Picture3.jpg" 
                                        alt="img8" />
                                </div>
                            </div>
                        </div>
                        <h3>Política News
                              <br/>
                              <span>Brasília, Brasil</span>
                      </h3>
                    </div>
                    <div>
                        <span className="dot">
                            <i className="fas fa-ellipsis-h"></i>
                        </span>
                    </div>
                </div>
                <div className="imgBx">
                    <img src=
"manchete2.jpg" 
                        alt="post-1" className="cover" />
                </div>
                <div className="bottom">
                    <div className="actionBtns">
                        <div className="left">
                            <span className="heart">
                                <span>
                                    <svg aria-label="Like" 
                                         color="#262626" 
                                         fill="#262626" 
                                         height="24" 
                                         role="img"
                                         viewBox="0 0 48 48" 
                                         width="24" onClick={() => setLike(!like)} >
                                        <path fill={like ? "red" : "#000"}
                                            d="M34.6 6.1c5.7 0 10.4 5.2 10.4 
                                            11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 
                                            41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 
                                            11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 
                                            1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 
                                            1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 
                                            1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 
                                            0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 
                                            1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 
                                            1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 
                                            7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 
                                            48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
                                        </path>
                                    </svg>
                                </span>
                            </span>
                            <svg aria-label="Comment" 
                                 className="_8-yf5 " 
                                 color="#262626" 
                                 fill="#262626" 
                                 height="24"
                                 role="img" 
                                 viewBox="0 0 48 48" 
                                 width="24"
                                 onClick={()=>document.getElementById("comment").focus()}
                                 >
    
                                <path clipRule="evenodd"
                                    d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 
                                    11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 
                                    7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 
                                    4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 
                                    8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 
                                    2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 
                                    44.5 12.7 44.5 24z"
                                    fillRule="evenodd">
                              </path>
                            </svg>
                            <svg aria-label="Share Post" 
                                 className="_8-yf5 " 
                                 color="#262626" 
                                 fill="#262626" 
                                 height="24"
                                 role="img"
                                 viewBox="0 0 48 48" 
                                 width="24"
                                 onClick={() => {setShare(!share); if(!share) alert("mensagem compartilhada!")}}
                                 >
                                <path fill={share ? "red" : "#000"}
                                    d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 
                                    3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 
                                    1 1.2 1.1h.2c.5 0 1-.3 
                                    1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 
                                    6.1h35.5L18 18.7 5.2 6.1zm18.7 
                                    33.6l-4.4-18.4L42.4 8.6 23.9 39.7z">
                                </path>
                            </svg>
                        </div>
                        <div className="right">
                            <svg aria-label="Save" 
                                 className="_8-yf5 " 
                                 color="#262626" 
                                 fill="#262626" 
                                 height="24"
                                 role="img" 
                                 viewBox="0 0 48 48" 
                                 width="24"
                                 onClick={() => {setSave(!save); if(!save) alert("mensagem salva!")}}
                                 >

                                <path fill={save ? "red" : "#000"}
                                    d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 
                                    47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 
                                    3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 
                                    1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 
                                    0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 
                                    1.4-.9 2.2-.9z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <a href="#">
                        <p className="likes">1527 likes</p>

                    </a>
                    <a href="#">
                        <p className="message">
                          <br/>Nova legislação provoca acalorado debate sobre justiça fiscal e prioridades econômicas.
                        </p>

                    </a>
                    <a href="#">
                        <h4 className="comments">
                          <p className="comment-title">Comentários</p>
                          <section className="comment-box">
                              <div className="profilepic">
                                  <div className="profile_img">
                                      <div className="image">
                                          <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220609093221/g2-200x200.jpg" 
                                      alt="img12" />
                                      </div>
                                  </div>
                              </div>
                              <div className="comment">
                              Os petralhas gostam de aumento de  imposto em cima de quem trabalha pra bancar a vida mansa deles.
                              </div>
                          </section>
                          <section className="comment-box">
                              <div className="profilepic">
                                  <div className="profile_img">
                                      <div className="image">
                                          <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220604085434/GeeksForGeeks-200x200.png" 
                                      alt="img12" />
                                      </div>
                                  </div>
                              </div>
                              <div className="comment">
                              O governo deveria deixar claro como isso poderia ajudar a vida das pessoas
                              </div>
                          </section>
                          
                          <section className="comment-box">
                              <div className="profilepic">
                                  <div className="profile_img">
                                      <div className="image">
                                          <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220609093241/g3-200x200.png" 
                                      alt="img12" />
                                      </div>
                                  </div>
                              </div>
                              <div className="comment">
                                Burguesia privilegiada só pensam neles mesmos, podem e devem ajudar o povo sim! 
                              </div>
                          </section>

                        </h4>
                    </a>
                  
                    <div className="addComments">
                        <div className="reaction">
                            <h3>
                              <i className="far fa-smile"></i>
                            </h3>
                        </div>
                        <input type="text"
                               className="text"
                               placeholder="Adicione seu comentário..."
                               id="comment"
                               value={comment}
                               onChange={(event) => setComment(event.target.value)}
                                 />
                        <a href="#" onClick={() => props.savePost(2, like, save, share, comment, window.email, 4)}>Enviar</a>
                    </div>
                </div>
            </div>
            </div>
            <div className="col-3">
                <div className="card">
                    <h4>Suggestions For You</h4>
                    <div className="top">
                        <div className="userDetails">
                            <div className="profilepic">
                                <div className="profile_img">
                                    <div className="image">
                                        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220609093221/g2-200x200.jpg" 
                                            alt="img12"/>
                                    </div>
                                </div>
                            </div>
                            <h3>Lucas_DeusPatriaFamilia<br/>
                              <span>Follows You</span>
                            </h3>
                        </div>
                        <div>
                            <a href="#" 
                               className="follow">follow
                             </a>
                        </div>
                    </div>
                    <div className="top">
                        <div className="userDetails">
                            <div className="profilepic">
                                <div className="profile_img">
                                    <div className="image">
                                        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220609093229/g-200x200.png" 
                                            alt="img13"/>
                                    </div>
                                </div>
                            </div>
                            <h3>Luiza_Petista<br/>
                              <span>Follows You</span>
                           </h3>
                        </div>
                        <div>
                            <a href="#" 
                               className="follow">follow
                           </a>
                        </div>
                    </div>
                    <div className="top">
                        <div className="userDetails">
                            <div className="profilepic">
                                <div className="profile_img">
                                    <div className="image">
                                        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220609093221/g2-200x200.jpg" 
                                            alt="img14"/>
                                    </div>
                                </div>
                            </div>
                            <h3>Marta_AntiFascista<br/>
                                <span>Followed by Keshav Agarwal</span>
                            </h3>
                        </div>
                        <div>
                            <a href="#" 
                               className="follow">follow</a>
                        </div>
                    </div>
                    <div className="top">
                        <div className="userDetails">
                            <div className="profilepic">
                                <div className="profile_img">
                                    <div className="image">
                                        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220609093229/g-200x200.png" 
                                            alt="img15"/>
                                    </div>
                                </div>
                            </div>
                            <h3>Andre_Capitao<br/>
                              <span>Follows You</span>
                            </h3>
                        </div>
                        <div>
                            <a href="#" 
                               className="follow">follow
                           </a>
                        </div>
                    </div>
                    <div className="top">
                        <div className="userDetails">
                            <div className="profilepic">
                                <div className="profile_img">
                                    <div className="image">
                                        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220609093241/g3-200x200.png" 
                                            alt="img16" 
                                            className="cover"/>
                                    </div>
                                </div>
                            </div>
                            <h3>Pedro_Mito<br/>
                                <span>Followed by Keshav Agarwal</span>
                            </h3>
                        </div>
                        <div>
                            <a href="#" 
                               className="follow">follow
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>

      </>
    )
  }
  
  App.propTypes = {
    setActiveStep: PropTypes.func,
    savePost: PropTypes.func
  }

  export default App
  