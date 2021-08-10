const title =  '==============================\n現在持っているタスクの一覧\n==============================';
const tasks = [
  {
    content: '机を片付ける',
    genre: '掃除',
  },
  {
    content: '牛乳を買う',
    genre: '買い物',
  },
  {
    content: '散歩する',
    genre: '運動',
  },
];

const pushTask = (task, type) => tasks.push({
  content: task,
  genre: type,
});

const createList = () => {
  console.log(title);
  tasks.forEach((task, index) => console.log(index, `[内容] ${task.content} [ジャンル] ${task.genre}`));
}

createList();
let task = prompt('タスクを入力してください');
let type = prompt('ジャンルを入力してください');
pushTask(task, type);
createList();
