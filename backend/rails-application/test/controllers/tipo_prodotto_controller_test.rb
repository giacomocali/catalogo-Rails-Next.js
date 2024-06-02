require "test_helper"

class TipoProdottoControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get tipo_prodotto_index_url
    assert_response :success
  end

  test "should get show" do
    get tipo_prodotto_show_url
    assert_response :success
  end

  test "should get create" do
    get tipo_prodotto_create_url
    assert_response :success
  end

  test "should get update" do
    get tipo_prodotto_update_url
    assert_response :success
  end

  test "should get destroy" do
    get tipo_prodotto_destroy_url
    assert_response :success
  end
end
