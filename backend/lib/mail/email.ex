defmodule FerretRescue.Email do
  @moduledoc """
  Module for defining emails to send through Bamboo
  """
  import Bamboo.Email

  alias FerretRescue.Auth
  alias FerretRescue.Auth.Guardian

  def new_application(%FerretRescue.Application{id: id, name: name, email: email}) do
    link = "https://admin.txferretrescue.org/applications/#{id}"

    new_email(
      to: email,
      from: "notifications@txferretrescue.org",
      subject: "New Application Received for #{name}.",
      html_body: "You can view the application here: <a href=\"#{link}\">#{link}</a>."
    )
  end

  def set_password(%Auth{email: email} = auth) do
    {:ok, token, _claims} = Guardian.encode_and_sign(auth, %{}, ttl: {30, :minutes})

    link = "https://admin.txferretrescue.org/auth/reset-password?token=#{token}"

    new_email(
      to: email,
      from: "notifications@txferretrescue.org",
      subject: "Set your password for admin.txferretrescue.org",
      html_body: "You can set your password here: <a href=\"#{link}\">#{link}</a>."
    )
  end
end
