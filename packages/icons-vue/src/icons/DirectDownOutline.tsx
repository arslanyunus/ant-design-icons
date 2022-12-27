// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectDownOutlineSvg from '@ant-design/icons-svg/lib/asn/DirectDownOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectDownOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectDownOutline: DirectDownOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectDownOutlineSvg}></AntdIcon>;
};

DirectDownOutline.displayName = 'DirectDownOutline';
DirectDownOutline.inheritAttrs = false;
export default DirectDownOutline;