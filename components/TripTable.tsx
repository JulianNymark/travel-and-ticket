import React from "react";
import { Button, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import * as moment from "moment";
import styles from "../styles/Home.module.css";
import Link from "next/link";

interface DataType {
  id: string;
  estDuration: number;
  type: string;
  from: string;
  to: string;
}

const typeToEmoji = {
  train: "🚄",
  plane: "✈️",
  bus: "🚌",
};

const columns: ColumnsType<DataType> = [
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    render: (type) => <p className={styles.listItem}>{typeToEmoji[type]}</p>,
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Duration",
    dataIndex: "estDuration",
    key: "estDuration",
    render: (minutes) => {
      const timeData = moment.duration(minutes, "minutes")
      const hours = Math.floor(timeData.asHours());
      const hourAsMins = parseInt(moment.duration(hours, "h").asMinutes().toFixed());
      const mins = parseInt(timeData.asMinutes().toFixed()) - hourAsMins;
      const humanTime = `${!!hours ? hours + " h" : ""} ${!!mins ? mins + " min" : ""}`
      return <p>{humanTime}</p>;
    },
  },
  {
    title: "From",
    dataIndex: "from",
    key: "from",
  },
  {
    title: "To",
    dataIndex: "to",
    key: "to",
  },
  {
    title: "Action",
    key: "action",
    align: "right",
    render: (_, record) => (
      <Space size="middle">
        <Link href="/purchase" className={styles.linkButton} id={styles.about}>
          Buy Ticket
        </Link>
      </Space>
    ),
  },
];

export const TripTable: React.FC<{ data: DataType[] }> = ({ data }) => (
  <Table rowKey={(row) => row.id} columns={columns} dataSource={data} />
);
