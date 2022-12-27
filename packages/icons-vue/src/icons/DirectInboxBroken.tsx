// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectInboxBrokenSvg from '@ant-design/icons-svg/lib/asn/DirectInboxBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectInboxBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectInboxBroken: DirectInboxBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectInboxBrokenSvg}></AntdIcon>;
};

DirectInboxBroken.displayName = 'DirectInboxBroken';
DirectInboxBroken.inheritAttrs = false;
export default DirectInboxBroken;