import React from 'react';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Giới thiệu về Hệ thống Đặt phòng Ký túc xá Đại học FPT</h1>
            <div className="mb-6">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Hệ thống đặt phòng ký túc xá Đại học FPT được thiết kế để hỗ trợ sinh viên trong việc tìm kiếm và đặt phòng nhanh chóng và thuận tiện. Chúng tôi cung cấp một nền tảng dễ sử dụng giúp sinh viên có thể chọn lựa phòng ở phù hợp với nhu cầu của mình.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Với giao diện thân thiện và thông tin chi tiết về các phòng, sinh viên có thể dễ dàng lựa chọn phòng phù hợp với yêu cầu của mình. Hệ thống của chúng tôi không chỉ đảm bảo tính chính xác trong thông tin đặt phòng mà còn giúp sinh viên tiết kiệm thời gian.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Chúng tôi cam kết cung cấp dịch vụ chất lượng cao và hỗ trợ tận tình để đảm bảo trải nghiệm của sinh viên tại ký túc xá trở nên thoải mái và tiện lợi nhất. Hãy tham gia cùng chúng tôi để khám phá không gian sống lý tưởng tại ký túc xá Đại học FPT!
                </p>
            </div>
            <div className="flex justify-center mt-8">
                <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-200">
                    Tìm hiểu thêm
                </button>
            </div>
        </div>
    );
}

export default About;
// const About = () => {
//     return (
//         <div>
//             About page
//         </div>
//     )
// }

// export default About