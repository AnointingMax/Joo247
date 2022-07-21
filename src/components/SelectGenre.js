import { Formik } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import { device } from "../constants";
import { genres } from "../constants/dummyData";
import { useDetailsContext } from "../context/DetailsContext";

const SelectGenre = () => {
	const { setStep, setFormData } = useDetailsContext();

	const initialValues = {
		genres: [],
	};

	const validationSchema = Yup.object().shape({
		genres: Yup.array().min(1, "Please select your prefered music genre(s)"),
	});

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				setFormData((prevState) => {
					return { ...prevState, ...values };
				});
				setStep(1);
			}}
		>
			{({ values, handleSubmit, setFieldValue, errors }) => (
				<Form onSubmit={handleSubmit}>
					<Title>Select your music preference</Title>
					<GenreContainer>
						{genres.map((genre, index) => (
							<Genre
								key={index}
								name={genre}
								selected={values.genres.includes(genre)}
								onClick={() => {
									values.genres.includes(genre)
										? setFieldValue(
												"genres",
												values.genres.filter((un) => un !== genre)
										  )
										: setFieldValue("genres", [...values.genres, genre]);
								}}
							/>
						))}
					</GenreContainer>
					{errors.genres && <p className="error">{errors.genres}</p>}
					<PrimaryBtn type="submit">Next</PrimaryBtn>
				</Form>
			)}
		</Formik>
	);
};

const Genre = ({ name, selected, onClick }) => {
	return (
		<GenreWrap className={selected ? "selected" : ""} onClick={onClick}>
			<p>{name}</p>
		</GenreWrap>
	);
};

const GenreContainer = styled.div`
	max-width: 85%;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 10px 5px;
	margin-bottom: 25px;

	@media ${device.tablet} {
		max-width: 85%;
	}
`;

const GenreWrap = styled.div`
	display: flex;
	border: 1px solid ${(props) => props.theme.primaryColor};
	border-radius: 26px;
	padding: 5px 10px;
	width: max-content;
	color: ${(props) => props.theme.white};
	background-color: transparent;
	font-weight: 600;

	@media ${device.tablet} {
		padding: 5px;
	}

	&.selected {
		background-color: ${(props) => props.theme.primaryColor};
	}

	&:hover {
		background-color: ${(props) => props.theme.primaryColor};
		cursor: pointer;
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

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;

	p.error {
		color: ${(props) => props.theme.red};
		font-weight: 400;
		margin-bottom: 5px;
		font-size: 12px;
		font-weight: 600;
		align-self: center;
	}

	@media ${device.mobileL} {
		padding: 30px 20px;
	}
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

export default SelectGenre;
