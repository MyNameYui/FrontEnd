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
} from "@nextui-org/react";
import useSWR from "swr";
import Add from "../../modal/lesson/add";
import { useRecoilValue } from "recoil";
import { isLogin } from "../../../reducer/state";
import { Axios } from "../../../lib/fetcher";
import { AddValidator } from "../../../lib/validator/lesson/validator";

export default function App() {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(null);
  const isauth = useRecoilValue(isLogin);
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
          <TableColumn key="categoryId">categoryId</TableColumn>
          <TableColumn key="categoryName">categoryName</TableColumn>
        </TableHeader>
        <TableBody
          items={data?.detail ?? []}
          loadingContent={<Spinner />}
          loadingState={loadingState}
        >
          {(item) => (
            <TableRow key={item?.categoryId}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
