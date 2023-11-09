import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import useSWR from "swr";
import { Axios } from "../../../lib/fetcher";
import { useRecoilValue } from "recoil";
import { isLogin } from "../../../reducer/state";
import { useState } from "react";
import { AddValidator } from "../../../lib/validator/lesson/validator";
import { errorToast, successToast } from "../../../lib/toast/toast";

export default function Add() {
  const auth = useRecoilValue(isLogin);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );
  }

  const fetcherGet = (url: string) =>
    Axios.get(url, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
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
  function Check() {
    const e = AddValidator.safeParse(textareas);
    if (e.success) {
      CreateLesson();
      successToast({
        text: "สร้าง lesson สำเร็จ =w=",
      });
    } else {
      errorToast({
        text: "ข้อมูลไม่ครบถ้วนกรุณาตรวจสอบ?",
      });
    }
  }

  return (
    <>
      <Button color="primary" onPress={onOpen} size="md" className="w-32">
        เพิ่ม
      </Button>
      <div className="">
        <Modal
          scrollBehavior="outside"
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
                <ModalHeader className="flex flex-col gap-1 ">
                  สร้าง Lesson
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
                            onValueChange={updateFieldChanged(
                              index,
                              "pretitle"
                            )}
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
                            onValueChange={updateFieldChanged(
                              index,
                              "question"
                            )}
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
                            value={textareas[index].hint}
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
                    color="success"
                    className="shadow-lg shadow-green-500/20"
                    onClick={handleAddTextarea}
                  >
                    เพิ่ม dialogs
                  </Button>
                  <Button
                    className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20"
                    onPress={() => {
                      CreateLesson();
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
      </div>
    </>
  );
}
