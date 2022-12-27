// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WatchStatusOutlineSvg from '@ant-design/icons-svg/lib/asn/WatchStatusOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WatchStatusOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WatchStatusOutline: WatchStatusOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WatchStatusOutlineSvg}></AntdIcon>;
};

WatchStatusOutline.displayName = 'WatchStatusOutline';
WatchStatusOutline.inheritAttrs = false;
export default WatchStatusOutline;