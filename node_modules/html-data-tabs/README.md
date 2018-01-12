# html-data-tabs
A easy and a simple way to create html tabs:

* Very simple usage
* Not need any external plugin like jQuery or similar.
* You can use your own styles.

----

# Here is a very basic usage, without any style:
Please, check the demos files for advanced usage with styles ;)

```html
<!-- Create a header for the tabs, with an attribute called tabs -->
<!-- Header and tabs can be any element that you want -->
<!--Just use wheatever you want ;) -->

<ul tabs>
    <!-- Add elements for click event and ref to it container by ID-->
    <li tabs-tab-id="container1" class="tab-active">
        TAB 1
    </li>
    <li tabs-tab-id="container2">
        TAB 2
    </li>
</ul>

<!-- You can put your containers on anywhere -->
<!-- The management of each container is by ID -->
<div id="container1">
    Container 1 - This is the container #1 that refers to TAB #1
</div>
<div id="container2" style="display: none;">
    Container 2 - This is the container #2 that refers to TAB #2
</div>
```