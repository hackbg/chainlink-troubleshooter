import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { networks } from '@/config/networks'

type SelectNetworkProps = {
  onChange: (value: string) => void
}

export function SelectNetwork({ onChange }: SelectNetworkProps) {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Network" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Object.entries(networks).map(([key, network]) => (
            <SelectItem key={key} value={key}>
              {network.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
