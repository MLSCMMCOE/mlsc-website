import React from 'react'
import event from "../components/event_data.jsx";
import "../styles/eventsection.css"
import { Link } from 'react-router-dom';
const eventsection = () => {
  return (
    <>
    <div style={{padding:" 4rem 0"}}>

      <div class="container-fluid py-5">
        <div class="row">
          <div class="col-lg-12">

            <div class="horizontal-timeline">

              <ul class="list-inline items">
                <li class="list-inline-item items-list">
                  <div class="px-4">
                    <div class="event-date badge bg-info">{event.Github.day}</div>
                    <h5 class="pt-2">{event.Github.name}</h5>
                    <p class="text-muted">It will be as simple as occidental in fact it will be Occidental Cambridge
                      friend</p>
                    <div>
                      <Link to={'/event'} class="btn-primary btn-sm">Read more</Link>
                    </div>
                  </div>
                </li>
                <li class="list-inline-item items-list">
                  <div class="px-4">
                    <div class="event-date badge bg-success">{event.Cloud.day}</div>
                    <h5 class="pt-2">{event.Cloud.name}</h5>
                    <p class="text-muted">Everyone realizes why a new common language one could refuse translators.
                    </p>
                    <div>
                      <Link to={'/event'} class="btn-primary btn-sm">Read more</Link>
                    </div>
                  </div>
                </li>
                <li class="list-inline-item items-list">
                  <div class="px-4">
                    <div class="event-date badge bg-danger">Dec 8 </div>
                    <h5 class="pt-2">Event Three</h5>
                    <p class="text-muted">If several languages coalesce the grammar of the resulting simple and
                      regular</p>
                    <div>
                      <Link to={'/event'} class="btn-primary btn-sm">Read more</Link>
                    </div>
                  </div>
                </li>
                <li class="list-inline-item items-list">
                  <div class="px-4">
                    <div class="event-date badge bg-warning">Jan 15</div>
                    <h5 class="pt-2">Event Four</h5>
                    <p class="text-muted">Languages only differ in their pronunciation and their most common words.
                    </p>
                    <div>
                      <Link to={'/event'} class="btn-primary btn-sm">Read more</Link>
                    </div>
                  </div>
                </li>
              </ul>

            </div>

          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default eventsection