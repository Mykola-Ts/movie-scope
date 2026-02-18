import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getPersonById } from 'services/persons';
import { defaultErrorMessage } from 'helpers/helpers';
import { ToBackLink } from 'components/ToBackLink/ToBackLink';
import { Loader } from 'components/Loader/Loader';
import { PersonDetail } from 'components/PersonDetail/PersonDetail';

const Person = () => {
  const { personId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [person, setPerson] = useState(false);

  useEffect(() => {
    if (!personId) {
      toast.remove();
      toast.error(defaultErrorMessage);

      return;
    }

    const controller = new AbortController();

    getPersonById(personId, setPerson, setIsLoading, controller);

    return () => {
      controller.abort();
      toast.remove();
    };
  }, [personId]);

  return (
    <main>
      <div>
        <ToBackLink text="Back to movie page" />

        {person && <PersonDetail person={person} />}

        <Suspense fallback={<Loader isLoading={true} />}>
          <Outlet />
        </Suspense>

        <Loader isLoading={isLoading} />
      </div>
    </main>
  );
};

export default Person;
