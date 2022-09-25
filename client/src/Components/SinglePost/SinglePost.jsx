import "./SinglePost.css";

export default function SinglePost() {
  const src =
    "https://source.unsplash.com/random/250x2" +
    Math.floor(Math.random() * (98 - 11) + 11);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={src} alt="Single Post"  />

        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur{" "}
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">author: Fredy mcMury</span>
          <span className="singlePostDate">2 hours ago</span>
          
        </div>
        <p className="singlePostDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            labore quasi accusamus quae corrupti inventore expedita harum dolore
            et vero, ipsam dolor, veniam corporis? Molestiae vero facere optio
            sequi dicta? Nostrum, voluptas perferendis! Officiis, nobis. Alias
            atque animi impedit deserunt sapiente maxime amet? Minus ullam
            maiores aliquam molestias officia sit, quisquam, autem voluptate
            distinctio magni sequi excepturi, placeat aut itaque. Reiciendis
            accusantium nemo unde, aliquid dolores nam odit illum quo incidunt
            velit quam, pariatur repellendus aut iste repudiandae enim, facilis
            molestiae. Iusto maiores minima repudiandae id, obcaecati officiis
            nam eum? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Laboriosam et tenetur eveniet aliquid commodi laudantium, natus
            quasi voluptatibus dolorum, nisi ipsum earum repellat dolorem minima
            eum! Saepe accusamus pariatur quas aliquam laudantium molestias, eum
            vel cumque aut odio in architecto et corrupti corporis, dicta
            veritatis voluptas maxime eos non officia! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Et repellendus delectus, sit
            ratione quasi nobis consequuntur eos ipsam ducimus? Quo vitae
            repudiandae molestiae tempora voluptates eos odio vel placeat
            inventore impedit facilis quis architecto aliquid, et fugit eaque
            fuga. Laborum quos ab debitis necessitatibus quas tempora porro
            soluta enim expedita!
          </p>
      </div>
    </div>
  );
}
