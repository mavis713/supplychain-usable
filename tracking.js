// 初始化地图
function initMap() {
    // 创建地图实例
    const map = new AMap.Map('map', {
        zoom: 12,
        center: [116.404, 39.915]
    });
    
    // 添加控件
    map.addControl(new AMap.Scale());
    map.addControl(new AMap.ToolBar());
    
    return map;
}

// 绘制物流路线
function drawLogisticsRoute(map, points) {
    // 创建折线对象
    const path = points.map(point => new AMap.LngLat(point[0], point[1]));
    const polyline = new AMap.Polyline({
        path: path,
        strokeColor: "#00a8ff",
        strokeWeight: 4,
        strokeOpacity: 0.8
    });
    
    // 添加折线到地图
    map.add(polyline);
    
    // 添加起点和终点标记
    const startMarker = new AMap.Marker({
        position: new AMap.LngLat(points[0][0], points[0][1]),
        title: '起点'
    });
    
    const endMarker = new AMap.Marker({
        position: new AMap.LngLat(points[points.length-1][0], points[points.length-1][1]),
        title: '终点'
    });
    
    map.add([startMarker, endMarker]);
}

// 更新订单状态时间线
function updateStatusTimeline(statuses) {
    const timeline = document.querySelector('.status-timeline');
    timeline.innerHTML = '';
    
    statuses.forEach(status => {
        const statusPoint = document.createElement('div');
        statusPoint.className = `status-point ${status.active ? 'active' : ''}`;
        
        statusPoint.innerHTML = `
            <div class="point-icon">
                <i class="fas ${status.icon}"></i>
            </div>
            <div class="point-content">
                <h5>${status.title}</h5>
                <p>${status.time}</p>
                <p class="status-desc">${status.description}</p>
            </div>
        `;
        
        timeline.appendChild(statusPoint);
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化地图
    const map = initMap();
    
    // 模拟物流路线点位
    const logisticsPoints = [
        [116.404, 39.915], // 北京
        [117.190, 39.125], // 天津
        [118.796, 32.059]  // 南京
    ];
    
    // 绘制路线
    drawLogisticsRoute(map, logisticsPoints);
    
    // 模拟订单状态数据
    const orderStatuses = [
        {
            title: '订单创建',
            time: '2024-01-20 10:30',
            description: '订单已成功创建',
            icon: 'fa-file-alt',
            active: true
        },
        {
            title: '仓库处理',
            time: '2024-01-20 14:20',
            description: '商品已出库',
            icon: 'fa-warehouse',
            active: true
        },
        {
            title: '运输中',
            time: '2024-01-21 09:15',
            description: '货物正在运输',
            icon: 'fa-truck',
            active: true
        },
        {
            title: '即将送达',
            time: '2024-01-22 08:30',
            description: '预计今天送达',
            icon: 'fa-box',
            active: false
        }
    ];
    
    // 更新状态时间线
    updateStatusTimeline(orderStatuses);
}); 