/**
 * Author: Meng
 * Date: 2022-03-27
 * Desc:
 */
import "./header.scss";

interface Prop {
  opacity?: Number;
  userName?: String;
}

function Header(props: Readonly<Prop>) {
  // const color = {backgroundColor: `rgba(255, 255, 255, ${props.alpha||1})`,opacity: 0.1 };
  const color: Object = { opacity: props.opacity || 1 };

  return (
    <div className="v-header-height">
      <div className="v-header v-row" style={color}>
        <img className="v-logo" />
        <span className="v-title">一百万</span>
        <div className="v-flex"/>
        <span className="v-tab">图片</span>
        <span className="v-tab">视频</span>
        <span className="v-tab">分享</span>
        <span className="v-tab">关于</span>
        <img className="v-icon" />
      </div>
    </div>
  );
}

export default Header;
