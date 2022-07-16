import { Formik } from "formik";
import styled from "styled-components";
import CustomInput from "./CustomInput";
import { Link as Anchor } from "react-router-dom";
import { countries, countriesIDs, device, roles, rolesIDs } from "../constants";
import * as Yup from "yup";
import { useState } from "react";
import Loader from "./Loader";
import { EmailIcon, TickIcon } from "../images/svg";

const Register = ({ setModal }) => {
	const [step, setStep] = useState(1);
	const [loading, setLoading] = useState(false);

	const initialValues = {
		fullname: "",
		username: "",
		email: "",
		location: "",
		password: "",
		role: "",
		iAgree: false,
	};

	const validationSchema = Yup.object().shape({
		fullname: Yup.string().required("Please enter your fullname"),
		username: Yup.string().required("Please enter your username"),
		email: Yup.string()
			.email("Please enter a valid email")
			.required("Please enter your email"),
		location: Yup.number()
			.required("Please select your location")
			.oneOf(countriesIDs),
		password: Yup.string()
			.required("Please enter your password")
			.matches(
				"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
				"Your password isn't strong enough"
			),
		role: Yup.number().required("Please select a role").oneOf(rolesIDs),
		iAgree: Yup.boolean()
			.required("The terms and conditions must be accepted.")
			.oneOf([true], "You need to agree with our T&Cs"),
	});

	if (step === 1)
		return (
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values) => {
					setLoading(true);

					setTimeout(() => {
						console.log(values);
						setLoading(false);
						setStep(2);
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
						<Header className="mb-2">Sign Up</Header>
						<CustomInput
							className="transparent border-yellow"
							name="fullname"
							value={values.fullname}
							onChange={handleChange}
							placeholder="Full Name"
							onBlur={handleBlur}
							error={errors.fullname}
							touched={touched.fullname}
						/>
						<CustomInput
							className="transparent border-yellow"
							name="username"
							value={values.username}
							onChange={handleChange}
							placeholder="User Name"
							onBlur={handleBlur}
							error={errors.username}
							touched={touched.username}
						/>
						<CustomInput
							className="transparent border-yellow"
							name="email"
							value={values.email}
							onChange={handleChange}
							placeholder="Email"
							type="email"
							onBlur={handleBlur}
							error={errors.email}
							touched={touched.email}
						/>
						<CustomInput
							className="transparent border-yellow"
							name="location"
							value={values.location}
							onChange={handleChange}
							placeholder="Location"
							data={countries}
							type="select"
							onBlur={handleBlur}
							error={errors.location}
							touched={touched.location}
						/>
						<CustomInput
							className="transparent border-yellow"
							name="password"
							value={values.password}
							onChange={handleChange}
							placeholder="Password"
							type="password"
							onBlur={handleBlur}
							error={errors.password}
							touched={touched.password}
						/>
						{touched.password && errors.password ? (
							<Row>
								<span>Passwords must have: </span>
								<span className="yellow">
									8 characters, one digit and one symbol.
								</span>
							</Row>
						) : null}

						<CustomInput
							className="transparent border-yellow short"
							name="role"
							value={values.role}
							onChange={handleChange}
							placeholder="Select"
							data={roles}
							type="select"
							onBlur={handleBlur}
							error={errors.role}
							touched={touched.role}
						/>
						<CustomInput
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
							onBlur={handleBlur}
							error={errors.iAgree}
							touched={touched.iAgree}
						/>
						<Button type="submit" disabled={loading}>
							{loading ? <Loader /> : "Sign Up"}
						</Button>
						<Text>
							Already have an account?{" "}
							<Link2 onClick={() => setModal("login")}>Login</Link2>
						</Text>
					</Form>
				)}
			</Formik>
		);

	if (step === 2)
		return (
			<Wrapper>
				{/* <WhiteBackground /> */}
				<EmailIcon />
				<H2>Confirmation Email</H2>
				<H3>We sent an email to the email provided.</H3>
				<H4>Check your email and click on the confirmation link to continue</H4>
				<Button type="button" onClick={() => setStep(3)}>
					Confirm
				</Button>
			</Wrapper>
		);

	if (step === 3)
		return (
			<Wrapper>
				{/* <WhiteBackground /> */}
				<EmailIcon />
				<H2>Congratulations</H2>
				<TickIcon className="tick" />
				<Button type="button" onClick={() => setStep(3)}>
					Next
				</Button>
			</Wrapper>
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

const Header = styled.h2`
	font-style: normal;
	font-weight: 700;
	font-size: 26px;
	line-height: 31px;
	color: ${(props) => props.theme.white};
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

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 40px;

	.tick {
		margin-bottom: 25px;
	}
`;

const H2 = styled.h2`
	font-style: normal;
	font-weight: 700;
	font-size: 32px;
	line-height: 47px;
	text-align: center;
	margin-block: 20px;
`;

const H3 = styled.h3`
	font-style: normal;
	font-weight: 500;
	font-size: 23px;
	line-height: 27px;
	text-align: center;
	margin-bottom: 20px;
`;

const H4 = styled.h3`
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 27px;
	text-align: center;
	margin-bottom: 20px;
`;

export default Register;
