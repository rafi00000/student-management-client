const StudentClassCard = ({ card }) => {
  console.log(card);
  const { image, price, email, title, name, description } = card;

  return (
    <div className="border space-y-3 p-5 rounded-md">
      <img src={image} alt="" className="mx-auto border w-96 h-60" />
      <p>posted by: {name}</p>
      <div className="flex items-center justify-between">
        <p>Title: {title}</p>
        <p>Price: {price}$</p>
      </div>
      <p>Email: {email}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default StudentClassCard;
