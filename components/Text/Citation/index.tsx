import styles from "../Text.module.css";

const Citation = () => {
  return (
    <div>
      <h1>Citation</h1>
      <p>For more information visit this <a href="/" target="_blank">link</a> to read our paper.</p>
      <code>
        {`@article{,
        title={},
        author={Andres, Austin. Arevalo, Lance Gabrielle. Bayquen, Christian Gabriel. Capistrano, Bryan, Cayton, Arian Carl. Fernandez, Jaime,  Salenga, Neil Fernan M. },
        journal={},
        year={2022}
        }`}
      </code>
    </div>
  );
};

export default Citation;
