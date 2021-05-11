import React, { Component, createRef, RefObject } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";
import { FormHandles } from "@unform/core";

interface FoodDTO {
	id?: number;
	name: string;
	image: string;
	description: string;
	available: boolean;
	price: number;
}

interface ModalAddFoodProps {
	setIsOpen(): void;
	handleAddFood(data: FoodDTO): void;
	isOpen: boolean;
}

// interface ModalAddFood {
// 	formRef: FormHandles;
// }

// function ModalAddFood({ handleSubmit, handleAddFood}: ModalAddFoodProps) {
// 	const formRef = createRef<FormHandles>();

// 	handleSubmit = async (data) => {
// 		const { setIsOpen, handleAddFood } = props;

// 		handleAddFood(data);
// 		setIsOpen();
// 	};

// 	render() {
// 		const { isOpen, setIsOpen } = this.props;

// 		return (
// 			<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
// 				<Form ref={this.formRef} onSubmit={this.handleSubmit}>
// 					<h1>Novo Prato</h1>
// 					<Input name="image" placeholder="Cole o link aqui" />

// 					<Input name="name" placeholder="Ex: Moda Italiana" />
// 					<Input name="price" placeholder="Ex: 19.90" />

// 					<Input name="description" placeholder="Descrição" />
// 					<button type="submit" data-testid="add-food-button">
// 						<p className="text">Adicionar Prato</p>
// 						<div className="icon">
// 							<FiCheckSquare size={24} />
// 						</div>
// 					</button>
// 				</Form>
// 			</Modal>
// 		);
// 	}
// }

class ModalAddFood extends Component<ModalAddFoodProps> {
	formRef: RefObject<FormHandles>;

	constructor(props: ModalAddFoodProps) {
		super(props);
		/* <FormHandles></FormHandles> */
		this.formRef = createRef();
	}

	handleSubmit = async (data: FoodDTO) => {
		const { setIsOpen, handleAddFood } = this.props;

		handleAddFood(data);
		setIsOpen();
	};

	render() {
		const { isOpen, setIsOpen } = this.props;

		return (
			<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
				<Form ref={this.formRef} onSubmit={this.handleSubmit}>
					<h1>Novo Prato</h1>
					<Input name="image" placeholder="Cole o link aqui" />

					<Input name="name" placeholder="Ex: Moda Italiana" />
					<Input name="price" placeholder="Ex: 19.90" />

					<Input name="description" placeholder="Descrição" />
					<button type="submit" data-testid="add-food-button">
						<p className="text">Adicionar Prato</p>
						<div className="icon">
							<FiCheckSquare size={24} />
						</div>
					</button>
				</Form>
			</Modal>
		);
	}
}

export default ModalAddFood;
