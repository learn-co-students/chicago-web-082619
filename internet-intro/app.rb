class App
  def call(environment_hash)
    status_code = 200
    header = {}
    body = ['<h1>What up?</h1>'] # or {}

    return [status_code, header, body]
  end
end
