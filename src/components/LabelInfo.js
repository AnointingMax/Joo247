import { useFormik } from "formik";
import { getYear } from "date-fns";
import range from "lodash/range";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";

const LabelInfo = () => {
	const initialValues = {
		labelName: "",
		labelAddress: "",
		startDate: "",
	};

	const years = range(1990, getYear(new Date()) + 1, 1);
	const years2 = range(getYear(new Date()) + 1, 2030, 1);
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const { values, setFieldValue, handleChange, handleSubmit } = useFormik({
		initialValues,
		onSubmit: (values) => {
			setFormData((prevState) => {
				return { ...prevState, ...values };
			});
			setStep(5);
		},
	});

	return (
		<Form onSubmit={handleSubmit}>
			<Title>Label Information</Title>
			<div>
				<Input
					value={values.labelName}
					onChange={handleChange}
					onBlur={handleBlur}
					name="labelName"
					placeholder="Label Name"
				/>
			</div>
			<div>
				<Input
					value={values.labelAddress}
					onChange={handleChange}
					onBlur={handleBlur}
					name="labelAddress"
					placeholder="Label Address"
				/>
			</div>
			<div>
				<h3>Date Signed</h3>
				<div className="date">
					<Select>
						<option value="" selected disabled>
							Year
						</option>
						{years.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</Select>
					<Select>
						<option value="" selected disabled>
							Month
						</option>
						{months.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</Select>
				</div>
			</div>
			<div>
				<h3>End Date</h3>
				<div className="date">
					<Select>
						<option value="" selected disabled>
							Year
						</option>
						{years2.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</Select>
					<Select>
						<option value="" selected disabled>
							Month
						</option>
						{months.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</Select>
				</div>
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
		text-align: left;
	}

	.date {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		gap: 15px;
	}

	p.error {
		color: ${(props) => props.theme.red};
		font-weight: 400;
		margin-top: 3px;
		font-size: 12px;
		font-weight: 600;
		align-self: flex-start;
	}

	h3 {
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 12px;
		color: ${(props) => props.theme.white};
		margin-bottom: 5px;
	}
`;

const Title = styled.h2`
	font-style: normal;
	font-weight: 700;
	font-size: 30px;
	line-height: 35px;
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

const Input = styled.input`
	width: 100%;
	padding: 12px;
	border-radius: 5px;
	background-color: white;
	border: none;
	font-style: normal;
	font-weight: 500;
	font-size: 15px;
	line-height: 18px;
	color: #707070;

	&:focus {
		border: none;
		outline: none;
	}
`;

const Select = styled.select`
	width: 100%;
	padding: 12px;
	border-radius: 5px;
	font-style: normal;
	font-weight: 500;
	border: none;
	font-size: 15px;
	line-height: 18px;
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

export default LabelInfo;
