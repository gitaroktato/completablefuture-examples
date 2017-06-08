var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "625000",
        "ok": "586123",
        "ko": "38877"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "37235",
        "ok": "35630",
        "ko": "37235"
    },
    "meanResponseTime": {
        "total": "38",
        "ok": "9",
        "ko": "478"
    },
    "standardDeviation": {
        "total": "519",
        "ok": "320",
        "ko": "1608"
    },
    "percentiles1": {
        "total": "4",
        "ok": "4",
        "ko": "389"
    },
    "percentiles2": {
        "total": "9",
        "ok": "8",
        "ko": "442"
    },
    "percentiles3": {
        "total": "300",
        "ok": "18",
        "ko": "848"
    },
    "percentiles4": {
        "total": "500",
        "ok": "36",
        "ko": "1080"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 586072,
        "percentage": 94
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 49,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 38877,
        "percentage": 6
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2090.301",
        "ok": "1960.278",
        "ko": "130.023"
    }
},
contents: {
"req_hello-flaky-syn-847fb": {
        type: "REQUEST",
        name: "hello_flaky_sync",
path: "hello_flaky_sync",
pathFormatted: "req_hello-flaky-syn-847fb",
stats: {
    "name": "hello_flaky_sync",
    "numberOfRequests": {
        "total": "625000",
        "ok": "586123",
        "ko": "38877"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "37235",
        "ok": "35630",
        "ko": "37235"
    },
    "meanResponseTime": {
        "total": "38",
        "ok": "9",
        "ko": "478"
    },
    "standardDeviation": {
        "total": "519",
        "ok": "320",
        "ko": "1608"
    },
    "percentiles1": {
        "total": "4",
        "ok": "4",
        "ko": "389"
    },
    "percentiles2": {
        "total": "9",
        "ok": "8",
        "ko": "442"
    },
    "percentiles3": {
        "total": "298",
        "ok": "18",
        "ko": "848"
    },
    "percentiles4": {
        "total": "503",
        "ok": "36",
        "ko": "1080"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 586072,
        "percentage": 94
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 49,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 38877,
        "percentage": 6
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2090.301",
        "ok": "1960.278",
        "ko": "130.023"
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
