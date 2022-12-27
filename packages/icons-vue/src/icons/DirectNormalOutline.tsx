// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectNormalOutlineSvg from '@ant-design/icons-svg/lib/asn/DirectNormalOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectNormalOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectNormalOutline: DirectNormalOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectNormalOutlineSvg}></AntdIcon>;
};

DirectNormalOutline.displayName = 'DirectNormalOutline';
DirectNormalOutline.inheritAttrs = false;
export default DirectNormalOutline;