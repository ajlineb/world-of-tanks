import React, { useState, useEffect } from "react";

export default function Footer() {
  return (
    <div className="text-stone-700 text-sm px-4 mx-auto md-max-w-full lg:max-w-screen-2xl md:px-8 lg:py-10 lg:pb-6 text-center">
      <div>
        <p className="closing">
          Application built by{" "}
          <span className="transition hover:text-orange-600 delay-100">
            EroForce
          </span>{" "}
          using Wargaming.net API
        </p>
        <p>This application is not endorsed by Wargaming.net in any way.</p>
        <p>
          World of Tanks, Wargaming.net, and all associated properties are
          trademarks or registered trademarks of their respecitve owners.
        </p>
        <p className="closing">
          <span className="text-xs italic">
            Last Updated: 11/09/2022 9:50 pm EDT
          </span>
          <br></br>
          <br></br>© 2022
        </p>
      </div>
    </div>
  );
}
