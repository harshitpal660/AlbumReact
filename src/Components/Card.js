import styles from "../Styles/card.module.css";
import trash from "../Icons/trash.png";
import restore from "../Icons/history.png";
import edit from "../Icons/edit.png";


// card
export const Card = ({ item, handleDeleteAction }) => {

  return (
    <>
      <div className={styles.card}>
        {/* UserName/Id */}
        <div className={styles.title}>User {item.userId}</div>

        {/* Carousel */}
        <div className={styles.caraousel}>
          <div
            id={`carouselExampleInterval${item.userId}`}
            class="carousel slide h-100"
            data-bs-ride="carousel"
          >
            <div class={`carousel-inner h-100 ${styles.caraouselInner}`}>
              <div class={`carousel-item active h-100 ${styles.caraouselItem}`}>
                <div className="d-flex flex-column h-100 justify-content-center text-center pt-5">
                  {!item.data[0].delete ? (
                    <>
                      <div>Title {item.data[0].id}</div>
                      <div>{item.data[0].title}</div>
                    </>
                  ) : (
                    <>
                      <del><div>Title {item.data[0].id}</div>
                      <div>{item.data[0].title}</div></del>
                    </>
                  )}
                  <div className="d-flex flex-column justify-content-end flex-fill">
                    <div className={styles.buttons}>
                      {!item.data[0].delete ? (
                        <div>
                          <img
                            src={trash}
                            alt="delete"
                            onClick={() =>
                              handleDeleteAction(item.userId, item.data[0].id)
                            }
                          ></img>
                        </div>
                      ) : (
                        <div>
                          <img
                            src={restore}
                            alt="restore"
                            onClick={() =>
                              handleDeleteAction(item.userId, item.data[0].id)
                            }
                          ></img>
                        </div>
                      )}
                      <div>
                        <img src={edit} alt="edit"></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class={`carousel-item h-100  ${styles.caraouselItem}`}>
              <div className="d-flex flex-column h-100 justify-content-center text-center pt-5">
                  {!item.data[1].delete ? (
                    <>
                      <div>Title {item.data[1].id}</div>
                      <div>{item.data[1].title}</div>
                    </>
                  ) : (
                    <>
                      <del><div>Title {item.data[1].id}</div>
                      <div>{item.data[1].title}</div></del>
                    </>
                  )}
                  <div className="d-flex flex-column justify-content-end flex-fill">
                    <div className={styles.buttons}>
                      {!item.data[1].delete ? (
                        <div>
                          <img
                            src={trash}
                            alt="delete"
                            onClick={() =>
                              handleDeleteAction(item.userId, item.data[1].id)
                            }
                          ></img>
                        </div>
                      ) : (
                        <div>
                          <img
                            src={restore}
                            alt="restore"
                            onClick={() =>
                              handleDeleteAction(item.userId, item.data[1].id)
                            }
                          ></img>
                        </div>
                      )}
                      <div>
                        <img src={edit} alt="edit"></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class={`carousel-item h-100 ${styles.caraouselItem}`}>
              <div className="d-flex flex-column h-100 justify-content-center text-center pt-5">
                  {!item.data[2].delete ? (
                    <>
                      <div>Title {item.data[2].id}</div>
                      <div>{item.data[2].title}</div>
                    </>
                  ) : (
                    <>
                      <del><div>Title {item.data[2].id}</div>
                      <div>{item.data[2].title}</div></del>
                    </>
                  )}
                  <div className="d-flex flex-column justify-content-end flex-fill">
                    <div className={styles.buttons}>
                      {!item.data[2].delete ? (
                        <div>
                          <img
                            src={trash}
                            alt="delete"
                            onClick={() =>
                              handleDeleteAction(item.userId, item.data[2].id)
                            }
                          ></img>
                        </div>
                      ) : (
                        <div>
                          <img
                            src={restore}
                            alt="restore"
                            onClick={() =>
                              handleDeleteAction(item.userId, item.data[2].id)
                            }
                          ></img>
                        </div>
                      )}
                      <div>
                        <img src={edit} alt="edit"></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class={`carousel-item h-100 ${styles.caraouselItem}`}>
              <div className="d-flex flex-column h-100 justify-content-center text-center pt-5">
                  {!item.data[3].delete ? (
                    <>
                      <div>Title {item.data[3].id}</div>
                      <div>{item.data[3].title}</div>
                    </>
                  ) : (
                    <>
                      <del><div>Title {item.data[3].id}</div>
                      <div>{item.data[3].title}</div></del>
                    </>
                  )}
                  <div className="d-flex flex-column justify-content-end flex-fill">
                    <div className={styles.buttons}>
                      {!item.data[3].delete ? (
                        <div>
                          <img
                            src={trash}
                            alt="delete"
                            onClick={() =>
                              handleDeleteAction(item.userId, item.data[3].id)
                            }
                          ></img>
                        </div>
                      ) : (
                        <div>
                          <img
                            src={restore}
                            alt="restore"
                            onClick={() =>
                              handleDeleteAction(item.userId, item.data[3].id)
                            }
                          ></img>
                        </div>
                      )}
                      <div>
                        <img src={edit} alt="edit"></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class={`carousel-item h-100 ${styles.caraouselItem}`}>
              <div className="d-flex flex-column h-100 justify-content-center text-center pt-5">
                  {!item.data[4].delete ? (
                    <>
                      <div>Title {item.data[4].id}</div>
                      <div>{item.data[4].title}</div>
                    </>
                  ) : (
                    <>
                      <del><div>Title {item.data[4].id}</div>
                      <div>{item.data[4].title}</div></del>
                    </>
                  )}
                  <div className="d-flex flex-column justify-content-end flex-fill">
                    <div className={styles.buttons}>
                      {!item.data[4].delete ? (
                        <div>
                          <img
                            src={trash}
                            alt="delete"
                            onClick={() =>
                              handleDeleteAction(item.userId, item.data[4].id)
                            }
                          ></img>
                        </div>
                      ) : (
                        <div>
                          <img
                            src={restore}
                            alt="restore"
                            onClick={() =>
                              handleDeleteAction(item.userId, item.data[4].id)
                            }
                          ></img>
                        </div>
                      )}
                      <div>
                        <img src={edit} alt="edit"></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class={`carousel-item h-100 ${styles.caraouselItem}`}>
              <div className="d-flex flex-column h-100 justify-content-center text-center pt-5">
                  {!item.data[5].delete ? (
                    <>
                      <div>Title {item.data[5].id}</div>
                      <div>{item.data[5].title}</div>
                    </>
                  ) : (
                    <>
                      <del><div>Title {item.data[5].id}</div>
                      <div>{item.data[5].title}</div></del>
                    </>
                  )}
                  <div className="d-flex flex-column justify-content-end flex-fill">
                    <div className={styles.buttons}>
                      {!item.data[5].delete ? (
                        <div>
                          <img
                            src={trash}
                            alt="delete"
                            onClick={() =>
                              handleDeleteAction(item.userId, item.data[5].id)
                            }
                          ></img>
                        </div>
                      ) : (
                        <div>
                          <img
                            src={restore}
                            alt="restore"
                            onClick={() =>
                              handleDeleteAction(item.userId, item.data[5].id)
                            }
                          ></img>
                        </div>
                      )}
                      <div>
                        <img src={edit} alt="edit"></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class={`carousel-item h-100 ${styles.caraouselItem}`}>
              <div className="d-flex flex-column h-100 justify-content-center text-center pt-5">
                  {!item.data[6].delete ? (
                    <>
                      <div>Title {item.data[6].id}</div>
                      <div>{item.data[6].title}</div>
                    </>
                  ) : (
                    <>
                      <del><div>Title {item.data[6].id}</div>
                      <div>{item.data[6].title}</div></del>
                    </>
                  )}
                  <div className="d-flex flex-column justify-content-end flex-fill">
                    <div className={styles.buttons}>
                      {!item.data[6].delete ? (
                        <div>
                          <img
                            src={trash}
                            alt="delete"
                            onClick={() =>
                              handleDeleteAction(item.userId, item.data[6].id)
                            }
                          ></img>
                        </div>
                      ) : (
                        <div>
                          <img
                            src={restore}
                            alt="restore"
                            onClick={() =>
                              handleDeleteAction(item.userId, item.data[6].id)
                            }
                          ></img>
                        </div>
                      )}
                      <div>
                        <img src={edit} alt="edit"></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class={`carousel-item h-100 ${styles.caraouselItem}`}>
              <div className="d-flex flex-column h-100 justify-content-center text-center pt-5">
                  {!item.data[7].delete ? (
                    <>
                      <div>Title {item.data[7].id}</div>
                      <div>{item.data[7].title}</div>
                    </>
                  ) : (
                    <>
                      <del><div>Title {item.data[7].id}</div>
                      <div>{item.data[7].title}</div></del>
                    </>
                  )}
                  <div className="d-flex flex-column justify-content-end flex-fill">
                    <div className={styles.buttons}>
                      {!item.data[7].delete ? (
                        <div>
                          <img
                            src={trash}
                            alt="delete"
                            onClick={() =>
                              handleDeleteAction(item.userId, item.data[7].id)
                            }
                          ></img>
                        </div>
                      ) : (
                        <div>
                          <img
                            src={restore}
                            alt="restore"
                            onClick={() =>
                              handleDeleteAction(item.userId, item.data[7].id)
                            }
                          ></img>
                        </div>
                      )}
                      <div>
                        <img src={edit} alt="edit"></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class={`carousel-item h-100 ${styles.caraouselItem}`}>
              <div className="d-flex flex-column h-100 justify-content-center text-center pt-5">
                  {!item.data[8].delete ? (
                    <>
                      <div>Title {item.data[8].id}</div>
                      <div>{item.data[8].title}</div>
                    </>
                  ) : (
                    <>
                      <del><div>Title {item.data[8].id}</div>
                      <div>{item.data[8].title}</div></del>
                    </>
                  )}
                  <div className="d-flex flex-column justify-content-end flex-fill">
                    <div className={styles.buttons}>
                      {!item.data[8].delete ? (
                        <div>
                          <img
                            src={trash}
                            alt="delete"
                            onClick={() =>
                              handleDeleteAction(item.userId, item.data[8].id)
                            }
                          ></img>
                        </div>
                      ) : (
                        <div>
                          <img
                            src={restore}
                            alt="restore"
                            onClick={() =>
                              handleDeleteAction(item.userId, item.data[8].id)
                            }
                          ></img>
                        </div>
                      )}
                      <div>
                        <img src={edit} alt="edit"></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class={`carousel-item h-100 ${styles.caraouselItem}`}>
              <div className="d-flex flex-column h-100 justify-content-center text-center pt-5">
                  {!item.data[9].delete ? (
                    <>
                      <div>Title {item.data[9].id}</div>
                      <div>{item.data[9].title}</div>
                    </>
                  ) : (
                    <>
                      <del><div>Title {item.data[9].id}</div>
                      <div>{item.data[9].title}</div></del>
                    </>
                  )}
                  <div className="d-flex flex-column justify-content-end flex-fill">
                    <div className={styles.buttons}>
                      {!item.data[9].delete ? (
                        <div>
                          <img
                            src={trash}
                            alt="delete"
                            onClick={() =>
                              handleDeleteAction(item.userId, item.data[9].id)
                            }
                          ></img>
                        </div>
                      ) : (
                        <div>
                          <img
                            src={restore}
                            alt="restore"
                            onClick={() =>
                              handleDeleteAction(item.userId, item.data[9].id)
                            }
                          ></img>
                        </div>
                      )}
                      <div>
                        <img src={edit} alt="edit"></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target={`#carouselExampleInterval${item.userId}`}
              data-bs-slide="prev"
            >
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target={`#carouselExampleInterval${item.userId}`}
              data-bs-slide="next"
            >
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
