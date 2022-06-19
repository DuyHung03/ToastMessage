var $ = document.querySelector.bind(document);

var success = $('.success');
var warning = $('.warning');
var error = $('.error');
var toastList = $('.toasts');

var  createToast = (featureColor, featureText, featureIcon) => {

   //*tạo một thẻ div, thêm class 'toast' vào thẻ div này 

   var toast = document.createElement('div');
   toast.classList.add('toast');

   //* thêm HTML vào thẻ toast với 2 tham số featureIcon và featureText

   toast.innerHTML = `
         <i class="fa-solid ${featureIcon}"></i>
         <span>This is a ${featureText} message</span>
         <span class="timeline"></span>
      `
   

   //* thêm class featureColor vào thẻ toast để xác định màu của thẻ

   toast.classList.add(featureColor);
   
   //* đẩy thẻ toast vừa tạo bên trên  vào toastList.

   toastList.appendChild(toast);
   
   //* sau 4s thì thẻ toast thêm animation slideOut để biến mất

   setTimeout(() => {
      toast.style.animation = 'slideOut 1s ease forwards';
   }, 4000)

   //* 1 giây sau thẻ toast vừa tạo sẽ bị xóa khỏi toastList

   setTimeout(() => {
      toastList.removeChild(toast);
   }, 5000)
}

success.addEventListener('click', () => {
   createToast('success-feature', 'Success', 'fa-circle-check');
})

warning.addEventListener('click', () => {
   createToast('warning-feature', 'Warning', 'fa-triangle-exclamation');
})

error.addEventListener('click', () => {
   createToast('error-feature', 'Error', 'fa-xmark');
})