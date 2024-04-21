import './App.css';
import { useEffect, useState} from 'react'
import { getPosts } from './api/comments';
import { PostCard } from './components/cards';

function App() {
  const [data, setData] = useState(null)

  useEffect(()=>{
    getPosts().then((posts) => setData(posts))
  }, [])
  return (
    <div className="App">
      {
        data ? data.map((e) => <PostCard title={e.title} img={e.thumbnailUrl}/>) : <p>no data</p>
      }
    </div>
  );
}

export default App;
