import { Formik, useFormik } from "formik";
import { useEffect } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { useDetailsContext } from "../context/DetailsContext";

const AccountDetails = () => {
	const { setStep, setFormData } = useDetailsContext();

	const initialValues = {
		bank: "",
		accountNumber: "",
		accountName: "",
	};

	const validationSchema = Yup.object().shape({
		bank: Yup.string().required("Please select your bank"),
		accountNumber: Yup.string().required("Please insert your account number"),
		accountName: Yup.string().required("Please insert a valid account"),
	});

	const {
		values,
		setFieldValue,
		handleChange,
		handleSubmit,
		handleBlur,
		errors,
		touched,
	} = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			setFormData((prevState) => {
				return { ...prevState, ...values };
			});
			setStep(3);
		},
	});

	useEffect(() => {
		if (values.accountNumber && values.bank) {
			setTimeout(() => {
				setFieldValue("accountName", "Anointing Maxwell");
			}, 3000);
		}
	}, [values]);

	return (
		<Form onSubmit={handleSubmit}>
			<Title>Account Details</Title>
			<div>
				<Select
					value={values.bank}
					onChange={handleChange}
					onBlur={handleBlur}
					name="bank"
				>
					<option value="" selected disabled>
						Select Bank
					</option>
					<option value="1">Gt Bank</option>
					<option value="2">First Bank</option>
					<option value="3">Zenith</option>
				</Select>
				{touched.bank && errors.bank && <p className="error">{errors.bank}</p>}
			</div>
			<div>
				<Input
					value={values.accountNumber}
					onChange={handleChange}
					onBlur={handleBlur}
					name="accountNumber"
					placeholder="Account Number"
				/>
				{touched.accountNumber && errors.accountNumber && (
					<p className="error">{errors.accountNumber}</p>
				)}
			</div>
			<div>
				<Input
					value={values.accountName}
					onChange={handleChange}
					onBlur={handleBlur}
					name="accountName"
					placeholder="Account Name"
					disabled
				/>
				{touched.accountName && errors.accountName && (
					<p className="error">{errors.accountName}</p>
				)}
			</div>
			<PrimaryBtn type="submit">Next</PrimaryBtn>
		</Form>
	);
};

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: min(400px, 80vw);
	padding: 35px;
	background-color: rgba(255, 255, 255, 0.08);
	backdrop-filter: blur(10px);
	border-radius: 15px;

	> div {
		margin-bottom: 15px;
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	p.error {
		color: ${(props) => props.theme.red};
		font-weight: 400;
		margin-top: 3px;
		font-size: 1.2rem;
		font-weight: 600;
		align-self: flex-start;
	}
`;

const Title = styled.h2`
	font-style: normal;
	font-weight: 700;
	font-size: 3rem;
	line-height: 3.5rem;
	color: ${(props) => props.theme.white};
	margin-bottom: 25px;
`;

const PrimaryBtn = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.theme.primaryColor};
	color: ${(props) => props.theme.white};
	border-radius: 20px;
	width: max-content;
	padding: 7px 30px;
	font-weight: 600;
	cursor: pointer;
	border: none;
	outline: none;
`;

const Select = styled.select`
	width: 100%;
	padding: 12px;
	border-radius: 5px;
	font-style: normal;
	font-weight: 500;
	border: none;
	font-size: 1.5rem;
	line-height: 1.8rem;
	color: #707070;
	position: relative;

	-moz-appearance: none; /* Firefox */
	-webkit-appearance: none; /* Safari and Chrome */
	appearance: none;
	background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
	background-repeat: no-repeat;
	background-position-x: calc(100% - 12px);
	background-position-y: 50%;

	&:focus {
		border: none;
		outline: none;
	}
`;

const Input = styled.input`
	width: 100%;
	padding: 12px;
	border-radius: 5px;
	background-color: white;
	border: none;
	font-style: normal;
	font-weight: 500;
	font-size: 1.5rem;
	line-height: 1.8rem;
	color: #707070;

	&:focus {
		border: none;
		outline: none;
	}
`;

export default AccountDetails;
