import React from "react";
import Button from "../Components/Button";
import styles from "./Feed.module.css";
import ilustracao from "../Assets/Imagens/illustration-working.svg";
import Input from "../Components/Input";
import ButtonForm from "../Components/ButtonForm";
import useForm from "../Hooks/useForm";
import useFetch from "../Hooks/useFetch";
import Result from "./Result";
import Cards from "./Cards";

const Feed = () => {
  const url = useForm("url");
  const { request, data, loading } = useFetch();
  const [links, setLinks] = React.useState([]);
  const { result } = data;

  function handleSubmit(event) {
    event.preventDefault();
    if (url.validate()) request(url.value);
  }

  React.useEffect(() => {
    result &&
      setLinks((link) => [[result.original_link, result.share_link], ...link]);
  }, [result]);

  return (
    <section className={styles.section}>
      <div className={styles.contentPhoto}>
        <span>
          <h1 className={styles.title}>More than just shorter links</h1>
          <p className={styles.subtitle}>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button>Get Started</Button>
        </span>
        <div className={styles.boxImg}>
          <img src={ilustracao} alt="Working" />
        </div>
      </div>
      <div className={styles.formUrl}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            name="inputUrl"
            id="inputUrl"
            placeholder="Shorten a link here..."
            {...url}
          />
          {loading ? (
            <ButtonForm>Shorting...</ButtonForm>
          ) : (
            <ButtonForm>Shorten It!</ButtonForm>
          )}
        </form>
      </div>
      {data && <Result links={links} />}
      <Cards />
    </section>
  );
};

export default Feed;
