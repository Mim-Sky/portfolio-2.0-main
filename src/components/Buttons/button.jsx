const Button = ({ href, onClick, children }) => {

  if (href) {
    return (
      <a
        href={href}
        className="p-2 rounded text-white/95 text-sm md:text-base font-semibold bg-action_coral hover:bg-action_coral/70 duration-200 ease-in-out"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className="p-2 rounded text-white/95 text-sm md:text-base font-semibold bg-button_teal hover:bg-button_teal/70 duration-200 ease-in-out"
    >
      {children}
    </button>
  );
};

export default Button;