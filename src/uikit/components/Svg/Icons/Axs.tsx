import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 90 90" {...props} enable-background="new 0 0 96 96">
      {' '}
      <image
        id="image0"
        width="90"
        height="90"
        x="0"
        y="0"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAB6gAwAEAAAAAQAAAB4AAAAAOXtaBgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KGV7hBwAACHlJREFUSA2dV3twVNUZ/5373t3c7CZsQgwEWiBZKeUZEEocSMoEsc5AaZtWLZa0BpzBdqbTdmr/crYO0z/qtHa040hABJPiCHboaNUpoqROlToxQBHCI6AhISS7IST73r3Pfmc3oaHKoz2Zvffcc8/5ft/j933fDfC/jK075Pz2+rCELftXXz86sX594fYTdvst4zua9is48F0DzS9VQPG9AY++FJn4ESDXjNYf9IErUw8H4bBzJzLvDHgCdMufFkGQ3oFWFEQmZcDjU5BNmrDsbXjx4V15wPARCeEG63bgtweeAH301TrIrAOSKiFOoJqkIG2Y0DUZshdIj70CIbEZrY+ZmDhzC3ThFu9wXUBLWyNk8R+QZAmRMQt1sxW0NAKrQzJG0w5SMRNFgYdg6ecpFPPzISnE/aaG3fQF+EGufcsr34GsHADfeS1l44GFImrnAqYNqKT3p1eAN7uA0ZSJkmIZ6SR/txntzS9TvAuGfUHcxS+0mLuqbbOJH+37NjTva4ALjKUJtFbE4ruBrAkYBMxoPRgAqiuBVFpAz5AFjyJC9mzE7EYNz//8MDo63LwC/D5pfN7iifg82r6G2HsYsMHiadtdu1TE/BoCzJEeJIOL8dJxh0gs5vV30HWG4c3jLlTJobhLGI3uxes/bs7jNe0XKQSkbWHcGOOmcCFlHtm9nBLjEFzal0jZ2qpaUagh0CSBGoSY4z8C5HOXRHC3W7aAZfMYvr9agOOKGLlKBCzejLXPvJWH4qAcfHz8x+JaimkXxXT97+dALTop6sUeO5Oy5GXLJGfBVxAUcoiSpa5NgDYBWnTXSY5CIiSS5nBl6K5rwNBVYN8hF70RE6VBBfGrf0PHE+vymOOWFzTgyX/0F8TWcCWY+rGqev1mfNRkX10i23cvhOuYSGUKVjLuo5QFluapKqBEZBBSDkxinxDS4CYMUqQIqJkDDF+VWPcFQ/IHQ87UupXof7cd3QdcNDXx4BDzesM2vtSsQQ58VOTRqzJjw+b8uYvl0rkr4FUsdDco2FAlYk/cRsWnBpIGWZs24CNd4iMWTMJR6/2QikWUZyk6A2S6pDFWFYJrGaJz4hND9Qdr7AoCH3iPwLt5gMJ0nCtf/rofWnXySr+xfHpIvjdUB0aWrdNcVPoFTPORS5eSRas8YAniVUZG6kIGDwds1K/Ukfs4gSxl2xWvAD1De5MWXINh9j3rsGhVg5Ib6jVEuWgt7nnqYB6OLi4qfvI7XfA0xq4MGEuClcr6xd9AMXHFIXcWcxLR2N4eA7oy8M31wH2wBNIwrc/SUFo3BRWdGeCSi9fiDjo0hkTCxowYEW7EwLRrOXytugH3L/q6YseihiLr38SK7e0Syratk5n6s0Timl3p98qb7n2QNJUxmEzBQ+AmMTdB4I0LVShlElq3R92pJWCRGTKKq1T88beDECmtUUVlOyJhUchDvnYQozPTSJGymIVyeOHXQ3gbfxckKwdiQZ0A29lTxEj7SBSbaqlepAKI9o4RScjFCQujA5TH9Och1g7vvQa8n2LGiAxWRGQ9GMWUGX54KPfwbhybIlk8SdOaYROxURvlaXKmqIG8j48uHqGUYGK+BpjWQwJN3snaxDGvxz7Ve5Zdo/oviUo+V33krQsXLMh0MDJg4mA4jer1ZRidosDd2wtczmJEU5BcPh0sRI3ClPHsgIvz5GJQSZ9CwN6chA/PvIcjfSfMYm0KS+dST+JY+J8isl0HLXXBGo+vdNaZnmM5TZeksmAIWUqVnODg7TiwrUHFkjkyNjbrOHfZwdnnLkEPiDDS5OIPyAul9H2wvAxC0IOKiIN0Z5zC5WKu5UX08jH89eyfDZ8+XUkasUP45DdbeCYV8jjjtlta8AE9MLXq9PlOwxVyYtBfDZey7eSgiW8tl1E9U8XFywZ+9WyUCpIIU5DIwXQ8QKCXqDH0JOBSrJOUSu5naeiCj/L4HD44vceSPEHZsNKX4F5twMhxckc9+Rz1VHeOWkhn9hha5X16yV0zLg6fMhKZqFjsmw1LUBEZyeDDU1ls/QPlUbkAMWfnq2W+SfDa5yUxJmXluRQwQG7w+GCNXULk9C5boJrtOA7Zn12Bntah/JcK1Q1+jAYH7yiUorsef8vjKbkvkx00fd4KqWbeI+w4K6NqlcKsaQz9JlUpil++bPJOwSvZxI/7T6CSmRgCunc5ArHSFTXmOulG9O08jHlNCk4fIIupr/AL0Etc5OC9NpKd7ZZ3/pdlpWRJNhu1h6InUFZayUqC5ejLWdSMCIyXHN6VSHLBarrzZ0akTA8D59tcOJbjylTM7dQ29O/cPxmUI44D8ykHb6Lnbkrczr842jxXUP1r4GZZqv99KyH5BVY0vdAMXNrKB+/HjED5s6hSn6bm0E2gBlUelYJvJ55Cf+vTqN0q419tPNuvj0nAfI1Aee1GmYDkyx2ub/5nEJWNUHSq50dNoqqI4hlkKYFQWyiA0hGJ3JshS0+3URpSrVSJ5mb8OVze8UTemME2Sswbx3iMb1ykJ0ZaSuhqNTFzy0pY0hvEoFIhSrSurFac0AbAN5W28XCRe2N9EE7uo4aQM+ENyK6dbEVkx2PkinH53DU3jv+yeNLLwS4nH5eetl7oS3Yz01rFPGUzMTposb5Ol5hL3WAqfZ30Qjj6ElUlx2RaQGFmYrc73Eq5ykF/Tb+Gz4FylJtZPEkDig/IchpCoOUZCL6fwqa2Fxs1MY0K9tiIAybYUOlDz0686IztbCkc5iELj5Nhkrjx6R0A852cdAfycRL1H25wBXk3JG8pMtSCFEUAo5bkpJ93YjsfL8i9NSjfc4fAeXG0l+LOrQ80BwRXeYH+q/he4cPP/KUT2/V0gZh8780tzUv6/y7c9ePD31KLkpYFhSdu5Z0b8m8kLLFY7/sxWAAAAABJRU5ErkJggg=="
      />
    </Svg>
  )
}

export default Icon
