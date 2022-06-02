import './SignUpForm.scss';

const SignUpForm = ({ input, onChange }) => {
  const { name, id, title, type } = input;
  return (
    <div>
      <div className="signUpForm" key={id}>
        <span className="title">{title}</span>
        <input
          className="userId"
          type={type}
          name={name}
          placeholder={input.placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default SignUpForm;
