import { useState, useEffect, MouseEvent } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import * as C from "./styled";
import { PageContainer } from "../../app.styled";
import { NewListItem } from "../../types/NewListItem";
import Icon from "../../components/SvgIcon";
import {
  dateFormatter,
  timeFormatter,
  pastTime
} from "../../helpers/dateHelpers";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import LinkIcon from "@material-ui/icons/Link";
import api from "../../api";
import axios from "axios";
import Like from "../../components/Like";
import LikePost from "../../components/LikePost";

type ItemType = {
  id?: string;
  idUser?: string;
  name?: string;
  gender?: string;
  commentText?: string;
  usersLiked?: string[];
  likes?: number;
  dateCreated?: Date;
  v?: number;
  liked?: boolean;
  myComment?: boolean;
  image?: string;
};

type BlogItemType = {
  image: string;
  name: string;
};

type PrevNextType = {
  title: string;
  dateCreated: Date;
  _id: string;
};

const Page = () => {
  const [blogItem, setBlogItem] = useState<NewListItem>({} as NewListItem);
  const [postLikes, setPostLikes] = useState(blogItem.likes);
  const [comment, setComment] = useState("");
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    setPostLikes(blogItem.likes);
  }, [blogItem.likes]);

  useEffect(() => {
    const getPostInfo = async () => {
      try {
        let { data: json } = await api.get(`/blog/${id}`);
        setBlogItem(json.data);
      } catch (e) {
        if (axios.isAxiosError(e)) {
          console.log(e.response?.data.data.error);
        }
      }
    };
    getPostInfo();
  }, []);

  const handleCommentClick = async () => {
    try {
      let body = { commentText: comment };
      let {
        data: {
          data: { status, comment: newComment, image }
        }
      } = await api.put(`/blog/${id}/comment`, body); // o resultado com axios pega-se em data, dentro da data eu estou enviando data e dentro de data tem status, comment e image

      if (status) {
        setComment("");
        newComment.myComment = true;
        newComment.image = `http://localhost:3001/file/${image}`;
        setBlogItem(state => ({
          ...state,
          commentsList: [newComment, ...state.commentsList],
          totalComments: state.totalComments + 1
        })); // Vai provocar rerender nos comentarios
      }
    } catch (e) {
      if (axios.isAxiosError(e)) {
        let axiosError = e.response?.data.data.error;
        switch (axiosError) {
          case "token ?? necess??rio":
          case "this token is not valid":
          case "Esse usu??rio n??o existe":
            navigate("/signin");
            break;
          default:
            console.log(axiosError);
        }
      }
    }
  };

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    window.location.href = link;
  };
  const handleMoreClick = () => {
    if (end <= blogItem.commentsList.length) {
      setStart(start + 5);
      setEnd(end + 5);
    }
  };

  const handleLessClick = () => {
    if (end - 5 >= 0) {
      setStart(start - 5);
      setEnd(end - 5);
    }
  };

  return (
    <PageContainer>
      <C.Container>
        <div className="goBack">
          <Link to="/blog">
            <ArrowBackIcon style={{ fontSize: "0.9rem" }} /> Voltar
          </Link>
        </div>
        <div className="userData">
          <span>
            De{" "}
            {blogItem.userData ? (blogItem.userData as BlogItemType).name : ""}
          </span>
          <img
            src={
              blogItem.userData ? (blogItem.userData as BlogItemType).image : ""
            }
            alt=""
          />
        </div>
        <div className="dateCreated">
          {blogItem.dateCreated && (
            <small>
              {dateFormatter(new Date(blogItem.dateCreated))} ??s
              {timeFormatter(new Date(blogItem.dateCreated))}
            </small>
          )}
          <div className="views-and-likes">
            <small>{postLikes} curtida(s)</small>
            <small>{blogItem.views} visualiza????es</small>
          </div>
        </div>
        <div className="title">
          <h1>{blogItem.title}</h1>
        </div>
        <div className="desc">
          <p>{blogItem.desc}</p>
        </div>
        <div className="subject">
          <LinkIcon style={{ fontSize: "1rem" }} />
          {blogItem.subject &&
            blogItem.subject.map((item, key) => (
              <Link to={`/subjects?subject=${item}`} key={key}>
                {key === blogItem.subject.length - 1 ? `${item} ` : `${item}, `}
              </Link>
            ))}
        </div>
        <div className="text">
          {blogItem.text &&
            blogItem.text.map((item, key) => <p key={key}>{item}</p>)}
        </div>
        {/*Isto abaixo sera transformado num componente*/}
        <div className="prev-and-next">
          <div className="prev">
            <ArrowBackIcon style={{ fontSize: "1.1rem" }} />
            Anterior
          </div>
          <div className="next">
            <ArrowForwardIcon style={{ fontSize: "1.1rem" }} />
            Pr??ximo
          </div>
          {blogItem.prevNextArray && (
            <Link
              to={`/blog/${(blogItem.prevNextArray[1] as PrevNextType)._id}`}
              onClick={e =>
                handleLinkClick(
                  e,
                  `/blog/${(blogItem.prevNextArray[1] as PrevNextType)._id}`
                )
              }
            >
              <small>
                {dateFormatter(
                  new Date(
                    (blogItem.prevNextArray[1] as PrevNextType).dateCreated
                  )
                )}
              </small>
              <h3>{(blogItem.prevNextArray[1] as PrevNextType).title}</h3>
            </Link>
          )}

          {blogItem.prevNextArray && (
            <Link
              to={`/blog/${(blogItem.prevNextArray[0] as PrevNextType)._id}`}
              onClick={e =>
                handleLinkClick(
                  e,
                  `/blog/${(blogItem.prevNextArray[0] as PrevNextType)._id}`
                )
              }
            >
              <small>
                {dateFormatter(
                  new Date(
                    (blogItem.prevNextArray[0] as PrevNextType).dateCreated
                  )
                )}
              </small>
              <h3>{(blogItem.prevNextArray[0] as PrevNextType).title}</h3>
            </Link>
          )}
        </div>
        {/*Isto abaixo sera transformado num componente*/}
        <div className="comments-area">
          <textarea
            placeholder="Comente este poste"
            value={comment}
            onChange={e => setComment(e.target.value)}
          ></textarea>
          <button onClick={handleCommentClick}>comentar</button>
          <div className="like-button">
            <LikePost
              colorBt={blogItem.userLiked ? "#f00" : "#757575"}
              postId={id as string}
              setPostLikes={setPostLikes}
              postLikes={postLikes}
            />
          </div>
        </div>
        <div className="people-comments">
          {blogItem.commentsList && blogItem.commentsList.length > 0 && (
            <h2>Coment??rios</h2>
          )}

          {blogItem.commentsList && end <= blogItem.commentsList.length && (
            <div onClick={handleMoreClick} className="view-prev">
              Ver coment??rios mais antigos
            </div>
          )}

          {blogItem.commentsList &&
            blogItem.commentsList
              .slice(start, end)
              .map((item: ItemType, key) => (
                <div className="wrapper" key={item.id}>
                  <div className="person-info">
                    <div className="photo">
                      <img src={item.image} alt="" />
                    </div>
                    <span style={{ color: item.myComment ? "#f00" : "#000" }}>
                      {item.name}
                    </span>
                  </div>

                  <div className="comment">{item.commentText}</div>

                  <div className="links">
                    <Like
                      title="Clique para gostar"
                      colorBt={item.liked ? "#f00" : "#757575"}
                      commentId={item.id as string}
                      postId={id as string}
                      likes={item.likes as number}
                      cb={() => {
                        item.liked = !item.liked;
                        setBlogItem(state => ({ ...state }));
                      }}
                    >
                      <div style={{ width: 20, height: 20 }}>
                        <Icon isLiked={item.liked ?? false} />
                      </div>
                    </Like>
                    {item.myComment && (
                      <Link to={`/edit-comment/${item.id}/${id}`}>editar</Link>
                    )}

                    {item.myComment && (
                      <Link to={`/delete-comment/${item.id}/${id}`}>
                        eliminar
                      </Link>
                    )}

                    <small>
                      {pastTime(new Date(item.dateCreated as Date))}
                    </small>
                    {item.v && item.v > 0 ? <small>editado</small> : null}
                  </div>
                </div>
              ))}

          {blogItem.commentsList && end > 5 && (
            <div onClick={handleLessClick} className="view-prev">
              Ver coment??rios mais recentes
            </div>
          )}
        </div>
      </C.Container>
    </PageContainer>
  );
};
export default Page;
