import { HashtagIcon } from "@heroicons/react/24/outline";
import { AnswerQuestion } from "@/components/AnswerQuestion";
import { Answer } from "@/components/Answer";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div>
      <h1 className="text-3xl font-black flex items-center">
        <HashtagIcon className="h-6 w-6 mr-2"/>What is null safety in Typescript?
      </h1>
      <AnswerQuestion/>
      <Answer/>
    </div>
  );
}