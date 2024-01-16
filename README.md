# Affiliates landing page
These informations will help you customize and deploy your own landing page !

### Landing page notice

We offer a free landing page template that you can use as a starter and deploy it to Netlify. You can use this landing page or create your own custom one. We do not offer support for this part. The design of your website is your own responsibility!

### :vertical_traffic_light: Deploy your site
- navigate to [GitHub](https://github.com) and **sign in/up**
- click the button below  
- [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/drsoftsrl/landing_page)
- follow onscreen instructions:
    - Connect to GitHub - **log in** with you GitHub account
    - Configure your site - change the repository name if you want
    - wait until your site is deployed
    - click **Assigning Custom Domains** and set your custom domain
- any change you commit on GitHub after you deploy your site for the first time will trigger a build on Netlify and your site will be updated automatically


## Customize your site

### :star2: Change site Setting
All the settings which you need to change you can find them in the folder projectSettings
- in `projectSettings/website.js` change the values for the 3 variables.
- in `projectSettings/seo.js` add seo title, description and keywords for all your pages
- in `projectSettings/colors.js` you can change the colors of your website
- in `next-sitemap.config.js` add your domain at `siteUrl`
- you will also need to replace the following images :
    - `/public/logo.webp`
    - `/public/favicon.ico`

### :hammer: Update your landing page with the newest changes
- install git
- clone your repository in your local machine `git clone "github_url"`
- go to the project's folder on your local machine
- run the following commands in terminal:
```
git remote add upstream https://github.com/drsoftsrl/landing_page
git fetch upstream
git pull upstream master
git push
```
