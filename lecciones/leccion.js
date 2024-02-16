`use scrict`

class Lesson {
    constructor(topic, content) {
      this.topic = topic;
      this.content = content;
      this.completed = false;
    }
  
    markAsCompleted() {
      this.completed = true;
      alert(`La lección sobre ${this.topic} ha sido completada.`);
    }
  
    review() {
      alert(`Revisando la lección sobre ${this.topic}:`);
      alert(this.content);
    }
  }
  
  
  let mathLesson = new Lesson("Álgebra", "Introducción a las ecuaciones lineales");
  mathLesson.review(); 
  mathLesson.markAsCompleted();
  alert(mathLesson.completed); 