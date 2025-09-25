import { fireEvent, screen } from '@testing-library/react'
import { Dropdown } from './dropdown.view'
import { renderWithI18n } from '@/utils'

describe('Dropdown', () => {
  it('should render correctly', () => {
    renderWithI18n(<Dropdown testId="dropdown-test-id" />)
    const dropdown = screen.getByTestId('dropdown-test-id')
    expect(dropdown).toBeInTheDocument()
  })

  it('should render with correct content', () => {
    renderWithI18n(<Dropdown testId="dropdown-test-id" />)
    const dropdown = screen.getByTestId('dropdown-test-id')
    expect(dropdown).toHaveTextContent('Select an option')
  })

  it('should render with correct styles', () => {
    renderWithI18n(<Dropdown testId="dropdown-test-id" />)
    const dropdown = screen.getByTestId('dropdown-test-id')
    expect(dropdown).toHaveClass(
      'w-full',
      'appearance-none',
      'rounded-md',
      'border',
      'border-gray-300',
      'bg-white',
      'px-3',
      'py-2',
      'pr-8',
      'shadow',
      'transition-colors',
      'duration-200',
      'hover:border-orange-500',
      'focus:border-orange-500',
      'focus:shadow',
      'focus:outline-none'
    )
    expect(dropdown.className).toContain(
      'bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQgNkw4IDEwTDEyIDYiIHN0cm9rZT0iIzY2NjY2NiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K")]'
    )
    expect(dropdown.className).toContain('bg-[length:16px]')
    expect(dropdown.className).toContain('bg-[right_0.75rem_center]')
    expect(dropdown.className).toContain('bg-no-repeat')
  })

  it('should render with correct options', () => {
    renderWithI18n(
      <Dropdown
        testId="dropdown-test-id"
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' }
        ]}
      />
    )
    const dropdown = screen.getByTestId('dropdown-test-id')
    expect(dropdown).toHaveTextContent('Option 1')
    expect(dropdown).toHaveTextContent('Option 2')
  })

  it('should render with correct value', () => {
    renderWithI18n(
      <Dropdown
        testId="dropdown-test-id"
        value={'1'}
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' }
        ]}
      />
    )
    const dropdown = screen.getByTestId('dropdown-test-id')
    expect(dropdown).toHaveValue('1')
  })

  it('should render with correct onChange', () => {
    const onChange = vi.fn()
    renderWithI18n(
      <Dropdown
        testId="dropdown-test-id"
        onChange={onChange}
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' }
        ]}
      />
    )
    const dropdown = screen.getByTestId('dropdown-test-id')
    fireEvent.change(dropdown, { target: { value: '1' } })
    expect(onChange).toHaveBeenCalledWith('1')
  })
})
