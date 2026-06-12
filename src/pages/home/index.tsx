import { DealsChart, UpcomingEvents, DashboardTotalCountCard, LatestActivities } from "@/components";
import { useCustom } from "@refinedev/core";
import { DASHBOARD_TOTAL_COUNTS_QUERY } from "@/graphql/queries";
import { DashboardTotalCountsQuery } from "@/graphql/types";
import { API_URL } from "@/providers/data";
import { Col, Row } from "antd";

export const Home = () => {
    const { query } = useCustom<DashboardTotalCountsQuery>({
        url: API_URL,
        method: "post",
        meta: {
            gqlQuery: DASHBOARD_TOTAL_COUNTS_QUERY,
        },
    });

    console.log("query:", query);
    console.log("query.data:", query.data);
    console.log("query.isLoading:", query.isLoading);
    console.log("query.status:", query.status);

    const data = query.data;
    const isLoading = query.isLoading;

    return (
        <div>
            <Row gutter={[32, 32]}>
                <Col xs={24} sm={24} xl={8}>
                    <DashboardTotalCountCard
                        resource="companies"
                        isLoading={isLoading}
                        totalCount={data?.data?.companies?.totalCount ?? 0}
                    />
                </Col>

                <Col xs={24} sm={24} xl={8}>
                    <DashboardTotalCountCard
                        resource="contacts"
                        isLoading={isLoading}
                        totalCount={data?.data?.contacts?.totalCount ?? 0}
                    />
                </Col>

                <Col xs={24} sm={24} xl={8}>
                    <DashboardTotalCountCard
                        resource="deals"
                        isLoading={isLoading}
                        totalCount={data?.data?.deals?.totalCount ?? 0}
                    />
                </Col>
            </Row>

            <Row
                gutter={[32, 32]}
                style={{ marginTop: "32px" }}
            >
                <Col
                    xs={24}
                    sm={24}
                    xl={8}
                    style={{ height: "460px" }}
                >
                    <UpcomingEvents />
                </Col>

                <Col
                    xs={24}
                    sm={24}
                    xl={16}
                    style={{ height: "460px" }}
                >
                    <DealsChart />
                </Col>
            </Row>
            <Row
              gutter={[32, 32]}
              style={{ marginTop: "32px" }}
            >
              <Col xs={24}>
                <LatestActivities/>
              </Col>
                  
            </Row>
            
        </div>
    );
};