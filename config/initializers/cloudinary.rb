Cloudinary.config do |config|
  config.cloud_name = Rails.application.credentials[Rails.env.to_sym][:cld][:cloud_name] 
  config.api_key = Rails.application.credentials[Rails.env.to_sym][:cld][:api_key]
  config.api_secret = Rails.application.credentials[Rails.env.to_sym][:cld][:api_secret] 
  config.secure = true
  config.cdn_subdomain = true
  config.enhance_image_tag =  Rails.application.credentials[Rails.env.to_sym][:cld][:enhance_image_tag] 
  config.static_file_support =  Rails.application.credentials[Rails.env.to_sym][:cld][:static_file_support] 
end