// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectInboxBoldSvg from '@ant-design/icons-svg/lib/asn/DirectInboxBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectInboxBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectInboxBold: DirectInboxBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectInboxBoldSvg}></AntdIcon>;
};

DirectInboxBold.displayName = 'DirectInboxBold';
DirectInboxBold.inheritAttrs = false;
export default DirectInboxBold;