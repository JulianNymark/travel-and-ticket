import React from "react";
import { Button, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import * as moment from "moment";
import styles from "../styles/Home.module.css";

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
      const mins = timeData.asMinutes().toFixed();
      const hours = timeData.asHours().toFixed();
      const humanTime = `${hours ? hours + " h" : ""} ${mins ? mins + " min" : ""}`
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
    render: (_, record) => (
      <Space size="middle">
        <Button>Buy Ticket</Button>
      </Space>
    ),
  },
];

export const TripTable: React.FC<{ data: DataType[] }> = ({ data }) => (
  <Table rowKey={(row) => row.id} columns={columns} dataSource={data} />
);
