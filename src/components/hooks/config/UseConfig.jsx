"use client";
import { useState } from "react";

export default function UseConfig() {
  const [styleConfig, setStyleConfig] = useState({});

  return { styleConfig, setStyleConfig };
}
