import React from "react";
import { Input, Select, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { Option } = Select;

const CallbackSection = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">
            Start Your Free Call  <span className="text-[#E5C07B]">Back.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            We appreciate your interest in our platform. For any questions, concerns, or suggestions, don’t hesitate to reach out — we’re here for you.
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col md:flex-row md:items-center flex-wrap gap-4">
          {/* Inputs */}
          <Input
            placeholder="First name*"
            className={`h-[50px] w-full md:w-[250px]
              !bg-black !text-white placeholder-gray-400
              rounded-md border border-[#E5C07B]/60
              focus:!border-[#E5C07B] focus:!shadow-none
              hover:!border-[#E5C07B]/60 !transition-none`}
          />

          <Input
            placeholder="Email"
            className={`h-[50px] w-full md:w-[250px]
              !bg-black !text-white placeholder-gray-400
              rounded-md border border-[#E5C07B]/60
              focus:!border-[#E5C07B] focus:!shadow-none
              hover:!border-[#E5C07B]/60 !transition-none`}
          />

          <Input
            placeholder="Phone"
            className={`h-[50px] w-full md:w-[250px]
              !bg-black !text-white placeholder-gray-400
              rounded-md border border-[#E5C07B]/60
              focus:!border-[#E5C07B] focus:!shadow-none
              hover:!border-[#E5C07B]/60 !transition-none`}
          />

          {/* Select with dropdownClassName */}
          <Select
            defaultValue="Open Your Demat Account"
            suffixIcon={<DownOutlined style={{ color: "#E5C07B" }} />}
            dropdownClassName="custom-select-dropdown"
            className={`h-[50px] w-full md:w-[250px]
              [&>.ant-select-selector]:!bg-black
              [&>.ant-select-selector]:!text-white
              [&>.ant-select-selector]:!border-[#E5C07B]/60
              [&>.ant-select-selector]:!rounded-md
              [&>.ant-select-selector]:!h-[50px]
              [&>.ant-select-selector]:!flex
              [&>.ant-select-selector]:!items-center
              [&>.ant-select-selection-placeholder]:!text-gray-400`}
            popupMatchSelectWidth={false}
            options={[
              { value: "demat", label: "Open Your Demat Account" },
              { value: "support", label: "Customer Support" },
              { value: "consultation", label: "Free Consultation" },
            ]}
          />
          {/* Submit Button */}
          <Button
            type="primary"
            htmlType="submit"
            className={`h-[50px] px-8 font-semibold
              !bg-[#E5C07B] !text-black rounded-full border-none
              hover:!bg-[#E5C07B] hover:!text-black
              focus:!bg-[#E5C07B] focus:!text-black
              active:!bg-[#E5C07B] active:!text-black
              transition-all duration-300`}
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CallbackSection;
