var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "625000",
        "ok": "585947",
        "ko": "39053"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "125"
    },
    "maxResponseTime": {
        "total": "1730",
        "ok": "1730",
        "ko": "853"
    },
    "meanResponseTime": {
        "total": "31",
        "ok": "22",
        "ko": "152"
    },
    "standardDeviation": {
        "total": "38",
        "ok": "22",
        "ko": "23"
    },
    "percentiles1": {
        "total": "18",
        "ok": "17",
        "ko": "145"
    },
    "percentiles2": {
        "total": "33",
        "ok": "29",
        "ko": "159"
    },
    "percentiles3": {
        "total": "137",
        "ok": "61",
        "ko": "194"
    },
    "percentiles4": {
        "total": "170",
        "ok": "98",
        "ko": "235"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 585936,
        "percentage": 94
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 8,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 39053,
        "percentage": 6
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3342.246",
        "ok": "3133.406",
        "ko": "208.84"
    }
},
contents: {
"req_hello-flaky-asy-6d5eb": {
        type: "REQUEST",
        name: "hello_flaky_async",
path: "hello_flaky_async",
pathFormatted: "req_hello-flaky-asy-6d5eb",
stats: {
    "name": "hello_flaky_async",
    "numberOfRequests": {
        "total": "625000",
        "ok": "585947",
        "ko": "39053"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "125"
    },
    "maxResponseTime": {
        "total": "1730",
        "ok": "1730",
        "ko": "853"
    },
    "meanResponseTime": {
        "total": "31",
        "ok": "22",
        "ko": "152"
    },
    "standardDeviation": {
        "total": "38",
        "ok": "22",
        "ko": "23"
    },
    "percentiles1": {
        "total": "18",
        "ok": "17",
        "ko": "145"
    },
    "percentiles2": {
        "total": "33",
        "ok": "29",
        "ko": "159"
    },
    "percentiles3": {
        "total": "137",
        "ok": "61",
        "ko": "194"
    },
    "percentiles4": {
        "total": "170",
        "ok": "98",
        "ko": "235"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 585936,
        "percentage": 94
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 8,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 39053,
        "percentage": 6
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3342.246",
        "ok": "3133.406",
        "ko": "208.84"
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
