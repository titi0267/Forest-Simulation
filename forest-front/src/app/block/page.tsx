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
import styles from "./styles.module.scss";
import { cn } from "@/components/sidebar/cn";
import { TreeStatus } from "@/utils/types";

const Block = () => {
  const [datas, setData] = useState<DataType[]>([]);
  const [blockX, setBlockX] = useState(1);
  const [blockY, setBlockY] = useState(1);
  const [mouseEnter, setMouseEnter] = useState<number|null>(null)

  const getTreesInBlock = async (blockX: number, blockY: number) => {
    try {
      const response = await axiosInstance.get(
        `/getTreesInBlock/${blockX}/${blockY}/`
      );
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

  useEffect(() => {
    getTreesInBlock(blockX, blockY);
  }, [blockX, blockY]);

  const chooseGroup = (group: number, status: TreeStatus) => {
    switch (group) {
      case 1:
        return (
          <Group1 status={status} />
        )
      case 2:
        return <Group2 status={status} />
      case 3:
        return <Group3 status={status} />
      case 4:
        return <Group4 status={status} />
      case 5:
        return <Group5 status={status} />
      case 6:
        return <Group6 status={status} />;
      default:
        return <Group7 status={status} />;
    }
  };
  
  const renderTree = (x: number | undefined, y: number | undefined) => {

    return datas.map((data) => {
      if (x == undefined || y == undefined) {
        return (
          <div
            style={{
              position: "absolute",
              zIndex: 10,
              pointerEvents: "none",
              left: `calc(${data.x}% - 12px)`,
              top: `calc(${data.y}% - 24px)`,
            }}
          >
            {chooseGroup(
              data.spgroup,
              data.status == "None" ? "Keep" : (data.status as TreeStatus)
            )}
          </div>
        );
      } else if (
        x * 20 <= data.x &&
        (x + 1) * 20 > data.x &&
        y * 20 <= data.y &&
        (y + 1) * 20 > data.y
      ) {
        console.log("right render")
        return (
          <div
            style={{
              position: "absolute",
              zIndex: 100,
              left: `calc(${(data.x - x * 20) * 5}% - 12px)`,
              top: `calc(${(data.y - y * 20) * 5}% - 24px)`,
            }}
            onMouseEnter={()=> {
              console.log("mouse enter")
              setMouseEnter(data.id)
            }}
            onMouseLeave={()=> {
              console.log("mouse leave")
              setMouseEnter(null)
            }}
          >
            {/* {renderLine(((data.x - x * 20) * 5)% - 12, ((datas.find(dat=> dat.id == data.id)?.x ?? 0 - x * 20) * 5)*100 - 12,((data.x - x * 20) * 5)*100 - 24,((datas.find(dat=> dat.id == data.id)?.y?? 0 - y * 20) * 5)*100 - 24)} */}
            {mouseEnter == data.id  ? hoverComponent(data): null}
            {chooseGroup(
              data.spgroup,
              data.status == "None" ? "Keep" : (data.status as TreeStatus)
            )}
          </div>
        );
      }
    });
  };

  const hoverComponent = (data: DataType) => {
    console.log(clickOnBlock.x, clickOnBlock.y)
    if (clickOnBlock.x && clickOnBlock.y) {
      console.log("tree hover no undef")
      return (
        <div style={{ position:'absolute', top: "20px", zIndex:999, width: "200px", display:"flex", flexDirection: 'column', opacity: '0.8', backgroundColor:'gray', color:'white', borderRadius:"10px", padding:"3px"}}>
          <p>Group: {data.spgroup}</p>
          <p>Species: {data.species}</p>
          <p>Cut angle: {data.CutAngle}</p>
          <p>Damage crown: {data.DamageCROWN}</p>
          <p>Damage stem: {data.DamageSTEM}</p>
          <p>Diameter: {data.Diameter}</p>
          <p>Growth 30: {data.GrowthD30}</p>
          <p>Height: {data.Height}</p>
          <p>Production: {data.PROD}</p>
          <p>Volume: {data.Volume}</p>
          <p>Status: {data.status}</p>
        </div>
      ) 
      
    }
    return null
  }

  const renderLine = (x1: number, x2: number, y1: number, y2: number) => {
    return (
      <svg style={{position:"absolute"}}>
      <line 

      x1={x1} y1={y1} x2={x2} y2={y2} 
      style={{stroke:"red",strokeWidth:2}}
      ></line>
    </svg>
    )
  }

  const [clickOnBlock, setClickOnBlock] = useState<{
    x: number | undefined;
    y: number | undefined;
  }>({ x: undefined, y: undefined });

  const renderXBlock = (y: number) => {
    let blocksOnMapX: JSX.Element[] = [];

    for (let x = 0; x < 5; x++)
      blocksOnMapX.push(
        <div
          onClick={() => {
            setClickOnBlock({ x: x, y: y });
          }}
          className={cn(
            styles.singleBlock,
            (clickOnBlock.x == x && clickOnBlock.y == y) ||
              (clickOnBlock.x == undefined && clickOnBlock.y == undefined)
              ? styles.zoomOnBlock
              : styles.hideOtherBlocks,
            clickOnBlock.x == x && clickOnBlock.y == y
              ? styles.blockZoomedIn
              : null
          )}
          style={{
            borderLeft: x == 0 ? "0px" : "1px solid grey",
            borderBottom: y == 4 ? "0px" : "1px solid grey",
          }}
        >
          {y == 0 && (clickOnBlock.x == undefined || clickOnBlock.x == x) && (
            <p
              style={{
                position: "relative",
                top: "-30px",
                left: "-10px",
              }}
            >
              {x * 20}
            </p>
          )}
        </div>
      );
    return blocksOnMapX;
  };
  const renderYBlock = () => {
    let blocksOnMapY: JSX.Element[] = [];

    for (let i = 0; i < 5; i++) {
      blocksOnMapY.push(
        <div
          className={cn(
            clickOnBlock.y == i || clickOnBlock.y == undefined
              ? styles.zoomOnBlock
              : styles.hideOtherBlocks
          )}
          style={{
            display: "flex",
            flexDirection: "row",
            position: "relative",
          }}
        >
          {(clickOnBlock.y == undefined || clickOnBlock.y == i) && (
            <p
              style={{
                position: "absolute",
                left: "-30px",
                top: "-10px",
              }}
            >
              {i * 20}
            </p>
          )}
          {...renderXBlock(i)}
        </div>
      );
    }
    return blocksOnMapY;
  };

  const renderArrows = (type: "down" | "back" | "up" | "forward") => {
    const arrowColor =
      (type == "down" && blockY >= 10) ||
      (type == "up" && blockY == 1) ||
      (type == "back" && blockX == 1) ||
      (type == "forward" && blockX >= 10)
        ? "red"
        : "black";

    const onClick = () => {
      switch (type) {
        case "down":
          if (blockY < 10) setBlockY((prev) => prev + 1);
          break;
        case "up":
          if (blockY > 1) setBlockY((prev) => prev - 1);
          break;
        case "back":
          if (blockX > 1) setBlockX((prev) => prev - 1);
          break;
        case "forward":
          if (blockX < 10) setBlockX((prev) => prev + 1);
          break;
      }
    };

    return clickOnBlock.x == undefined && clickOnBlock.y == undefined ? (
      <Icon
        onClick={onClick}
        className="text-default-500"
        style={{
          bottom: type == "down" ? "3%" : "auto",
          top: type == "up" ? "1%" : "auto",
          left: type == "back" ? "1%" : "auto",
          right: type == "forward" ? "3%" : "auto",
          position: "absolute",
          cursor: "pointer",
          padding: "10px",
        }}
        color={arrowColor}
        icon={`ion:chevron-${type}`}
        width={70}
      />
    ) : null;
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        borderRadius: "10px",
        border: "1px solid grey",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {renderArrows("down")}
      {renderArrows("forward")}
      {renderArrows("back")}
      {renderArrows("up")}

      <div
        style={{
          width: "80%",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          border: "1px solid grey",
          borderRadius: "10px",
          position: "relative",
        }}
      >
        {clickOnBlock.x != undefined && clickOnBlock.y != undefined ? (
          <Icon
            onClick={() => {
              setClickOnBlock({ x: undefined, y: undefined });
            }}
            icon={"ic:baseline-zoom-out"}
            width={50}
            style={{ position: "absolute", cursor: "pointer", zIndex: "10" }}
          />
        ) : null}
        {renderTree(clickOnBlock.x, clickOnBlock.y)}
        {...renderYBlock()}
      </div>
    </div>
  );
};

export default Block;
