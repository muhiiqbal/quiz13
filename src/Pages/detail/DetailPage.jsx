import axios from "axios";
import { useState, useEffect } from "react";

const API = "https://jsonplaceholder.typicode.com/comments";

const DetailPage = () => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    try {
      const { data } = await axios.get(API);
      setComments(data);
    } catch (e) {
      //
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="container">
      <div className="d-flex my-5 justify-content-between">
        <a href="/">
          <button type="button" className="btn btn-outline-primary">
            Kembali
          </button>
        </a>
        <h1>Daftar Komentar</h1>
        <div />
      </div>
      <table className="table table-hover">
        <thead>
          <tr className="table-dark text-center">
            <th>Nomor</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Komentar</th>
          </tr>
        </thead>
        <tbody>
          {comments?.map((comment) => (
            <tr key={comment.id} className="table-secondary table-dark text-center">
              <td>{comment.id}</td>
              <td>{comment.name}</td>
              <td>{comment.email}</td>
              <td>{comment.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailPage;