namespace DMS_API.Models.Domain
{
    public class Service
    {
        public Guid Id { get; set; }
        public string ServiceName { get; set; }
        public float Price { get; set; }
        public string Description { get; set; }


        //Navigation properties
        public ICollection<BookingService> BookingServices { get; set; }
    }
}
