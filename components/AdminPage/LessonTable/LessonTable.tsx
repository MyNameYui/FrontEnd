"use client";
import React, { useMemo, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Spinner,
  getKeyValue,
  useDisclosure,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  ModalFooter,
  Button,
  Modal,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import useSWR from "swr";
import Add from "../../modal/lesson/add";
import { useRecoilValue } from "recoil";
import { isLogin } from "../../../reducer/state";
import { Axios } from "../../../lib/fetcher";
import { AddValidator } from "../../../lib/validator/lesson/validator";
import { errorToast, successToast } from "../../../lib/toast/toast";

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [items, setItems] = useState(null);
  const [page, setPage] = useState(1);
  const isauth = useRecoilValue(isLogin);
  const [valueTopic, setValueTopic] = useState("");
  const [valueCategory, setValueCategory] = useState("");
  const [trumbnailImage, setTrumbnailImage] = useState("");
  const [heading, setHeading] = useState("");
  const [textareas, setTextareas] = useState([
    {
      content: "",
      title: "",
      pretitle: "",
      image: "",
    },
  ]);
  const [questions, setQuestions] = useState([
    {
      question: "",
      answer: "",
      hint: "",
    },
  ]);
  function CreateLesson() {
    Axios.post(
      "/administrator/learning-lesson/create",
      {
        topicId: parseInt(valueTopic["anchorKey"]),

        categoryId: parseInt(valueCategory["anchorKey"]),

        trumbnailImage: trumbnailImage,

        heading: heading,

        dialogs: [...textareas],

        questions: [...questions],

        availablePackages: [
          //packageIds
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${isauth.token}`,
        },
      }
    );
  }

  const fetcherGet = (url: string) =>
    Axios.get(url, {
      headers: {
        Authorization: `Bearer ${isauth.token}`,
      },
    }).then((res) => res.data);
  const { data: CategoryData, error: ErrorCategory } = useSWR(
    "/administrator/learning-lesson/category/all",
    fetcherGet
  );
  const { data: TopicData, error: ErrorTopic } = useSWR(
    "/administrator/learning-lesson/topic/all",
    fetcherGet
  );

  const handleAddTextarea = () => {
    setTextareas([
      ...textareas,
      {
        content: "",
        title: "",
        pretitle: "",
        image: "",
      },
    ]);
  };
  const updateFieldChanged = (index: number, key: string) => (e) => {
    let textareasArr = [...textareas]; // copying the old datas array
    let questionsArr = [...questions];
    switch (key) {
      case "content":
        textareasArr[index].content = e;
        break;
      case "title":
        textareasArr[index].title = e;
        break;
      case "pretitle":
        textareasArr[index].pretitle = e;
        break;
      case "image":
        textareasArr[index].image = e;
        break;
      case "question":
        questions[index].question = e;
        break;
      case "answer":
        questions[index].answer = e;
        break;
      case "hint":
        questions[index].hint = e;
        break;
    }

    setQuestions(questionsArr);
    setTextareas(textareasArr);
  };

  const handleDeleteTextarea = (textareaIndex) => {
    setTextareas(
      textareas.filter((textarea, index) => index !== textareaIndex)
    );
  };

  const fetcher = async (...args: any[]) => {
    const headers = new Headers();
    headers.set("Authorization", `Bearer ${isauth.token}`);

    const response = await fetch(...args, { headers });
    return response.json();
  };
  const { data, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BASEURL}/api/v0/lesson/all?page=${page}&limit=30`,
    fetcher,
    {
      keepPreviousData: true,
    }
  );
  const rowsPerPage = 30;
  const pages = useMemo(() => {
    return data?.detail.length
      ? Math.ceil(data?.detail.length / rowsPerPage)
      : 0;
  }, [data?.detail.length, rowsPerPage]);

  const loadingState =
    isLoading || data?.detail.length === 0 ? "loading" : "idle";

  function deletePackage(id: any) {
    Axios.delete(`/administrator/learning-lesson/${id}/delete`, {
      headers: {
        Authorization: `Bearer ${isauth.token}`,
      },
    });
    successToast({
      text: "ลบสำเร็จ",
    });
  }
  
  function editPackage() {
    const result = AddValidator.safeParse(textareas);
    if (result.success) {
      Axios.patch(
        `/administrator/learning-lesson/${items.id}/update`,
        {
          topicId: parseInt(valueTopic["anchorKey"]),
  
          categoryId: parseInt(valueCategory["anchorKey"]),
  
          trumbnailImage: trumbnailImage,
  
          heading: heading,
  
          dialogs: [...textareas],
  
          questions: [...questions],
  
          availablePackages: [
            //packageIds
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${isauth.token}`,
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
    <div className="container mx-auto">
      <div className="flex justify-end ">
        <Add />
      </div>
      <Table
        aria-label="Example table with client async pagination"
        bottomContent={
          pages > 0 ? (
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="primary"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
            </div>
          ) : null
        }
      >
        <TableHeader>
          <TableColumn key="id">id</TableColumn>
          <TableColumn key="completed">completed</TableColumn>
          <TableColumn key="heading">heading</TableColumn>
        </TableHeader>
        <TableBody
          items={data?.detail}
          loadingContent={<Spinner />}
          loadingState={loadingState}
        >
          {(item) => (
            <TableRow key={item?.id}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
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
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Select
                    size="sm"
                    label="Select an Category"
                    color="secondary"
                    selectedKeys={valueCategory}
                    className="max-w-xs"
                    onSelectionChange={setValueCategory}
                  >
                    {CategoryData.details.map((animal) => (
                      <SelectItem
                        color="secondary"
                        key={animal.id}
                        value={animal.id}
                      >
                        {animal.name}
                      </SelectItem>
                    ))}
                  </Select>
                  <Select
                    size="sm"
                    label="Select an Topic"
                    color="secondary"
                    selectedKeys={valueTopic}
                    className="max-w-xs"
                    onSelectionChange={setValueTopic}
                  >
                    {TopicData.details.map((animal) => (
                      <SelectItem
                        color="secondary"
                        key={animal.id}
                        value={animal.id}
                      >
                        {animal.name}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                <div className="flex flex-col md:flex-nowrap gap-4">
                  <Input
                    value={heading}
                    onValueChange={setHeading}
                    isClearable
                    required
                    color="secondary"
                    label="heading"
                    placeholder="Enter heading"
                    variant="bordered"
                  />
                  <Input
                    value={trumbnailImage}
                    onValueChange={setTrumbnailImage}
                    isClearable
                    required
                    color="secondary"
                    label="trumbnailImage"
                    placeholder="Enter trumbnailImage"
                    variant="bordered"
                  />
                </div>
                <div className="flex flex-col md:flex-nowrap gap-4">
                  {textareas.map((textarea, index) => (
                    <div key={index} className="flex flex-col gap-4">
                      <div>
                        <Textarea
                          labelPlacement="outside"
                          placeholder="ใส่เนื้อหาที่นี้..."
                          color="secondary"
                          type="text"
                          value={textareas[index].content}
                          onValueChange={updateFieldChanged(index, "content")}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Input
                          value={textareas[index].title}
                          onValueChange={updateFieldChanged(index, "title")}
                          isClearable
                          required
                          color="secondary"
                          label="Title"
                          placeholder="Enter title"
                          variant="bordered"
                        />
                        <Input
                          value={textareas[index].pretitle}
                          onValueChange={updateFieldChanged(index, "pretitle")}
                          isClearable
                          required
                          color="secondary"
                          label="Pretitle"
                          placeholder="Enter pretitle"
                          variant="bordered"
                        />
                        <Input
                          value={textareas[index].image}
                          onValueChange={updateFieldChanged(index, "image")}
                          isClearable
                          required
                          color="secondary"
                          label="Image url"
                          placeholder="Enter image"
                          variant="bordered"
                        />
                        <Input
                          value={questions[index].question}
                          onValueChange={updateFieldChanged(index, "question")}
                          isClearable
                          required
                          color="secondary"
                          label="question"
                          placeholder="Enter question"
                          variant="bordered"
                        />
                        <Input
                          value={questions[index].answer}
                          onValueChange={updateFieldChanged(index, "answer")}
                          isClearable
                          required
                          color="secondary"
                          label="answer"
                          placeholder="Enter answer"
                          variant="bordered"
                        />
                        <Input
                          value={questions[index].hint}
                          onValueChange={updateFieldChanged(index, "hint")}
                          isClearable
                          required
                          color="secondary"
                          label="Image url"
                          placeholder="Enter hint"
                          variant="bordered"
                        />
                      </div>
                      <div>
                        <Button
                          color="secondary"
                          onClick={() => handleDeleteTextarea(index)}
                        >
                          ลบ
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  ยกเลิก
                </Button>
                <Button
                  color="default"
                  variant="light"
                  onPress={() => {
                    loadPackage();
                    editPackage();
                    onClose();
                  }}
                >
                  แก้ไขและบันทึก
                </Button>
                <Button
                  color="success"
                  className="shadow-lg shadow-green-500/20"
                  onClick={handleAddTextarea}
                >
                  เพิ่ม dialogs
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
  );
}
