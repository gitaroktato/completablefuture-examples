var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "625000",
        "ok": "625000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "25",
        "ok": "25",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4262",
        "ok": "4262",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1041",
        "ok": "1041",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "983",
        "ok": "983",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1031",
        "ok": "1031",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1724",
        "ok": "1724",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3113",
        "ok": "3113",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3548",
        "ok": "3548",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 307071,
        "percentage": 49
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 11849,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 306080,
        "percentage": 49
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "118.282",
        "ok": "118.282",
        "ko": "-"
    }
},
contents: {
"req_hello-async-708fb": {
        type: "REQUEST",
        name: "hello_async",
path: "hello_async",
pathFormatted: "req_hello-async-708fb",
stats: {
    "name": "hello_async",
    "numberOfRequests": {
        "total": "625000",
        "ok": "625000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "25",
        "ok": "25",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4262",
        "ok": "4262",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1041",
        "ok": "1041",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "983",
        "ok": "983",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1031",
        "ok": "1031",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1724",
        "ok": "1724",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3113",
        "ok": "3113",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3548",
        "ok": "3548",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 307071,
        "percentage": 49
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 11849,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 306080,
        "percentage": 49
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "118.282",
        "ok": "118.282",
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
