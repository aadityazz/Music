import React from "react";

export const themes = {
    light: {
        theme: "#4ecca3",
        subTheme: "#4ecca3",
        component:{
            backgroundColor: "#131415",
            color: "#fafafa",
        },
        button:{
            onHover:{
                backgroundColor:"#4ecca3",
                color:"#fafafa"
            },
            contained:{
                backgroundColor: "#4ecca3",
                color:"#fafafa"
            },
            outlined:{
                backgroundColor:"transparent",
                color:"#131415"
            }
        },
        volume:{
            color:"#4ecca3"
        }
    },
    dark: {
        theme:"#4ecca3",
        subTheme: "#4ecca3",
        component:{
            backgroundColor: "#232931",
            color: "#fafafa",
        },
        button:{
            onHover:{
                backgroundColor:"#4ecca3",
                color:"#fafafa"
            },
            contained:{
                backgroundColor: "#4ecca3",
                color:"white"
            },
            outlined:{
                backgroundColor:"transparent",
                color:"#232931"
            }
        },
        volume:{
            color:"#4ecca3"
        }
    }
};

export const ThemeContext = React.createContext(
    themes.light
);

/*
export const ThemeProvider = (props) => {
    const [theme,setTheme] = useState("light");
    return (
        <ThemeContext.Provider value={[theme,setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    );
}*/
