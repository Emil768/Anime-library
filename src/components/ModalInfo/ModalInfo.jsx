import React from "react";

import * as moment from "moment/moment";
import "moment/locale/ru";

import "./ModalInfo.scss";

function ModalInfo({ data, closeModal }) {
  moment.locale("ru");

  const handlerCloseModal = () => {
    closeModal();
  };

  const searchTitleAnime = data && data.title.replace(/[ ,:]/g, "_");

  return (
    <>
      <div className="modal__header">
        <h2 className="modal__title" title={`(${data.title_japanese})`}>
          {data.title_english ? data.title_english : data.title}{" "}
          {`(${data.title_japanese})`}
        </h2>
        <button className="modal__btn" onClick={handlerCloseModal}>
          <div className="modal__btn-line"></div>
          <div className="modal__btn-line"></div>
          <div className="modal__btn-line"></div>
        </button>
      </div>
      <div className="modal__body">
        <div className="modal__body-left">
          <img src={data.image_url} alt="" />
          {data.type === "Manga" ? (
            <a
              className="modal__link-watch"
              href={`https://myanimelist.net/manga/${data.mal_id}/${searchTitleAnime}`}
              target="_blank"
              rel="noreferrer"
            >
              Читать
            </a>
          ) : (
            <a
              className="modal__link-watch"
              href={`https://myanimelist.net/anime/${data.mal_id}/${searchTitleAnime}/video`}
              target="_blank"
              rel="noreferrer"
            >
              Смотреть
            </a>
          )}
        </div>
        <div className="modal__body-right">
          <ul className="modal__list">
            <li className="modal__list-item list-item">
              Рейтинг: <b>{data.score} 🌟</b>
            </li>
            <li className="modal__list-item list-item">
              Место: <b>{data.popularity}</b>
            </li>
            <li className="modal__list-item list-item">
              Статус: <b>{data.status}</b>
            </li>
            {data.aired ? (
              <li className="modal__list-item list-item">
                {" "}
                Год:
                <b>{moment(data.aired.from).format("L")}</b>
                {data.aired.to !== null ? (
                  <b>-{moment(data.aired.to).format("L")}</b>
                ) : (
                  ""
                )}
              </li>
            ) : null}
            {data.published ? (
              <li className="modal__list-item list-item">
                {" "}
                С
                <b className="list-item__year">
                  {moment(data.published.from).format("L")}
                </b>
                -
                <b className="list-item__year">
                  {data.published.to
                    ? moment(data.published.to).format("L")
                    : "настоящее время"}
                </b>
              </li>
            ) : null}
            {data.sourse ? (
              <li className="modal__list-item list-item">
                Источник:
                <b>{data.sourse}</b>
              </li>
            ) : null}
            {data.type === "TV" ? (
              <li className="modal__list-item list-item">
                Возрастной рейтинг:
                <b>{data.rating}</b>
              </li>
            ) : null}

            {data.genres ? (
              <li className="modal__list-item ">
                Жанры:
                {data.genres.map((item, index) => {
                  return (
                    <b className="list-item__genre" key={index}>
                      {" "}
                      {item.name}
                    </b>
                  );
                })}
              </li>
            ) : null}
            {data.authors ? (
              <li className="modal__list-item list-item">
                Авторы :
                {data.authors.map((item, index) => {
                  return <b key={index}>{item.name}</b>;
                })}
              </li>
            ) : null}

            {data.producers ? (
              <li className="modal__list-item list-item ">
                Авторы :
                {data.producers.map((item, index) => {
                  return (
                    <b className="list-item__producers " key={index}>
                      {item.name}
                    </b>
                  );
                })}
              </li>
            ) : null}
            {data.episodes ? (
              <li className="modal__list-item list-item">
                Серий: <b>{data.episodes}</b>
              </li>
            ) : null}

            {data.studios ? (
              <li className="modal__list-item list-item">
                Студия:
                {data.studios.length ? (
                  data.studios.map((item, index) => {
                    return (
                      <b className="list-item__studio" key={index}>
                        {item.name}
                      </b>
                    );
                  })
                ) : (
                  <b>Неизвестно</b>
                )}
              </li>
            ) : null}
            <li className="modal__list-item list-item">
              Тип: <b>{data.type}</b>
            </li>
            {data.trailer_url ? (
              <li className="modal__list-item list-item">
                Трейлер:{" "}
                <a href={data.trailer_url} target="_blank" rel="noreferrer">
                  <b>Ссылка</b>
                </a>
              </li>
            ) : null}
            <li className="modal__list-item list-item">
              Описание:
              <p className="list-item__text">{data.synopsis}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="modal__footer"></div>
    </>
  );
}

export default ModalInfo;
