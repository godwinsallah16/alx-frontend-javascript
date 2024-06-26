
export default function handleProfileSignup(firstName, lastName, fileName) {
  import signUpUser from './4-user-promise';
  import uploadPhoto from './5-photo-reject';
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((values) => {
    const arr = [];
    for (const item of values) {
      arr.push({ status: item.status, value: item.value || item.reason });
    }
    return arr;
  });
}
