function Profile({ name, image, contribution }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} width="150" />
      <p>{contribution}</p>
    </div>
  );
}

export default Profile;