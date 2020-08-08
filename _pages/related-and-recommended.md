---
layout: page
title: Related & Recommended
permalink: /related-and-recommended/
---
_A melange of new media aritsts, collectives, organizations, writers, musicians, friends, and foes..._
<div class="row row-related-and-recommended">
  <div class="col">
    <ul class="three-col">
      {% for related in site.related %}
      <li><a href="{{ related.website }}">{{ related.name }}</a></li>
      {% endfor %}
    </ul>
  </div>
</div>
<div class="row">
  <div class="col-md-4">
    <a class="webring" href='https://webring.xxiivv.com/#random' target='_blank'><img src='https://webring.xxiivv.com/icon.black.svg'/></a>
  </div>
  <div class="col-md-8">
    <p>This <a href="https://webring.xxiivv.com/#random">webring</a> is an attempt to inspire artists &amp; developers to build their own website and share traffic among each other. The ring welcomes personalized websites such as <b>diaries, wikis &amp; portfolios</b>.</p>
    <p>To add yourself to the ring, submit a <a href="https://github.com/XXIIVV/webring#join-the-webring" target="_blank">pull request</a>.</p>
  </div>
</div>