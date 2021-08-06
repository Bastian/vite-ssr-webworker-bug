import { useEffect } from 'react';
import MyWebWorker from './MyWebWorker.js?worker&inline'

export function App() {

  useEffect(() => {
    const worker = new MyWebWorker();
    return () => worker.terminate();
  }, []);

  return (
    <div>
      Hello world!
    </div>
  )
}
