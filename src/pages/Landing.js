import { useEffect } from "react";
import SimpleModal from "simple-react-modal";
import styled from "styled-components";
import {
	CardSection,
	Carousel,
	Login,
	PageWrapper,
	Register,
} from "../components";
import { albums } from "../constants/dummyData";
import { CloseIcon } from "../images/svg";

const Landing = ({ open, setOpen, modal, setModal }) => {
	useEffect(() => {
		var obj = document.querySelector("body");
		obj.setAttribute(
			"style",
			"background: linear-gradient(17.23deg, #E4410A 14.33%, #FFBC1D 70.2%);"
		);
	}, []);
	return (
		<PageWrapper page="home">
			<Carousel light />
			<CardSection title="Now Trending" data={albums} />
			<Modal>
				<SimpleModal
					className="test-class"
					containerClassName="test"
					closeOnOuterClick={false}
					show={open}
					onClose={() => setOpen(false)}
				>
					<Close onClick={() => setOpen(false)}>
						<CloseIcon />
					</Close>
					{modal === "login" ? (
						<Login setModal={setModal} />
					) : (
						<Register setModal={setModal} />
					)}
				</SimpleModal>
			</Modal>
		</PageWrapper>
	);
};

const Modal = styled.div`
	.test-class {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.8);
		z-index: 99999;
		transition: opacity 1s ease-in;
		pointer-events: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.test {
		width: min(400px, 85%);
		max-height: min(600px, 80%);
		position: relative;
		background: ${(props) => props.theme.black};
		color: white;
		border-radius: 18px;
		overflow-y: scroll;
	}
`;

const Close = styled.a`
	position: absolute;
	top: 20px;
	right: 20px;

	svg {
		width: 15px;
		aspect-ratio: 1;
	}

	&:hover {
		cursor: pointer;

		path {
			stroke: ${(props) => props.theme.primaryColor};
		}
	}
`;

export default Landing;
