document.addEventListener("DOMContentLoaded", () => {

    const contractButton =
        document.getElementById("contractButton");

    const copyStatus =
        document.getElementById("copyStatus");

    const buyButton =
        document.getElementById("buyButton");


    /* =====================================================
       COPY CONTRACT ADDRESS
       ===================================================== */

    if (contractButton) {

        contractButton.addEventListener(
            "click",
            async () => {

                const address =
                    contractButton.dataset.address;


                try {

                    await navigator.clipboard.writeText(
                        address
                    );

                } catch (error) {

                    /*
                     * Fallback for browsers where
                     * Clipboard API is unavailable.
                     */

                    const textarea =
                        document.createElement("textarea");

                    textarea.value = address;

                    textarea.style.position = "fixed";

                    textarea.style.opacity = "0";

                    document.body.appendChild(
                        textarea
                    );

                    textarea.focus();

                    textarea.select();

                    document.execCommand("copy");

                    textarea.remove();
                }


                /* COPIED */

                contractButton.classList.add(
                    "copied"
                );


                if (copyStatus) {

                    copyStatus.textContent =
                        "COPIED!";
                }


                /* Reset */

                setTimeout(() => {

                    contractButton.classList.remove(
                        "copied"
                    );

                    if (copyStatus) {

                        copyStatus.textContent =
                            "•";
                    }

                }, 1800);

            }
        );
    }


    /* =====================================================
       BUY BUTTON
       ===================================================== */

    if (buyButton) {

        buyButton.addEventListener(
            "click",
            (event) => {

                /*
                 * Placeholder.
                 *
                 * Ganti href="#" pada index.html
                 * dengan URL DEX ketika sudah tersedia.
                 */

                if (
                    buyButton.getAttribute("href") === "#"
                ) {

                    event.preventDefault();
                }

            }
        );
    }

});