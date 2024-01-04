<main>
    <form method="POST" autocomplete="off">
        <hgroup>
            <h1>Register</h1>
        </hgroup>

        <div class="block">
            <label for="name" class="mr-3">Name</label>
            <input class="w-56" type="text" id="name" name="name" required />
        </div>

        <div class="block">
            <label for="username" class="mr-3">Username</label>
            <input
                class="w-56"
                type="text"
                id="username"
                name="username"
                required
            />
        </div>

        <div class="block">
            <label for="password" class="mr-3">Password</label>
            <input
                class="w-56"
                type="password"
                id="password"
                name="password"
                required
            />
        </div>

        <button
            type="submit"
            class="group bg-purple-800 text-white py-2 px-3 hover:bg-purple-700 rounded-md"
        >
            <p class="group-hover:scale-105">Register</p></button
        >
    </form>
</main>
