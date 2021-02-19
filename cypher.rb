def encrypt val
  des = OpenSSL::Cipher.new 'DES-ECB'
  des.encrypt
  des.padding = 1
  des.key = "awifi@np"
  update_value = des.update(val)
  up_final = update_value + des.final

  Base64.encode64(up_final).gsub(/\n/, "")
end