import React from "react";

interface NameProps {
  userName: string;
}
export default function ({ userName }: NameProps) {
  return <div>Footer Information for {userName}</div>;
}
