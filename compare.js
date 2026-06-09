/**
 * Global E-Commerce Product Gallery Actions
 * Handles DataTables initialization, dynamic comparison tracking, 
 * and dynamic animated checkout mockups seamlessly across categories.
 */

$(document).ready(function() {
    
    // 1. Initialize jQuery DataTables
    var table = $('#compareTable').DataTable({
        "pageLength": 10,
        "lengthMenu": [5, 10, 25]
    });

    // 2. Delegate click event for Product Comparison Tracking
    $(document).on('click', '.compare-btn', function() {
        var name = $(this).attr('data-name');
        var price = $(this).attr('data-price');
        var desc = $(this).attr('data-desc');

        // Gracefully insert data arrays into the initialized table layout
        table.row.add([
            '<strong>' + name + '</strong>',
            '<span class="text-success fw-bold">' + price + '</span>',
            desc
        ]).draw(false);

        // Native smooth-scroll positioning right down to the data tracker matrix
        $('html, body').animate({
            scrollTop: $("#compareTable").offset().top - 100
        }, 600);
    });

    // 3. Delegate click event for Quick Order Booking simulation
    $(document).on('click', '.order-now-btn', function() {
        var modalBody = $(this).closest('.target-body');
        
        modalBody.find('.main-modal-row').fadeOut(400, function() {
            var successHTML = `
                <div class="text-center py-5 animated-success-box">
                    <div class="success-checkmark mb-3">
                        <div class="check-icon"></div>
                    </div>
                    <h3 class="fw-bold text-success">Order Booked!</h3>
                    <p class="text-muted">Your luxury seating architectural profile has been registered securely.</p>
                </div>
            `;
            modalBody.append(successHTML);
        });
    });

    // 4. Delegate modal hide cleanup cycle to restore views seamlessly
    $(document).on('hidden.bs.modal', '.modal', function () {
        var modal = $(this);
        modal.find('.animated-success-box').remove();
        modal.find('.main-modal-row').show();
    });
});