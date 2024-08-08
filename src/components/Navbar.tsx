import { Container, Flex } from "@mantine/core";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <Flex bg={"#aaa"} p={"1rem"} gap={20}>
      <Link href={"/StpRmforKlasik"}>StpRmforKlasik</Link>
      <Link href="/GetirKod">GetirKod</Link>
      <Link href="/Ekle">Ekle</Link>
    </Flex>
  );
}

export default Navbar;
