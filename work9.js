var library = [
    {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      readingStatus: true,
      price: 400
    },
    {
      author: 'Steve Jobs',
      title: 'Walter Isaacson',
      readingStatus: true,
      price: 750
    },
    {
      author: 'Suzanne Collins',
      title: 'Mockingjay: The Final Book of The Hunger Games',
      readingStatus: false,
      price: 880
    }
  ];

  let listTit=[];
  for (let ele of library){
    listTit.push(ele.title);
  }
  console.log(listTit);
  for (let ele of library){
    if (ele.price >=500 && ele.price<=1000){
        console.log(ele.author);
    }
}
