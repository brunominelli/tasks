import React, { useContext, useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import TasksContext from '../../store/context/tasks';
import {
  Button,
  ButtonDelete,
  ButtonSubmit,
  Container,
  Division,
  Input,
  Section,
  Wrapper,
  WrapperForm
} from './styles';

function Home() {
  const {
    task,
    setTask,
    deadline,
    setDeadline,
    tasks,
    getTasks,
    createTasks,
    readTaskById,
    updateTasks,
    deleteTasks,
  } = useContext(TasksContext);

  const [isEdit, setIsEdit] = useState(false);

  const { id } = useParams('/:id');
  const navigate = useNavigate();

  useEffect(() => { getTasks() }, []);
  useEffect(() => { getTasks() }, [tasks]);

  async function handleClickCreateButton() {
    await createTasks();
  }

  async function handleClickEditButton(id) {
    navigate(`/task/${id}`);
    setIsEdit(true);
    await readTaskById(id);
  }

  async function handleClickUpdateButton() {
    setIsEdit(false);
    navigate('/');
    await updateTasks(id);
  }

  async function handleClickDeleteButton(id) {
    setIsEdit(false);
    navigate('/');
    await deleteTasks(id);
  }

  return (
    <>
      <Header />
      <Container>
        <WrapperForm>
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
              isEdit ?
              <ButtonSubmit
                onClick={ () => handleClickUpdateButton() }
              >
                Edit
              </ButtonSubmit> :
              <ButtonSubmit
                onClick={ () => handleClickCreateButton() }
              >
                Submit
              </ButtonSubmit>
            }
        </WrapperForm>
        <Wrapper>
          <Division>
            <h1>You have {tasks.length} task(s)</h1>
          </Division>
          {tasks.map(({ id, task, deadline }, index) => 
            <Section key={ index }>
              <p>{ task }</p>
              <p>{ deadline }</p>
              <Division>
                <Button
                  value={ id }
                  onClick={ (e) => handleClickEditButton(e.target.value) }
                >
                  Edit
                </Button>
                <ButtonDelete
                  value={ id }
                  onClick={ (e) => handleClickDeleteButton(e.target.value) }
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
