import { ref, computed } from "vue";

export default function handlePagination() {
  let page = ref(1);

  const data = Array.from(Array(24).keys()).map((eachrepo) => {
    return { index: eachrepo, value: `this_${eachrepo}` };
  });

  const perPage = 5;

  const recievedData = computed(() =>
    data.slice((page.value - 1) * perPage, page.value * perPage),
    );
    
    
    // console.log(recievedData)
    
    const nextPage = () => {
    if (page.value !== Math.ceil(data.length / perPage)) {
      page.value += 1;
    }
  };

  const backPage = () => {
    if (page.value !== 1) {
      page.value -= 1;
    }
  };

  const goToPage = (numPage) => {
    page.value = numPage;
  };

  return { data, recievedData, perPage, page, nextPage, backPage, goToPage };
}
