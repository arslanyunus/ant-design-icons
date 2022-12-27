// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectboxNotifBrokenSvg from '@ant-design/icons-svg/lib/asn/DirectboxNotifBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectboxNotifBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectboxNotifBroken: DirectboxNotifBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectboxNotifBrokenSvg}></AntdIcon>;
};

DirectboxNotifBroken.displayName = 'DirectboxNotifBroken';
DirectboxNotifBroken.inheritAttrs = false;
export default DirectboxNotifBroken;