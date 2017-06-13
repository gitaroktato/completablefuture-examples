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
        "total": "1686",
        "ok": "1686",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "40",
        "ok": "40",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "18",
        "ok": "18",
        "ko": "-"
    },
    "percentiles1": {
        "total": "37",
        "ok": "37",
        "ko": "-"
    },
    "percentiles2": {
        "total": "45",
        "ok": "45",
        "ko": "-"
    },
    "percentiles3": {
        "total": "58",
        "ok": "58",
        "ko": "-"
    },
    "percentiles4": {
        "total": "79",
        "ok": "79",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 624989,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 5,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 6,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2777.778",
        "ok": "2777.778",
        "ko": "-"
    }
},
contents: {
"req_hello-async-old-8e700": {
        type: "REQUEST",
        name: "hello_async_oldtimer",
path: "hello_async_oldtimer",
pathFormatted: "req_hello-async-old-8e700",
stats: {
    "name": "hello_async_oldtimer",
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
        "total": "1686",
        "ok": "1686",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "40",
        "ok": "40",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "18",
        "ok": "18",
        "ko": "-"
    },
    "percentiles1": {
        "total": "37",
        "ok": "37",
        "ko": "-"
    },
    "percentiles2": {
        "total": "45",
        "ok": "45",
        "ko": "-"
    },
    "percentiles3": {
        "total": "58",
        "ok": "58",
        "ko": "-"
    },
    "percentiles4": {
        "total": "79",
        "ok": "79",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 624989,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 5,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 6,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2777.778",
        "ok": "2777.778",
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
