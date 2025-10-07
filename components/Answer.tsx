import CheckButton from "./CheckButton";
import VoteButton from "./VoteButton";

export function Answer() {
  return (
    <div className="flex items-center border-l border-r border-t border-atlas-white-300 p-6 first:rounded-t-md last:rounded-b-md last:border-b">
      <p className="text w-full text-left font-semibold">Null safety in Typescript refers to the language's ability to prevent runtime errors caused by null and undefined values.</p>
      <CheckButton/>
    </div>
  );
}
