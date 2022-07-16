import { Formik } from "formik";
import styled from "styled-components";
import logo from "../images/yellowLogo.png";
import { default as Input } from "./CustomInput";
import { FaUser } from "react-icons/fa";
import { ImLock } from "react-icons/im";
import { Link as Anchor } from "react-router-dom";
import * as Yup from "yup";
import { device } from "../constants";
import { useState } from "react";
import Loader from "./Loader";

const Login = ({ setModal }) => {
	const [loading, setLoading] = useState(false);

	const initialValues = {
		email: "",
		password: "",
		remember: false,
	};

	const validationSchema = Yup.object().shape({
		email: Yup.string().required("Please enter your email"),
		password: Yup.string().required("Please enter your password"),
	});

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				setLoading(true);

				setTimeout(() => {
					console.log(values);
					setLoading(false);
				}, 2500);
			}}
		>
			{({
				values,
				handleSubmit,
				handleChange,
				handleBlur,
				errors,
				touched,
			}) => (
				<Form onSubmit={handleSubmit}>
					<Logo src={logo} alt="logo" />
					<Header className="mb-2">Log In</Header>
					<IconInput
						className="transparent border-yellow"
						name="email"
						value={values.email}
						onChange={handleChange}
						placeholder="Email"
						type="email"
						onBlur={handleBlur}
						error={errors.email}
						touched={touched.email}
						leftIcon={<FaUser size={24} className="color-white" />}
					/>
					<IconInput
						className="transparent border-yellow"
						name="password"
						value={values.password}
						onChange={handleChange}
						placeholder="Password"
						type="password"
						onBlur={handleBlur}
						error={errors.password}
						touched={touched.password}
						leftIcon={<ImLock size={22} className="color-white" />}
					/>
					<Row>
						<CustomInput
							name="remember"
							checked={values.remember}
							onChange={handleChange}
							type="checkbox"
							span={"Remember me"}
						/>
						<Link to="/">Forgot Password</Link>
					</Row>
					<Button type="submit" disabled={loading}>
						{loading ? <Loader /> : "Log In"}
					</Button>
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
	padding: 40px;

	@media ${device.mobileL} {
		padding: 30px 20px;
	}
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
	margin-bottom: 0;
`;

const IconInput = styled(Input)`
	input {
		margin-left: 10px;
	}
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 40px;

	@media ${device.mobileS} {
		flex-direction: column;
		justify-content: initial;
		align-items: center;
		margin-bottom: 20px;
	}
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

	@media ${device.mobileS} {
		margin-top: 10px;
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
	background-color: ${(props) => props.theme.primaryColor};
	color: ${(props) => props.theme.white};
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 35px;
	padding: 4px;
	border: none;
	border-radius: 50px;
	width: 100%;
	margin-bottom: 20px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Text = styled.span`
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 16px;
	display: inline;
`;

export default Login;
