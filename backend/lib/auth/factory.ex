defmodule FerretRescue.Auth.Factory do
  @moduledoc """
  ExMachina factory for auth schema.
  """
  defmacro __using__(_opts) do
    quote do
      def auth_factory do
        %FerretRescue.Auth{
          email: "test@example.com",
          password: Bcrypt.hash_pwd_salt("password"),
          can_manage_applications: true,
          can_manage_users: true,
          can_manage_ferrets: true,
          can_manage_website: true
        }
      end
    end
  end
end
