import { HashtagIcon } from "@heroicons/react/24/outline";
import { AnswerQuestion } from "@/components/AnswerQuestion";
import { Answer } from "@/components/Answer";
import { fetchAnswers, fetchQuestion } from "@/lib/data";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const question = await fetchQuestion(id);
  const answers = await fetchAnswers(id);

  if (!question) {
    return <div>Question not found</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-black flex items-center">
        <HashtagIcon className="h-6 w-6 mr-2"/>{question.title}
      </h1>
      <AnswerQuestion questionId={question.id}/>
      {answers.length > 0 ? (
        answers.map((answer) => (
          <Answer key={answer.id} id={answer.id} text={answer.answer} />
        ))
      ) : (
        <div>No answers given</div>
      )}
    </div>
  );
}