import React, { useState } from 'react';
import Slider from './Slider/Slider';
import './PostImageFilter.scss'
import SliderItem from "./Slider/SliderItem/SliderItem";
const default_options = [
    {
        name: 'Brightness',
        property: 'brightness',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
    },
    {
        name: 'Contrast',
        property: 'contrast',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
    },
    {
        name: 'Saturation',
        property: 'saturate',
        value: 100,
        range: {
            min: 0,
            max: 200
        },
        unit: '%'
    },
    {
        name: 'Grayscale',
        property: 'grayscale',
        value: 0,
        range: {
            min: 0,
            max: 100
        },
        unit: '%'
    },
    {
        name: 'Sepia',
        property: 'sepia',
        value: 0,
        range: {
            min: 0,
            max: 100
        },
        unit: '%'
    },
    {
        name: 'Hue Rotate',
        property: 'hue-rotate',
        value: 0,
        range: {
            min: 0,
            max: 360
        },
        unit: 'deg'
    },
    {
        name: 'Blur',
        property: 'blur',
        value: 0,
        range: {
            min: 0,
            max: 20
        },
        unit: 'px'
    },
    {
        name: 'Invert',
        property: 'invert',
        value: 0,
        range: {
            min: 0,
            max: 100
        },
        unit: '%'
    },
    {
        name: 'Opacity',
        property: 'opacity',
        value: 100,
        range: {
            min: 0,
            max: 100
        },
        unit: '%'
    }
]

function PostImageFilter({image, setFilter, filter}) {
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
    const [options, setOptions] = useState(default_options);
    const selectedOption = options[selectedOptionIndex];

    function handleSliderChange({ target }) {
        setOptions(prevOptions => {
            return prevOptions.map((option, index) => {
                if (index !== selectedOptionIndex) return option
                return { ...option, value: target.value }
            })
        })
    }

        onchange=(()=>{function getImageStyle() {
            const filters = options.map(option => {
                return `${option.property}(${option.value}${option.unit})`;
            })
            setFilter({filter: filters.join(' ')})
            return {filter: filters.join(' ') }
        }
            // console.log('styles: ',getImageStyle() )
            getImageStyle()

        });

    return (
        <div className={"container"}>
            <div className="main-image"  style={filter}>
                <img src={image} alt="images"/>
            </div>
            <div className="sidebar">
                {options.map((option, index) => {
                    return (
                        <SliderItem
                            key={index}
                            name={option.name}
                            active={index === selectedOptionIndex}
                            handleClick={() => setSelectedOptionIndex(index)}
                        />
                    )
                })}
            </div>
            <Slider
                min={selectedOption.range.min}
                max={selectedOption.range.max}
                value={selectedOption.value}
                handleChange={handleSliderChange}
            />
        </div>
    );
}
export default PostImageFilter;

