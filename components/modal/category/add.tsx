import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import { Axios } from "../../../lib/fetcher";
import { useState } from "react";
import { AddValidator } from "../../../lib/validator/category/validator";
import { errorToast, successToast } from "../../../lib/toast/toast";
import { useRecoilValue } from "recoil";
import { isLogin } from "../../../reducer/state";

export default function Add() {
  const [name, setName] = useState("");
  const [Add, setAdd] = useState(false);
  const auth = useRecoilValue(isLogin);

  function Check() {
    const result = AddValidator.safeParse({
      name: name,
    });
    if (result.success) {
      Axios.post(
        "/administrator/learning-lesson/category/create",
        {
          name: name,
        },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      ).then((res) => {
        successToast({
          text: "สร้างแคตตาล็อคสำเร็จ =w=",
        });
        // reloadData();
      });
    } else {
      errorToast({
        text: "ข้อมูลไม่ครบถ้วนกรุณาตรวจสอบ?",
      });
    }
  }

  return (
    <>
      <Button
        color="primary"
        onPress={() => {
          setAdd(true);
        }}
        size="md"
        className="w-32"
      >
        เพิ่ม
      </Button>
      <Modal
        isDismissable={false}
        backdrop="opaque"
        isOpen={Add}
        radius="lg"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                สร้าง Category
              </ModalHeader>
              <ModalBody>
                <Input
                  isClearable
                  autoFocus
                  required
                  label="Name"
                  placeholder="Enter Package Name"
                  variant="bordered"
                  value={name}
                  onValueChange={setName}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="default"
                  variant="light"
                  onPress={() => {
                    setAdd(false);
                  }}
                >
                  ยกเลิก
                </Button>
                <Button
                  className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20"
                  onPress={() => {
                    Check();
                    onClose();
                  }}
                >
                  ทำต่อ
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
