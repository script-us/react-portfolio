import React, { useState } from 'react'
import Autocomplete from '@/components/shared/autoComplete'

const Autocompletes = () => {
  const options = ['option1', 'option2', 'text1', 'text2']
  const [value, setValue] = useState<string[]>([])

  return (
    <div className="w-[640px] sm:w-full flex flex-col gap-[24px]">
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Basic Autocomplete</div>
        <div className="flex w-full  gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Autocomplete
            onChange={() => null}
            TextFieldProps={{ label: 'Autocomplete' }}
            className="max-w-[250px] w-full"
            options={options}
            data-testid="autocomplete"
          />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Autocomplete with group option</div>
        <div className="flex w-full  gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Autocomplete
            onChange={() => null}
            TextFieldProps={{ label: 'Autocomplete' }}
            className="max-w-[250px] w-full"
            options={options.sort((a, b) => -b.localeCompare(a))}
            groupBy={(option) => option[0].toUpperCase()}
            getOptionLabel={(option: string) => option}
          />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Autocomplete with disabled option</div>
        <div className="flex w-full  gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Autocomplete
            onChange={() => null}
            TextFieldProps={{ label: 'Autocomplete' }}
            className="max-w-[250px] w-full"
            options={options}
            getOptionLabel={(option) => option}
            getOptionDisabled={(option) => option === options[1]}
          />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">
          Autocomplete with multiple option selection
        </div>
        <div className="flex w-full  gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Autocomplete
            onChange={(selected: any) => setValue(selected)}
            TextFieldProps={{ label: 'Autocomplete' }}
            className="max-w-[250px] w-full"
            options={options}
            multiple
            value={value}
          />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">
          Autocomplete with different size and variant
        </div>
        <div className="flex w-full items-center gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Autocomplete
            onChange={() => null}
            TextFieldProps={{ label: 'Autocomplete' }}
            className="max-w-[250px] w-full"
            options={options}
            size="small"
          />
          <Autocomplete
            onChange={() => null}
            TextFieldProps={{ label: 'Autocomplete' }}
            className="max-w-[250px] w-full"
            options={options}
            size="medium"
          />
          <Autocomplete
            onChange={() => null}
            TextFieldProps={{ label: 'Autocomplete', variant: 'standard' }}
            className="max-w-[250px] w-full"
            options={options}
            size="small"
          />
          <Autocomplete
            onChange={() => null}
            TextFieldProps={{ label: 'Autocomplete', variant: 'filled' }}
            className="max-w-[250px] w-full"
            options={options}
            size="medium"
          />
        </div>
      </div>
      <div className="w-full shadow-card">
        <div className="p-[16px] border-b-[1px] border-solid border-bodydark">Autocomplete with error props</div>
        <div className="flex w-full  gap-[24px] gap-[24px] px-[16px] py-[16px]">
          <Autocomplete
            onChange={(selected: any) => setValue(selected)}
            TextFieldProps={{ label: 'Autocomplete' }}
            className="max-w-[250px] w-full"
            options={options}
            error={true}
            helperText="error"
          />
        </div>
      </div>
    </div>
  )
}

export default Autocompletes
