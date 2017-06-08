var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "625000",
        "ok": "585937",
        "ko": "39063"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "126"
    },
    "maxResponseTime": {
        "total": "1276",
        "ok": "1276",
        "ko": "640"
    },
    "meanResponseTime": {
        "total": "327",
        "ok": "331",
        "ko": "260"
    },
    "standardDeviation": {
        "total": "187",
        "ok": "190",
        "ko": "134"
    },
    "percentiles1": {
        "total": "357",
        "ok": "362",
        "ko": "211"
    },
    "percentiles2": {
        "total": "406",
        "ok": "408",
        "ko": "389"
    },
    "percentiles3": {
        "total": "653",
        "ok": "656",
        "ko": "500"
    },
    "percentiles4": {
        "total": "755",
        "ok": "756",
        "ko": "511"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 585738,
        "percentage": 94
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 198,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 39063,
        "percentage": 6
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "374.251",
        "ok": "350.86",
        "ko": "23.391"
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
        "ok": "585937",
        "ko": "39063"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "126"
    },
    "maxResponseTime": {
        "total": "1276",
        "ok": "1276",
        "ko": "640"
    },
    "meanResponseTime": {
        "total": "327",
        "ok": "331",
        "ko": "260"
    },
    "standardDeviation": {
        "total": "187",
        "ok": "190",
        "ko": "134"
    },
    "percentiles1": {
        "total": "357",
        "ok": "362",
        "ko": "211"
    },
    "percentiles2": {
        "total": "406",
        "ok": "408",
        "ko": "389"
    },
    "percentiles3": {
        "total": "653",
        "ok": "656",
        "ko": "500"
    },
    "percentiles4": {
        "total": "755",
        "ok": "756",
        "ko": "511"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 585738,
        "percentage": 94
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 198,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 39063,
        "percentage": 6
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "374.251",
        "ok": "350.86",
        "ko": "23.391"
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
