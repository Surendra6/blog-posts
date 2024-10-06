const Card = ({ title, description, image }) => {
  return (
    <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg hover:scale-105 h-64">
      <img
        alt={title}
        src={image}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative bg-gradient-to-t from-gray-900/60 to-gray-900/30 pt-24 h-full">
        <div className="p-4 sm:p-6 flex items-end h-full">
          <a href="#">
            <h3 className="mt-0.5 text-lg text-white">{title}</h3>
          </a>

          {/* <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
            {description}
          </p> */}
        </div>
      </div>
    </article>

    // <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
    //   <img className="w-full h-48 object-cover" src={image} alt={title} />
    //   <div className="p-6">
    //     <h2 className="text-2xl font-bold mb-2">{title}</h2>
    //     <p className="text-gray-700">{description}</p>
    //   </div>
    // </div>
  );
};

export default Card;
