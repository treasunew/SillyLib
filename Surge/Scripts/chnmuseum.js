// Surge script to modify calendarTicketPoolsByDate in the response body
// Matches URLs containing /prod-api/basesetting/HallSetting/ingore/gainAllSystemConfig
// Sets status to 4 and ticketPool to 99 for entries after today=1, unless status is 0
// Adds hallTicketPoolVOS to each entry, updating currentDate and today in scheduleTicketPoolVOS

let body = $response.body;
let url = $request.url;

if (url.includes("/prod-api/basesetting/HallSetting/ingore/gainAllSystemConfig")) {
    try {
        let jsonBody = JSON.parse(body);
        if (jsonBody.data && jsonBody.data.calendarTicketPoolsByDate) {
            // Define the hallTicketPoolVOS template
            const hallTicketPoolVOS = [
                {
                    "name": "基本陈列展",
                    "images": "",
                    "imagesPc": "",
                    "content": "",
                    "ticketPool": -1,
                    "scheduleTicketPoolVOS": [
                        {
                            "certificateVOS": [
                                { "id": 1, "name": "身份证" },
                                { "id": 2, "name": "护照" },
                                { "id": 3, "name": "港澳居民来往内地通行证" },
                                { "id": 4, "name": "台湾居民来往大陆通行证" },
                                { "id": 6, "name": "外国人永久居留身份证" },
                                { "id": 7, "name": "港澳台居民居住证" },
                                { "id": 88, "name": "港澳居民来往内地通行证（非中国籍）" }
                            ],
                            "beginTime": "09:00",
                            "saleMode": 1,
                            "hallTicketPoolVOS": null,
                            "address": null,
                            "hallId": 1,
                            "filmPic": null,
                            "scheduleTicketPoolVOS": null,
                            "description": null,
                            "seasonType": null,
                            "currentDate": "2025-07-16",
                            "today": 0,
                            "scheduleName": "09:00-11:00",
                            "filmPrice": null,
                            "ticketPool": -1,
                            "endTime": "11:00",
                            "imagesPc": null,
                            "hallScheduleId": 1,
                            "hallType": 4,
                            "openPerson": 1,
                            "name": "基本陈列展",
                            "ruleContent": null,
                            "timeRange": "09:00-11:00",
                            "status": 4,
                            "images": null,
                            "video": null,
                            "content": null,
                            "filmLength": null,
                            "closeContent": null,
                            "tips": null,
                            "cinemaTime": null,
                            "orderIntroduction": null,
                            "chooseMode": null
                        },
                        {
                            "certificateVOS": [
                                { "id": 1, "name": "身份证" },
                                { "id": 2, "name": "护照" },
                                { "id": 3, "name": "港澳居民来往内地通行证" },
                                { "id": 4, "name": "台湾居民来往大陆通行证" },
                                { "id": 6, "name": "外国人永久居留身份证" },
                                { "id": 7, "name": "港澳台居民居住证" },
                                { "id": 88, "name": "港澳居民来往内地通行证（非中国籍）" }
                            ],
                            "beginTime": "11:00",
                            "saleMode": 1,
                            "hallTicketPoolVOS": null,
                            "address": null,
                            "hallId": 1,
                            "filmPic": null,
                            "scheduleTicketPoolVOS": null,
                            "description": null,
                            "seasonType": null,
                            "currentDate": "2025-07-16",
                            "today": 0,
                            "scheduleName": "11:00-13:30",
                            "filmPrice": null,
                            "ticketPool": -1,
                            "endTime": "13:30",
                            "imagesPc": null,
                            "hallScheduleId": 2,
                            "hallType": 4,
                            "openPerson": 1,
                            "name": "基本陈列展",
                            "ruleContent": null,
                            "timeRange": "11:00-13:30",
                            "status": 4,
                            "images": null,
                            "video": null,
                            "content": null,
                            "filmLength": null,
                            "closeContent": null,
                            "tips": null,
                            "cinemaTime": null,
                            "orderIntroduction": null,
                            "chooseMode": null
                        },
                        {
                            "certificateVOS": [
                                { "id": 1, "name": "身份证" },
                                { "id": 2, "name": "护照" },
                                { "id": 3, "name": "港澳居民来往内地通行证" },
                                { "id": 4, "name": "台湾居民来往大陆通行证" },
                                { "id": 6, "name": "外国人永久居留身份证" },
                                { "id": 7, "name": "港澳台居民居住证" },
                                { "id": 88, "name": "港澳居民来往内地通行证（非中国籍）" }
                            ],
                            "beginTime": "13:30",
                            "saleMode": 1,
                            "hallTicketPoolVOS": null,
                            "address": null,
                            "hallId": 1,
                            "filmPic": null,
                            "scheduleTicketPoolVOS": null,
                            "description": null,
                            "seasonType": null,
                            "currentDate": "2025-07-16",
                            "today": 0,
                            "scheduleName": "13:30-16:00",
                            "filmPrice": null,
                            "ticketPool": -1,
                            "endTime": "16:00",
                            "imagesPc": null,
                            "hallScheduleId": 3,
                            "hallType": 4,
                            "openPerson": 1,
                            "name": "基本陈列展",
                            "ruleContent": null,
                            "timeRange": "13:30-16:00",
                            "status": 4,
                            "images": null,
                            "video": null,
                            "content": null,
                            "filmLength": null,
                            "closeContent": null,
                            "tips": null,
                            "cinemaTime": null,
                            "orderIntroduction": null,
                            "chooseMode": null
                        }
                    ],
                    "ruleContent": "<p>暂无余票，无法预约</p>",
                    "closeContent": "<p>展览闭馆，无法预约</p>",
                    "seasonType": null,
                    "orderIntroduction": null,
                    "tips": null,
                    "openPerson": 1,
                    "today": 0,
                    "saleMode": 1,
                    "hallType": 4,
                    "currentDate": "2025-07-16",
                    "hallId": 1,
                    "status": 4,
                    "hallTicketPoolVOS": null
                },
                {
                    "name": "“美的多元——古希腊的艺术与生活”特展",
                    "images": "[]",
                    "imagesPc": null,
                    "content": null,
                    "ticketPool": -1,
                    "scheduleTicketPoolVOS": [
                        {
                            "certificateVOS": [
                                { "id": 1, "name": "身份证" },
                                { "id": 2, "name": "护照" },
                                { "id": 3, "name": "港澳居民来往内地通行证" },
                                { "id": 4, "name": "台湾居民来往大陆通行证" },
                                { "id": 6, "name": "外国人永久居留身份证" },
                                { "id": 7, "name": "港澳台居民居住证" },
                                { "id": 88, "name": "港澳居民来往内地通行证（非中国籍）" }
                            ],
                            "beginTime": "09:00",
                            "saleMode": 1,
                            "hallTicketPoolVOS": null,
                            "address": null,
                            "hallId": 539,
                            "filmPic": null,
                            "scheduleTicketPoolVOS": null,
                            "description": null,
                            "seasonType": null,
                            "currentDate": "2025-07-16",
                            "today": 0,
                            "scheduleName": "09:00-16:00",
                            "filmPrice": null,
                            "ticketPool": -1,
                            "endTime": "16:00",
                            "imagesPc": null,
                            "hallScheduleId": 914,
                            "hallType": 4,
                            "openPerson": 1,
                            "name": "“美的多元——古希腊的艺术与生活”特展",
                            "ruleContent": null,
                            "timeRange": "09:00-16:00",
                            "status": 4,
                            "images": null,
                            "video": null,
                            "content": null,
                            "filmLength": null,
                            "closeContent": null,
                            "tips": null,
                            "cinemaTime": null,
                            "orderIntroduction": null,
                            "chooseMode": null
                        }
                    ],
                    "ruleContent": "<p>因受疫情影响，该场馆暂时停止售票，敬请谅解</p>",
                    "closeContent": "<p>因受疫情影响，该场馆暂时停止向观众开放，敬请谅解</p>",
                    "seasonType": null,
                    "orderIntroduction": null,
                    "tips": null,
                    "openPerson": 1,
                    "today": 0,
                    "saleMode": 1,
                    "hallType": 4,
                    "currentDate": "2025-07-16",
                    "hallId": 539,
                    "status": 4,
                    "hallTicketPoolVOS": null
                }
            ];

            let foundToday = false;
            jsonBody.data.calendarTicketPoolsByDate = jsonBody.data.calendarTicketPoolsByDate.map(item => {
                // Create a deep copy of hallTicketPoolVOS to avoid mutating the template
                let updatedHallTicketPoolVOS = JSON.parse(JSON.stringify(hallTicketPoolVOS));
                // Update currentDate and today in each hallTicketPoolVOS and its scheduleTicketPoolVOS
                updatedHallTicketPoolVOS.forEach(hall => {
                    hall.currentDate = item.currentDate;
                    hall.today = item.today;
                    hall.scheduleTicketPoolVOS.forEach(schedule => {
                        schedule.currentDate = item.currentDate;
                        schedule.today = item.today;
                    });
                });
                // Assign the updated hallTicketPoolVOS to the item
                item.hallTicketPoolVOS = updatedHallTicketPoolVOS;

                // Apply status and ticketPool modifications after today=1, unless status is 0
                if (foundToday && item.status !== 0 && item.status != -1) {
                    item.status = 4; // Set status to 4 for entries after today=1, unless status is 0
                    //item.ticketPool = 100; // Set ticketPool to 100 for entries after today=1, unless status is 0
                }
                if (item.today === 1) {
                    foundToday = true; // Mark today=1 but do not modify this entry
                }
                return item;
            });
            body = JSON.stringify(jsonBody);
        }
    } catch (error) {
        console.log("Error parsing or modifying JSON: " + error);
    }
}

$done({ body });