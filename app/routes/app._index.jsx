import {
  Page,
  Layout,
  Card,
  Text,
  BlockStack,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function Index() {
  return (
    <Page>
      <TitleBar title="Ana Sayfa" />
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="400">
              <Text as="h1" variant="headingXl">
                Uygulamaya hoş geldiniz 👋
              </Text>
              <Text variant="bodyMd" as="p">
                Shopify uygulamanız başarıyla yüklendi.
              </Text>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
