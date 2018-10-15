json.(
  @user,
  :id,
  :description,
  :email,
  :institution,
  :name,
  :orcid,
  :research_area,
  :username,
  :created_at,
  :updated_at
)

json.avatar do
  json.url @user.avatar.url
end
