import { ChangeEvent, useState } from 'react';

type Props = {
	// question: string;
	options: string[];
	changeOption: (options: string[]) => void
}

const PollCreator = (props: Props) => {
	const [options, setOptions] = useState(props.options);

	const handleOptionChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
		setOptions((prevOptions) =>
			prevOptions.map((option, i) => (i === index ? e.target.value : option))
		);
		props.changeOption(options);
	};

	const handleAddOption = () => {
		setOptions((prevOptions) => [...prevOptions, '']);
		props.changeOption(options)
	};

	const createOptions = (n: number, start = 0) => {
		let op = []
		for (let i = start; i <= n; i++) {
			op.push(<option className='bg-black' key={i} value={i}>{i}</option>)
		}
		return op
	}

	return (
		<div>
			<div className='min-h-[22rem] border border-gray-600 rounded-xl'>
				<ul className='flex flex-col gap-2 w-full p-3 relative'>
					{options.map((option, index) => (
						<li key={index}>
							<input
								className='bg-black p-5 w-11/12 border border-gray-600 rounded-lg focus:outline focus:outline-blue-400'
								type="text"
								value={option}
								onChange={(e) => handleOptionChange(index, e)}
								placeholder={`Choice ${index + 1}`}
							/>
						</li>
					))}
					<li className='absolute bottom-5 right-2'>
						<button className='text-3xl text-blue-600 px-2.5 pb-1 rounded-full hover:bg-[#031018]' onClick={handleAddOption}>+</button>
					</li>
				</ul>

				{/* //* poll length */}
				<div className='border-y border-gray-600 p-3'>
					<h3 className='mb-2'>Poll length</h3>

					<div className='flex justify-between'>

						{/* //& Days */}
						<div className='w-[30%] h-16 relative overflow-hidden border border-gray-600 rounded-md focus-within:outline outline-1 outline-[#1D9BF0]'>
							<label className="absolute top-1 left-1 text-sm text-gray-600" htmlFor='days'>Days</label>
							<select defaultValue={'1'} className='bg-transparent bg-select bg-no-repeat bg-[size:25px] bg-[position:110px] w-full h-full pt-3.5 px-2 focus:outline-none appearance-none' name="days" id="days">
								{createOptions(7)}
							</select>
						</div>

						{/* //& Hours */}
						<div className='w-[30%] h-16 relative overflow-hidden border border-gray-600 rounded-md focus-within:outline outline-1 outline-[#1D9BF0]'>
							<label className="absolute top-1 left-1 text-sm text-gray-600" htmlFor='hours'>Hours</label>
							<select className='bg-transparent bg-select bg-no-repeat bg-[size:25px] bg-[position:110px] w-full h-full pt-3.5 px-2 focus:outline-none appearance-none' name="hours" id="hours">
								{createOptions(23)}
							</select>
						</div>

						{/* //& Minutes */}
						<div className='w-[30%] h-16 relative overflow-hidden border border-gray-600 rounded-md focus-within:outline outline-1 outline-[#1D9BF0]'>
							<label className="absolute top-1 left-1 text-sm text-gray-600" htmlFor='mins'>Minutes</label>
							<select className='bg-transparent bg-select bg-no-repeat bg-[size:25px] bg-[position:110px] w-full h-full pt-3.5 px-2 focus:outline-none appearance-none' name="mins" id="mins">
								{createOptions(59)}
							</select>
						</div>

					</div>
				</div>

				<div className="h-16 w-full"></div> {/* //! Empty space for remove button */}

			</div>
		</div>
	);
};

export default PollCreator;