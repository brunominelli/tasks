import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Tasks from '../../services';
import { Button, ButtonDelete, ButtonSubmit, Container, Division, Input, Section, Wrapper } from './styles';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [deadline, setDeadline] = useState('');
  const [isUpdateTask, setIsUpdateTask] = useState(false);

  const params = useParams('/:id');
  const navigate = useNavigate();

  useEffect(() => {
    async function readTasks() {
      const tasks = await Tasks.readTasks();
      console.log(tasks);
      setTasks(tasks);
    }
    readTasks();
  }, []);

  useEffect(() => {
    async function readTasks() {
      const tasks = await Tasks.readTasks()
      setTasks(tasks);
    }
    readTasks();
  }, [tasks]);

  async function createTasks() {
    await Tasks.createTasks(task, deadline);
    setTask('');
    setDeadline('');
  }

  async function readTaskById(id) {
    setIsUpdateTask(true);
    const {task, deadline} = await Tasks.readTaskById(id);
    setTask(task);
    setDeadline(deadline);
    navigate(`/task/${id}`);
  }
  
  async function updateTasks() {
    setIsUpdateTask(false);
    const { id } = params;
    await Tasks.updateTasks(id, task, deadline);
    setTask('');
    setDeadline('');
    navigate('/');
  }

  async function deleteTasks(id) {
    await Tasks.deleteTasks(id);
    setTask('');
    setDeadline('');
    navigate('/');
    if (isUpdateTask) setIsUpdateTask(false);
  }

  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Division>
            <Input
              type="text"
              id="task"
              name="task"
              value={ task }
              placeholder="Describe your task"
              onChange={ (e) => setTask(e.target.value) }
            />
            <Input
              type="date"
              id="deadline"
              name="deadline"
              value={ deadline }
              onChange={ (e) => setDeadline(e.target.value) }
            />
          </Division>
            {
              isUpdateTask ?
              <ButtonSubmit onClick={ updateTasks }>Edit</ButtonSubmit> :
              <ButtonSubmit
                onClick={ createTasks }
              >
                Submit
              </ButtonSubmit>
            }
        </Wrapper>
        <Wrapper>
          <Division>
            <h1>You have {tasks.length} task(s)</h1>
          </Division>
        </Wrapper>
        <Wrapper>
          {tasks.map(({ id, task, deadline }, index) => 
            <Section key={ index }>
              <p>{ task }</p>
              <p>{ deadline }</p>
              <Division>
                <Button
                  value={ id }
                  onClick={ (e) => readTaskById(e.target.value) }
                >
                  Edit
                </Button>
                <ButtonDelete
                  value={ id }
                  onClick={ (e) => deleteTasks(e.target.value) }
                >
                  Delete
                </ButtonDelete>
              </Division>
            </Section>
          )}
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
