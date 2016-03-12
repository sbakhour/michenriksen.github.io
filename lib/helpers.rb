require "base64"

include Nanoc::Helpers::LinkTo
include Nanoc::Helpers::Blogging
include Nanoc::Helpers::Rendering
include Nanoc::Helpers::XMLSitemap

def pretty_publication_date(post)
  attribute_to_time(post[:created_at]).strftime("%B %d, %Y")
end

def obfuscate_email(email)
  Base64.encode64(email).reverse
end
