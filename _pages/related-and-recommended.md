---
layout: page
title: Related & Recommended
permalink: /related-and-recommended/
---
_A melange of new media aritsts, collectives, organizations, writers, musicians, friends, and foes..._

<div class="row row-related-and-recommended">
  <ul>
    {% for related in site.related %}
    <li><a href="{{ related.website }}">{{ related.name }}</a></li>
    {% endfor %}
  </ul>
</div>