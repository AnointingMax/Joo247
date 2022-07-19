import styled from "styled-components";
import CustomInput from "./CustomInput";
import { RiSearchLine } from "react-icons/ri";
import { useState } from "react";
import { CloseIcon } from "../images/svg";

const SearchOverlay = ({ isOpenOverlay, setIsOpenOverlay }) => {
	const [search, setSearch] = useState("");

	return (
		<Overlay isOpenOverlay={isOpenOverlay}>
			<div className="flex-justify-between flex-align-center">
				<CustomInput
					value={search}
					onChange={(event) => setSearch(event.target.value)}
					placeholder="Search Artist, Songs, Albums"
					leftIcon={<RiSearchLine size={24} className="color-grey" />}
				/>
				<Close className="ml-2" onClick={() => setIsOpenOverlay(false)}>
					<CloseIcon />
				</Close>
			</div>
		</Overlay>
	);
};

const Overlay = styled.div`
	--blur: 20px;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 40px 20px;
	background-color: rgba(0, 0, 0, 0.95);
	-webkit-backdrop-filter: blur(var(--blur));
	backdrop-filter: blur(var(--blur));
	z-index: 99999;
	transform: translateX(${(props) => (props.isOpenOverlay ? 0 : "100%")});
	transition: transform 0.5s ease;
	overflow-y: scroll;
`;

const Close = styled.a`
	svg {
		width: 30px;
		aspect-ratio: 1;
	}

	&:hover {
		cursor: pointer;

		path {
			stroke: ${(props) => props.theme.primaryColor};
		}
	}
`;
export default SearchOverlay;
