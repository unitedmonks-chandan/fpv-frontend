import React from 'react'
const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

export default function InputForm(
  categoryItem,
  categories,
  itemType,
  result,
  onchange
) {
  return (
    categories &&
    categories?.map((item, key) =>
      item.name.slug === categoryItem ? (
        // <form
        //   key={key}
        //   className={
        //     (result && result.length > 0) || itemType !== ''
        //       ? 'drone_catagory label_outline d-flex flex-wrap outline_sm'
        //       : 'drone_catagory label_outline d-flex flex-wrap'
        //   }
        // >
        <form
          key={key}
          className="drone_catagory label_outline d-flex flex-wrap"
        >
          {item.subcategories.map((subCategory, key) => (
            <div key={key} style={{ marginBottom: '1em' }}>
              <input
                type="radio"
                id={subCategory}
                value={subCategory}
                checked={itemType === subCategory}
                onChange={onchange}
              />
              <label htmlFor={subCategory}>
                <h2
                  className="text-white "
                  style={{ fontSize: itemType !== '' ? '20px' : '25px' }}
                >
                  {subCategory.toUpperCase()}
                </h2>
                <div className="title text-white d-flex align-items-center">
                  <div className="option flex-center">{alphabet[key]}</div>
                  <div className="battery-a battery">
                    <div className="option option-2 flex-center battery-a">
                      PROS & CONS
                    </div>
                    <div className="tooltip tooltip-a">
                      <p className="white mb-10">Pros:</p>
                      <ul className="tooltip-list">
                        <li className="tooltip-item">
                          <p className="px12 grey-dark tooltip-point">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                        </li>
                        <li className="tooltip-item">
                          <p className="px12 grey-dark tooltip-point">
                            Lorem Ipsum is simply dummy text of the printing
                          </p>
                        </li>
                        <li className="tooltip-item">
                          <p className="px12 grey-dark tooltip-point">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                        </li>
                        <li className="tooltip-item">
                          <p className="px12 grey-dark tooltip-point">
                            Lorem ipsum dolor sit amet, conse
                          </p>
                        </li>
                      </ul>
                      <p className="white mb-10">Cons:</p>
                      <ul className="tooltip-list">
                        <li className="tooltip-item">
                          <p className="px12 grey-dark tooltip-point">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                        </li>
                        <li className="tooltip-item">
                          <p className="px12 grey-dark tooltip-point">
                            Lorem Ipsum is simply dummy text of the printing
                          </p>
                        </li>
                        <li className="tooltip-item">
                          <p className="px12 grey-dark tooltip-point">
                            Lorem ipsum dolor sit amet, conse
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </label>
            </div>
          ))}
        </form>
      ) : null
    )
  )
}
