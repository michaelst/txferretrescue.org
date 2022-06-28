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
    text_body = """
    Dear #{String.trim(application.name)},

    We have approved your adoption application.

    When you are ready, please contact Holly Balentine at 972-286-5778 to schedule your adoption appointment.

    The rescue also sells cages, accessories, and food at a reduced cost so if you are in need of these items, please feel free to check with Holly. They will not be on location at the time of the appointment.

    We recommend you have your cage and accessories all set to go so when you return home with your new ferret. You will also need a small carrier for transporting.

    Congratulations and we hope you find as much love and joy in these little animals as we all do.

    We also recommend that you get a book “Ferrets For Dummies” ed 3. It is a great resource book on the health and care of ferrets.

    Thank you again for choosing to adopt.

    Applications Team
    Texas Ferret Lover's Rescue
    txflrapplications@gmail.com
    """

    new_email(
      to: String.trim(application.email),
      from: "notifications@txferretrescue.org",
      subject: "Adoption Application Approved",
      text_body: text_body
    )
    |> put_header("reply-to", "txflrapplications@gmail.com")
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
