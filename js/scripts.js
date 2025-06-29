 window.addEventListener('DOMContentLoaded', event => {
            // Activar ScrollSpy de Bootstrap
            const sideNav = document.body.querySelector('#sideNav');
            if (sideNav) {
                new bootstrap.ScrollSpy(document.body, {
                    target: '#sideNav',
                    rootMargin: '0px 0px -40%',
                });
            };

            // Colapsar navbar responsive al hacer clic
            const navbarToggler = document.body.querySelector('.navbar-toggler');
            const responsiveNavItems = [].slice.call(
                document.querySelectorAll('#navbarResponsive .nav-link')
            );
            responsiveNavItems.map(function (responsiveNavItem) {
                responsiveNavItem.addEventListener('click', () => {
                    if (window.getComputedStyle(navbarToggler).display !== 'none') {
                        navbarToggler.click();
                    }
                });
            });
        });
    </script>