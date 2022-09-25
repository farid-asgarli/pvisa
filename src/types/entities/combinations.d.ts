declare namespace CombinationsType {
  type FilterResponse = {
    citizen_of: CountryType.Item;
    resident_of: CountryType.Item;
    travel_to: CountryType.Item;
    visa_types: VisaType.Base[];
  };
}
