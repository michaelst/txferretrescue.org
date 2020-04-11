defmodule FerretRescue.Email do
  @moduledoc """
  Module for defining emails to send through Bamboo
  """
  import Bamboo.Email

  def new_application(%FerretRescue.Application{id: id, name: name, email: email}) do
    link = "https://admin.txferretrescue.org/applications/#{id}"

    new_email(
      to: email,
      from: "notifications@txferretrescue.org",
      subject: "New Application Received for #{name}.",
      html_body: "You can view the application here: <a href=\"#{link}\">#{link}</a>."
    )
  end
end
