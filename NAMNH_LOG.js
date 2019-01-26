class NAMNH_LOG {

    constructor(tag) {
      this.tag = tag;
      this.isEnable = true;
    }
  
    al(str) {
        if(this.isEnable){alert(this.tag + str);}
    }

    v(str) {
        if(this.isEnable){console.log("%c%s: %s", 'background: #f9f9f9; color: #070707', this.tag, str);}
    }

    d(str) {
        if(this.isEnable){console.log("%c%s: %s", 'background: #f8ffed; color: #aaf442', this.tag, str);}
    }

    e(str) {
        if(this.isEnable){console.log("%c%s: %s", 'background: #ffe3e0; color: #f45f41', this.tag, str);}
    }

    i(str) {
        if(this.isEnable){console.log("%c%s: %s", 'background: #e2efff; color: #4197f4', this.tag, str);}
    }

    w(str) {
        if(this.isEnable){console.log("%c%s: %s", 'background: #fff6ed; color: #f4a041', this.tag, str);}
    }

    c(str, color) {
        if(this.isEnable){console.log("%c%s: %s", 'color: #'+color, this.tag, str);}
    }
  
  }
  
  let namnhlog = new NAMNH_LOG("NAMNH");
