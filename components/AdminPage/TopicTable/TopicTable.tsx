"use client";
import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
  getKeyValue,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
  Input,
} from "@nextui-org/react";
import { useQuery } from "react-query";
import { Axios } from "../../../lib/fetcher";
import Add from "../../modal/category/add";
import { useRecoilValue } from "recoil";
import { isLogin } from "../../../reducer/state";
import { errorToast, successToast } from "../../../lib/toast/toast";
import { AddValidator } from "../../../lib/validator/category/validator";

export default function PackageTable() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [items, setItems] = useState(null);
  const [name, setName] = useState("");
  const auth = useRecoilValue(isLogin);

  const { isLoading, error, data } = useQuery("TopicDetail", () =>
    Axios.get(`/administrator/learning-lesson/topic/all`, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    }).then((res) => res.data)
  );
  const Items = data?.details ?? [];
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  const loadingState =
    isLoading || data["success"] === false ? "loading" : "idle";

  function deletePackage(id: any) {
    Axios.delete(`/administrator/learning-lesson/topic/${id}/delete`, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    });
    successToast({
      text: "ลบสำเร็จ",
    });
  }

  function editPackage() {
    const result = AddValidator.safeParse({
      name: name,
    });
    if (result.success) {
      Axios.patch(
        `/administrator/learning-lesson/topic/${items.id}/update`,
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
          text: "อัพเดตสำเร็จ =w=",
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
      <div className="container mx-auto pt-12">
        <div className="flex justify-end ">
          <Add />
        </div>
        <Table
          className="pt-4"
          aria-label="Example table with client async pagination"
        >
          <TableHeader>
            <TableColumn key="id">id</TableColumn>
            <TableColumn key="name">name</TableColumn>
            <TableColumn key="createdAt">createdAt</TableColumn>
            <TableColumn key="updatedAt">updatedAt</TableColumn>
          </TableHeader>
          <TableBody
            emptyContent={"No rows to display."}
            items={Items}
            loadingContent={<Spinner />}
            loadingState={loadingState}
          >
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell
                    onClick={() => {
                      onOpen();
                      setItems(item);
                    }}
                  >
                    {getKeyValue(item, columnKey)}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
        <Modal
          backdrop="opaque"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
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
                  {items.name}
                </ModalHeader>
                <ModalBody>
                  <Input
                    isClearable
                    autoFocus
                    required
                    label="Name"
                    placeholder="Enter Topic Name"
                    variant="bordered"
                    value={name}
                    onValueChange={setName}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="default" variant="light" onPress={onClose}>
                    ยกเลิก
                  </Button>
                  <Button
                    color="default"
                    variant="light"
                    onPress={() => {
                      editPackage();
                      onClose();
                    }}
                  >
                    แก้ไขและบันทึก
                  </Button>
                  <Button
                    className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20"
                    onPress={() => {
                      deletePackage(items?.id);
                      onClose();
                    }}
                  >
                    ลบ
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}
