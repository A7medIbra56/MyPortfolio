import './contact.css'

export default function Contact() {
  return (
    <div><form>
    <input name="name" placeholder="What is your name?" className="name"  />
    <input name="emailaddress" placeholder="What is your email?" className="email" type="email"  />
<textarea rows="4" cols="50" name="subject" placeholder="Please enter your message" className="message" ></textarea>
<div className='send'><button type="submit" value="Send" className="btn btn-secondary btn-lg btn-block w-50">Send</button>
</div>
<div className='madeHome  mx-auto mt-5'>
               <a href="mailto:ahmedibrhiam512@gmail.com"><ion-icon className='me-2' name="logo-google"> </ion-icon></a>
                <a href="https://wa.me/01158031289"><ion-icon name="logo-whatsapp"></ion-icon></a>
                <a href="http://linkedin.com/in/ahmed-ibrahim-18ab26220"><ion-icon name="logo-linkedin"></ion-icon></a>
                <a href="http://github.com/A7medIbra56"><ion-icon name="logo-github"></ion-icon></a>  
              </div>
</form>

</div>
  )
}
