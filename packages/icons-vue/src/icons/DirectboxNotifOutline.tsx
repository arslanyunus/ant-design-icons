// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectboxNotifOutlineSvg from '@ant-design/icons-svg/lib/asn/DirectboxNotifOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectboxNotifOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectboxNotifOutline: DirectboxNotifOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectboxNotifOutlineSvg}></AntdIcon>;
};

DirectboxNotifOutline.displayName = 'DirectboxNotifOutline';
DirectboxNotifOutline.inheritAttrs = false;
export default DirectboxNotifOutline;