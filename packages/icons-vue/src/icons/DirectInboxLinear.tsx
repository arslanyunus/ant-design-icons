// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectInboxLinearSvg from '@ant-design/icons-svg/lib/asn/DirectInboxLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectInboxLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectInboxLinear: DirectInboxLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectInboxLinearSvg}></AntdIcon>;
};

DirectInboxLinear.displayName = 'DirectInboxLinear';
DirectInboxLinear.inheritAttrs = false;
export default DirectInboxLinear;