import type { NextConfig } from "next";

const AUDIT_BOOKING_URL = "https://calendly.com/officialgenilabs/agentflowstrategy";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/launch",
        destination:
          "/?utm_source=linkedin&utm_medium=organic&utm_campaign=agentflow_launch&utm_content=founder_post_01",
        permanent: false,
      },
      {
        source: "/ig",
        destination:
          "/?utm_source=instagram&utm_medium=bio&utm_campaign=weekend_content&utm_content=instagram_bio",
        permanent: false,
      },
      {
        source: "/leak",
        destination:
          "/?utm_source=shortlink&utm_medium=direct&utm_campaign=lead_leak_audit&utm_content=leak_shortlink",
        permanent: false,
      },
      {
        source: "/dm",
        destination:
          "/?utm_source=linkedin_dm&utm_medium=dm&utm_campaign=lead_leak_audit&utm_content=real_estate_owner_v1",
        permanent: false,
      },
      {
        source: "/agentflow",
        destination:
          "/?utm_source=shortlink&utm_medium=direct&utm_campaign=agentflow_launch&utm_content=agentflow_shortlink#agentflow-preview",
        permanent: false,
      },
      {
        source: "/audit",
        destination: `${AUDIT_BOOKING_URL}?utm_source=shortlink&utm_medium=direct&utm_campaign=lead_leak_audit&utm_content=audit_shortlink`,
        permanent: false,
      },
      {
        source: "/story",
        destination:
          "/?utm_source=instagram_story&utm_medium=story&utm_campaign=weekend_content&utm_content=instagram_story_01",
        permanent: false,
      },
      {
        source: "/partner",
        destination:
          "/?utm_source=partner&utm_medium=referral&utm_campaign=partner_outreach&utm_content=partner_faith_v1",
        permanent: false,
      },
      {
        source: "/ai",
        destination:
          "/?utm_source=chatgpt&utm_medium=ai_referral&utm_campaign=website_qualification_agent&utm_content=website_qualifier_teaser_01",
        permanent: false,
      },
      {
        source: "/wa",
        destination:
          "/?utm_source=whatsapp&utm_medium=direct&utm_campaign=lead_leak_audit&utm_content=whatsapp_direct_01",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
