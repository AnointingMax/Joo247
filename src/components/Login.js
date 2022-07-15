import { Formik } from "formik";
import styled from "styled-components";
import logo from "../images/yellowLogo.png";
import { default as Input } from "./CustomInput";
import { FaUser } from "react-icons/fa";
import { ImLock } from "react-icons/im";
import { Link as Anchor } from "react-router-dom";

const Login = ({ setModal }) => {
	const initialValues = {
		username: "",
		password: "",
		remember: false,
	};
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values) => {
				console.log(values);
			}}
		>
			{({ values, handleSubmit, handleChange }) => (
				<Form onSubmit={handleSubmit}>
					<Logo src={logo} alt="logo" />
					<Header className="mb-2">Log In</Header>
					<CustomInput
						className="transparent border-yellow"
						name="username"
						value={values.username}
						onChange={handleChange}
						placeholder="User Name"
						leftIcon={<FaUser size={24} className="color-white" />}
					/>
					<CustomInput
						className="transparent border-yellow"
						name="password"
						value={values.password}
						onChange={handleChange}
						placeholder="Password"
						leftIcon={<ImLock size={22} className="color-white" />}
						type="password"
					/>
					<Row>
						<Input
							name="remember"
							checked={values.remember}
							onChange={handleChange}
							type="checkbox"
							span={"Remember me"}
						/>
						<Link to="/">Forgot Password</Link>
					</Row>
					<Button>Log In</Button>
					<Text>
						Don't have an account?{" "}
						<Link2 onClick={() => setModal("register")}>Sign Up</Link2>
					</Text>
				</Form>
			)}
		</Formik>
	);
};

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Logo = styled.img`
	margin-bottom: 20px;
`;

const Header = styled.h2`
	font-style: normal;
	font-weight: 700;
	font-size: 26px;
	line-height: 31px;
	color: ${(props) => props.theme.white};
`;

const CustomInput = styled(Input)`
	margin-bottom: 20px;
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 40px;
`;

const Link = styled(Anchor)`
	color: ${(props) => props.theme.primaryColor};
	text-decoration: none;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 16px;
	display: inline;

	&:hover {
		text-decoration: underline;
	}
`;

const Link2 = styled.span`
	color: ${(props) => props.theme.primaryColor};
	text-decoration: none;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 16px;
	display: inline;

	&:hover {
		text-decoration: underline;
	}
`;

const Button = styled.button`
	text-align: center;
	background-color: ${(props) => props.theme.primaryColor};
	color: ${(props) => props.theme.white};
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 35px;
	padding: 9px;
	border: none;
	border-radius: 50px;
	width: 100%;
	margin-bottom: 40px;
`;

const Text = styled.span`
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 16px;
	display: inline;
`;

export default Login;
