import { useState } from "react";
import * as C from "./styled";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import axios from "axios";

type Props = {
  colorBt: string;
  title: string;
  commentId: string;
  likes: number;
  postId: string;
  cb: () => void;
};

const Page: React.FC<Props> = ({
  children,
  colorBt,
  commentId,
  postId,
  likes,
  cb
}) => {
  const [btnColor, setBtnColor] = useState(colorBt);
  const [likeCount, setLikeCount] = useState(likes);
  const navigate = useNavigate();

  const handleLikeClick = async () => {
    cb();
    if (btnColor === "#f00") {
      setBtnColor("#757575");
      setLikeCount(likeCount - 1);
    } else {
      setBtnColor("#f00");
      setLikeCount(likeCount + 1);
    }

    try {
      let body = { commentId, option: btnColor === "#f00" ? false : true };
      await api.put(`/blog/${postId}/likeComment`, body);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        let axiosError = e.response?.data.data.error;
        if (
          axiosError === "token é necessário" ||
          axiosError === "this token is not valid" ||
          axiosError === "Esse usuário não existe"
        ) {
          navigate("/signin");
          return;
        }
      }
    }
  };

  return (
    <C.Like onClick={handleLikeClick}>
      <span>{likeCount} </span> {children}
    </C.Like>
  );
};
export default Page;
