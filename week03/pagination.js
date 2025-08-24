const mockData = [
  { id: 1, name: "ร้านข้าวมันไก่บางรัก", menuCount: 8, category: "ไทย" },
  { id: 2, name: "ร้านชาบูหม้อไฟ", menuCount: 20, category: "ชาบู" },
  { id: 3, name: "ร้านอาหารญี่ปุ่นโซระ", menuCount: 14, category: "ญี่ปุ่น" },
  { id: 4, name: "ร้านหมูกระทะจัมโบ้", menuCount: 18, category: "ปิ้งย่าง" },
  { id: 5, name: "ร้านตำแซ่บเวอร์", menuCount: 10, category: "อีสาน" },
  { id: 6, name: "ร้านอาหารเกาหลีโอปป้า", menuCount: 16, category: "เกาหลี" },
  { id: 7, name: "ร้านคาเฟ่ดริปกาแฟ", menuCount: 7, category: "คาเฟ่" },
  { id: 8, name: "ร้านข้าวแกงปักษ์ใต้", menuCount: 12, category: "ใต้" },
  { id: 9, name: "ร้านก๋วยเตี๋ยวเรือราชดำเนิน", menuCount: 6, category: "ไทย" },
  { id: 10, name: "ร้านขนมจีนคุณย่า", menuCount: 9, category: "ไทย" },
  { id: 11, name: "ร้านซูชิซากุระ", menuCount: 13, category: "ญี่ปุ่น" },
  { id: 12, name: "ร้านอาหารเวียดนามนัม", menuCount: 11, category: "เวียดนาม" },
  { id: 13, name: "ร้านหมูทอดเจ๊จง", menuCount: 5, category: "ไทย" },
  { id: 14, name: "ร้านอาหารจีนเปาเปา", menuCount: 17, category: "จีน" },
  { id: 15, name: "ร้านส้มตำปูปลาร้า", menuCount: 8, category: "อีสาน" },
  { id: 16, name: "ร้านราเมงสไตล์ญี่ปุ่น", menuCount: 14, category: "ญี่ปุ่น" },
  { id: 17, name: "ร้านสเต๊กคุณพ่อ", menuCount: 10, category: "ตะวันตก" },
  { id: 18, name: "ร้านกาแฟโบราณ", menuCount: 6, category: "คาเฟ่" },
  { id: 19, name: "ร้านชานมไข่มุกหวานน้อย", menuCount: 7, category: "คาเฟ่" },
  { id: 20, name: "ร้านติ่มซำอาม่า", menuCount: 15, category: "จีน" },
  { id: 21, name: "ร้านข้าวต้มรอบดึก", menuCount: 9, category: "ไทย" },
  { id: 22, name: "ร้านแหนมเนืองญาติ", menuCount: 11, category: "เวียดนาม" },
  { id: 23, name: "ร้านอาหารมังสวิรัติ", menuCount: 10, category: "เจ" },
  { id: 24, name: "ร้านซูชิซูเปอร์", menuCount: 16, category: "ญี่ปุ่น" },
  { id: 25, name: "ร้านไก่ทอดเกาหลี", menuCount: 13, category: "เกาหลี" },
  { id: 26, name: "ร้านอาหารอินเดีย", menuCount: 12, category: "อินเดีย" },
  { id: 27, name: "ร้านขนมหวานแม่ยุพา", menuCount: 6, category: "ของหวาน" },
  { id: 28, name: "ร้านอาหารทะเลสด", menuCount: 18, category: "ทะเล" },
  { id: 29, name: "ร้านโจ๊กบางกอก", menuCount: 5, category: "ไทย" },
  { id: 30, name: "ร้านกะเพราถาด", menuCount: 9, category: "ไทย" },
  { id: 31, name: "ร้านอาหารเจล้วน", menuCount: 7, category: "เจ" },
  { id: 32, name: "ร้านคาเฟ่แมวเหมียว", menuCount: 8, category: "คาเฟ่" },
  { id: 33, name: "ร้านอาหารญี่ปุ่นคิคุ", menuCount: 15, category: "ญี่ปุ่น" },
  { id: 34, name: "ร้านเกาเหลาเนื้อตุ๋น", menuCount: 10, category: "ไทย" },
  { id: 35, name: "ร้านอาหารเม็กซิกัน", menuCount: 13, category: "เม็กซิกัน" },
  { id: 36, name: "ร้านเบอร์เกอร์โฮมเมด", menuCount: 11, category: "ตะวันตก" },
  { id: 37, name: "ร้านสเต๊กเนื้อวากิว", menuCount: 17, category: "ตะวันตก" },
  { id: 38, name: "ร้านคาเฟ่สายหวาน", menuCount: 6, category: "คาเฟ่" },
  { id: 39, name: "ร้านบุฟเฟ่ต์ชาบู", menuCount: 20, category: "ชาบู" },
  { id: 40, name: "ร้านปิ้งย่างโคเรีย", menuCount: 19, category: "ปิ้งย่าง" },
  { id: 41, name: "ร้านของหวานญี่ปุ่น", menuCount: 10, category: "ของหวาน" },
  { id: 42, name: "ร้านโซบะซาน", menuCount: 12, category: "ญี่ปุ่น" },
  { id: 43, name: "ร้านตำถาดสะท้านลิ้น", menuCount: 9, category: "อีสาน" },
  { id: 44, name: "ร้านบะหมี่ฮ่องกง", menuCount: 14, category: "จีน" },
  { id: 45, name: "ร้านอาหารฟิวชั่น", menuCount: 11, category: "ฟิวชั่น" },
  { id: 46, name: "ร้านข้าวกล่องแม่ทำ", menuCount: 7, category: "ไทย" },
  { id: 47, name: "ร้านอาหารฝรั่งเศส", menuCount: 13, category: "ยุโรป" },
  { id: 48, name: "ร้านแกงกะหรี่ญี่ปุ่น", menuCount: 8, category: "ญี่ปุ่น" },
  { id: 49, name: "ร้านอาหารมอญ", menuCount: 10, category: "ชาติพันธุ์" },
  { id: 50, name: "ร้านอาหารฟาร์มทูเทเบิล", menuCount: 9, category: "ออร์แกนิก" }
];

function filterRestaurants(data,field,operator,valueRaw){
    const value = isNaN(valueRaw) ? valueRaw : Number(valueRaw);
    const filter = data.filter(i => {
        const fieldValue = i[field]
        if (fieldValue === undefined) return false;

        switch (operator){
            case "==": return fieldValue == value;
            case ">=": return fieldValue >= value;
            case "<=": return fieldValue <= value;
            case "includes": return typeof fieldValue === "string" && fieldValue.includes(value);
            default: return false;
        }
    })
    return filter;
}

function displayPage(data,page,perpage){
    const start = (page - 1) * perpage;
    const end = start + perpage;
    const paginationItems = data.slice(start,end);
    return paginationItems;
}

function getTotalPages(data, perpage) {
    return Math.ceil(data.length / perpage);
}

function startPagination(itemsPerPage,currentPage,field,operator,value){
    const filterData = filterRestaurants(mockData,field,operator,value);
    if (filterData.length === 0) return false;
    return {
        totalPages: getTotalPages(filterData,itemsPerPage),
        data:displayPage(filterData, currentPage, itemsPerPage)
    };
}
console.log(startPagination(3,5,"menuCount",">=",5));
console.log(startPagination(3,1,"name","includes","ส้มตำ"));
