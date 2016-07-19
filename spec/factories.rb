FactoryGirl.define do
  factory :country do
    name "MyString"
    capital "MyString"
    region "MyString"
    population 1
  end
  factory :city do
    name "MyString"
    county_name "MyString"
    state_name "MyString"
    feat_class "MyString"
  end
end
