import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function Bloglar({ bloglar }) {
  // console.log(bloglar);
  return (
    <div>
      <h1 className={styles.title}>Bloglar</h1>
      {bloglar.map((blog) => (
        <Link className={styles.single} href={"/bloglar/" + blog.id} key={blog.id}>
          <h3>{blog.title}</h3>
        </Link>
      ))}
      Ï
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  //  console.log(data );
  return {
    props: {
      bloglar: data.slice(0, 10),
    },
  };
};
