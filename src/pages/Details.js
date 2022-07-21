import { useState } from "react";
import styled from "styled-components";
import {
	AccountDetails,
	IDVerification,
	LabelInfo,
	PageWrapper as Wrapper,
	SelectGenre,
	SetProfileImage,
} from "../components";
import DetailsProvider from "../context/DetailsContext";

const Details = () => {
	const [formData, setFormData] = useState({});
	const [step, setStep] = useState(0);

	function renderForm() {
		switch (step) {
			case 0:
				return <SelectGenre />;
			case 1:
				return <SetProfileImage />;
			case 2:
				return <AccountDetails />;
			case 3:
				return <IDVerification />;
			case 4:
				return <LabelInfo />;
		}
	}

	return (
		<PageWrapper page="landing" step={step}>
			<DetailsProvider value={{ step, setStep, formData, setFormData }}>
				{renderForm()}
			</DetailsProvider>
		</PageWrapper>
	);
};

const PageWrapper = styled(Wrapper)`
	text-align: center;
	display: flex;
	justify-content: center;
	padding-top: ${(props) => (props.step === 0 ? 0 : "60px")};
`;

export default Details;
