import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MdArrowOutward } from "react-icons/md";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 3 characters.",
  }),
  email: z.string(),
  message: z.string(),
});

type FormSchemaType = z.infer<typeof formSchema>;

const LandingForm = () => {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = () => {
    console.log("hello");
  };

  return (
    <div className=" lg:w-[517px] w-full py-4 rounded-lg bg-white text-white mt-12 px-16">
      <p className="text-center text-[32px] text-[#F69625] leading-3xl mb-4 ">
        Get In Touch
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 text-primary-blue-900"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#000]"> Name</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-gray-100" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#000]">Email</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-gray-100" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            // control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="col-span-8">
                <FormLabel className="text-[#000]">Your Message</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    className=" focus:ring-0 placeholder:text-xs rounded-md px-5 py-4 bg-gray-100 border"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className=" bg-[#F69625] text-white rounded-full hover:bg-primary-blue-600 hover:text-primary-gray-100 p-2 px-6"
          >
            Send Message
            <MdArrowOutward />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LandingForm;
