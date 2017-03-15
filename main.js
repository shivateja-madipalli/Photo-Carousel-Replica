import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "fontSize": 20,
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        "backgroundColor": "#616161"
    },
    "body": {
        "textAlign": "center",
        "fontFamily": "'Merriweather', serif"
    },
    "titleStuff": {
        "letterSpacing": 1,
        "color": "#ffc600"
    },
    "title1": {
        "textTransform": "uppercase",
        "fontFamily": "'Arsenal', sans-serif"
    },
    "nonDraggableImage": {
        "WebkitUserDrag": "none"
    },
    "carouselUnorderedList": {
        "display": "flex",
        "listStyle": "none",
        "justifyContent": "center",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "carouselUL li": {
        "minWidth": "8%",
        "maxWidth": "40%",
        "opacity": 1,
        "backgroundColor": "#FAFAFA"
    },
    "img": {
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "maxHeight": "100%",
        "maxWidth": "100%"
    },
    "container": {
        "maxHeight": "100%",
        "maxWidth": "100%"
    },
    "direction": {
        "cursor": "pointer",
        "background": "url(./img/assets/img/blank.gif) no-repeat"
    },
    "liBorder": {
        "border": "8px solid #E0E0E0"
    },
    "liLeft": {
        "borderRight": 0,
        "background": "url(./img/assets/img/paddle_prev_999.png) no-repeat center"
    },
    "liRight": {
        "borderLeft": 0,
        "background": "url(./img/assets/img/paddle_next_999.png) no-repeat center"
    },
    "liMiddle": {
        "borderLeft": 0,
        "borderRight": 0
    },
    "liLeft:hover": {},
    "liRight:hover": {},
    "imageName": {
        "fontStyle": "italic",
        "color": "#ffc600"
    },
    "addNewImage": {
        "marginTop": "2%"
    },
    "newImageContent": {
        "width": "40%"
    },
    "addNewImageImage": {
        "listStyle": "none"
    },
    "input[type=\"text\"]": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": "inherit",
        "fontFamily": "'Merriweather', serif",
        "appearance": "none",
        "boxShadow": "none",
        "borderRadius": "none",
        "height": "8%"
    },
    "btn": {
        "borderRadius": 9,
        "marginTop": "1%",
        "width": "41%",
        "fontFamily": "inherit",
        "color": "#000000",
        "fontSize": 31,
        "background": "#dedede",
        "textDecoration": "none"
    },
    "btn:hover": {
        "background": "#f0f5eb",
        "textDecoration": "none"
    }
});