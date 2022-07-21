import { Formik } from "formik";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import * as Yup from "yup";
import { device } from "../constants";
import { useDetailsContext } from "../context/DetailsContext";
import { AddProfileIcon } from "../images/svg";

const SetProfileImage = () => {
	const { setStep, setFormData } = useDetailsContext();

	const initialValues = {
		photo: [],
	};

	const validationSchema = Yup.object().shape({
		photo: Yup.array().min(1, "Please provide your profile image"),
	});

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				setFormData((prevState) => {
					return { ...prevState, ...values };
				});
				setStep(2);
			}}
		>
			{({ values, handleSubmit, setFieldValue, errors, setFieldError }) => {
				const { getRootProps, getInputProps } = useDropzone({
					multiple: false,
					accept: {
						"image/png": [".png", ".jpeg", ".jpg"],
					},
					onDrop: (acceptedFiles, rejectedFiles) => {
						if (rejectedFiles.length) {
							setFieldError("photo", "File must be an image");
							return;
						}
						setFieldValue(
							"photo",
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
						<Title>Set Profile Photo</Title>
						<div className="photo" {...getRootProps()}>
							<input {...getInputProps()} />
							{values.photo.length ? (
								<img
									src={values.photo[0].preview}
									alt="profile.image"
									className="profile-img"
								/>
							) : (
								<AddProfileIcon />
							)}
						</div>
						{errors.photo && <p className="error">{errors.photo}</p>}
						<PrimaryBtn type="submit">Next</PrimaryBtn>
					</Form>
				);
			}}
		</Formik>
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
	margin-top: 50px;

	.photo {
		background-color: ${(props) => props.theme.white};
		padding: 55px 35px;
		border-radius: 15px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 25px;
		cursor: pointer;
	}

	p.error {
		color: ${(props) => props.theme.red};
		font-weight: 400;
		margin-bottom: 5px;
		font-size: 12px;
		font-weight: 600;
		align-self: center;
	}

	.profile-img {
		width: 100%;
		object-fit: contain;
	}

	@media ${device.mobileL} {
		margin-top: 50px;
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

export default SetProfileImage;
