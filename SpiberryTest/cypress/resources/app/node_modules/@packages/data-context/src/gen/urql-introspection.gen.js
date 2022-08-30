"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urqlSchema = void 0;
/* eslint-disable */
exports.urqlSchema = {
    "__schema": {
        "queryType": {
            "name": "Query"
        },
        "mutationType": {
            "name": "Mutation"
        },
        "subscriptionType": {
            "name": "Subscription"
        },
        "types": [
            {
                "kind": "OBJECT",
                "name": "AuthState",
                "fields": [
                    {
                        "name": "browserOpened",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "message",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "name",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "Browser",
                "fields": [
                    {
                        "name": "channel",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "disabled",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "displayName",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "family",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "isFocusSupported",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "isSelected",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "isVersionSupported",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "majorVersion",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "name",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "path",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "version",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "warning",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    }
                ],
                "interfaces": [
                    {
                        "kind": "INTERFACE",
                        "name": "Node"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "CachedUser",
                "fields": [
                    {
                        "name": "email",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "fullName",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": [
                    {
                        "kind": "INTERFACE",
                        "name": "Node"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "CloudLatestRunUpdateSpecData",
                "fields": [
                    {
                        "name": "mostRecentUpdate",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "pollingInterval",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "CloudOrganization",
                "fields": [
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "name",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "projects",
                        "type": {
                            "kind": "OBJECT",
                            "name": "CloudProjectConnection",
                            "ofType": null
                        },
                        "args": [
                            {
                                "name": "after",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Any"
                                }
                            },
                            {
                                "name": "before",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Any"
                                }
                            },
                            {
                                "name": "first",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Any"
                                }
                            },
                            {
                                "name": "last",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Any"
                                }
                            }
                        ]
                    }
                ],
                "interfaces": [
                    {
                        "kind": "INTERFACE",
                        "name": "Node"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "CloudOrganizationConnection",
                "fields": [
                    {
                        "name": "edges",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "LIST",
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "CloudOrganizationEdge",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "nodes",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "LIST",
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "CloudOrganization",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "pageInfo",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "PageInfo",
                                "ofType": null
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "CloudOrganizationEdge",
                "fields": [
                    {
                        "name": "cursor",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "node",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "CloudOrganization",
                                "ofType": null
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "CloudProject",
                "fields": [
                    {
                        "name": "cloudProjectSettingsUrl",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "cloudProjectUrl",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "latestRun",
                        "type": {
                            "kind": "OBJECT",
                            "name": "CloudRun",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "name",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "organization",
                        "type": {
                            "kind": "OBJECT",
                            "name": "CloudOrganization",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "recordKeys",
                        "type": {
                            "kind": "LIST",
                            "ofType": {
                                "kind": "NON_NULL",
                                "ofType": {
                                    "kind": "OBJECT",
                                    "name": "CloudRecordKey",
                                    "ofType": null
                                }
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "runs",
                        "type": {
                            "kind": "OBJECT",
                            "name": "CloudRunConnection",
                            "ofType": null
                        },
                        "args": [
                            {
                                "name": "after",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Any"
                                }
                            },
                            {
                                "name": "before",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Any"
                                }
                            },
                            {
                                "name": "cypressVersion",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Any"
                                }
                            },
                            {
                                "name": "first",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Any"
                                }
                            },
                            {
                                "name": "last",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Any"
                                }
                            },
                            {
                                "name": "status",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Any"
                                }
                            }
                        ]
                    },
                    {
                        "name": "slug",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": [
                    {
                        "kind": "INTERFACE",
                        "name": "Node"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "CloudProjectConnection",
                "fields": [
                    {
                        "name": "edges",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "LIST",
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "CloudProjectEdge",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "nodes",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "LIST",
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "CloudProject",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "pageInfo",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "PageInfo",
                                "ofType": null
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "CloudProjectEdge",
                "fields": [
                    {
                        "name": "cursor",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "node",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "CloudProject",
                                "ofType": null
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "CloudProjectNotFound",
                "fields": [
                    {
                        "name": "message",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "UNION",
                "name": "CloudProjectResult",
                "possibleTypes": [
                    {
                        "kind": "OBJECT",
                        "name": "CloudProject"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "CloudProjectNotFound"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "CloudProjectUnauthorized"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "CloudProjectSpec",
                "fields": [
                    {
                        "name": "averageDuration",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": [
                            {
                                "name": "fromBranch",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "isConsideredFlaky",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": [
                            {
                                "name": "fromBranch",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "retrievedAt",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "specPath",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "specRuns",
                        "type": {
                            "kind": "OBJECT",
                            "name": "CloudSpecRunConnection",
                            "ofType": null
                        },
                        "args": [
                            {
                                "name": "after",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Any"
                                }
                            },
                            {
                                "name": "before",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Any"
                                }
                            },
                            {
                                "name": "first",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Any"
                                }
                            },
                            {
                                "name": "fromBranch",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            },
                            {
                                "name": "last",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Any"
                                }
                            }
                        ]
                    }
                ],
                "interfaces": [
                    {
                        "kind": "INTERFACE",
                        "name": "Node"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "CloudProjectSpecNotFound",
                "fields": [
                    {
                        "name": "message",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "retrievedAt",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "UNION",
                "name": "CloudProjectSpecResult",
                "possibleTypes": [
                    {
                        "kind": "OBJECT",
                        "name": "CloudProjectSpec"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "CloudProjectSpecNotFound"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "CloudProjectUnauthorized"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "CloudProjectUnauthorized",
                "fields": [
                    {
                        "name": "hasRequestedAccess",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "message",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "CloudRecordKey",
                "fields": [
                    {
                        "name": "createdAt",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "key",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "lastUsedAt",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    }
                ],
                "interfaces": [
                    {
                        "kind": "INTERFACE",
                        "name": "Node"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "CloudRun",
                "fields": [
                    {
                        "name": "commitInfo",
                        "type": {
                            "kind": "OBJECT",
                            "name": "CloudRunCommitInfo",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "completedAt",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "createdAt",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "runNumber",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "status",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "tags",
                        "type": {
                            "kind": "LIST",
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "CloudRunTag",
                                "ofType": null
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "totalDuration",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "totalFailed",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "totalFlakyTests",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "totalPassed",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "totalPending",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "totalRunning",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "totalSkipped",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "totalTests",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "url",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    }
                ],
                "interfaces": [
                    {
                        "kind": "INTERFACE",
                        "name": "Node"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "CloudRunCommitInfo",
                "fields": [
                    {
                        "name": "authorAvatar",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "authorEmail",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "authorName",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "branch",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "branchUrl",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "message",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": [
                            {
                                "name": "truncate",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Any"
                                }
                            }
                        ]
                    },
                    {
                        "name": "sha",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "summary",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "url",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "CloudRunConnection",
                "fields": [
                    {
                        "name": "edges",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "LIST",
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "CloudRunEdge",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "nodes",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "LIST",
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "CloudRun",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "pageInfo",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "PageInfo",
                                "ofType": null
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "CloudRunEdge",
                "fields": [
                    {
                        "name": "cursor",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "node",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "CloudRun",
                                "ofType": null
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "CloudRunTag",
                "fields": [
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "name",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    }
                ],
                "interfaces": [
                    {
                        "kind": "INTERFACE",
                        "name": "Node"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "CloudSpecRun",
                "fields": [
                    {
                        "name": "completedAt",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "createdAt",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "groupCount",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "runNumber",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "specDuration",
                        "type": {
                            "kind": "OBJECT",
                            "name": "SpecDataAggregate",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "status",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "testsFailed",
                        "type": {
                            "kind": "OBJECT",
                            "name": "SpecDataAggregate",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "testsPassed",
                        "type": {
                            "kind": "OBJECT",
                            "name": "SpecDataAggregate",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "testsPending",
                        "type": {
                            "kind": "OBJECT",
                            "name": "SpecDataAggregate",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "testsSkipped",
                        "type": {
                            "kind": "OBJECT",
                            "name": "SpecDataAggregate",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "url",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    }
                ],
                "interfaces": [
                    {
                        "kind": "INTERFACE",
                        "name": "Node"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "CloudSpecRunConnection",
                "fields": [
                    {
                        "name": "edges",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "LIST",
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "CloudSpecRunEdge",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "nodes",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "LIST",
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "CloudSpecRun",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "pageInfo",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "PageInfo",
                                "ofType": null
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "CloudSpecRunEdge",
                "fields": [
                    {
                        "name": "cursor",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "node",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "CloudSpecRun",
                                "ofType": null
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "CloudUser",
                "fields": [
                    {
                        "name": "cloudOrganizationsUrl",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "cloudProfileUrl",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "createCloudOrganizationUrl",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "email",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "fullName",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "organizations",
                        "type": {
                            "kind": "OBJECT",
                            "name": "CloudOrganizationConnection",
                            "ofType": null
                        },
                        "args": [
                            {
                                "name": "after",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Any"
                                }
                            },
                            {
                                "name": "before",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Any"
                                }
                            },
                            {
                                "name": "first",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Any"
                                }
                            },
                            {
                                "name": "last",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Any"
                                }
                            }
                        ]
                    },
                    {
                        "name": "userIsViewer",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": [
                    {
                        "kind": "INTERFACE",
                        "name": "Node"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "CodeFrame",
                "fields": [
                    {
                        "name": "codeBlock",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "column",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "file",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "FileParts",
                                "ofType": null
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "line",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "CurrentProject",
                "fields": [
                    {
                        "name": "activeBrowser",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Browser",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "branch",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "browserStatus",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "browsers",
                        "type": {
                            "kind": "LIST",
                            "ofType": {
                                "kind": "NON_NULL",
                                "ofType": {
                                    "kind": "OBJECT",
                                    "name": "Browser",
                                    "ofType": null
                                }
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "cloudProject",
                        "type": {
                            "kind": "UNION",
                            "name": "CloudProjectResult",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "cloudProjectRemote",
                        "type": {
                            "kind": "OBJECT",
                            "name": "RemoteFetchableCloudProjectResult",
                            "ofType": null
                        },
                        "args": [
                            {
                                "name": "name",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "codeGenCandidates",
                        "type": {
                            "kind": "LIST",
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "FileParts",
                                "ofType": null
                            }
                        },
                        "args": [
                            {
                                "name": "glob",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "config",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "configFile",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "configFileAbsolutePath",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "currentTestingType",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "defaultSpecFileName",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "fileExtensionToUse",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "hasValidConfigFile",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "isCTConfigured",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "isDefaultSpecPattern",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "isE2EConfigured",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "isFullConfigReady",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "isLoadingConfigFile",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "isLoadingNodeEvents",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "isUsingTypeScript",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "needsLegacyConfigMigration",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "packageManager",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "preferences",
                        "type": {
                            "kind": "OBJECT",
                            "name": "ProjectPreferences",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "projectId",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "projectRoot",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "savedState",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "serveConfig",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "specs",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "LIST",
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "Spec",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "title",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": [
                    {
                        "kind": "INTERFACE",
                        "name": "Node"
                    },
                    {
                        "kind": "INTERFACE",
                        "name": "ProjectLike"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "DevState",
                "fields": [
                    {
                        "name": "needsRelaunch",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "state",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "Editor",
                "fields": [
                    {
                        "name": "binary",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "name",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "ErrorWrapper",
                "fields": [
                    {
                        "name": "codeFrame",
                        "type": {
                            "kind": "OBJECT",
                            "name": "CodeFrame",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "errorMessage",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "errorName",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "errorStack",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "errorType",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "isUserCodeError",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "title",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "FileParts",
                "fields": [
                    {
                        "name": "absolute",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "baseName",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "column",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "contents",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "fileExtension",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "fileName",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "line",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "name",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "relative",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": [
                    {
                        "kind": "INTERFACE",
                        "name": "Node"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "GenerateSpecResponse",
                "fields": [
                    {
                        "name": "currentProject",
                        "type": {
                            "kind": "OBJECT",
                            "name": "CurrentProject",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "generatedSpecResult",
                        "type": {
                            "kind": "UNION",
                            "name": "GeneratedSpecResult",
                            "ofType": null
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "GeneratedSpecError",
                "fields": [
                    {
                        "name": "erroredCodegenCandidate",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "fileName",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "UNION",
                "name": "GeneratedSpecResult",
                "possibleTypes": [
                    {
                        "kind": "OBJECT",
                        "name": "GeneratedSpecError"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "ScaffoldedFile"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "GitInfo",
                "fields": [
                    {
                        "name": "author",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "lastModifiedHumanReadable",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "lastModifiedTimestamp",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "shortHash",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "statusType",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "subject",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "GlobalProject",
                "fields": [
                    {
                        "name": "cloudProjectRemote",
                        "type": {
                            "kind": "OBJECT",
                            "name": "RemoteFetchableCloudProjectResult",
                            "ofType": null
                        },
                        "args": [
                            {
                                "name": "name",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "projectId",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "projectRoot",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "title",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": [
                    {
                        "kind": "INTERFACE",
                        "name": "Node"
                    },
                    {
                        "kind": "INTERFACE",
                        "name": "ProjectLike"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "LocalSettings",
                "fields": [
                    {
                        "name": "availableEditors",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "LIST",
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "Editor",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "preferences",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "LocalSettingsPreferences",
                                "ofType": null
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "LocalSettingsPreferences",
                "fields": [
                    {
                        "name": "autoScrollingEnabled",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "isSideNavigationOpen",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "isSpecsListOpen",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "preferredEditorBinary",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "proxyBypass",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "proxyServer",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "reporterWidth",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "specListWidth",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "ManualMigration",
                "fields": [
                    {
                        "name": "completed",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "files",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "LIST",
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "ManualMigrationFile",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": [
                    {
                        "kind": "INTERFACE",
                        "name": "Node"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "ManualMigrationFile",
                "fields": [
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "moved",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "relative",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": [
                    {
                        "kind": "INTERFACE",
                        "name": "Node"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "Migration",
                "fields": [
                    {
                        "name": "componentFolder",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "configAfterCode",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "configBeforeCode",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "configFileNameAfter",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "configFileNameBefore",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "filteredSteps",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "LIST",
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "MigrationStep",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "hasComponentTesting",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "hasCustomComponentFolder",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "hasCustomComponentTestFiles",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "hasCustomIntegrationFolder",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "hasCustomIntegrationTestFiles",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "integrationFolder",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "isUsingTypeScript",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "manualFiles",
                        "type": {
                            "kind": "OBJECT",
                            "name": "ManualMigration",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "shouldMigratePreExtension",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "specFiles",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "LIST",
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "MigrationFile",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "supportFiles",
                        "type": {
                            "kind": "OBJECT",
                            "name": "MigrationFile",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "videoEmbedHtml",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "MigrationFile",
                "fields": [
                    {
                        "name": "after",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "MigrationFileData",
                                "ofType": null
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "before",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "MigrationFileData",
                                "ofType": null
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "testingType",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "MigrationFileData",
                "fields": [
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "parts",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "LIST",
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "MigrationFilePart",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "relative",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": [
                    {
                        "kind": "INTERFACE",
                        "name": "Node"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "MigrationFilePart",
                "fields": [
                    {
                        "name": "group",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "highlight",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "text",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": [
                    {
                        "kind": "INTERFACE",
                        "name": "Node"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "MigrationRegexp",
                "fields": [
                    {
                        "name": "afterComponent",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "afterE2E",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "beforeComponent",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "beforeE2E",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "MigrationStep",
                "fields": [
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "index",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "isCompleted",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "isCurrentStep",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "name",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": [
                    {
                        "kind": "INTERFACE",
                        "name": "Node"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "Mutation",
                "fields": [
                    {
                        "name": "_clearCloudCache",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "_cloudCacheInvalidate",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": [
                            {
                                "name": "args",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Any"
                                }
                            }
                        ]
                    },
                    {
                        "name": "_showUrqlCache",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "addProject",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Query",
                            "ofType": null
                        },
                        "args": [
                            {
                                "name": "open",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Any"
                                }
                            },
                            {
                                "name": "path",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Any"
                                }
                            }
                        ]
                    },
                    {
                        "name": "clearCurrentProject",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Query",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "clearCurrentTestingType",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Query",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "closeBrowser",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "cloudProjectCreate",
                        "type": {
                            "kind": "OBJECT",
                            "name": "CloudProject",
                            "ofType": null
                        },
                        "args": [
                            {
                                "name": "ciProviders",
                                "type": {
                                    "kind": "LIST",
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "ofType": {
                                            "kind": "SCALAR",
                                            "name": "Any"
                                        }
                                    }
                                }
                            },
                            {
                                "name": "name",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            },
                            {
                                "name": "orgId",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            },
                            {
                                "name": "public",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "cloudProjectRequestAccess",
                        "type": {
                            "kind": "UNION",
                            "name": "CloudProjectResult",
                            "ofType": null
                        },
                        "args": [
                            {
                                "name": "projectSlug",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "completeSetup",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Query",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "copyTextToClipboard",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": [
                            {
                                "name": "text",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "devRelaunch",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": [
                            {
                                "name": "action",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "dismissWarning",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Query",
                            "ofType": null
                        },
                        "args": [
                            {
                                "name": "id",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "finishedRenamingComponentSpecs",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Query",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "focusActiveBrowserWindow",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "generateSpecFromSource",
                        "type": {
                            "kind": "OBJECT",
                            "name": "GenerateSpecResponse",
                            "ofType": null
                        },
                        "args": [
                            {
                                "name": "codeGenCandidate",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            },
                            {
                                "name": "erroredCodegenCandidate",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Any"
                                }
                            },
                            {
                                "name": "type",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "internal_clearAllProjectPreferencesCache",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "internal_clearLatestProjectCache",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "internal_clearProjectPreferencesCache",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": [
                            {
                                "name": "projectTitle",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "launchOpenProject",
                        "type": {
                            "kind": "OBJECT",
                            "name": "CurrentProject",
                            "ofType": null
                        },
                        "args": [
                            {
                                "name": "specPath",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Any"
                                }
                            }
                        ]
                    },
                    {
                        "name": "launchpadSetBrowser",
                        "type": {
                            "kind": "OBJECT",
                            "name": "CurrentProject",
                            "ofType": null
                        },
                        "args": [
                            {
                                "name": "id",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "loadRemoteFetchables",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "LIST",
                                "ofType": {
                                    "kind": "INTERFACE",
                                    "name": "RemoteFetchable",
                                    "ofType": null
                                }
                            }
                        },
                        "args": [
                            {
                                "name": "ids",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "LIST",
                                        "ofType": {
                                            "kind": "NON_NULL",
                                            "ofType": {
                                                "kind": "SCALAR",
                                                "name": "Any"
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "login",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Query",
                            "ofType": null
                        },
                        "args": [
                            {
                                "name": "utmMedium",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            },
                            {
                                "name": "utmSource",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "logout",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Query",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "matchesSpecPattern",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": [
                            {
                                "name": "specFile",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "migrateCloseManualRenameWatcher",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "migrateComponentTesting",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Query",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "migrateConfigFile",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Query",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "migrateRenameSpecs",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Query",
                            "ofType": null
                        },
                        "args": [
                            {
                                "name": "after",
                                "type": {
                                    "kind": "LIST",
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "ofType": {
                                            "kind": "SCALAR",
                                            "name": "Any"
                                        }
                                    }
                                }
                            },
                            {
                                "name": "before",
                                "type": {
                                    "kind": "LIST",
                                    "ofType": {
                                        "kind": "NON_NULL",
                                        "ofType": {
                                            "kind": "SCALAR",
                                            "name": "Any"
                                        }
                                    }
                                }
                            },
                            {
                                "name": "skip",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Any"
                                }
                            }
                        ]
                    },
                    {
                        "name": "migrateRenameSpecsFolder",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Query",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "migrateRenameSupport",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Query",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "migrateSkipManualRename",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Query",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "openDirectoryInIDE",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": [
                            {
                                "name": "path",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "openExternal",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": [
                            {
                                "name": "includeGraphqlPort",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Any"
                                }
                            },
                            {
                                "name": "url",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "openFileInIDE",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": [
                            {
                                "name": "input",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "openInFinder",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": [
                            {
                                "name": "path",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "pingBaseUrl",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Query",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "reconfigureProject",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "refetchRemote",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Query",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "refreshOrganizations",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Query",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "removeProject",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Query",
                            "ofType": null
                        },
                        "args": [
                            {
                                "name": "path",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "resetAuthState",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "Query",
                                "ofType": null
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "resetErrorAndLoadConfig",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Query",
                            "ofType": null
                        },
                        "args": [
                            {
                                "name": "id",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "resetLatestVersionTelemetry",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "resetWizard",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "scaffoldIntegration",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "LIST",
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "ScaffoldedFile",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "scaffoldTestingType",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Query",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "setAndLoadCurrentTestingType",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Query",
                            "ofType": null
                        },
                        "args": [
                            {
                                "name": "testingType",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "setCurrentProject",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Query",
                            "ofType": null
                        },
                        "args": [
                            {
                                "name": "path",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "setPreferences",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Query",
                            "ofType": null
                        },
                        "args": [
                            {
                                "name": "value",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "setProjectIdInConfigFile",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Query",
                            "ofType": null
                        },
                        "args": [
                            {
                                "name": "projectId",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "setProjectPreferences",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "Query",
                                "ofType": null
                            }
                        },
                        "args": [
                            {
                                "name": "testingType",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "setPromptShown",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": [
                            {
                                "name": "slug",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "switchTestingTypeAndRelaunch",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": [
                            {
                                "name": "testingType",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "wizardUpdate",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Wizard",
                            "ofType": null
                        },
                        "args": [
                            {
                                "name": "input",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "INTERFACE",
                "name": "Node",
                "fields": [
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": [],
                "possibleTypes": [
                    {
                        "kind": "OBJECT",
                        "name": "Browser"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "CachedUser"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "CloudOrganization"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "CloudProject"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "CloudProjectSpec"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "CloudRecordKey"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "CloudRun"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "CloudRunTag"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "CloudSpecRun"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "CloudUser"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "CurrentProject"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "FileParts"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "GlobalProject"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "ManualMigration"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "ManualMigrationFile"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "MigrationFileData"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "MigrationFilePart"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "MigrationStep"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "RemoteFetchableCloudProjectResult"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "RemoteFetchableCloudProjectSpecResult"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "Spec"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "TestingTypeInfo"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "WizardBundler"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "WizardFrontendFramework"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "WizardNpmPackage"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "PageInfo",
                "fields": [
                    {
                        "name": "endCursor",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "hasNextPage",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "hasPreviousPage",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "startCursor",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "INTERFACE",
                "name": "ProjectLike",
                "fields": [
                    {
                        "name": "cloudProjectRemote",
                        "type": {
                            "kind": "OBJECT",
                            "name": "RemoteFetchableCloudProjectResult",
                            "ofType": null
                        },
                        "args": [
                            {
                                "name": "name",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "projectId",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "projectRoot",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "title",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": [],
                "possibleTypes": [
                    {
                        "kind": "OBJECT",
                        "name": "CurrentProject"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "GlobalProject"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "ProjectPreferences",
                "fields": [
                    {
                        "name": "testingType",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "PushFragmentPayload",
                "fields": [
                    {
                        "name": "data",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "errors",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "fragment",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "invalidateCache",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "target",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "variables",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "Query",
                "fields": [
                    {
                        "name": "authState",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "AuthState",
                                "ofType": null
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "baseError",
                        "type": {
                            "kind": "OBJECT",
                            "name": "ErrorWrapper",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "cachedUser",
                        "type": {
                            "kind": "OBJECT",
                            "name": "CachedUser",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "cloudLatestRunUpdateSpecData",
                        "type": {
                            "kind": "OBJECT",
                            "name": "CloudLatestRunUpdateSpecData",
                            "ofType": null
                        },
                        "args": [
                            {
                                "name": "commitBranch",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            },
                            {
                                "name": "projectSlug",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            },
                            {
                                "name": "sinceDateTime",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Any"
                                }
                            }
                        ]
                    },
                    {
                        "name": "cloudNode",
                        "type": {
                            "kind": "INTERFACE",
                            "name": "Node",
                            "ofType": null
                        },
                        "args": [
                            {
                                "name": "id",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "cloudNodesByIds",
                        "type": {
                            "kind": "LIST",
                            "ofType": {
                                "kind": "INTERFACE",
                                "name": "Node",
                                "ofType": null
                            }
                        },
                        "args": [
                            {
                                "name": "ids",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "LIST",
                                        "ofType": {
                                            "kind": "NON_NULL",
                                            "ofType": {
                                                "kind": "SCALAR",
                                                "name": "Any"
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "cloudProjectBySlug",
                        "type": {
                            "kind": "UNION",
                            "name": "CloudProjectResult",
                            "ofType": null
                        },
                        "args": [
                            {
                                "name": "slug",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "cloudProjectsBySlugs",
                        "type": {
                            "kind": "LIST",
                            "ofType": {
                                "kind": "UNION",
                                "name": "CloudProjectResult",
                                "ofType": null
                            }
                        },
                        "args": [
                            {
                                "name": "slugs",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "LIST",
                                        "ofType": {
                                            "kind": "NON_NULL",
                                            "ofType": {
                                                "kind": "SCALAR",
                                                "name": "Any"
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "cloudSpecByPath",
                        "type": {
                            "kind": "UNION",
                            "name": "CloudProjectSpecResult",
                            "ofType": null
                        },
                        "args": [
                            {
                                "name": "projectSlug",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            },
                            {
                                "name": "specPath",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "cloudViewer",
                        "type": {
                            "kind": "OBJECT",
                            "name": "CloudUser",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "currentProject",
                        "type": {
                            "kind": "OBJECT",
                            "name": "CurrentProject",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "dev",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "DevState",
                                "ofType": null
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "invokedFromCli",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "isInGlobalMode",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "localSettings",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "LocalSettings",
                                "ofType": null
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "migration",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Migration",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "node",
                        "type": {
                            "kind": "INTERFACE",
                            "name": "Node",
                            "ofType": null
                        },
                        "args": [
                            {
                                "name": "id",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "projectRootFromCI",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "projects",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "LIST",
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "INTERFACE",
                                        "name": "ProjectLike",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "scaffoldedFiles",
                        "type": {
                            "kind": "LIST",
                            "ofType": {
                                "kind": "NON_NULL",
                                "ofType": {
                                    "kind": "OBJECT",
                                    "name": "ScaffoldedFile",
                                    "ofType": null
                                }
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "versions",
                        "type": {
                            "kind": "OBJECT",
                            "name": "VersionData",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "warnings",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "LIST",
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "ErrorWrapper",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "wizard",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "Wizard",
                                "ofType": null
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "INTERFACE",
                "name": "RemoteFetchable",
                "fields": [
                    {
                        "name": "dataRaw",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "error",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "fetchingStatus",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "operation",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "operationHash",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "operationVariables",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": [
                    {
                        "kind": "INTERFACE",
                        "name": "Node"
                    }
                ],
                "possibleTypes": [
                    {
                        "kind": "OBJECT",
                        "name": "RemoteFetchableCloudProjectResult"
                    },
                    {
                        "kind": "OBJECT",
                        "name": "RemoteFetchableCloudProjectSpecResult"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "RemoteFetchableCloudProjectResult",
                "fields": [
                    {
                        "name": "data",
                        "type": {
                            "kind": "UNION",
                            "name": "CloudProjectResult",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "dataRaw",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "error",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "fetchingStatus",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "operation",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "operationHash",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "operationVariables",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": [
                    {
                        "kind": "INTERFACE",
                        "name": "Node"
                    },
                    {
                        "kind": "INTERFACE",
                        "name": "RemoteFetchable"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "RemoteFetchableCloudProjectSpecResult",
                "fields": [
                    {
                        "name": "data",
                        "type": {
                            "kind": "UNION",
                            "name": "CloudProjectSpecResult",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "dataRaw",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "error",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "fetchingStatus",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "operation",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "operationHash",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "operationVariables",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": [
                    {
                        "kind": "INTERFACE",
                        "name": "Node"
                    },
                    {
                        "kind": "INTERFACE",
                        "name": "RemoteFetchable"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "ScaffoldedFile",
                "fields": [
                    {
                        "name": "description",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "file",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "FileParts",
                                "ofType": null
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "status",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "Spec",
                "fields": [
                    {
                        "name": "absolute",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "baseName",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "cloudSpec",
                        "type": {
                            "kind": "OBJECT",
                            "name": "RemoteFetchableCloudProjectSpecResult",
                            "ofType": null
                        },
                        "args": [
                            {
                                "name": "name",
                                "type": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "Any"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "fileExtension",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "fileName",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "gitInfo",
                        "type": {
                            "kind": "OBJECT",
                            "name": "GitInfo",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "name",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "relative",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "specFileExtension",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "specType",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": [
                    {
                        "kind": "INTERFACE",
                        "name": "Node"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "SpecDataAggregate",
                "fields": [
                    {
                        "name": "max",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "min",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "Subscription",
                "fields": [
                    {
                        "name": "authChange",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Query",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "branchChange",
                        "type": {
                            "kind": "OBJECT",
                            "name": "CurrentProject",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "browserStatusChange",
                        "type": {
                            "kind": "OBJECT",
                            "name": "CurrentProject",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "cloudViewerChange",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Query",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "configChange",
                        "type": {
                            "kind": "OBJECT",
                            "name": "CurrentProject",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "devChange",
                        "type": {
                            "kind": "OBJECT",
                            "name": "DevState",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "errorWarningChange",
                        "type": {
                            "kind": "OBJECT",
                            "name": "Query",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "gitInfoChange",
                        "type": {
                            "kind": "LIST",
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "Spec",
                                "ofType": null
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "pushFragment",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "LIST",
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "PushFragmentPayload",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "specsChange",
                        "type": {
                            "kind": "OBJECT",
                            "name": "CurrentProject",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "startPollingForSpecs",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": [
                            {
                                "name": "branchName",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Any"
                                }
                            },
                            {
                                "name": "projectId",
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Any"
                                }
                            }
                        ]
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "TestingTypeInfo",
                "fields": [
                    {
                        "name": "description",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "title",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "type",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": [
                    {
                        "kind": "INTERFACE",
                        "name": "Node"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "Version",
                "fields": [
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "released",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "version",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "VersionData",
                "fields": [
                    {
                        "name": "current",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "Version",
                                "ofType": null
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "latest",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "Version",
                                "ofType": null
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "Wizard",
                "fields": [
                    {
                        "name": "allBundlers",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "LIST",
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "WizardBundler",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "bundler",
                        "type": {
                            "kind": "OBJECT",
                            "name": "WizardBundler",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "framework",
                        "type": {
                            "kind": "OBJECT",
                            "name": "WizardFrontendFramework",
                            "ofType": null
                        },
                        "args": []
                    },
                    {
                        "name": "frameworks",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "LIST",
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "WizardFrontendFramework",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "installDependenciesCommand",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "packagesToInstall",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "LIST",
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "WizardNpmPackage",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": []
            },
            {
                "kind": "OBJECT",
                "name": "WizardBundler",
                "fields": [
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "isDetected",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "name",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "type",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": [
                    {
                        "kind": "INTERFACE",
                        "name": "Node"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "WizardFrontendFramework",
                "fields": [
                    {
                        "name": "category",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "isDetected",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "isSelected",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "name",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "supportStatus",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "supportedBundlers",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "LIST",
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "WizardBundler",
                                        "ofType": null
                                    }
                                }
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "type",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": [
                    {
                        "kind": "INTERFACE",
                        "name": "Node"
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "WizardNpmPackage",
                "fields": [
                    {
                        "name": "description",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "detectedVersion",
                        "type": {
                            "kind": "SCALAR",
                            "name": "Any"
                        },
                        "args": []
                    },
                    {
                        "name": "id",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "minVersion",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "name",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "package",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    },
                    {
                        "name": "satisfied",
                        "type": {
                            "kind": "NON_NULL",
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Any"
                            }
                        },
                        "args": []
                    }
                ],
                "interfaces": [
                    {
                        "kind": "INTERFACE",
                        "name": "Node"
                    }
                ]
            },
            {
                "kind": "SCALAR",
                "name": "Any"
            }
        ],
        "directives": []
    }
};
