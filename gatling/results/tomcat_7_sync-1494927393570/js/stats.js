var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6375",
        "ok": "6375",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "987",
        "ok": "987",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1483",
        "ok": "1483",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1255",
        "ok": "1255",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "110",
        "ok": "110",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1284",
        "ok": "1284",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1332",
        "ok": "1332",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1401",
        "ok": "1401",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1434",
        "ok": "1434",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1903,
        "percentage": 30
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4472,
        "percentage": 70
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "182.143",
        "ok": "182.143",
        "ko": "-"
    }
},
contents: {
"req_get-helo-fceab": {
        type: "REQUEST",
        name: "get_helo",
path: "get_helo",
pathFormatted: "req_get-helo-fceab",
stats: {
    "name": "get_helo",
    "numberOfRequests": {
        "total": "6375",
        "ok": "6375",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "987",
        "ok": "987",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1483",
        "ok": "1483",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1255",
        "ok": "1255",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "110",
        "ok": "110",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1284",
        "ok": "1284",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1332",
        "ok": "1332",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1401",
        "ok": "1401",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1434",
        "ok": "1434",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1903,
        "percentage": 30
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 4472,
        "percentage": 70
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "182.143",
        "ok": "182.143",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
