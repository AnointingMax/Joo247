import { useFormik } from "formik";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import * as Yup from "yup";
import { AiOutlineCamera } from "react-icons/ai";
import { useDetailsContext } from "../context/DetailsContext";

const IDVerification = () => {
	const { setStep, setFormData } = useDetailsContext();

	const initialValues = {
		idType: "",
		serialNumber: "",
		idImageFront: [],
		idImageBack: [],
	};

	const validationSchema = Yup.object().shape({
		idType: Yup.string().required(
			"Please select the type of your identification"
		),
		serialNumber: Yup.string().required(
			"Please insert your ID Card's serial number"
		),
		idImageFront: Yup.array().min(
			1,
			"Please provide an image of the front of your ID card"
		),
		idImageBack: Yup.array().min(
			1,
			"Please provide an image of the back of your ID card"
		),
	});

	const {
		values,
		setFieldValue,
		handleChange,
		handleBlur,
		handleSubmit,
		errors,
	} = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			setFormData((prevState) => {
				return { ...prevState, ...values };
			});
			setStep(4);
		},
	});

	const {
		getRootProps: getRootPropsFront,
		getInputProps: getInputPropsFront,
		inputRef: inputRefFront,
	} = useDropzone({
		multiple: false,
		accept: {
			"image/png": [".png", ".jpeg", ".jpg"],
		},
		onDrop: (acceptedFiles, rejectedFiles) => {
			if (rejectedFiles.length) {
				setFieldError(inputRefFront.current.name, "File must be an image");
				return;
			}
			setFieldValue(
				inputRefFront.current.name,
				acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					})
				)
			);
		},
	});
	const {
		getRootProps: getRootPropsBack,
		getInputProps: getInputPropsBack,
		inputRef: inputRefBack,
	} = useDropzone({
		multiple: false,
		accept: {
			"image/png": [".png", ".jpeg", ".jpg"],
		},
		onDrop: (acceptedFiles, rejectedFiles) => {
			if (rejectedFiles.length) {
				setFieldError(inputRefBack.current.name, "File must be an image");
				return;
			}
			setFieldValue(
				inputRefBack.current.name,
				acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					})
				)
			);
		},
	});

	return (
		<Form onSubmit={handleSubmit}>
			<Title>ID Verification</Title>
			<div>
				<Select
					value={values.idType}
					onBlur={handleBlur}
					onChange={handleChange}
					name="idType"
				>
					<option value="" selected disabled>
						Select ID
					</option>
					<option value="1">Driver's Licence</option>
					<option value="2">National Identification Card</option>
					<option value="3">Passport</option>
				</Select>
				{errors.idType && <p className="error">{errors.idType}</p>}
			</div>
			<div>
				<Input
					value={values.serialNumber}
					onChange={handleChange}
					onBlur={handleBlur}
					name="serialNumber"
					placeholder="Serial Number"
				/>
				{errors.serialNumber && <p className="error">{errors.serialNumber}</p>}
			</div>
			<div>
				<DropArea {...getRootPropsFront()}>
					<input name="idImageFront" {...getInputPropsFront()} />
					{values.idImageFront.length ? (
						<p>{values.idImageFront[0].name}</p>
					) : (
						<p>Image of front of Document</p>
					)}
					<AiOutlineCamera size={20} />
				</DropArea>
				{errors.idImageFront && <p className="error">{errors.idImageFront}</p>}
			</div>
			<div>
				<DropArea {...getRootPropsBack()}>
					<input name="idImageBack" {...getInputPropsBack()} />
					{values.idImageBack.length ? (
						<p>{values.idImageBack[0].name}</p>
					) : (
						<p>Image of back of Document</p>
					)}
					<AiOutlineCamera size={20} />
				</DropArea>
				{errors.idImageBack && <p className="error">{errors.idImageBack}</p>}
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

const DropArea = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 10px;
	border-radius: 5px;
	background-color: white;
	border: none;
	text-align: left;

	p {
		margin: 0;
		font-style: normal;
		font-weight: 500;
		font-size: 1.5rem;
		line-height: 1.8rem;
		color: #707070;
	}
`;

export default IDVerification;
