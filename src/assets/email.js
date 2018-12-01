function emailer(reply, sub, from, message) {
    var template_params = {
        "reply_to": reply,
        "subject": sub,
        "from_name": from,
        "message_html": message
      }
  
    var service_id = "default_service";
    var template_id = "template_kECBpEp3";
    emailjs.send(service_id,template_id,template_params);
}