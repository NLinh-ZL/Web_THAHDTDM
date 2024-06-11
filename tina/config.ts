import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main", // Đảm bảo rằng branch mặc định của bạn được cài đặt chính xác

  // Cài đặt thông tin xác thực từ TinaCMS
  clientId: "bfb82d90-5e7e-4b98-a806-296d4fdeb949", // Client ID
  token: "0df6bb6e06611ec161f2ab866113b556ec98d87c", // Content token

  // Cấu hình thư mục đầu ra cho việc xây dựng
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  // Cấu hình thư mục media
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },

  // Cấu hình schema cho các collection
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          // Đây là một DEMO router. Bạn có thể loại bỏ nó hoặc điều chỉnh tùy theo cấu trúc URL của bạn
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
      },
    ],
  },
});
