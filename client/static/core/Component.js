export default function (obj) {
    return function (template) {
        let t = template[0];
        if(obj.children) {
            obj.children.forEach((child) => {
                t = t.replace(`<${child.name}/>`.replace(/\s/g, ''), child())
            })
        }
        if (obj.style) {
            const strStyle = obj.style.replace(/\s/g, '');
            const styles = document.getElementsByTagName('style');
            let exist = false;
            for (let i = 0; i < styles.length; i++) {
                if (styles[i].innerHTML === strStyle) {
                    exist = true;
                    break;
                }
            }
            if (!exist) {
                const style = document.createElement('style');
                style.innerHTML = strStyle;
                document.head.appendChild(style);
            }
        }
        return t;
    };
}