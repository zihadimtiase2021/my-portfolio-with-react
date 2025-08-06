// // // import axios from "axios";

// // // const SITE_ID = process.env.WEBFLOW_SITE_ID;
// // // const API_TOKEN = process.env.ASSETS_API_TOKEN;

// // // export async function handler(event) {
// // //   try {
// // //     const { folderName, displayName } = JSON.parse(event.body || "{}");

// // //     // ১. সব ফোল্ডার ফেচ করো
// // //     const folderRes = await axios.get(
// // //       `https://api.webflow.com/v2/sites/${SITE_ID}/asset_folders`,
// // //       {
// // //         headers: {
// // //           Authorization: `Bearer ${API_TOKEN}`,
// // //           accept: "application/json",
// // //         },
// // //       }
// // //     );

// // //     const targetFolder = folderRes.data.assetFolders.find(
// // //       folder => folder.displayName === folderName
// // //     );

// // //     if (!targetFolder) {
// // //       return {
// // //         statusCode: 404,
// // //         body: JSON.stringify({ error: "Folder not found" }),
// // //       };
// // //     }

// // //     // ২. ফোল্ডারের অ্যাসেট আইডিগুলো থেকে ইমেজ খুঁজে বের করো
// // //     for (const assetId of targetFolder.assets) {
// // //       const assetRes = await axios.get(
// // //         `https://api.webflow.com/v2/assets/${assetId}`,
// // //         {
// // //           headers: {
// // //             Authorization: `Bearer ${API_TOKEN}`,
// // //             accept: "application/json",
// // //           },
// // //         }
// // //       );

// // //       const asset = assetRes.data;

// // //       if (asset.displayName === displayName) {
// // //         return {
// // //           statusCode: 200,
// // //           body: JSON.stringify({ url: asset.hostedUrl }),
// // //         };
// // //       }
// // //     }

// // //     return {
// // //       statusCode: 404,
// // //       body: JSON.stringify({ error: "Asset not found" }),
// // //     };
// // //   } catch (err) {
// // //     return {
// // //       statusCode: 500,
// // //       body: JSON.stringify({ error: err.message }),
// // //     };
// // //   }
// // // }

// // // প্রয়োজনীয় মডিউল গুলো ইমপোর্ট করছি
// // import axios from "axios";
// // import dotenv from "dotenv";
// // import fs from "fs";
// // import path from "path";
// // import readline from "readline";

// // // .env ফাইলে থাকা কনফিগারেশন লোড করছি
// // dotenv.config();

// // // ওয়েবফ্লো সাইট আইডি ও এপিআই টোকেন .env থেকে নিচ্ছি
// // const SITE_ID = process.env.WEBFLOW_SITE_ID;
// // const API_TOKEN = process.env.ASSETS_API_TOKEN;

// // // কোন ফাইলে JSON রেজাল্ট লিখে রাখা হবে
// // const OUTPUT_PATH = path.resolve("src/assetsMap.json");

// // // 🔶 ইউজারের কাছ থেকে কোন ফোল্ডারের নাম নিতে হবে সেটা জিজ্ঞেস করার জন্য ফাংশন
// // const promptFolderName = async () => {
// //   const rl = readline.createInterface({
// //     input: process.stdin,
// //     output: process.stdout,
// //   });

// //   return new Promise(resolve => {
// //     rl.question("📁 কোন Asset Folder এর নাম লিখবে (displayName): ", answer => {
// //       rl.close();
// //       resolve(answer.trim()); // ইউজার ইনপুট রিটার্ন করবে
// //     });
// //   });
// // };

// // // 🔧 মেইন ফাংশন যেটা পুরো প্রসেস চালাবে
// // const generateAssetsMap = async () => {
// //   try {
// //     // 🟡 ইউজার থেকে displayName ইনপুট নিচ্ছি
// //     const folderDisplayName = await promptFolderName();

// //     // 🟠 ধাপ ১: সব Asset Folder API দিয়ে ফেচ করছি
// //     const folderRes = await axios.get(
// //       `https://api.webflow.com/v2/sites/${SITE_ID}/asset_folders`,
// //       {
// //         headers: {
// //           Authorization: `Bearer ${API_TOKEN}`,
// //           accept: "application/json",
// //         },
// //       }
// //     );

// //     // ফেচ করা ফল্ডারগুলোকে নিচ্ছি
// //     const folders = folderRes.data.assetFolders;

// //     // 🟢 ইউজার যে নাম দিয়েছে সেই নামের ফোল্ডার খুঁজছি
// //     const targetFolder = folders.find(
// //       folder => folder.displayName === folderDisplayName
// //     );

// //     // যদি ফোল্ডার না পাওয়া যায়, তাহলে এরর দেখাচ্ছি
// //     if (!targetFolder) {
// //       console.error(
// //         `❌ "${folderDisplayName}" নামে কোন Asset Folder পাওয়া যায়নি`
// //       );
// //       return;
// //     }

// //     // 🟤 ফোল্ডারের মধ্যে থাকা সমস্ত asset ID নিচ্ছি
// //     const assetIds = targetFolder.assets;

// //     // এখানে আমরা ফাইনাল assetMap তৈরি করব
// //     const assetMap = {};

// //     // 🔵 ধাপ ২: প্রতিটি asset ID দিয়ে আলাদা API কল করে সম্পূর্ণ ডেটা নিচ্ছি
// //     for (const assetId of assetIds) {
// //       const assetRes = await axios.get(
// //         `https://api.webflow.com/v2/assets/${assetId}`,
// //         {
// //           headers: {
// //             Authorization: `Bearer ${API_TOKEN}`,
// //             accept: "application/json",
// //           },
// //         }
// //       );

// //       const asset = assetRes.data;

// //       // Asset displayName কে key এবং hostedUrl কে value হিসেবে নিচ্ছি
// //       assetMap[asset.displayName] = asset.hostedUrl;
// //     }

// //     // 🔴 ধাপ ৩: JSON ফাইলে লেখার জন্য assetMap তৈরি হয়ে গেছে
// //     fs.writeFileSync(
// //       OUTPUT_PATH,
// //       JSON.stringify({ [folderDisplayName]: assetMap }, null, 2)
// //     );

// //     console.log("✅ assetsMap.json সফলভাবে তৈরি হয়েছে:", OUTPUT_PATH);
// //   } catch (err) {
// //     console.error("❌ সমস্যা হয়েছে:", err.message);
// //   }
// // };

// // // মেইন ফাংশন চালানো হচ্ছে
// // generateAssetsMap();

// // // // scripts/generateAssetsMap.js

// // // // import axios from "axios";
// // // // import dotenv from "dotenv";
// // // // import fs from "fs";
// // // // import path from "path";

// // // // dotenv.config();

// // // // const SITE_ID = process.env.WEBFLOW_SITE_ID; // ✅ Replace with your actual Webflow Site ID
// // // // const API_TOKEN = process.env.ASSETS_API_TOKEN;

// // // // const OUTPUT_PATH = path.resolve("src/assetsMap.json");

// // // // const generateAssetsMap = async () => {
// // // //   try {
// // // //     const res = await axios.get(
// // // //       `https://api.webflow.com/v2/sites/${SITE_ID}/assets`,
// // // //       {
// // // //         headers: {
// // // //           Authorization: `Bearer ${API_TOKEN}`,
// // // //           accept: "application/json",
// // // //         },
// // // //       }
// // // //     );

// // // //     const assets = res.data.assets;
// // // //     console.log(assets);
// // // //     const assetMap = {};
// // // //     for (const asset of assets) {
// // // //       const folder = asset.folder || "root";
// // // //       if (!assetMap[folder]) assetMap[folder] = {};
// // // //       assetMap[folder][asset.displayName] = asset.hostedUrl;
// // // //     }
// // // //     console.log(assets);
// // // //     fs.writeFileSync(OUTPUT_PATH, JSON.stringify(assetMap, null, 2));
// // // //     console.log("✅ assetsMap.json generated at:", OUTPUT_PATH);
// // // //   } catch (err) {
// // // //     console.error("❌ Failed to generate assets map:", err.message);
// // // //   }
// // // // };

// // // // generateAssetsMap();

// // // // generateAssetsMap.js

// // // // const fs = require("fs");
// // // // const fetch = require("node-fetch");
// // // // require("dotenv").config(); // Load environment variables from .env

// // // // const API_TOKEN = process.env.ASSETS_API_TOKEN; // Add this in your .env
// // // // const SITE_ID = process.env.WEBFLOW_SITE_ID; // Add this in your .env

// // // // const BASE_URL = "https://api.webflow.com/v2";

// // // // const headers = {
// // // //   Authorization: `Bearer ${API_TOKEN}`,
// // // //   "Content-Type": "application/json",
// // // // };

// // // // async function fetchJSON(url) {
// // // //   const res = await fetch(url, { headers });
// // // //   if (!res.ok) throw new Error(`❌ Failed to fetch ${url}: ${res.statusText}`);
// // // //   return res.json();
// // // // }

// // // // async function generateAssetsMap() {
// // // //   console.log("📦 Fetching asset folders...");
// // // //   const folders = await fetchJSON(`${BASE_URL}/sites/${SITE_ID}/asset-folders`);

// // // //   const assetsMap = {};

// // // //   for (const folder of folders) {
// // // //     const folderId = folder.id;
// // // //     const folderName = folder.displayName || "root";
// // // //     console.log(`📁 Processing folder: ${folderName}`);

// // // //     const folderDetails = await fetchJSON(`${BASE_URL}/asset_folders/${folderId}`);
// // // //     const assetIds = folderDetails.assets || [];

// // // //     assetsMap[folderName] = {};

// // // //     for (const assetId of assetIds) {
// // // //       try {
// // // //         const asset = await fetchJSON(`${BASE_URL}/assets/${assetId}`);
// // // //         const name = asset.displayName;
// // // //         const url = asset.hostedUrl;

// // // //         if (name && url) {
// // // //           assetsMap[folderName][name] = url;
// // // //           console.log(`  ✅ Added asset: ${name}`);
// // // //         } else {
// // // //           console.warn(`  ⚠️ Skipped asset: Missing name or URL`);
// // // //         }
// // // //       } catch (err) {
// // // //         console.warn(`  ❌ Failed to fetch asset ${assetId}: ${err.message}`);
// // // //       }
// // // //     }
// // // //   }

// // // //   // Output to src/assetsMap.json
// // // //   const outputPath = "src/assetsMap.json";
// // // //   fs.writeFileSync(outputPath, JSON.stringify(assetsMap, null, 2));
// // // //   console.log(`✅ Done! Asset map saved to: ${outputPath}`);
// // // // }

// // // // generateAssetsMap().catch((err) => {
// // // //   console.error("❌ Error generating assets map:", err);
// // // // });

// import axios from "axios";

// const SITE_ID = process.env.WEBFLOW_SITE_ID;
// const API_TOKEN = process.env.ASSETS_API_TOKEN;

// export async function handler(event) {
//   try {
//     const { folderName, displayName } = JSON.parse(event.body || "{}");

//     // ১. সব ফোল্ডার ফেচ করো
//     const folderRes = await axios.get(
//       `https://api.webflow.com/v2/sites/${SITE_ID}/asset_folders`,
//       {
//         headers: {
//           Authorization: `Bearer ${API_TOKEN}`,
//           accept: "application/json",
//         },
//       }
//     );

//     const targetFolder = folderRes.data.assetFolders.find(
//       folder => folder.displayName === folderName
//     );

//     if (!targetFolder) {
//       return {
//         statusCode: 404,
//         body: JSON.stringify({ error: "Folder not found" }),
//       };
//     }

//     // ২. ফোল্ডারের অ্যাসেট আইডিগুলো থেকে ইমেজ খুঁজে বের করো
//     for (const assetId of targetFolder.assets) {
//       const assetRes = await axios.get(
//         `https://api.webflow.com/v2/assets/${assetId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${API_TOKEN}`,
//             accept: "application/json",
//           },
//         }
//       );

//       const asset = assetRes.data;

//       if (asset.displayName === displayName) {
//         return {
//           statusCode: 200,
//           body: JSON.stringify({ assetItem: asset }),
//         };
//       }
//     }

//     return {
//       statusCode: 404,
//       body: JSON.stringify({ error: "Asset not found" }),
//     };
//   } catch (err) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: err.message }),
//     };
//   }
// }
