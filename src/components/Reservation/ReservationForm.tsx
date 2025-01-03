import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { format } from "date-fns";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  reservationDate: z.string().min(1, "Reservation date is required"),
  reservationTime: z.string().min(1, "Reservation time is required"),
  numberOfPeople: z.string().min(1, "Number of people is required"),
  occasion: z.string().optional(),
  note: z.string().optional(),
});

const ReservationForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      reservationDate: "",
      reservationTime: "",
      numberOfPeople: "",
      occasion: "",
      note: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-[80%] lg:w-1/2 mx-auto bg-[#FAFAFA] py-8 px-4 "
      >
        <h2 className="text-2xl font-bold mb-6">Book a Table</h2>
        <hr />
        <div className="md:grid md:gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-gray-100" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-gray-100" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="md:grid md:gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} type="email" className="bg-gray-100" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input {...field} type="tel" className="bg-gray-100" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="md:grid md:gap-4 md:grid-cols-2 border-red-600 ">
          <FormField
            control={form.control}
            name="reservationDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reservation Date</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="date"
                    onChange={(e) => {
                      // Format the date using date-fns
                      const dateValue = e.target.value;
                      if (dateValue) {
                        const formattedDate = format(
                          new Date(dateValue),
                          "yyyy-MM-dd"
                        );
                        field.onChange(formattedDate);
                      } else {
                        field.onChange("");
                      }
                    }}
                    className="bg-gray-100"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="occasion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reservation Time</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-gray-100" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="md:grid md:gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="numberOfPeople"
            render={({ field }) => (
              <FormItem>
                <FormLabel>No of people</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-gray-100">
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="occasion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Occasion</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-gray-100" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="md:grid md:gap-4 md:grid-cols-2">
          <FormField
            // control={form.control}
            name="note"
            render={({ field }) => (
              <FormItem className="col-span-8">
                <FormLabel>Note</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    className="  placeholder:text-xs rounded-md px-5 py-4 border"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <Button
            type="button"
            variant="secondary"
            className="bg-gray-300 text-gray-700"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="default"
            className="bg-[#F69625] text-white"
          >
            Book it
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ReservationForm;
