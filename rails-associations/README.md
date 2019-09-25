# User Stories

I want to be able to schedule a visit with a doctor


The scheduling form should let me write a reason for the visit

...and also select a doctor's name from a dropdown
  (dropdown value needs to be nested under "visit" namespace in params, needs to be the id of given doctor)

I should be able to see all my visits and the doctors I'll be visiting


doctors (has many visits)
id
name

visits (belongs to doctor)
id
doctor_id
reason

params = {
  visit: {
    reason: "I smell",
    doctor_id: 0
  }
}

def visit_params
  params.require(:visit).permit([:reason, :doctor_id ])
end
