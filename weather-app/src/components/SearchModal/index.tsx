import * as Dialog from '@radix-ui/react-dialog';
import { TextField } from '../TextField';
import { lookAddress } from '../../hooks/useMaps';
import { useMemo, useState, useEffect } from 'react';
import { debounce } from 'lodash';
import { Meteoorology } from '../../@type/meteoorology';

type SearchModalProps = {
  trigger?: JSX.Element | JSX.Element[]
  // eslint-disable-next-line no-unused-vars
  onSelect?: (event: Meteoorology) => void
  isOpen?: boolean
}

const DEBOUNCE_TIME_MS = 300;




export const SearchModal = ({ trigger, onSelect, isOpen }: SearchModalProps) => {
  const [value, setValue] = useState<string>('');
  const [open, setOpen] = useState(isOpen);
  const { data, isLoading } = lookAddress(value);

  const source = useMemo(() => data?.data, [value, data?.data])

  const onNameChange = useMemo(
    () =>
      debounce((value: string) => {
        setValue(value);
      }, DEBOUNCE_TIME_MS),
    []
  );

  const handlerSelect = (item: Meteoorology) => {
    setOpen(false);
    if (typeof onSelect === 'function') {
      onSelect(item);
    }
  };
  const handlerOpen = (isOpen: boolean) => {
    setValue('');
    setOpen(isOpen);
  }

  useEffect(() => {
    return () => {
      onNameChange.cancel();
    };
  }, [onNameChange]);



  return (
    <Dialog.Root open={open} onOpenChange={handlerOpen}>
      <Dialog.Trigger asChild>
        {trigger}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black data-[state=open]:animate-overlayShow fixed inset-0">
          <Dialog.Content onEscapeKeyDown={(e) => e.preventDefault()} className="data-[state=open]:animate-contentShow w-screen h-screen flex flex-col justify-center items-center" >
            <Dialog.Title className="text-gray-200 m-0 text-4xl font-medium mb-6">
              Welcome to Weather
            </Dialog.Title>
            <Dialog.Description className="text-gray-200 mt-[10px] mb-5 text-[15px] leading-normal">
              Choose a location to view the weather forecast
            </Dialog.Description>
            <div className='w-3/12 sm:w-10/12 '>
              <TextField
                onChangeText={onNameChange}
                isLoading={isLoading}
                source={source}
                onChange={handlerSelect}
              />
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
};