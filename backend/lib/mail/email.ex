defmodule FerretRescue.Email do
  @moduledoc """
  Module for defining emails to send through Bamboo
  """
  import Bamboo.Email

  alias FerretRescue.Auth
  alias FerretRescue.Auth.Guardian

  def new_application(%FerretRescue.Application{id: id, name: name}) do
    link = "https://admin.txferretrescue.org/applications/#{id}"

    new_email(
      to: "txflrapplications@gmail.com",
      from: "notifications@txferretrescue.org",
      subject: "New Application Received for #{name}.",
      html_body: "You can view the application here: <a href=\"#{link}\">#{link}</a>."
    )
  end

  def approval(%FerretRescue.Application{} = application) do
    attachment_dir = "#{:code.priv_dir(:ferret_rescue)}/email_attachments"
    heartworm_pdf = Bamboo.Attachment.new("#{attachment_dir}/heartworm.pdf")
    application_questions = Bamboo.Attachment.new("#{attachment_dir}/application_questions.doc")

    text_body = """
    Dear #{String.trim(application.name)},

    We have approved your adoption application. Please review the informational comments on the attached files, they are listed below.

    When you are ready, please contact Millie Sanders at 972-286-5778 to schedule an appointment so your ferret in waiting can pick you out.

    The rescue also sells cages, accessories, and food at a reduced cost so if you are in need of these items, please feel free to check with Millie.

    We recommend you have your cage and accessories all set to go so  when you return home with your new ferret, you are ready. However, it can all be done in one trip if you so desire. You will also need a small carrier of some type to transport him/her with. We do have carriers at $10 and $15.

    Congratulations and we hope you find as much love and joy in these little animals as we all do.

    Thank you again for choosing to adopt.

    We also recommend that you get a book “Ferrets For Dummies” ed 2. It is a great resource book on the health and care of ferrets.

    txflrapplications@gmail.com
    Texas Ferret Lovers Rescue Volunteer
    """

    new_email(
      to: String.trim(application.email),
      from: "notifications@txferretrescue.org",
      subject: "Adoption Application Approved",
      text_body: text_body
    )
    |> put_header("reply-to", "txflrapplications@gmail.com")
    |> put_attachment(heartworm_pdf)
    |> put_attachment(application_questions)
  end

  def send_message(%FerretRescue.Applications.Message{message: message}, email) do
    new_email(
      to: email,
      from: "notifications@txferretrescue.org",
      subject: "Ferret Adoption Application",
      text_body: message
    )
  end

  def set_password(%Auth{email: email} = auth) do
    {:ok, token, _claims} = Guardian.encode_and_sign(auth, %{}, ttl: {120, :minutes})

    link = "https://admin.txferretrescue.org/auth/reset-password?token=#{token}"

    new_email(
      to: email,
      from: "notifications@txferretrescue.org",
      subject: "Set your password for admin.txferretrescue.org",
      html_body: "You can set your password here: <a href=\"#{link}\">#{link}</a>."
    )
  end
end
