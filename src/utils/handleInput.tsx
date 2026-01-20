export const makeChangeHandler = <T extends Record<string, string>>(
  stateSetter: React.Dispatch<React.SetStateAction<T>>
) => {
  return (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    stateSetter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
};
