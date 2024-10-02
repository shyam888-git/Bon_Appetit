import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const Reservation = () => {
  return (
    <div className="bg-[#FFF7EB] ">
      <div className="mx-16">
        <div className="flex items-center justify-between gap-4">
          <div className="grid items-center justify-center">
            <span>Make your</span>
            <span>Reservations</span>
          </div>
          <div className="bg-[#FAFAFA] px-2">
            <h2>Book a Table</h2>
            <hr />

            <Form {...Form}>
              <form className="space-y-3">
                <FormField
                  // control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Name"
                          {...field}
                          className=" focus:ring-0 placeholder:text-xs rounded-md px-5 border"
                          // disabled={isFetching}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-center gap-3 justify-end">
                  <Button type="submit" disabled={isLoading || updateLoading}>
                    {"Add"}
                  </Button>
                  <Button onClick={() => onSuccess()} className="bg-red-500">
                    Cancel
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
