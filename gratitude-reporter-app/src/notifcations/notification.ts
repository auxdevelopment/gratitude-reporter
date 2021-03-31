function showNotification() {
    const notifBody = `text`;
    const notifImg = `data/img/moon.jpg`;

    const options = {
      body: notifBody,
      icon: notifImg,
    };

    const notification = new Notification('I am notification', options);
  }