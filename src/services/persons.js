import toast from 'react-hot-toast';
import { fetchPersonById, fetchPersonPhotos } from './api';
import { defaultErrorMessage } from 'helpers/helpers';

export async function getPersonById(
  personId,
  setPerson,
  setIsLoading,
  controller
) {
  setIsLoading(true);

  try {
    const data = await fetchPersonById(personId, controller);

    setPerson(data);
  } catch (error) {
    if (error.code !== 'ERR_CANCELED') {
      toast.remove();
      toast.error(defaultErrorMessage);
    }
  } finally {
    setIsLoading(false);
  }
}

export async function getPersonPhotos(personId, setPhotos, controller) {
  try {
    const data = await fetchPersonPhotos(personId, controller);

    setPhotos([...data.profiles]);
  } catch (error) {
    if (error.code !== 'ERR_CANCELED') {
      toast.remove();
      toast.error(defaultErrorMessage);
    }
  }
}
