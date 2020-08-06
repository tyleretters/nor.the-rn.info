---
layout: page
title: Related & Recommended
permalink: /related-and-recommended/
---
_A melange of new media aritsts, collectives, organizations, writers, musicians, friends, and foes..._
<div class="row row-related-and-recommended">
  <div class="col">
    <ul>
      {% for related in site.related %}
      <li><a href="{{ related.website }}">{{ related.name }}</a></li>
      {% endfor %}
    </ul>
  </div>
</div>
<div class="row">
  <div class="col-3 offset-3">
    <a href='https://webring.xxiivv.com/#random' target='_blank'><img src='https://webring.xxiivv.com/icon.black.svg'/></a>
  </div>
</div>