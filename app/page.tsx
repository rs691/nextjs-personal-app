
import { createClient } from '@/utils/supabase/server';

type Todo = {
  id: number;
  // Add other fields from your 'todos' table as needed, e.g.:
  // title: string;
  // completed: boolean;
};

export default async function Page() {
  // If cookies are needed for createClient, pass them as required by your implementation.
  // Otherwise, just call createClient with no arguments.
  const supabase = await createClient()

  const { data: todos } = await supabase.from('todos').select()

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Todos</h1>
      <ul>
        {todos?.map((todo: Todo, idx: number) => (
          <li key={todo.id ?? idx}>{JSON.stringify(todo)}</li>
        ))}
      </ul>
    </div>
  )
}
