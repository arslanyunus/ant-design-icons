// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectboxNotifBoldSvg from '@ant-design/icons-svg/lib/asn/DirectboxNotifBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectboxNotifBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectboxNotifBold: DirectboxNotifBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectboxNotifBoldSvg}></AntdIcon>;
};

DirectboxNotifBold.displayName = 'DirectboxNotifBold';
DirectboxNotifBold.inheritAttrs = false;
export default DirectboxNotifBold;