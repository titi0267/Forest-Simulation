"use client";

import { useEffect, useState } from "react";
import { DataType } from "../trees/page";
import axiosInstance from "@/utils/axios";
import { Icon } from "@iconify/react";
import Group1 from "@/components/Trees/group1";
import Group2 from "@/components/Trees/group2";
import Group3 from "@/components/Trees/group3";
import Group4 from "@/components/Trees/group4";
import Group5 from "@/components/Trees/group5";
import Group6 from "@/components/Trees/group6";
import Group7 from "@/components/Trees/group7";
import Group1Cut from "@/components/Trees/group1cut";
import Group2Cut from "@/components/Trees/group2cut";
import Group3Cut from "@/components/Trees/group3cut";
import Group4Cut from "@/components/Trees/group4cut";
import Group5Cut from "@/components/Trees/group5cut";
import Group6Cut from "@/components/Trees/group6cut";
import Group7Cut from "@/components/Trees/group7cut";
import Group1Victim from "@/components/Trees/group1victim";
import Group2Victim from "@/components/Trees/group2victim";
import Group3Victim from "@/components/Trees/group3victim";
import Group4Victim from "@/components/Trees/group4victim";
import Group5Victim from "@/components/Trees/group5victim";
import Group6Victim from "@/components/Trees/group6victim";
import Group7Victim from "@/components/Trees/group7victim";

const Block = () => {
  const [datas, setData] = useState<DataType[]>([]);
  const [blockX, setBlockX] = useState(1);
  const [blockY, setBlockY] = useState(1);
  const [whereTo, setWhereTo] = useState("bottom");

  const getTreesInBlock = async (blockX: number, blockY: number) => {
    try {
      console.log(blockX, blockY);
      const response = await axiosInstance.get(
        `/getTreesInBlock/${blockX}/${blockY}/`
      );
      console.log(response);
      if (response.data.success === true) {
        const dataWithIds = response.data.message
          .slice(0, 500)
          .map((item: any, index: number) => ({ id: index + 1, ...item }));
        setData(dataWithIds);
      }
    } catch (error) {
      console.error("Error:", error);
      return [];
    }
  };

  const renderGrid = () => {
    const gridMap = [];
    for (let i = 1; i < 5; i++) {
      gridMap.push(
        <div
          style={{
            width: "1px",
            height: "100%",
            position: "absolute",
            left: `calc(${i} * 20%)`,
            top: 0,
            backgroundColor: "#80808070",
          }}
        ></div>
      );
    }
    for (let i = 1; i < 5; i++) {
      gridMap.push(
        <div
          style={{
            width: "100%",
            height: "1px",
            position: "absolute",
            left: 0,
            top: `calc(${i} * 20%)`,
            backgroundColor: "#80808070",
          }}
        ></div>
      );
    }
    return gridMap;
  };

  useEffect(() => {
    getTreesInBlock(blockX, blockY);
  }, [blockX, blockY]);

  const renderTree = () => {
    const bl = [];
    return datas.map((data) => {
      if (data.spgroup == "1" && data.status == "Cut") {
        return (
          <div
            style={{
              position: "absolute",
              left: `calc(${data.x}% - 12px)`,
              top: `calc(${data.y}% - 24px)`,
            }}
          >
            <Group1Cut
              x={data.x}
              y={data.y}
              realX={data.realX}
              realY={data.realY}
              status={data.status}/>
          </div>
        )
      } else if (data.spgroup == "1" && data.status == "Victim") {
        return (
          <div
            style={{
              position: "absolute",
              left: `calc(${data.x}% - 12px)`,
              top: `calc(${data.y}% - 24px)`,
            }}
          >
            <Group1Victim
              x={data.x}
              y={data.y}
              realX={data.realX}
              realY={data.realY}
              status={data.status}/>
          </div>
        )
      } else if (data.spgroup == "1" && data.status == "Keep" || data.status == "None") {
        return (
          <div
            style={{
              position: "absolute",
              left: `calc(${data.x}% - 12px)`,
              top: `calc(${data.y}% - 24px)`,
            }}
          >
            <Group1
              x={data.x}
              y={data.y}
              realX={data.realX}
              realY={data.realY}
              status={data.status}
            />
          </div>
        )
      }
      
      if (data.spgroup == "2" && data.status == "Cut") {
        return (
          <div
            style={{
              position: "absolute",
              left: `calc(${data.x}% - 12px)`,
              top: `calc(${data.y}% - 24px)`,
            }}
          >
            <Group2Cut
              x={data.x}
              y={data.y}
              realX={data.realX}
              realY={data.realY}
              status={data.status}/>
          </div>
        );
      } else if (data.spgroup == "2" && data.status == "Victim") {
        return (
          <div
            style={{
              position: "absolute",
              left: `calc(${data.x}% - 12px)`,
              top: `calc(${data.y}% - 24px)`,
            }}
          >
            <Group2Victim
              x={data.x}
              y={data.y}
              realX={data.realX}
              realY={data.realY}
              status={data.status}/>
          </div>
        );
      } else if (data.spgroup == "2" && data.status == "Keep" || data.status == "None") {
        return (
          <div
            style={{
              position: "absolute",
              left: `calc(${data.x}% - 12px)`,
              top: `calc(${data.y}% - 24px)`,
            }}
          >
            <Group2
              x={data.x}
              y={data.y}
              realX={data.realX}
              realY={data.realY}
              status={data.status}/>
          </div>
        );
      }
      if (data.spgroup == "3" && data.status == "Cut") {
        return (
          <div
            style={{
              position: "absolute",
              left: `calc(${data.x}% - 12px)`,
              top: `calc(${data.y}% - 24px)`,
            }}
          >
            <Group3Cut
              x={data.x}
              y={data.y}
              realX={data.realX}
              realY={data.realY}
              status={data.status}/>
          </div>
        );
      } else if (data.spgroup == "3" && data.status == "Victim") {
        return (
          <div
            style={{
              position: "absolute",
              left: `calc(${data.x}% - 12px)`,
              top: `calc(${data.y}% - 24px)`,
            }}
          >
            <Group3Victim
              x={data.x}
              y={data.y}
              realX={data.realX}
              realY={data.realY}
              status={data.status}/>
          </div>
        );
      } else if (data.spgroup == "3" && data.status == "Keep" || data.status == "None") {
        return (
          <div
            style={{
              position: "absolute",
              left: `calc(${data.x}% - 12px)`,
              top: `calc(${data.y}% - 24px)`,
            }}
          >
            <Group3
              x={data.x}
              y={data.y}
              realX={data.realX}
              realY={data.realY}
              status={data.status}/>
          </div>
        );
      }
      if (data.spgroup == "4" && data.status == "Cut") {
        return (
          <div
            style={{
              position: "absolute",
              left: `calc(${data.x}% - 12px)`,
              top: `calc(${data.y}% - 24px)`,
            }}
          >
            <Group4Cut
              x={data.x}
              y={data.y}
              realX={data.realX}
              realY={data.realY}
              status={data.status}/>
          </div>
        );
      } else if (data.spgroup == "4" && data.status == "Victim") {
        return (
          <div
            style={{
              position: "absolute",
              left: `calc(${data.x}% - 12px)`,
              top: `calc(${data.y}% - 24px)`,
            }}
          >
            <Group4Victim
              x={data.x}
              y={data.y}
              realX={data.realX}
              realY={data.realY}
              status={data.status}/>
          </div>
        );
      } else if (data.spgroup == "4" && data.status == "Keep" || data.status == "None") {
        return (
          <div
            style={{
              position: "absolute",
              left: `calc(${data.x}% - 12px)`,
              top: `calc(${data.y}% - 24px)`,
            }}
          >
            <Group4
              x={data.x}
              y={data.y}
              realX={data.realX}
              realY={data.realY}
              status={data.status}/>
          </div>
        );
      }
      if (data.spgroup == "5" && data.status == "Cut") {
        return (
          <div
            style={{
              position: "absolute",
              left: `calc(${data.x}% - 12px)`,
              top: `calc(${data.y}% - 24px)`,
            }}
          >
            <Group5Cut
              x={data.x}
              y={data.y}
              realX={data.realX}
              realY={data.realY}
              status={data.status}/>
          </div>
        );
      } else if (data.spgroup == "5" && data.status == "Victim") {
        return (
          <div
            style={{
              position: "absolute",
              left: `calc(${data.x}% - 12px)`,
              top: `calc(${data.y}% - 24px)`,
            }}
          >
            <Group5Victim
              x={data.x}
              y={data.y}
              realX={data.realX}
              realY={data.realY}
              status={data.status}/>
          </div>
        );
      } else if (data.spgroup == "5" && data.status == "Keep" || data.status == "None") {
        return (
          <div
            style={{
              position: "absolute",
              left: `calc(${data.x}% - 12px)`,
              top: `calc(${data.y}% - 24px)`,
            }}
          >
            <Group5
              x={data.x}
              y={data.y}
              realX={data.realX}
              realY={data.realY}
              status={data.status}/>
          </div>
        );
      }
      if (data.spgroup == "6" && data.status == "Cut") {
        return (
          <div
            style={{
              position: "absolute",
              left: `calc(${data.x}% - 12px)`,
              top: `calc(${data.y}% - 24px)`,
            }}
          >
            <Group6Cut
              x={data.x}
              y={data.y}
              realX={data.realX}
              realY={data.realY}
              status={data.status}/>
          </div>
        );
      } else if (data.spgroup == "6" && data.status == "Victim") {
        return (
          <div
            style={{
              position: "absolute",
              left: `calc(${data.x}% - 12px)`,
              top: `calc(${data.y}% - 24px)`,
            }}
          >
            <Group6Victim
              x={data.x}
              y={data.y}
              realX={data.realX}
              realY={data.realY}
              status={data.status}/>
          </div>
        );
      } else if (data.spgroup == "6" && data.status == "Keep" || data.status == "None") {
        return (
          <div
            style={{
              position: "absolute",
              left: `calc(${data.x}% - 12px)`,
              top: `calc(${data.y}% - 24px)`,
            }}
          >
            <Group6
              x={data.x}
              y={data.y}
              realX={data.realX}
              realY={data.realY}
              status={data.status}/>
          </div>
        );
      }
      if (data.spgroup == "7" && data.status == "Cut") {
        return (
          <div
            style={{
              position: "absolute",
              left: `calc(${data.x}% - 12px)`,
              top: `calc(${data.y}% - 24px)`,
            }}
          >
            <Group7Cut
              x={data.x}
              y={data.y}
              realX={data.realX}
              realY={data.realY}
              status={data.status}/>
          </div>
        );
      } else if (data.spgroup == "7" && data.status == "Victim") {
        return (
          <div
            style={{
              position: "absolute",
              left: `calc(${data.x}% - 12px)`,
              top: `calc(${data.y}% - 24px)`,
            }}
          >
            <Group7Victim
              x={data.x}
              y={data.y}
              realX={data.realX}
              realY={data.realY}
              status={data.status}/>
          </div>
        );
      } else if (data.spgroup == "7" && data.status == "Keep" || data.status == "None") {
        return (
          <div
            style={{
              position: "absolute",
              left: `calc(${data.x}% - 12px)`,
              top: `calc(${data.y}% - 24px)`,
            }}
          >
            <Group7
              x={data.x}
              y={data.y}
              realX={data.realX}
              realY={data.realY}
              status={data.status}/>
          </div>
        );
      }
    });
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          position: "relative",
          alignSelf: "flex-start",
        }}
      >
        <div
          style={{
            top: 0,
            left: 0,
            position: "absolute",
            width: "200px",
            marginTop: "15px",
            display: "flex",
            flexDirection: "column",
            marginLeft: "15px",
            // borderColor: "red",
            // borderWidth: "1px",
            padding: "5px",
            gap: "3px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Group1 />
            <p>Group 1</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Group2 />
            <p>Group 2</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Group3 />
            <p>Group 3</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Group4 />
            <p>Group 4</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Group5 />
            <p>Group 5</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Group6 />
            <p>Group 6</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Group7 />
            <p>Group 7</p>
          </div>
        </div>
      </div>

      <div>
        <p style={{ fontSize: "22px" }}>
          You are located on ({blockX} : {blockY})
        </p>
      </div>
      <div style={{ position: "relative" }}>
        <Icon
          onClick={() => {
            if (blockY > 1) setBlockY((prev) => prev - 1);
            setWhereTo((prev) => {
              if (prev == "bottom") return "top";
              else {
                return "bottom";
              }
            });
          }}
          className="text-default-500"
          color={blockY > 1 ? "black" : "red"}
          icon="pepicons-pencil:arrow-up"
          style={{
            cursor: "pointer",
            padding: "10px",
            borderRadius: "30px",
            backgroundColor: "grey",
          }}
          width={50}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
          gap: "50px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon
          onClick={() => {
            if (blockX > 1) setBlockX((prev) => prev - 1);
            setWhereTo((prev) => {
              if (prev == "left") return "right";
              else {
                return "left";
              }
            });
          }}
          style={{
            cursor: "pointer",
            padding: "10px",
            borderRadius: "30px",
            backgroundColor: "grey",
          }}
          className="text-default-500"
          color={blockX > 1 ? "black" : "red"}
          icon="pepicons-pencil:arrow-left"
          width={50}
        />
        <div
          style={{
            width: "82%",
            height: "82%",
            alignItems: "center",
            position: "relative",
            display: "flex",
            borderRadius: "10px",
            justifyContent: "center",
            outlineWidth: "1px",
            outlineColor: "grey",
            outlineStyle: "solid",
          }}
        >
          {renderGrid()}
          <div
            style={{
              position: "relative",
              width: "99%",
              height: "99%",
            }}
          >
            {renderTree()}
          </div>
        </div>
        <Icon
          onClick={() => {
            if (blockX < 10) setBlockX((prev) => prev + 1);
            setWhereTo((prev) => {
              if (prev == "left") return "right";
              else {
                return "left";
              }
            });
          }}
          className="text-default-500"
          color={blockX < 10 ? "black" : "red"}
          icon="pepicons-pencil:arrow-right"
          style={{
            cursor: "pointer",
            padding: "10px",
            borderRadius: "30px",
            backgroundColor: "grey",
          }}
          width={50}
        />
      </div>
      <div
        style={{
          position: "relative",
          bottom: "30px",
        }}
      >
        <Icon
          onClick={() => {
            if (blockY < 10) setBlockY((prev) => prev + 1);
            setWhereTo((prev) => {
              if (prev == "bottom") return "top";
              else {
                return "bottom";
              }
            });
          }}
          className="text-default-500"
          style={{
            cursor: "pointer",
            padding: "10px",
            borderRadius: "30px",
            backgroundColor: "grey",
          }}
          color={blockY < 10 ? "black" : "red"}
          icon="pepicons-pencil:arrow-down"
          width={50}
        />
      </div>
    </div>
  );
};

export default Block;
