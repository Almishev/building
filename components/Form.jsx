import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Button from "./Button";

const Form = () => {
  return (
    <form 
      action="https://formsubmit.co/infoconcretecompany@gmail.com" 
      method="POST" 
      className="flex flex-col"
    >
      <div className="flex flex-col gap-[20px] mb-[20px]">
        <Input type="text" name="name" placeholder="Име" required />
        <Input type="email" name="email" placeholder="Имейл адрес" required />
        <div className="flex flex-col xl:flex-row gap-[20px]">
          <Input type="text" name="phone" placeholder="Телефон" />
          {/*
          <Select>
            <SelectTrigger className="w-full rounded-none h-[54px] text-secondary outline-none">
              <SelectValue placeholder="Select a service"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select a service</SelectLabel>
                <SelectItem value="construction">Construction</SelectItem>
                <SelectItem value="renovation">Renovation</SelectItem>
                <SelectItem value="restoration">Restoration</SelectItem>
                <SelectItem value="consulting">Consulting</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          */}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {/* textarea */}
        <Textarea
          className="h-[180px] resize-none rounded-none"
          name="message"
          placeholder="Въведете вашето съобщение"
          required
        />
        {/* btn */}
        <Button text="Изпрати" type="submit" />
      </div>
    </form>
  );
};

export default Form;
