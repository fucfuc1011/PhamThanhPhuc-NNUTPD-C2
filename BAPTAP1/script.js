// --- DỮ LIỆU & CONSTRUCTOR (TOÀN CỤC) ---
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

let products = [
    new Product(1, "iPhone 15 Pro", 1200, 10, "Electronics", true),
    new Product(2, "Galaxy S24 Ultra", 1100, 5, "Electronics", true),
    new Product(3, "Mech Keyboard", 80, 0, "Accessories", false),
    new Product(4, "Gaming Mouse", 25, 20, "Accessories", true),
    new Product(5, "Type-C Cable", 15, 50, "Accessories", true)
];

// --- HÀM HỖ TRỢ IN RA MÀN HÌNH (HELPER) ---
function logToScreen(title, data) {
    const outputDiv = document.getElementById('console-output');
    
    // Tạo phần tử hiển thị mới
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    
    // Xử lý dữ liệu để hiển thị đẹp hơn
    let content = '';
    if (typeof data === 'object') {
        content = JSON.stringify(data, null, 2); // Format JSON đẹp
    } else {
        content = data;
    }

    entry.innerHTML = `
        <div class="log-title">➜ ${title}</div>
        <div class="log-content">${content}</div>
    `;

    // Thêm vào màn hình và cuộn xuống dưới cùng
    outputDiv.appendChild(entry);
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

function clearConsole() {
    const outputDiv = document.getElementById('console-output');
    outputDiv.innerHTML = `
        <div class="terminal-header">
            <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
        </div>
        <div style="color: #8b949e; font-style: italic;">// Màn hình đã được xóa sạch. Sẵn sàng nhận lệnh...</div><br>
    `;
}

// --- CÁC HÀM XỬ LÝ SỰ KIỆN (ONCLICK) ---

function runQ1_2() {
    logToScreen("Câu 1 & 2: Khởi tạo danh sách sản phẩm", products);
}

function runQ3() {
    const result = products.map(p => ({ name: p.name, price: p.price }));
    logToScreen("Câu 3: Mảng mới (Name & Price)", result);
}

function runQ4() {
    const result = products.filter(p => p.quantity > 0);
    logToScreen("Câu 4: Các sản phẩm còn hàng (Quantity > 0)", result);
}

function runQ5() {
    const hasExpensive = products.some(p => p.price > 30);
    logToScreen("Câu 5: Có sản phẩm giá > 30 không?", hasExpensive ? "YES (True)" : "NO (False)");
}

function runQ6() {
    const accessories = products.filter(p => p.category === "Accessories");
    const allAvailable = accessories.every(p => p.isAvailable === true);
    
    let msg = `Danh sách Accessories: ${JSON.stringify(accessories.map(a => a.name))}\n`;
    msg += `Kết quả kiểm tra (Tất cả đang bán?): ${allAvailable}`;
    
    logToScreen("Câu 6: Kiểm tra Accessories", msg);
}

function runQ7() {
    const total = products.reduce((sum, p) => sum + (p.price * p.quantity), 0);
    // Format tiền tệ cho đẹp
    const formattedTotal = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total);
    logToScreen("Câu 7: Tổng giá trị kho hàng", formattedTotal);
}

function runQ8() {
    let outputText = "";
    for (const p of products) {
        outputText += `• [${p.name}] - Danh mục: ${p.category} - Trạng thái: ${p.isAvailable}\n`;
    }
    logToScreen("Câu 8: Duyệt mảng bằng For...of", outputText);
}

function runQ9() {
    // Demo trên sản phẩm đầu tiên
    if (products.length === 0) return;
    const sample = products[0];
    let outputText = `Đang duyệt object: ${sample.name}\n--------------------------\n`;
    
    for (const key in sample) {
        outputText += `Key: ${key.padEnd(12)} | Value: ${sample[key]}\n`;
    }
    logToScreen("Câu 9: Duyệt thuộc tính bằng For...in", outputText);
}

function runQ10() {
    const result = products
        .filter(p => p.isAvailable && p.quantity > 0)
        .map(p => p.name);
    logToScreen("Câu 10: Tên SP đang bán & còn hàng", result);
}