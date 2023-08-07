<script lang="ts">
    import "../app.css";
    import '@fortawesome/fontawesome-free/js/solid.js';
	import '@fortawesome/fontawesome-free/js/fontawesome.js';
</script>

<div class="flex flex-col h-screen justify-between w-screen pt-6 px-6 overflow-x-hidden">
    <div class="navbar bg-base-200 rounded-full">
        <a class="btn btn-ghost normal-case text-xl" href="/">Wardle</a>
        <p>An open source word guessing game</p>
    </div>
    <div class="mb-auto">
        <slot/>
    </div>
    <div class="flex flex-row items-center footer bg-base-200 p-1">
        <div class="flex flex-row items-center">Made with<i class="fa fa-heart fa-beat text-red-500"/>by<a target="_blank" href="https://github.com/haukened">@haukened</a></div>
    </div>
</div>
