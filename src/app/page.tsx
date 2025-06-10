'use client'
import { Input } from "@/components/input";

export default function Home() {
  return (
    <div>
      <Input label="E-mail"/>
      <Input label="Senha" type="password"/>
    </div>
  );
}
