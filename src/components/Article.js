import { Routes, Route } from "react-router-dom";

function Article() {
  return (
    <div className="article">
      <Routes>
        <Route path="/" element={
          <div>
            <h1>Новости</h1>
            <p>Сегодня прекрасная погода и новые события в университете.</p>
          </div>
        }/>
        <Route path="/about" element={
          <h1>Южный федеральный университет</h1>
        }/>
        <Route path="/contacts" element={
          <h1>+7-999-123-45-67</h1>
        }/>
        <Route path="*" element={
          <h1>404 - Страница не найдена</h1>
        }/>
      </Routes>
    </div>
  );
}

export default Article;
