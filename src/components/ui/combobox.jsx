import { useState } from "react";
import { X } from "lucide-react";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function ComboBoxResponsive({ options, title, onChange }) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedStatus, setSelectedStatus] = useState(null);

  const handleSelect = (value) => {
    const isCurrentlySelected = selectedStatus?.value === value;
    const newStatus = isCurrentlySelected ? null : options.find((selection) => selection.value === value) || null;
    setSelectedStatus(newStatus);
    onChange(newStatus ? newStatus.value : null);
    setOpen(false);
  };

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-1/6 justify-start bg-background text-foreground m-2"
          >
            {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set {title}</>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <StatusList
            setOpen={setOpen}
            setSelectedStatus={setSelectedStatus}
            selectedStatus={selectedStatus}
            options={options}
            onSelect={handleSelect}
          />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="justify-start bg-background text-foreground m-2"
        >
          {selectedStatus ? (
            <span>
              <X />
            </span>
          ) : (
            <>+</>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <StatusList
            setOpen={setOpen}
            setSelectedStatus={setSelectedStatus}
            selectedStatus={selectedStatus}
            options={options}
            onSelect={handleSelect}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function StatusList({ selectedStatus, options, onSelect }) {
  return (
    <Command>
      <CommandInput placeholder="Filter status..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {options.map((option) => (
            <CommandItem
              key={option.value}
              value={option.value}
              onSelect={onSelect}
              className="flex items-center justify-between"
            >
              <span>{option.label}</span>
              {selectedStatus?.value === option.value && (
                <X className="h-4 w-4" />
              )}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
