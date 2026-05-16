from django.shortcuts import render, redirect, get_object_or_404, HttpResponseRedirect
from .models import *
from .forms import BookingForm
import datetime
from django.contrib import messages


def booknow(request):
    """renders to the booking page
    """
    if request.method == 'POST':
        form = BookingForm(request.POST)
        # shows the message that the time of the day has been selected before
        date = datetime.datetime.strptime(str(request.POST['date']), '%Y-%m-%d')
        time = datetime.datetime.strptime(str(request.POST['time']), '%H:%M')
        time = request.POST['time']
        if Booking.objects.filter(date=date, time=time).exists():
            messages.error(request, "Sorry, this time is already booked, please select another time")
            return HttpResponseRedirect(request.META.get('HTTP_REFERER'))

        if form.is_valid():
            booking_form = form.save(commit=False)
            booking_form.user = request.user
            booking_form.save()
            return redirect('bookings')
        else:
            messages.error(request, "Please enter correct data")
            return render(request, 'booknow.html', {'form': form})
    form = BookingForm()
    return render(request, 'booknow.html', {'form': form})


def bookings(request):
    """shows user bookings or redirects to the signup page
    """
    if request.user.is_authenticated:
        bookings = Booking.objects.filter(user=request.user)
        context = {
           'bookings': bookings
        }
        return render(request, 'bookings.html', context)
    else:
        return redirect('../accounts/signup')


def change_booking(request, booking_id):
    """renders the change_booking page where the user can
    change a booking
    """
    record = get_object_or_404(Booking, id=booking_id)

    if request.method == 'POST':
        form = BookingForm(request.POST, instance=record)

        date = datetime.datetime.strptime(str(request.POST['date']), '%Y-%m-%d')
        time = datetime.datetime.strptime(str(request.POST['time']), '%H:%M')
        time = request.POST['time']
        if Booking.objects.filter(date=date, time=time).exists():
            messages.error(request, "Sorry, this time is already booked, please select another time")
            return HttpResponseRedirect(request.META.get('HTTP_REFERER'))

        if form.is_valid():
            form.save()
            messages.success(request, 'You succesfully updated your booking.')
            return redirect('bookings')
        # else:
        #     return render(request, 'change-booking.html', {'form': form})
    form = BookingForm(instance=record)
    context = {'form': form, 'record': record}
    return render(request, 'change-booking.html', context)


def delete_booking(request, booking_id):
    """
    renders the delete_booking page where the user can
    delete a booking
    """

    record = get_object_or_404(Booking, id=booking_id)
    if request.method == "POST":
        form = BookingForm(request.POST, instance=record)
        if record.delete():
            messages.success(request, 'Your booking has been deleted.')
            return redirect('bookings')

    form = BookingForm(instance=record)
    context = {
        'record': record}
    return render(request, 'delete-booking.html', context)
