import { Formik } from "formik";
import styled from "styled-components";
import { default as Input } from "./CustomInput";
import { Link as Anchor } from "react-router-dom";
import { countries, roles } from "../constants";

const Register = ({ setModal }) => {
	const initialValues = {
		fullname: "",
		customer: "",
		emails: "",
		location: "",
		encrypt: "",
		role: "",
		iAgree: false,
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
					<Header className="mb-2">Sign Up</Header>
					<CustomInput
						className="transparent border-yellow"
						name="fullname"
						value={values.fullname}
						onChange={handleChange}
						placeholder="Full Name"
					/>
					<CustomInput
						className="transparent border-yellow"
						name="customer"
						value={values.customer}
						onChange={handleChange}
						placeholder="User Name"
					/>
					<CustomInput
						className="transparent border-yellow"
						name="emails"
						value={values.emails}
						onChange={handleChange}
						placeholder="Email"
						type="email"
					/>
					<CustomInput
						className="transparent border-yellow"
						name="location"
						value={values.location}
						onChange={handleChange}
						placeholder="Location"
						data={countries}
						type="select"
					/>
					<Input
						className="transparent border-yellow"
						name="encrypt"
						value={values.encrypt}
						onChange={handleChange}
						placeholder="Password"
						type="password"
					/>
					<Row>
						<span className="yellow">Password must have: </span>
						<span>8 characters, One digit and/or symbol.</span>
					</Row>
					<CustomInput
						className="transparent border-yellow short"
						name="role"
						value={values.role}
						onChange={handleChange}
						placeholder="Select"
						data={roles}
						type="select"
					/>
					<Input
						className="mb-1"
						name="iAgree"
						checked={values.iAgree}
						onChange={handleChange}
						type="checkbox"
						span={
							<>
								I agree with <Link to="/">privacy</Link> and{" "}
								<Link to="/">policy</Link>
							</>
						}
					/>
					<Button>Sign Up</Button>
					<Text>
						Already have an account?{" "}
						<Link2 onClick={() => setModal("login")}>Login</Link2>
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
	width: 100%;
	margin-bottom: 20px;
	text-align: center;

	> * {
		font-style: normal;
		font-weight: 500;
		font-size: 11px;
	}

	.yellow {
		color: ${(props) => props.theme.primaryColor};
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

export default Register;
