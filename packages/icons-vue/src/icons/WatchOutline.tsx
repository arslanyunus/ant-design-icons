// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WatchOutlineSvg from '@ant-design/icons-svg/lib/asn/WatchOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WatchOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WatchOutline: WatchOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WatchOutlineSvg}></AntdIcon>;
};

WatchOutline.displayName = 'WatchOutline';
WatchOutline.inheritAttrs = false;
export default WatchOutline;