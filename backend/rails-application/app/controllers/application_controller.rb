class ApplicationController < ActionController::API
    before_action :authenticate_user

    private def authenticate_user
        header = request.headers["Authorization"]
        header = header.split(" ").last if header
        decoded = JWT.decode(header, Rails.application.secrets.secret_key_base)[0]
        @current_user = User.find(decoded['id'])
    rescue
        render json: { error: 'Unauthorized'}, status: :unauthorized
    end
end
