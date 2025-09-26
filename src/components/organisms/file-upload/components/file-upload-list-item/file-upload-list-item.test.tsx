import { FileUploadListItem } from './file-upload-list-item.view'
import { screen } from '@testing-library/react'
import { renderWithI18n } from '@/utils'

Object.defineProperty(URL, 'createObjectURL', {
  writable: true,
  value: vi.fn(() => 'mocked-object-url')
})

describe('FileUploadListItem', () => {
  it('should render correctly with correct styles', () => {
    renderWithI18n(
      <FileUploadListItem
        testId="file-upload-list-item-test-id"
        file={new File([], 'test.txt')}
        onRemove={() => {}}
      />
    )
    const fileUploadListItem = screen.getByTestId(
      'file-upload-list-item-test-id'
    )
    expect(fileUploadListItem).toBeInTheDocument()
    expect(fileUploadListItem).toHaveClass(
      'flex items-center justify-between gap-3 rounded border border-gray-300 p-3'
    )
  })

  it('should render with correct content styles', () => {
    renderWithI18n(
      <FileUploadListItem
        testId="file-upload-list-item-test-id"
        file={new File([], 'test.txt')}
        onRemove={() => {}}
      />
    )
    const fileUploadListItem = screen.getByTestId(
      'file-upload-list-item-test-id-content'
    )
    expect(fileUploadListItem).toHaveClass(
      'flex min-w-0 items-center gap-3 text-left'
    )
  })

  it('should render with correct content', () => {
    renderWithI18n(
      <FileUploadListItem
        testId="file-upload-list-item-test-id"
        file={new File([], 'test.txt')}
        onRemove={() => {}}
      />
    )
    const fileUploadListItem = screen.getByTestId(
      'file-upload-list-item-test-id'
    )
    expect(fileUploadListItem).toHaveTextContent('test.txt')
    expect(fileUploadListItem).toHaveTextContent('0 MB')
  })

  it('should render with correct image', () => {
    renderWithI18n(
      <FileUploadListItem
        testId="file-upload-list-item-test-id"
        file={new File([], 'test.txt', { type: 'image/png' })}
        onRemove={() => {}}
      />
    )
    const fileUploadListItemImage = screen.getByTestId(
      'file-upload-list-item-test-id-image'
    )
    expect(fileUploadListItemImage).toBeInTheDocument()
    expect(fileUploadListItemImage).toHaveClass(
      'h-10 w-10 rounded object-cover'
    )
  })

  it('should render with correct icon', () => {
    renderWithI18n(
      <FileUploadListItem
        testId="file-upload-list-item-test-id"
        file={new File([], 'test.txt', { type: 'application/pdf' })}
        onRemove={() => {}}
      />
    )
    const fileUploadListItemIcon = screen.getByTestId(
      'file-upload-list-item-test-id-icon'
    )
    expect(fileUploadListItemIcon).toBeInTheDocument()
    expect(fileUploadListItemIcon).toHaveClass(
      'flex h-10 w-10 items-center justify-center rounded text-gray-400'
    )
  })

  it('should render with correct actions', () => {
    renderWithI18n(
      <FileUploadListItem
        testId="file-upload-list-item-test-id"
        file={new File([], 'test.txt')}
        onRemove={() => {}}
      />
    )
    const fileUploadListItem = screen.getByTestId(
      'file-upload-list-item-test-id'
    )
    const fileUploadListItemActions = screen.getByTestId(
      'file-upload-list-item-test-id-actions'
    )
    expect(fileUploadListItemActions).toBeInTheDocument()
    expect(fileUploadListItemActions).toHaveClass(
      'flex shrink-0 items-center gap-2'
    )

    const fileUploadListItemView = screen.getByTestId(
      'file-upload-list-item-test-id-view'
    )
    expect(fileUploadListItemView).toBeInTheDocument()
    expect(fileUploadListItemView).toHaveClass(
      'inline-flex cursor-pointer items-center rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 hover:bg-blue-100'
    )
    const fileUploadListItemDelete = screen.getByTestId(
      'file-upload-list-item-test-id-delete'
    )
    expect(fileUploadListItemDelete).toBeInTheDocument()
    expect(fileUploadListItemDelete).toHaveClass(
      'inline-flex cursor-pointer items-center rounded-full bg-red-50 px-3 py-1.5 text-xs font-medium text-red-700 hover:bg-red-100'
    )
    expect(fileUploadListItem).toHaveTextContent('View')
    expect(fileUploadListItem).toHaveTextContent('Delete')
  })

  it('should not render with delete button when onRemove is not provided', () => {
    renderWithI18n(
      <FileUploadListItem
        testId="file-upload-list-item-test-id"
        file={new File([], 'test.txt')}
      />
    )

    const fileUploadListItemDelete = screen.queryByTestId(
      'file-upload-list-item-test-id-delete'
    )
    expect(fileUploadListItemDelete).not.toBeInTheDocument()
  })
})
