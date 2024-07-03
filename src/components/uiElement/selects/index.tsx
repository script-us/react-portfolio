import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import Select from '@/components/shared/select'

const options = ['option 1', 'option 2', 'option 3', 'option 4']
const options1 = ['test-1', 'test-2', 'test-3', 'test-4']

const useStyles = makeStyles(() => ({
  filledSelect: {
    '& .MuiFilledInput-input': {
      paddingTop: '16.5px',
      paddingBottom: '16.5px',
    },
  },
}))

const Selects = () => {
  const classes = useStyles()
  const [withLabel, setWithLabel] = useState('')
  const [checked, setChecked] = useState('')
  const [chip, setChip] = useState('')

  return (
    <div className="w-[640px] sm:w-full flex flex-col gap-[24px]">
      <div className="w-full shadow-card">
        <div className="flex w-full items-end gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <select>
            <option value="">State</option>
            <option value="AL">Alabama</option>
            <option selected value="AK" data-testid="select-option">
              Alaska
            </option>
            <option value="AZ">Arizona</option>
          </select>
        </div>
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Select with and without label</div>
        <div className="flex w-full items-end gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Select
            options={options1}
            value={withLabel}
            onChange={(selectedOption) => setWithLabel(selectedOption)}
            labelText="With Label"
            placeholder="select option..."
            className="w-full max-w-[250px]"
          />
          <Select
            options={options}
            value={withLabel}
            onChange={(selectedOption) => setWithLabel(selectedOption)}
            placeholder="select option..."
            className="w-full max-w-[250px]"
          />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Select with different variant</div>
        <div className="flex w-full  gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Select
            variant="outlined"
            options={options}
            value={withLabel}
            onChange={(selectedOption) => setWithLabel(selectedOption)}
            placeholder="select option..."
            className="w-full max-w-[250px]"
          />
          <Select
            variant="filled"
            options={options}
            value={withLabel}
            onChange={(selectedOption) => setWithLabel(selectedOption)}
            placeholder="select option..."
            className={`w-full max-w-[250px] ${classes.filledSelect}`}
          />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Select with helperText</div>
        <div className="flex w-full items-end gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Select
            variant="outlined"
            labelText="With Label"
            options={options}
            value={withLabel}
            onChange={(selectedOption) => setWithLabel(selectedOption)}
            placeholder="select option..."
            className="w-full max-w-[250px]"
            helperText="with label + helperText"
          />
          <Select
            options={options}
            value={withLabel}
            onChange={(selectedOption) => setWithLabel(selectedOption)}
            placeholder="select option..."
            className="w-full max-w-[250px]"
            helperText="without label+ helperText"
          />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Select with different size</div>
        <div className="flex w-full items-center gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Select
            options={options}
            size="small"
            labelText="Small Size"
            value={withLabel}
            onChange={(selectedOption) => setWithLabel(selectedOption)}
            placeholder="select option..."
            className="w-full max-w-[250px]"
          />
          <Select
            options={options}
            size="medium"
            labelText="Medium Size"
            value={withLabel}
            onChange={(selectedOption) => setWithLabel(selectedOption)}
            placeholder="select option..."
            className="w-full max-w-[250px]"
          />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Select with different props</div>
        <div className="flex w-full items-center gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Select
            options={options}
            value={withLabel}
            onChange={(selectedOption) => setWithLabel(selectedOption)}
            labelText="With Label"
            placeholder="select option..."
            className="w-full max-w-[250px]"
            helperText="disabled"
            disabled
          />
          <Select
            options={options}
            value={withLabel}
            onChange={(selectedOption) => setWithLabel(selectedOption)}
            labelText="With Label"
            placeholder="select option..."
            className="w-full max-w-[250px]"
            helperText="readonly"
            readOnly
          />
          <Select
            options={options}
            value={withLabel}
            onChange={(selectedOption) => setWithLabel(selectedOption)}
            labelText="With Label"
            placeholder="select option..."
            className="w-full max-w-[250px]"
            helperText="error"
            error
          />
          <Select
            options={options}
            value={withLabel}
            onChange={(selectedOption) => setWithLabel(selectedOption)}
            labelText="With Label"
            placeholder="select option..."
            className="w-full max-w-[250px]"
            helperText="required"
            required
          />
        </div>
      </div>
      <div className="w-full shadow-card ">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Select with multiple selection</div>
        <div className="flex w-full items-center gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Select
            options={options}
            size="small"
            labelText="Small Size"
            value={withLabel}
            onChange={(selectedOption) => setWithLabel(selectedOption)}
            placeholder="select option..."
            className="w-full max-w-[250px]"
            multiple={true}
          />
        </div>
      </div>
      <div className="w-full shadow-card ">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">
          Select with multiple selection with checkbox
        </div>
        <div className="flex w-full items-center gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Select
            options={options}
            size="small"
            labelText="Small Size"
            value={checked}
            onChange={(selectedOption) => setChecked(selectedOption)}
            placeholder="select option..."
            className="w-full max-w-[250px]"
            multiple={true}
            checkbox={true}
          />
        </div>
      </div>
      <div className="w-full shadow-card mb-[60px]">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">
          Select with multiple selection with chip
        </div>
        <div className="flex w-full items-center gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Select
            options={options}
            size="small"
            labelText="Small Size"
            value={chip}
            onChange={(selectedOption) => setChip(selectedOption)}
            placeholder="select option..."
            className="w-full max-w-[250px]"
            multiple={true}
            chip={true}
          />
        </div>
      </div>
    </div>
  )
}

export default Selects
