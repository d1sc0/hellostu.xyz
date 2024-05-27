---
title: Tinkering Monday
draft: false
slug: tinkering-monday
pubDate: 2019-03-25
description: 'A post about my some website experiments - from ghost blogging throught to static site generators and all the things in between'
postImage:
  src: '/preview_images/5-tinkering.jpg'
  alt: 'toy robot'
socialImage: '/social_images/5-tinkering.jpg'
tags: ['tech', 'experiment', 'website']
---

Publishing my first set of [weeknotes on Friday](http://words.lostinthe.uk/weeknotes-1-be-more-like-robbie/) reminded me how much I find [Medium](http://words.lostinthe.uk/tinkering-monday/medium.com) a bit of an irritating experience. I really do appreciate how Medium removes all the distracting guff and allows you to focus on the content and writing...but as someone who has played with content management systems and websites for a number of years - it also grates a little not to have more control. I realise that's the point but I like to tinker on the web and I've learnt a lot this this way.

![Toy robot](../post_images/robot-unsplashFULL.jpg)

Today I decided to revisit the [Ghost blogging platform](https://ghost.org/). I had tried it out some time back but had a few issues migrating an image heavy wordpress site and ultimately ended up moving on. Since that time I've also played with a few [static](https://gohugo.io/) [site](https://jekyllrb.com/) [generators](https://www.gatsbyjs.org/) and wrap around content editing tools like [forestry.io](https://forestry.io/) and although these are amazing I then found I was spending too much time tinkering and not enough time writing. I'm hoping Ghost will give me something in between. Ghost can also be used in [headless configurations](https://blog.ghost.org/jamstack/) so if I ever decide to explore that route, it isn't closed to me.

Ghost and Medium's writing experience is very similar in terms of UI and when it comes to writing both are minimal and clutter free. Using Ghost though also means I can easily tweak and add scripts in the header and footer of individual posts & pages which I'm hoping will be useful as I continue to play with data visualisation and story telling techniques as I'll want a few more embed and styling options than Medium will allow.

Running up a [Bitnami Ghost Amazon Marketplace Image](https://aws.amazon.com/marketplace/pp/B00NPHLY8W) in EC2 was pretty drama free...but I did run into a few issues in setting up things the way I wanted. I've listed them below and my workarounds.

- **Accessing SSH and SFTP - ** To properly setup the bitnami image and have access to restart scripts etc you need SSH access. This wouldn't normally be an issue but today I was avoiding my work Macbook and trying to get things done on the Chromebook. In the end I found a great little app in the [play store called Termius](https://play.google.com/store/apps/details?id=com.server.auditor.ssh.client&hl=en_GB). It acts as both SSH terminal and SFTP client and was super easy to use. Equally it didn't struggle with the AWS .pem key files (where others did!)

- **Configuring Email - ** As much as I found the documentation from both [Ghost](https://docs.ghost.org/concepts/config/) and [Bitnami](https://docs.bitnami.com/aws/apps/ghost/) to be excellent I had real issues getting my instance configured for [SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol). After losing much time trying to get it working with the email provider I use for this domain I went with a workaround and set up mail using [Sendgrid](https://sendgrid.com/). It's not likely to need to send much mail in my configuration so remains free but I'm happy to have something sorted so I can easily reset my password in a bind ;)

- **Theme tweaking and Grunt - ** If you can't already tell from the above I am no developer. Although one of the [free themes](https://marketplace.ghost.org/) for Ghost was close to what I wanted there were a few tweaks I wanted to make. On loading a copy of the theme files into [Cloud9](https://aws.amazon.com/cloud9/) (my fave way to tinker across machines) I was presented with a bunch of [handlebar](https://handlebarsjs.com/) templates and some [SCSS](https://sass-lang.com/guide) files. As much as I was relatively confident with tweaking the contents I wasn't sure how I would compile my efforts back into a usable theme. Luckily there were some pointers in the theme's readme file (Good developers leave clues!) and I figured out I also needed to wrap my head around [Grunt](https://gruntjs.com/getting-started) (a JS task runner). Some googling later, a quick npm install and I was 'grunt sass'ing and 'grunt zip'ing my way to a new version of my theme!

- **Cloudflare Gotcha! -** The last issue I wrestled with today was a total schoolboy error. Ghost gives you a nice easy way to upload an .png file to use as the sites [favicon](https://en.wikipedia.org/wiki/Favicon). After trying this with a dummy icon and replacing it I could not get any browser to pick up the new version. I nuked my chrome cache several times and no joy. It took me about 45 mins of swearing to remember that my [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) is now configured on [Cloudflare](https://www.cloudflare.com/) so I get the pleasure of their [Content Delivery Network](https://en.wikipedia.org/wiki/Content_delivery_network). A quick tap on the 'Purge Cache' button in the Cloudflare dashboard and all was fixed. Doh!

The hurdles above overcome and the rest of tinkering then included just a bit of copy and pasting to migrate content, more theme tweaks, setting up [Disqus for comments](https://disqus.com/) and reactions, google analytics and a little testing across devices. I was mostly done by lunchtime so I managed to drive to the beach with Chloe and Monty and stretch my legs. Winning!

On my return I realised I was once again in danger of spending more time tinkering than writing so I thought I'd blog this summary of my productive day to bring back the balance! I'm hoping by writing some of my mistakes down, I'm less likely to repeat them in future. Expect my weeknotes this week to land here on [words.lostinthe.uk](http://words.lostinthe.uk/)

[Robot Image Credit: Craig Sybert](https://unsplash.com/photos/S-vkpXA3os8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
