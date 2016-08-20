class Contact < MailForm::Base
	attribute :name,      :validate => true
  attribute :email,     :validate => true
  attribute :file,      :attachment => true

  attribute :message
  attribute :nickname,  :captcha  => true
  attribute :phone,     :validate => true

  attribute :vk,     :validate => true

  def headers
    {
      :subject => "ChinaDanceTeam",
      :to => "artem-vorobiov_pavlovich@mail.ru",
      :from => %("#{name}" <#{email}>)
    }
  end
end