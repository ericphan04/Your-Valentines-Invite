// ============================================================================
// Love Configuration - Personalize this file for your Valentine! 💕
// ============================================================================

/**
 * IMPORTANT: This is an EXAMPLE file to show you the structure.
 * 
 * For your actual configuration:
 * 1. Copy this file and rename it to: loveConfig.ts (without _example)
 * 2. Customize all the values with your personal information
 * 3. Make sure loveConfig.ts is in your .gitignore if keeping it private
 * 
 * OR simply edit the existing loveConfig.ts file directly.
 */

export interface Milestone {
    title: string;
    date: string;
    description: string;
}

export interface LoveConfig {
    yourName: string;
    partnerName: string;
    relationshipStart: string;
    valentineDate: string;
    heroHeadline: string;
    heroSubtext: string;
    photos?: string[];  // Optional for backward compatibility
    photoCount: number;
    milestones: Milestone[];
    yourEmail: string;
    emailSubject: string;
    emailBody: string;
    inviteTitle: string;
    inviteMessage: string;
    inviteDate: string;
    inviteTime: string;
    inviteLocation: string;
}

export const loveConfig: LoveConfig = {
    // === PERSONAL DETAILS ===
    // Replace with your actual names
    yourName: "Trung Hiếu",
    partnerName: "Thục Nhi",

    // === RELATIONSHIP START DATE ===
    // Set this to when your relationship began (Singapore timezone: +08:00)
    // Format: "YYYY-MM-DDTHH:MM:SS+08:00"
    relationshipStart: "2026-01-06T00:00:00+18:00",

    // === VALENTINE'S DATE ===
    valentineDate: "2026-02-14",

    // === HEADLINE AND INTRO ===
    heroHeadline: "Gửi Misa Yêu Dấu Của Anh",
    heroSubtext: "Một hành trình của chúng ta qua những khoảnh khắc bên nhau, trân trọng từng nụ cười, từng chuyến đi và từng nhịp đập con tim mà anh và em đã chia sẻ.",

    // === PHOTO GALLERY ===
    // List all your photos here with their exact filenames (including extension)
    // Photos must be in /public/photos/ folder
    photos: [
        "photo_1.png",
        "photo_2.png",
        "photo_3.png",
        "photo_4.png",
        "photo_5.png",
        "photo_6.png",
        "photo_7.png",
        "photo_8.png"
    ],
    // Legacy support (optional, can be removed if code is updated)
    photoCount: 8,

    // === TIMELINE MILESTONES ===
    // Add your relationship milestones here
    milestones: [
        {
            title: "Buổi Ăn Đầu Tiên",
            date: "06 tháng 1, 2026",
            description: "Ngày mà anhh chở em đi lấy bánh đó cũng là ngày chúng mình bắt đầu chuỗi =)). Dĩa bánh kẹp biến thành hàng giờ trò chuyện, và anh biết em thật đặc biệt, đã thật sự tan chảy..."
        },
        {
            title: "Lần ngồi tâm sự về bản thân của nhau",
            date: "10 tháng 1, 2026",
            description: "Lần đầu tiên mở lòng của chúng mình! Anh và em đã chia sẽ cho nhau nghe về bản thân, điều đối phương muốn: lúc đó bản thân anh đã lắng nghe em nói, thì cảm giác 'wow nhiều điểm chung vậy má!!' thiệt sự thấy mún tìm hiểu nghiêm túc."
        },
        {
            title: "Những study date cùng nhau",
            date: "13 tháng 1, 2026",
            description: "Vô số buổi tối với các cuộc họp riêng của mỗi đứa, mỗi người mỗi việc, mình thiệt sự tập trung luôn ấy, nhưng vẫn rấc là dui và hiệu quả 'cả hai đều WOWWWWW, e nói là : ê anhh ơi, mình studydate hiệu quả vãiii í'."
        },
        {
            title: "Tham gia Vào Xuân Bốn",
            date: "28 tháng 1, 2026",
            description: "Hôm đó là ngày anh nhìn thấy em làm việc với clb, căng thẳng, nghiêm, lo đủ kiểu, víp. Anh cũng pận em cũng vậy, may chụp được tấm léng, vui mà đúi nha Misa, tối đó anh đã xỉu nên mất trí nhớ rồi =))"
        },
        {
            title: "Tham gia vào Tình Nguyện",
            date: "31 tháng 1, 2026",
            description: "Buổi sáng hôm đó thiệc sự là tôi và Misa đã lơ nhau rất okela, nhưng mà =)) cũng chẳng lơ là mấy, má đem cái mũ cho để đỡ nắng cũng méo mang, bực vãi cut, may mà tối được bù mấy cái cũm đỡ hẹ hẹ, eyy ngủ qua đêm với nhau OMGGGG,may thay chìu nớ dề còn chụp được tấm kỉ niệm kekeke  "
        },
        {
            title: "Ship nước thơm",
            date: "25 tháng 1, 2026",
            description: "Ôi dồi ôi, Nhi ship ly nước thơm. Anh đã không lường trước đìu đó, mang cái quần đùi rồi hắn bần thì thôi nhé. Nhưng mà nước ngonn 10 điểm nha, +1000 điểm đáng iu"
        },
        {
            title: "Ngày anh bay Hải Phòng",
            date: "07 Tháng 2, 2026",
            description: "Cảm giác chia xa, xa nhau, đứt chuỗi, tôi thấy ánh mắt của chị ấy đượm bùn nhẹ tối hôm đó, và cả chiều hôm chở =)) 'Anh nghĩ vậy!!', được cái cưng anh chở anh ra sân bay kekeke"
        },
        {
            title: "Những buổi tối call",
            date: "Tháng 2, 2026",
            description: "Anh tưởng không được call mô, tại bữa anh hỏi mà e kêu: hongg má, cái anh tưởn thiệt =))), cũng chờ nhau mỗi tối để call quá đã rồiii"
        }
    ],

    // === EMAIL CONFIGURATION ===
    // For the "Send me your answer" button
    yourEmail: "phantrunghieudn2003@gmail.com", // Replace with your actual email
    emailSubject: "Câu Trả Lời Valentine Của Em 💐",
    emailBody: "Đồng ý! Em rất muốn trở thành Valentine của anh! 💕\n\nIuu anh mãi,\n",

    // === INVITE DETAILS ===
    inviteTitle: "Đi valentine muộn cùng anh nha?",
    inviteMessage: "Hicc anh xin lỗi đã hong đúng ngày lắm, dù muộn nhưng mà anh muốn đi cùng em hihi",
    inviteDate: "16 tháng 2, 2026",
    inviteTime: "6:30 Tối",
    inviteLocation: "Một bất ngờ lãng mạn đang chờ đón...",
};

export default loveConfig;
