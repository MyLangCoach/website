/* This example requires Tailwind CSS v2.0+ */
import { Listbox, Transition } from "@headlessui/react";

import { Fragment } from "react";
import { IoIosArrowDown } from "react-icons/io";
interface selectProps {
  label: string;
  selected: any;
  setSelected: any;
  data: any;
  name?: string;
  height?: string;
  mapKey?: any;
  listHeight?: string;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function PrimarySelect({
  label,
  selected,
  setSelected,
  data,
  name,
  height,
  mapKey,listHeight
}: selectProps) {
  // const [selected, setSelected] = useState(people[3])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <div className="flex flex-col w-full relative">
          <Listbox.Label className="text-xs text-foreground font-medium dm-sans mb-1">
            {label && label}
          </Listbox.Label>
          <div className="mt-1 relative w-full">
            <Listbox.Button
              className={`${
                height ? height : "h-[36px] bg-white"
              } relative w-full  border  border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-[#E4E4E7] focus:border-[#E4E4E7] sm:text-sm`}
            >
              <span className="block truncate capitalize text-black">
                {selected?.[mapKey] ?? selected?.name ?? name}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <IoIosArrowDown
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100 "
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              
            >
              <Listbox.Options
                className={`absolute z-star mt-1 w-full bg-white shadow-lg ${listHeight ?? "max-h-60"}  rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm`}
              >
                {data?.map((person: any, index: number) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      classNames(
                        active
                          ? "text-[#0e0e0e] bg-[#F0F5FC]"
                          : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-8 pr-4"
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected
                              ? "font-semibold"
                              : "font-normal capitalize",
                            "block truncate"
                          )}
                        >
                          {person?.[mapKey] ?? person?.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-[#0e0e0e]",
                              "absolute inset-y-0 left-0 flex items-center pl-1.5"
                            )}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
}
