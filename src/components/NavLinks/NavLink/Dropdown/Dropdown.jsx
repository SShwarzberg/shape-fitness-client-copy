import { useEffect } from 'react'
import { useState } from 'react'
import {
    fitnessOptions,
    beautyOptions,
    healthNWellnessOptions,
    newsNTrendsOptions,
    foodNNutritionOptions,
    lifestyleOptions,
    apparelNGearOptions,
} from './linkNameOptions/linkNameOptions'
import { nanoid } from 'nanoid'
import './dropdown.scss'
import { Link } from 'react-router-dom'

export default function Dropdown(props) {
    const [dropDownOptions, setDropDownOptions] = useState(null)

    function optionSetter(optionsName) {
        return setDropDownOptions(
            optionsName.map((option) => {
                return (
                    <Link
                        className="dropdown-link"
                        key={nanoid()}
                        to={`/${option.replaceAll(' ', '-')}`}
                    >
                        <li key={option} className="dropdown-option">
                            {option}
                        </li>
                    </Link>
                )
            })
        )
    }

    useEffect(() => {
        switch (props.linkName) {
            case 'FITNESS':
                optionSetter(fitnessOptions)
                break
            case 'BEAUTY':
                optionSetter(beautyOptions)
                break
            case 'HEALTH AND WELLNESS':
                optionSetter(healthNWellnessOptions)
                break
            case 'NEWS AND TRENDS':
                optionSetter(newsNTrendsOptions)
                break
            case 'FOOD AND NUTRITION':
                optionSetter(foodNNutritionOptions)
                break
            case 'LIFESTYLE':
                optionSetter(lifestyleOptions)
                break
            case 'APPAREL AND GEAR':
                optionSetter(apparelNGearOptions)
                break
        }
    }, [])

    return (
        <div className="dropdown">
            <ul className="dropdown-list">
                {dropDownOptions && dropDownOptions}
                {props.linkName !== 'ABOUT US' && (
                    <li className="dropdown-option">View All</li>
                )}
            </ul>
        </div>
    )
}
