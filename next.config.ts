import type { NextConfig } from "next";

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
          "/?utm_source=instagram&utm_medium=organic&utm_campaign=agentflow_launch&utm_content=instagram_profile_or_story",
        permanent: false,
      },
      {
        source: "/leak",
        destination:
          "/?utm_source=direct&utm_medium=shortlink&utm_campaign=lead_leak_audit&utm_content=clean_shortlink",
        permanent: false,
      },
      {
        source: "/dm",
        destination:
          "/?utm_source=linkedin_dm&utm_medium=outbound&utm_campaign=lead_leak_audit&utm_content=real_estate_owner_v1",
        permanent: false,
      },
      {
        source: "/agentflow",
        destination:
          "/?utm_source=direct&utm_medium=shortlink&utm_campaign=agentflow_interest&utm_content=agentflow_shortlink#agentflow-preview",
        permanent: false,
      },
      {
        source: "/audit",
        destination:
          "https://calendly.com/officialgenilabs/agentflowstrategy?utm_source=genilabs_site&utm_medium=shortlink&utm_campaign=lead_leak_audit&utm_content=audit_shortlink",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
